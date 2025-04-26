import ChalkTitle from "@/components/ChalkTItle";
import SupportCoordinationHero from "@/components/supportCoordination/SupportCoordinationHero";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { supportCoordinationServices } from "@/data/supportCoordinationsData";
import { CircleCheckBig } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export const metadata = {
  title: "Support Coordination | Ably Care",
}


const SupportCoordination = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <SupportCoordinationHero />
      </main>
      <section className="mx-auto p-2 w-full lg:max-w-7xl" id="learn-more">
        <div className="py-6 md:py-16 container mx-auto px-4 max-w-6xl">
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <ChalkTitle
              title="What is Support Coordination?"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Support Coordination helps NDIS participants navigate, organize,
              and optimize their support services, ensuring a seamless
              experience tailored to their unique needs. Our expert team assists
              you in making the most of your NDIS plan while fostering
              independence, confidence, and well-being.
            </p>
          </div>

          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-24">
            <ChalkTitle
              title="Comprehensive Support Coordination Services"
              className="mt-10 lg:w-[65%] text-start lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              We provide a holistic approach to support, covering informal,
              community, mainstream, and funded services. Our team helps you
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 rounded-2xl gap-10 mb-36">
            {supportCoordinationServices.map((item, index) => (
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
                  <p className="text-sm text-white text-inter opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-28">
            <ChalkTitle
              title="Empowering You to Take Control"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Our Support Coordinators are committed to helping you
            </p>
          </div>
          <div className="w-full lg:w-[500px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-6">
            {[
              "Make Informed Decisions about your services and future.",
              "Connect with Local Resources for additional support.",
              "Maximize the Value of Your NDIS Plan to access the best services.",
              "Build Meaningful Social Connections to foster a sense of belonging.",
              "Develop Confidence & Independence in managing daily life.",
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

          <div className="w-full flex items-center justify-start lg:justify-center mt-24">
            <ChalkTitle
              title="Tailored Support Coordination Services"
              className="mt-10"
              underlineColor="#f8ab39"
            />
          </div>

          <div className="w-full md:w-[600px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
            {[
                {
                    title : "Support Coordination",
                    subTitle : "Expert Navigation & Problem Solving",
                    points : [
                        " Ideal for those with multiple providers or complex needs.",
                        "Helps resolve barriers to accessing services.",
                        "Ongoing monitoring & evaluation to ensure effectiveness.",
                        "Crisis resolution support to build stability and resilience."
                    ]
                },
                {
                    title : "Specialist Support Coordination",
                    subTitle : "High-Risk & Complex Needs Support",
                    points : [
                        "A time-limited service for those facing significant challenges.",
                        "Provides specialized intervention for individuals at high risk.",
                        "Works to create a stable, long-term support environment."
                    ]
                }
            ].map((item, index) => (
              <Card
                className="rounded-xl overflow-hidden bg-gray-50"
                key={index}
              >
                <CardHeader className="pl-0">
                  <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
                    <CardTitle className="text-white font-poppins">
                      {item.title} .
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter">
                    <h1 className="mb-2 font-poppins text-gray-700 font-semibold text-lg">
                      {item.subTitle}
                    </h1>
                    <ul>
                      {item.points.map((point, i) => (
                        <li key={i} className="text-gray-700 list-disc">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="relative w-full h-96 flex justify-center items-center flex-col mt-24 overflow-hidden rounded-2xl">
            <div className="flex flex-col items-center justify-start w-full p-4 relative z-10">
              <h3 className="text-2xl lg:text-3xl font-poppins text-white font-semibold text-center">
                Let’s Navigate Your NDIS Plan Together!
              </h3>
              <p className="text-xs font-inter text-white font-light text-center mt-1">
                Our team is ready to guide you every step of the way helping you
                feel <br className="hidden sm:block" /> confident, supported,
                and in control.
              </p>
              <Link href={"/contact"}>
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
                src={"/images/support-bg.jpg"}
                alt="Referral background"
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

export default SupportCoordination;
