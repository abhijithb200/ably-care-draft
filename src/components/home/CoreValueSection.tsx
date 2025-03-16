import React from "react";
import Image from "next/image";
import ChalkTitle from "../ChalkTItle";

const CoreValueSection = () => {
  return (
    <>
      <div className="flex justify-start md:justify-center">
        <ChalkTitle
          title="Our Core Values"
          className="mt-10"
          underlineColor="#B97021"
        />
      </div>
      <div className="mt-7 flex flex-col items-center justify-center">
        <div className="flex flex-col items-start justify-center md:items-center w-full font-inter text-gray-600 text-sm text-center">
          <p> Guiding Our Every Action.</p>
        </div>
        <div className="w-full h-[400px] relative p-6 mt-8">
          <div className="relative z-10 w-full h-full flex flex-col sm:items-center justify-center">
            <h2 className="font-poppins text-white drop-shadow-md text-3xl font-semibold">
              Our Promise
            </h2>
            <p className="font-poppins text-white drop-shadow-md text-xl font-medium sm:text-center">
              Trust, Empowerment, Compassion.
            </p>
            <p className="font-inter font-extralight text-gray-300 drop-shadow-md text-base sm:w-8/12 sm:text-center mt-6">
              We are committed to fostering independence, dignity, and a sense
              of belonging through personalized, compassionate care. Your
              well-being is at the heart of everything we do.
            </p>
          </div>

          <div className="hidden sm:block absolute w-[205px] lg:w-[245px] h-[250px] lg:h-[300px] left-[-8px] bottom-0 z-10">
            <Image
              src={"/images/char-draft01.png"}
              alt="Ably Care Persona"
              fill
              className="absolute w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-full absolute top-0 left-0 z-[5] rounded-xl overflow-hidden">
            <div className="w-full h-full absolute top-0 left-0 z-[3] bg-gradient-to-t from-black to-black/40"></div>
            <div className="w-full h-full absolute top-0 left-0 z-[2]">
              <Image
                src={"/images/vision-stock.jpg"}
                alt="Ably Care Team"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-8 w-full h-[250px] relative mt-8">
          <div className="relative w-1/2 h-full flex flex-col items-center justify-center">
            <div className="relative z-10">
              <h1 className="font-poppins text-2xl font-semibold text-white text-center">Our Vision</h1>
              <p className="text-sm font-inter text-white font-light text-center">
                To be the Most Trusted Care Provider. 
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full z-[5] bg-gradient-to-t from-black to-black/40"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  src={"/images/vision01.jpg"}
                  alt="Ably Care vision"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="relative w-1/2 h-full flex flex-col items-center justify-center">
            <div className="relative z-10">
              <h1 className="font-poppins text-2xl font-semibold text-white text-center">Our Mission</h1>
              <p className="text-sm font-inter text-white font-light text-center">
                To Empower People with Disability.
              </p>
            </div>
            <div className="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full z-[5] bg-gradient-to-t from-black to-black/40"></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <Image
                  src={"/images/mission-stock.jpg"}
                  alt="Ably Care vision"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoreValueSection;
