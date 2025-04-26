import AccomadationsHero from "@/components/accomadations/AccomadationsHero";
import NdisJourneyCards from "@/components/accomadations/NdisJourneyCards";
import ChalkTitle from "@/components/ChalkTItle";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { accommodationOptions } from "@/data/accommadationData";
import { supportServices } from "@/data/accommadationsSupport";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Accomadations | Ably Care",
}


const Accomadations = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <AccomadationsHero />
      </main>
      <section className="mx-auto p-2 w-full lg:max-w-7xl" id="learn-more">
        <div className="py-6 md:py-16 container mx-auto px-4 max-w-6xl">
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <ChalkTitle
              title="About Our Accommodation Services"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Ably Care is committed to providing NDIS-funded Supported
              Independent Living (SIL) services, ensuring individuals receive
              personalized support in a home that meets their unique needs. We
              go beyond accommodation by connecting you with medical
              professionals and essential service providers to ensure
              comprehensive, 360° care.
            </p>
          </div>

          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-20">
            <ChalkTitle
              title="Understanding NDIS Supported Independent Living (SIL)"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Supported Independent Living (SIL) is a core component of NDIS
              funding, aimed at helping individuals with disabilities live as
              independently as possible. It includes:
            </p>
          </div>
          <div className="w-full lg:w-[500px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-6">
            {[
              "Access to safe and suitable housing",
              "Personalized daily care to support individual needs",
              "Skill development to foster self-reliance",
              "Reliable transport solutions for accessibility and mobility",
            ].map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer flex gap-2 items-start w-full p-6 ${
                  index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/20"
                } hover:bg-customAccent transition-all duration-300 ease-in-out group`}
              >
                <CircleCheckBig className="text-green-500 w-5 h-5 mt-1 sm:mt-[3px]" />
                <p className="w-[90%] md:w-auto font-inter text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
                  {item}
                </p>
              </div>
            ))}
          </div>
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-24">
            <ChalkTitle
              title="Accommodation Options"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Find the Perfect Fit
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 rounded-2xl gap-10 mb-36">
            {accommodationOptions.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-start justify-center p-10 overflow-hidden group hover:bg-customAccent min-h-[400px] rounded-2xl ${
                  index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/10"
                } ${index % 3 === 0 || index % 3 === 2 ? "lg:translate-y-32" : ""}`}
              >
                <div className="w-full gap-3 flex flex-col items-start justify-center translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  <div className="relative w-32 h-32 group-hover:w-20 group-hover:h-20 left-[50%] translate-x-[-50%] group-hover:translate-x-0 group-hover:left-[26%] transition-all duration-300 ease-out">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="100%"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center w-full group-hover:justify-start">
                    <h1 className="text-gray-800 group-hover:text-white text-2xl font-poppins font-semibold text-center group-hover:text-start transition-all duration-300 ease-in-out">
                      {item.title}
                    </h1>
                  </div>
                  <ul className="text-sm text-white text-inter opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    {item.points.map((point, index) => (
                      <li className="list-disc" key={index}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          <div className='w-full flex items-center justify-start lg:justify-center mt-32'>
              <ChalkTitle
                title='For Those Just Starting Their NDIS Journey'
                className="mt-10"
                underlineColor="#f8ab39"
              />
            </div>
            <p className="text-gray-600 my-8 text-center max-w-3xl mx-auto font-inter text-sm">
              Navigating the NDIS can initially seem complex, but with the right
              support, it can become a manageable and empowering process. Here's
              a detailed breakdown of how our NDIS staff can assist:
            </p>

            <div className="w-full">
              <NdisJourneyCards/>
            </div>

            <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-20">
            <ChalkTitle
              title="Accommodation Choices"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              SIL & SDA
            </p>
          </div>
          <div className="w-full lg:w-[500px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-6">
            {[
              {
                title : "Supported Independent Living (SIL)",
                subTitle : "Helping individuals achieve self-reliance"
              },
              {
                title : "Specialist Disability Accommodation (SDA)",
                subTitle : "Providing specialized housing for complex needs"
              }
            ].map((item, index) => (
              <div
                key={index}
                className={`cursor-pointer flex gap-2 items-start w-full p-6 ${
                  index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/20"
                } hover:bg-customAccent transition-all duration-300 ease-in-out group`}
              >
                <CircleCheckBig className="text-green-500 w-5 h-5 mt-1" />
                <div className="w-full flex flex-col items-start justify-center gap-1">
                  <h1 className="font-poppins text-lg text-gray-800 group-hover:text-white transition-all duration-300 ease-in-out">{item.title}</h1>
                  <p className="w-[90%] text-sm md:w-auto font-inter text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative w-full h-96 flex justify-center items-center flex-col mt-24 overflow-hidden rounded-2xl">
            <div className="flex flex-col items-center justify-start w-full p-4 relative z-10">
              <h3 className="text-2xl lg:text-3xl font-poppins text-white font-semibold text-center">
                Let’s Find the Right Accommodation for You!
              </h3>
              <p className="text-xs font-inter text-white font-light text-center mt-1">
                We’re here to help you find a home that supports your independence, well-being, and comfort.
              </p>
              <Link
                href={"/contact"}
              >
                <Button
                    variant={"default"}
                    className="mt-6 lg:mt-3 bg-customAccent hover:bg-complementary text-white"
                >
                    Contact Us
                </Button>
              </Link>
            </div>
            <div className="absolute top-0 z-[5] w-full h-full">
              <Image
                src={"/images/accommadation-bg.jpg"}
                alt="Accommodation background"
                fill
                sizes="100%"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="absolute top-0 bg-gradient-to-t from-black to-transparent z-[7] w-full h-full"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Accomadations;
