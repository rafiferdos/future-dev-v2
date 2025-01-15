"use client";
import React from "react";
import chooseUs from "../lib/chooseUs";
import chooseUsImage from "@/public/chooseUse.png";
import Image from "next/image";

interface ChooseUsItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

const ChooseUsSection: React.FC = () => {
  return (
    <div id="about" className="mt-24">
      <h2 className="text-center mb-5 font-extrabold font-siliguri text-5xl">
        কেন আমাদের বেছে নেবেন?
      </h2>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-5 gap-0 md:gap-5 lg:gap-10">
        {/* Left Section */}
        <div className="flex lg:col-span-3  pl-6 mb-52 md:mb-0 space-y-4 lg:space-y-0 md:px-0 col-span-1 flex-col justify-between">
          <div className="space-y-6">
            {chooseUs?.length > 0 &&
              chooseUs.map((data: ChooseUsItem) => (
                <div className="flex items-center gap-5" key={data.id}>
                  <img
                    className="bg-primary h-8 w-8 p-2 rounded-full"
                    src={data.icon}
                    alt={`${data.title} Icon`}
                  />
                  <div className=" space-y-1">
                    <h3 className="font-bold font-siliguri">{data.title}</h3>
                    <p className="sm:text-sm text-medium lg:text-lg font-atma">{data.description}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:col-span-2">
          <Image
            className="w-full"
            src={chooseUsImage}
            alt="Choose Us Illustration"
          />
        </div>
      </div>
    </div>
  );
};

export default ChooseUsSection;
