import { Button } from "@nextui-org/button";
import React from "react";
import gettyimage from "@/public/gettyimage.png";
import Image from "next/image";

const ProgramSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-5 gap-24">
      {/* Left Section */}
      <div className="relative col-span-1 lg:col-span-2">
        <div className="bg-primary w-[269px] min-h-96 rounded-r-[53px]"></div>
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
        <h2 className="font-bold text-3xl lg:text-5xl">
          About Our Programs
        </h2>
        <div className="space-y-3  lg:text-xl">
          <p>
            Join us in nurturing the next generation of innovators! Our
            carefully designed courses provide hands-on experience in
            programming, robotics, and game development, making learning fun and
            effective.
          </p>
          <p>You can learn more about our program from the link given below</p>
        </div>
        <div className="flex gap-4 items-center">
          <Button color="primary" variant="shadow">
            Book a FREE Trial Class Today!
          </Button>
          <Button color="primary" variant="ghost">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProgramSection;
