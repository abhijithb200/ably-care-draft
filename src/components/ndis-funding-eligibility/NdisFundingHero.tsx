import Image from "next/image";
import { Button } from "../ui/button";

const NdisFundingHero = () => {
  return (
    <>
      <div className="w-full h-60 lg:h-96 xl:h-[450px] flex lg:rounded-2xl overflow-hidden justify-center">
        <div className="flex lg:p-4  flex-col justify-center items-center gap-2 lg:justify-center lg:items-start lg:w-[50%]">
          <h1 className="font-poppins text-4xl text-center font-semibold lg:text-start lg:text-4xl xl:text-5xl">
            How do I get NDIS funding?
          </h1>
          <p className="font-inter text-xs text-center text-gray-600 w-[85%] md:w-[70%] lg:w-[500px] lg:text-start xl:text-sm">
            If you have a permanent disability that affects your capacity to take part in day-to-day activities, you may be eligible for NDIS funding.
          </p>
          <a href="#contact">
            <Button
              variant={"default"}
              className="mt-5 bg-customAccent hover:bg-complementary text-white"
            >
              Contact Us
            </Button>
          </a>
        </div>
        <div className="hidden lg:flex w-[50%] h-full relative">
          <Image
            src="/images/char-draft01.png"
            alt="Ably Care Persona"
            width={250}
            height={250}
            className="absolute bottom-0 left-0 z-[5]"
          />
          <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-white to-transparent z-[3]"></div>
          <div className="relative w-full h-full z-[1]">
            <Image
              src="/images/contact-hero.jpg"
              alt="Ably Care Hero Image"
              fill
              sizes="100%"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default NdisFundingHero;
