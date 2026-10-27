import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function SignUp() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-white p-4">
      <Card>
        <CardTitle>Sign Up</CardTitle>
        <CardDescription>
          Create an account to start tracking your job aplications.
        </CardDescription>
        <form>
          <CardContent>
            <div>
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" placeholder="John Doe" required />
            </div>
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="text"
                placeholder="John@example.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="text"
                placeholder="your secret password"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">Sign Up</Button>
            <p>Already have an account? <Link href="/sign-in">Sign In</Link></p>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
