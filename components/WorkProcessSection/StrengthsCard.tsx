

// "use client";
// import React from "react";
// import { Card, CardHeader, CardBody } from "@nextui-org/card";

// import "@smastrom/react-rating/style.css";

// import { Avatar } from "@nextui-org/avatar";


// // Define the type for the user prop
// interface Data {
//   id: string;
//   image: string;
//   title: string;
//   description: string;
// }

// const StrengthsCard: React.FC<{ data: Data }> = ({ data }) => {
//   const { image, title, description } = data || {};

//   return (
//     <div className="">
//       <Card className="p-5 border border-primary">
//         <CardHeader className="flex justify-between">
//           <div className="flex items-center gap-4">
//             <Avatar
//               isBordered
//               color="primary"
//               src={image}
//               className="w-20 h-20 text-large"
//             />
//           </div>
//         </CardHeader>
//         <CardBody className="space-y-3">
//           <h3 className="text-primary font-bold text-4xl">{title}</h3>
//           <p>{description}</p>

//         </CardBody>
//       </Card>
//     </div>
//   );
// };

// export default StrengthsCard;


import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Avatar } from "@nextui-org/avatar";

interface Data {
  id: string;
  image: string;
  title: string;
  description: string;
}

const StrengthsCard: React.FC<{ data: Data }> = ({ data }) => {
  const { image, title, description } = data;

  return (
    <div className="w-[210px] h-[300px]">
      {" "}
      {/* Fixed width and height */}
      <Card className="w-full h-full p-5 border border-primary flex flex-col">
        <CardHeader className="flex justify-center">
          <Avatar
            isBordered
            color="primary"
            src={image}
            className="w-20 h-20"
          />
        </CardHeader>
        <CardBody className="space-y-3 flex flex-col items-center justify-between">
          <h3 className="text-primary font-bold text-xl text-center">
            {title}
          </h3>
          <p className="text-center text-sm">{description}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default StrengthsCard;
