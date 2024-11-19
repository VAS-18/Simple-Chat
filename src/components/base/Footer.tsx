import React from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="p-9 bg-black text-white">
      <div className="flex flex-col items-center">
        <div>
          <div>Made With Pure Brain-rot</div>
        </div>
        <div className=" space-y-4">
          <Input
            placeholder="Subscribe to our Rizzletter"
            className="bg-gray-800 border-none"
          />
        </div>
      </div>
    </footer>
  );
}