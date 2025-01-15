"use client";
import React, { useState } from "react";
import Image from "next/image";
import blogs from "../lib/blogData";
import { Button } from "@nextui-org/react";


// Define a type for blog data
type Blog = {
  id: string;
  image: string;
  date: string;
  description: string;
};

const BlogSection: React.FC = () => {
  const [learnMore, setLearnMore] = useState(3);
      const [btn, setBtn] = useState(false);
  return (
    <div id="blog" className="mt-96 md:mt-24">
      <div>
        <small className="">Latest Insights</small>
        <h2 className="mb-5 mt-2 font-extrabold text-3xl lg:text-5xl">
          Our Blog Insights
        </h2>
      </div>
      {/*  */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogs?.length > 0 &&
          blogs.slice(0,learnMore).map((blog: Blog, index: number) => (
            <div key={index} className="relative rounded-2xl border">
              <Image
                className="w-full h-full opacity-60 rounded-2xl"
                src={blog.image}
                alt=""
                width={500}
                height={300}
              />
              <span className="bg-primary px-3 py-1 rounded-full absolute top-10 left-2">
                {blog?.date}
              </span>
              <p className="text-center p-2 absolute bottom-2">
                {blog.description}
              </p>
            </div>
          ))}
      </div>
      {/*  */}
      <div className="flex mt-12 justify-center items-center">
      {
                    btn ? 
                    <Button color="primary" variant="ghost" onClick={() => {
                      setLearnMore(3)
                      setBtn(!btn)
                    }}>Show less</Button> 
                    :
                     <Button color="primary" variant="ghost" onClick={() => {
                      setLearnMore(blogs?.length)
                      setBtn(!btn)
                     }}>Show more</Button>
                  }
      </div>
    </div>
  );
};

export default BlogSection;
