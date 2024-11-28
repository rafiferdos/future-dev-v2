import { Button } from "@nextui-org/button";
import React from "react";
import gettyimage from "@/public/chooseUse.png";
import Image from "next/image";
import Link from "next/link";
import data from "../lib/data";
type Data = {
  id: string;
  number: string;
  title: string;
  description: string;
};

const PlatformSection: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-5 gap-24">
        {/* Left Section */}
        <div className="relative col-span-1 lg:col-span-2">
          <div className="bg-primary w-[269px] min-h-96 rounded-r-[53px]"></div>
          <div className="absolute bottom-10">
            <Image
              className="max-w-80"
              src={gettyimage}
              alt="Program Illustration"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex lg:col-span-3 pl-6 space-y-4 lg:space-y-0 md:px-0 col-span-1 flex-col justify-between">
          <div>
            <small className="">Meet us</small>
            <h2 className="mb-5 mt-2 font-extrabold text-5xl">
              About Our Educational Platform
            </h2>
          </div>
          <div className="space-y-3  lg:text-xl">
            <p>
              Welcome to Learn HQ, where education meets innovation . Our
              mission is to empower learners with essential skills for success.
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <Link href={"#"}>
              <Button color="primary" variant="shadow">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="grid grid-cols-3 gap-3 mt-28">
        {data?.length > 0 &&
          data.map((value: Data, index: number) => (
            <div key={index} className="space-y-2">
              <h4 className="font-extrabold text-5xl">{value.number}</h4>
              <h5 className="font-extrabold text-xl">{value.title}</h5>
              <p>{value.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default PlatformSection;
