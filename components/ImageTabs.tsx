"use client";

import { Button } from "./ui/button";
import Image from "next/image";
import { useState } from "react";

interface TabButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function TabButton({ label, isActive, onClick }: TabButtonProps) {
  return (
    <Button
      onClick={onClick}
      className={`rounded-lg px-6 py-3 text-sm font-medium transition-colors ${
        isActive
          ? "bg-primary text-white"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
      }`}
    >
      {label}
    </Button>
  );
}

export default function ImageTabs() {
  const TAB1 = "organize";
  const TAB2 = "hired";
  const TAB3 = "boards";
  const [activeTab, setActiveTab] = useState(TAB1);

  return (
    <section className="border-t bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Tabs */}
          <div className="flex gap-2 justify-center mb-8">
            <TabButton
              label="Organize Aplications"
              isActive={activeTab === TAB1}
              onClick={() => setActiveTab(TAB1)}
            />
            <TabButton
              label="Get Hired"
              isActive={activeTab === TAB2}
              onClick={() => setActiveTab(TAB2)}
            />
            <TabButton
              label="Manage Boards"
              isActive={activeTab === TAB3}
              onClick={() => setActiveTab(TAB3)}
            />
          </div>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-lg border border-gray-200 shadow-xl">
            
            {activeTab === TAB1 && (
              <Image
                src="/hero_images/hero1.png"
                alt="Organize Applications"
                width={1200}
                height={800}
                loading="eager"
              />
            )}

            {activeTab === TAB2 && (
              <Image
                src="/hero_images/hero2.png"
                alt="Get Hired"
                width={1200}
                height={800}
                loading="eager"
              />
            )}

            {activeTab === TAB3 && (
              <Image
                src="/hero_images/hero3.png"
                alt="Manage Boards"
                width={1200}
                height={800}
                loading="eager"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
