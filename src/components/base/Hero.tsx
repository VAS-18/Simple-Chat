import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
export default function HeroSection() {
  return (
    <section className="flex-1 flex flex-col items-center justify-center text-center p-12 bg-gradient-to-b from-gray-50 to-white">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
       SimpleChat
      </h1>
      <p className="text-xl text-gray-600 mb-5">
        Quick and easy way to connect with your homies 💌
      </p>
      <Link href="/dashboard">
        <Button size="lg" className="animate-pulse">
          Start Chatting
        </Button>
      </Link>

      <div className="mt-12 w-full max-w-5xl flex justify-center">
        {/* <Image src="/YoungBoyShake.gif" alt="Young" width={500} height={500} unoptimized={true}/> */}
        <img src="/YoungBoyShake.gif" alt="Young" />
      </div>
    </section>
  );
}