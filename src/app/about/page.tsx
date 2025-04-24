import AboutHero from "@/components/about/AboutHero";
import ChalkTitle from "@/components/ChalkTItle";
import { aboutTileData } from "@/data/aboutTileData";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "About Us | Ably Care",
};

const About = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <AboutHero />
      </main>
      <div className="flex flex-col min-h-screen" id="learn-more">
        <section className="py-6 md:py-16 container mx-auto px-4 max-w-6xl">
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <ChalkTitle
              title="Our Story"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              We are inspired by the best in the sector, but driven by the
              unique people we support every day. With services across
            </p>
          </div>
          <div className="w-full lg:w-[500px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-6">
            {[
              "Supported Independent Living (SIL)",
              "Short & Medium-Term Accommodation",
              "Early Childhood Intervention",
              "Plan Management",
              "Community Participation",
              "Support Coordination",
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
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-10">
              We walk alongside participants and their families to deliver
              flexible, customized support that fits their goals, backgrounds,
              and aspirations.
            </p>
          </div>

          <div className="flex items-center justify-center gap-8 w-full h-[300px] md:h-[250px] relative mt-20">
            <div className="relative w-1/2 h-full flex flex-col items-center justify-center">
              <div className="relative z-10 p-4">
                <h1 className="font-poppins text-2xl font-semibold text-white text-center">
                  Our Vision
                </h1>
                <p className="text-xs font-inter text-white font-light text-center">
                  To be the most trusted care provider, recognized for our
                  unwavering commitment to excellence, inclusivity, and respect
                  in delivering disability and mental health services.
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
              <div className="relative z-10 p-4">
                <h1 className="font-poppins text-2xl font-semibold text-white text-center">
                  Our Mission
                </h1>
                <p className="text-xs font-inter text-white font-light text-center">
                  To empower people by providing compassionate, individualized
                  care that enhances their independence and quality of life.
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

          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-24">
            <ChalkTitle
              title="Our Values"
              className="mt-10 lg:w-[65%] text-start lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              We live our values every day in the way we listen, support, and
              care.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 rounded-2xl gap-10 mb-36">
            {aboutTileData.map((item, index) => (
              <div
                key={index}
                className={`flex flex-col items-start justify-center p-10 overflow-hidden group hover:bg-customAccent min-h-[400px] rounded-2xl ${
                  index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/10"
                } ${index % 3 === 0 || index % 3 === 2 ? "lg:translate-y-32" : ""}`}
              >
                <div className="w-full gap-3 flex flex-col items-start justify-center translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                  <div className="relative w-32 h-32 group-hover:w-20 group-hover:h-20 left-[50%] translate-x-[-50%] group-hover:translate-x-0 group-hover:left-0 transition-all duration-300 ease-out">
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
                  <p className="text-sm text-white text-inter opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-16">
            <ChalkTitle
              title="Why It Matters"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              At Ably Care, we believe that great care goes beyond service
              delivery. It’s about
            </p>
          </div>
          <div className="w-full lg:w-[500px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-6">
            {[
              "Building trust",
              "Creating opportunities",
              "Making lives better, together",
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
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-10">
              Our team’s experience and dedication ensure you or your loved one
              receive support you can count on every step of the way.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
