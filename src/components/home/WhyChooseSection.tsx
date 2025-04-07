import React from "react";
import ChalkTitle from "../ChalkTItle";
import Image from "next/image";
import { Button } from "../ui/button";

const WhyChooseSection = () => {
  return (
    <>
      <div className="flex items-center justify-start md:justify-center">
        <ChalkTitle
          title="Why Trust Ably Care ?"
          className="mt-10"
          underlineColor="#B97021"
        />
      </div>
      <div className="mt-7">
        <div className="flex flex-col items-start justify-center md:items-center w-full font-inter text-gray-600 text-sm text-center">
          <p> It's Our Experience and Heart,</p>
          <p>More Than Care, It's a Partnership.</p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center relative w-full h-[600px] rounded-xl">
          <div className="hidden lg:block absolute w-[205px] lg:w-[245px] h-[250px] lg:h-[300px] right-[-8px] bottom-0 z-20 scale-x-[-1]">
            <Image
              src={"/images/char-draft01.png"}
              alt="Ably Care Persona"
              fill
              className="absolute w-full h-full object-contain"
            />
          </div>
          <div className="z-10 w-full h-full flex flex-col items-start justify-end pl-6 pb-6 lg:p6 gap-3 lg:gap-6 lg:items-start lg:justify-center">
            <p className="text-white font-poppins font-semibold text-xl w-[85%] lg:text-3xl drop-shadow-md lg:font-medium lg:w-[70%]">
              There is no substitute for experience..." These words guide our
              commitment to providing exceptional care. We believe in building
              trust through genuine empathy and unwavering dedication. We don't
              just provide services, we build relationships that empower.
            </p>
            <Button className="rounded-xl bg-complementary text-white hover:bg-customAccent">
              Find out more
            </Button>
          </div>
          <div className="w-full h-full absolute top-0 left-0 overflow-hidden rounded-xl z-[2]">
            <div className="absolute top-0 left-0 z-[5] bg-gradient-to-t from-customAccent to-transparent w-full h-full"></div>
            <div className="absolute top-0 left-0 z-[2] w-full h-full">
              <Image
                src={"/images/whychoose-cover.jpg"}
                alt="Why Choose Cover"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyChooseSection;
