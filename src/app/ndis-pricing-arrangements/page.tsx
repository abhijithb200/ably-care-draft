import ChalkTitle from "@/components/ChalkTItle";
import NdisPricingArrangementsHero from "@/components/ndis-pricing-arrangements/NdisPricingArrangementsHero";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const NdisPricingArrangements = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <NdisPricingArrangementsHero />
      </main>

      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-10 sm:mt-20">
        <div className="flex justify-start md:justify-center">
          <ChalkTitle
            title="How much do our services cost?"
            className="mt-10"
            underlineColor="#f8ab39"
          />
        </div>
        <div className="mt-7 flex flex-col items-center justify-center">
          <div className="mt-8 flex gap-6 w-full lg:max-w-4xl sm:h-[500px] justify-center items-center">
            <div className="hidden sm:block w-1/2 h-full relative pt-4 pl-4">
              <h2 className="relative font-poppins text-white drop-shadow-md text-3xl z-10 font-medium">
                Be Part of Something Meaningful.
              </h2>

              <div className="absolute w-[205px] lg:w-[245px] h-[250px] lg:h-[300px] left-[-8px] bottom-0 z-10">
                <Image
                  src={"/images/char-draft01.png"}
                  alt="Ably Care Persona"
                  fill
                  className="absolute w-full h-full object-contain"
                />
              </div>
              <div className="w-full h-full absolute top-0 left-0 z-[5] rounded-xl overflow-hidden">
                <div className="w-full h-full absolute top-0 left-0 z-[3] bg-gradient-to-t from-customAccent to-black/40"></div>
                <div className="w-full h-full absolute top-0 left-0 z-[2]">
                  <Image
                    src={"/images/team-stock.jpg"}
                    alt="Ably Care Team"
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 flex flex-col items-start justify-center gap-6">
              <p className="font-inter text-sm sm:text-xl font-light">
                Price limits set by the National Disability Insurance Agency
                (NDIA) are the maximum prices that registered providers can
                charge NDIS participants for specific supports.
                <br />
                <br />
                The rules outlined in the NDIS Pricing Arrangements and Price
                Limits must be followed when supports are delivered to
                NDIA-managed or plan-managed participants.
                <br />
                <br />
                The NDIA regularly updates pricing arrangements – you can find
                current updates here.
              </p>
              <a
                href="https://www.ndis.gov.au/providers/pricing-arrangements"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded-xl bg-complementary text-white hover:bg-customAccent">
                  Find out more
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="relative w-full h-96 flex justify-center items-center flex-col mt-24 overflow-hidden rounded-2xl">
          <div className="flex flex-col items-center justify-start w-full p-4 relative z-10">
            <h3 className="text-2xl lg:text-3xl font-poppins text-white font-semibold text-center">
              2024-25 NDIS Price Guide
            </h3>
            <p className="text-xs font-inter text-white font-light text-center mt-1">
              Our Price Guide is in compliance with NDIS Pricing <br/> Arrangements and Price Limits for 2024-2025.
            </p>
            <a href="/docs/ably-care-pricing.pdf" download={"Ably care pricing"}>
              <Button
                variant={"default"}
                className="mt-6 lg:mt-3 bg-customAccent hover:bg-complementary text-white"
              >
                Download
              </Button>
            </a>
          </div>
          <div className="absolute top-0 z-[5] w-full h-full">
            <Image
              src={"/images/community-bg.jpg"}
              alt="Community background"
              fill
              sizes="100%"
              className="object-cover object-center w-full h-full"
            />
          </div>
          <div className="absolute top-0 bg-gradient-to-t from-black to-transparent z-[7] w-full h-full"></div>
        </div>
      </main>
    </>
  );
};

export default NdisPricingArrangements;
