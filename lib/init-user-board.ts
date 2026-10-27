import connectDB from "./db";
import { Board, Column } from "./models";

const DEFAULT_COLUMNS = [
  {
    name: "Wish List",
    order: 0,
  },
  { name: "Applied", order: 1 },
  { name: "Interviewing", order: 2 },
  { name: "Offer", order: 3 },
  { name: "Rejected", order: 4 },
];

export async function initializeUserBoard(userId: string) {
  await connectDB();

  const existingBoard = await Board.findOne({ userId, name: "Job Hunt" });

  if (existingBoard) {
    const existingColumns = await Column.find({
      boardId: existingBoard._id,
    }).sort({ order: 1 });

    if (existingColumns.length > 0) {
      existingBoard.columns = existingColumns.map((column) => column._id);
      await existingBoard.save();
      return existingBoard;
    }
  }

  const board =
    existingBoard ??
    (await Board.create({
      name: "Job Hunt",
      userId,
      columns: [],
    }));

  const columns = await Promise.all(
    DEFAULT_COLUMNS.map((col) =>
      Column.create({
        name: col.name,
        order: col.order,
        boardId: board._id,
        jobApplications: [],
      })
    )
  );

  board.columns = columns.map((col) => col._id);
  await board.save();

  return board;
}