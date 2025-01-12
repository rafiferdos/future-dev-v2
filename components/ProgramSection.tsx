"use client";
import { Button } from "@nextui-org/react";
import React from "react";
import gettyimage from "@/public/gettyimage.png";
import Image from "next/image";

const ProgramSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-5 gap-24">
      {/* Left Section */}
      <div className="relative col-span-1 lg:col-span-2">
        <div className="bg-primary-300 dark:bg-primary-50 w-[269px] min-h-96 rounded-r-[53px]"></div>
        <div className="absolute bottom-10">
          <Image
            className="max-w-96"
            src={gettyimage}
            alt="Program Illustration"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex lg:col-span-3 pl-6 space-y-4 lg:space-y-0 md:px-0 col-span-1 flex-col justify-between">
        <h2 className="font-bold text-3xl lg:text-5xl">আমাদের প্রোগ্রামসমূহ</h2>
        <div className="space-y-3 font-siliguri lg:text-xl">
          <p>
            আমাদের সাথে পরবর্তী প্রজন্মের উদ্ভাবকদের গড়ে তুলতে যোগ দিন! আমাদের
            যত্নসহকারে তৈরি করা কোর্সগুলো প্রোগ্রামিং, রোবোটিক্স এবং গেম
            ডেভেলপমেন্টে হাতে-কলমে শেখার সুযোগ দেয়, যা শেখাকে মজার ও কার্যকরী
            করে তোলে।
          </p>
          <p>আমাদের প্রোগ্রাম সম্পর্কে আরো জানতে নিচের লিঙ্কটি দেখুন।</p>
        </div>
        <div className="flex gap-4 items-center">
          <Button color="primary" variant="shadow">
            বিনামূল্যে একটি ক্লাস বুক করুন!
          </Button>
          <Button color="primary" variant="light">
            আরো জানুন
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
