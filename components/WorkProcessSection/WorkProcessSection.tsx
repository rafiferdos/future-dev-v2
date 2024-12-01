import React from 'react'
import ProcessCard1 from './ProcessCard1';
import ProcessCard2 from './ProcessCard2';
import ProcessCard3 from './ProcessCard3';
import ProcessCard4 from './ProcessCard4';
import strengthsData from "../../lib/strengthsData";
import StrengthsCard from './StrengthsCard';
// Define a type
type StrengthsData = {
  id: string;
  image: string;
  title: string;
  description: string;
};

const WorkProcessSection = () => {
  return (
    <div>
      <div className=" bg-primary relative pt-10 pb-32">
        <h2 className="text-center mb-14 font-extrabold text-3xl md:text-5xl">
          Our Work Process
        </h2>

        <div className="space-y-20">
          <div className="flex justify-start">
            <ProcessCard1 />
          </div>

          <div className="flex justify-end">
            <ProcessCard2 />
          </div>
          <div className="flex justify-start">
            <ProcessCard3 />
          </div>

          <div className="flex justify-end">
            <ProcessCard4 />
          </div>
        </div>
        {/* Our Key Strengths */}
        <h2 className="font-bold text-3xl mt-12 px-5">Our Key Strengths </h2>
      </div>
      {/*  */}
      <div className="flex flex-wrap justify-between -translate-y-12 items-center gap-4 w-full">
        {strengthsData?.length > 0 &&
          strengthsData.map((data: StrengthsData, index: number) => (
            <StrengthsCard data={data} key={index} />
          ))}
      </div>
    </div>
  );
}

export default WorkProcessSection