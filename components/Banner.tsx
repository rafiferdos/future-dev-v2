"use client"
import React from 'react'
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

import Image from "next/image";



const Banner = () => {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 3000,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Navigation, Pagination]}
        loop={true}
      >
        <SwiperSlide>
          <div className="relative w-full  h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src="https://i.postimg.cc/GtHdxt1q/banner1.jpg"
              alt="Find Your Next Opportunity"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[rgba(21, 21, 21, 0.00)] py-6 text-gray-200 flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 font-siliguri">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>আপনার সন্তানকে&nbsp;</span>
          <span className={title({ color: "violet" })}>
            মেশিন লার্নিং&nbsp;
          </span>
          <br />
          <span className={title()}>শিক্ষা দিন আগামী দিনের জন্য</span>
          <div className={subtitle({ class: "mt-4 font-playpen text-black" })}>
            Make them future-ready with our courses and events.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Explore More
          </Link>
          <Button color="danger" variant="shadow" radius="full">
            Click me
          </Button>
        </div>
      </section> 
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full  h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src="https://i.postimg.cc/G2NhNGKZ/banner7.jpg"
              alt="Find Your Next Opportunity"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[rgba(21, 21, 21, 0.00)] py-6 text-gray-200 flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 font-siliguri">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>আপনার সন্তানকে&nbsp;</span>
          <span className={title({ color: "violet" })}>
            মেশিন লার্নিং&nbsp;
          </span>
          <br />
          <span className={title()}>শিক্ষা দিন আগামী দিনের জন্য</span>
          <div className={subtitle({ class: "mt-4 font-playpen text-black" })}>
            Make them future-ready with our courses and events.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Explore More
          </Link>
          <Button color="danger" variant="shadow" radius="full">
            Click me
          </Button>
        </div>
      </section> 
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="relative w-full  h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src="https://i.postimg.cc/wjcMvtxm/banner6.jpg"
              alt="Find Your Next Opportunity"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[rgba(21, 21, 21, 0.00)] py-6 text-gray-200 flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 font-siliguri">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>আপনার সন্তানকে&nbsp;</span>
          <span className={title({ color: "violet" })}>
            মেশিন লার্নিং&nbsp;
          </span>
          <br />
          <span className={title()}>শিক্ষা দিন আগামী দিনের জন্য</span>
          <div className={subtitle({ class: "mt-4 font-playpen text-black" })}>
            Make them future-ready with our courses and events.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Explore More
          </Link>
          <Button color="danger" variant="shadow" radius="full">
            Click me
          </Button>
        </div>
      </section> 
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full  h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src="https://i.postimg.cc/mgGhB344/banner5.jpg"
              alt="Find Your Next Opportunity"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[rgba(21, 21, 21, 0.00)] py-6 text-gray-200 flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 font-siliguri">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>আপনার সন্তানকে&nbsp;</span>
          <span className={title({ color: "violet" })}>
            মেশিন লার্নিং&nbsp;
          </span>
          <br />
          <span className={title()}>শিক্ষা দিন আগামী দিনের জন্য</span>
          <div className={subtitle({ class: "mt-4 font-playpen text-black" })}>
            Make them future-ready with our courses and events.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Explore More
          </Link>
          <Button color="danger" variant="shadow" radius="full">
            Click me
          </Button>
        </div>
      </section> 
            </div>
          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="relative w-full  h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src="https://i.postimg.cc/gjCjw86v/banner4.jpg"
              alt="Find Your Next Opportunity"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[rgba(21, 21, 21, 0.00)] py-6 text-gray-200 flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 font-siliguri">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>আপনার সন্তানকে&nbsp;</span>
          <span className={title({ color: "violet" })}>
            মেশিন লার্নিং&nbsp;
          </span>
          <br />
          <span className={title()}>শিক্ষা দিন আগামী দিনের জন্য</span>
          <div className={subtitle({ class: "mt-4 font-playpen text-black" })}>
            Make them future-ready with our courses and events.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Explore More
          </Link>
          <Button color="danger" variant="shadow" radius="full">
            Click me
          </Button>
        </div>
      </section> 
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full  h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src="https://i.postimg.cc/rpk4ZXsS/banner3.jpg"
              alt="Find Your Next Opportunity"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[rgba(21, 21, 21, 0.00)] py-6 text-gray-200 flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 font-siliguri">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>আপনার সন্তানকে&nbsp;</span>
          <span className={title({ color: "violet" })}>
            মেশিন লার্নিং&nbsp;
          </span>
          <br />
          <span className={title()}>শিক্ষা দিন আগামী দিনের জন্য</span>
          <div className={subtitle({ class: "mt-4 font-playpen text-black" })}>
            Make them future-ready with our courses and events.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Explore More
          </Link>
          <Button color="danger" variant="shadow" radius="full">
            Click me
          </Button>
        </div>
      </section> 
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="relative w-full  h-[50vh] lg:h-[600px] flex flex-col items-center justify-center">
            <Image
              src="https://i.postimg.cc/K8nFNCdS/banner2.jpg"
              alt="Find Your Next Opportunity"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600 to-[rgba(21, 21, 21, 0.00)] py-6 text-gray-200 flex flex-col items-center justify-center">
            <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 font-siliguri">
        <div className="inline-block max-w-xl text-center justify-center">
          <span className={title()}>আপনার সন্তানকে&nbsp;</span>
          <span className={title({ color: "violet" })}>
            মেশিন লার্নিং&nbsp;
          </span>
          <br />
          <span className={title()}>শিক্ষা দিন আগামী দিনের জন্য</span>
          <div className={subtitle({ class: "mt-4 font-playpen text-black" })}>
            Make them future-ready with our courses and events.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Explore More
          </Link>
          <Button color="danger" variant="shadow" radius="full">
            Click me
          </Button>
        </div>
      </section> 
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </>
  );
};

Banner.propTypes = {};

export default Banner;