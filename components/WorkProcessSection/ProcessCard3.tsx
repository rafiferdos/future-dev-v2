import Image from "next/image";
import React from "react";

const ProcessCard3 = () => {
  return (
    <div className="grid grid-cols-4 bg-[#FFFFFF] rounded-r-3xl text-[#000000] max-w-[900px]">
      <div className="bg-[#f7b750] flex items-center justify-center py-10">
        <Image
          width={40}
          height={20}
          src="https://i.postimg.cc/ZRtG4fzn/Vector.png"
          alt="Goal"
        />
      </div>
      <div className="col-span-3 px-6 py-10">
        <h2 className="font-bold text-2xl ">
          Engage in Extracurricular Activities
        </h2>
        <p>
          Learning goes beyond academics. Students join virtual clubs,
          participate in workshops, and gain exposure to various creative and
          physical activities.
        </p>
      </div>
    </div>
  );
};

export default ProcessCard3;
