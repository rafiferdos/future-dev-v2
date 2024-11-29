import Image from "next/image";
import React from "react";

const ProcessCard4 = () => {
  return (
    <div className="grid grid-cols-4 bg-[#FFFFFF] rounded-l-3xl text-[#000000] max-w-[900px]">
      <div className="col-span-3 px-6 py-10">
        <h2 className="font-bold text-2xl ">Discover Interests & Set Goals</h2>
        <p>
          We help students uncover their passions in technology, arts, and
          beyond. By exploring their interests, we set personalized learning
          paths tailored to age and skills.
        </p>
      </div>
      <div className="bg-[#9353d3] flex items-center justify-center py-10">
        <Image
          width={40}
          height={20}
          src="https://i.postimg.cc/C17mXJFW/Frame.png"
          alt="skill"
        />
      </div>
    </div>
  );
};

export default ProcessCard4;
