import React from "react";
import { Card } from "@/components/ui/card";
export default function UserReviews() {
  return (
    <section className="p-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-8">
        What Our Users Say
      </h2>
      <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
        <Card className="p-6 text-center">
          <p className="text-lg text-gray-700">
            "Errm Actually this app is...."
          </p>
          <div className="mt-4">
            <img
              src="/images/user1.png"
              alt="User 1"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="mt-2 text-gray-800">The Diddler</div>
          </div>
        </Card>
        <Card className="p-6 text-center">
          <p className="text-lg text-gray-700">
            "Where are my balls Emma......"
          </p>
          <div className="mt-4">
            <img
              src="/images/user2.png"
              className="w-12 h-12 rounded-full mx-auto"
            />
            <div className="mt-2 text-gray-800">Bruno, The Dog</div>
          </div>
        </Card>
      </div>
    </section>
  );
}