"use client";
import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
export default function Navbar() {
  return (
    <nav className="p-9 flex justify-around items-center bg-white shadow-sm">
      <h1 className="text-xl md:text-2xl font-extrabold">YAPP-nation</h1>
      <div className="space-x-10 text-gray-700">
        <Link href="/">Home</Link>
        <Link href="#features">Rizzardo</Link>
        
        {/* {!user ? (
          <LoginModal />
        ) : (
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
        )} */}
      </div>
    </nav>
  );
}