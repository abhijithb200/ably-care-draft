import ChalkTitle from "@/components/ChalkTItle";
import CommunityHero from "@/components/community/CommunityHero";
import { Button } from "@/components/ui/button";
import { communityData } from "@/data/communityData";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Home & Community Care | Ably Care",
}


const Community = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <CommunityHero />
      </main>
      <div className="mx-auto p-2 w-full lg:max-w-7xl">
        <section className="py-6 md:py-16 container mx-auto px-4 max-w-6xl" id="learn-more">
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <ChalkTitle
              title="About Our Home & Community Care"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              At the heart of our mission is the unwavering commitment to
              enhancing your quality of life within the comfort of your home and
              community. We understand that every individual’s journey is
              unique, and our compassionate, highly skilled team is dedicated to
              providing personalized support to help you maintain your
              independence and achieve your goals.
            </p>
          </div>

          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-24">
            <ChalkTitle
              title="Our Services"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Supporting You at Every Step
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 rounded-2xl gap-10 mb-36">
            {communityData.map((item, index) => (
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

          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-24">
            <ChalkTitle
              title="A Collaborative Approach"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              Our home and community care services are delivered by a diverse
              team of professionals who are passionate about making a
              difference. We work closely with you to ensure you receive
              personalized support that aligns with your needs, preferences, and
              goals.
            </p>
          </div>

          <div className="relative w-full h-96 flex justify-center items-center flex-col mt-24 overflow-hidden rounded-2xl">
            <div className="flex flex-col items-center justify-start w-full p-4 relative z-10">
              <h3 className="text-2xl lg:text-3xl font-poppins text-white font-semibold text-center">
                Get Started Today!
              </h3>
              <p className="text-xs font-inter text-white font-light text-center mt-1">
                Take the next step towards a more independent, fulfilling life <br /> with our Home & Community Care services.
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
                src={"/images/community-bg.jpg"}
                alt="Community background"
                fill
                sizes="100%"
                className="object-cover object-center w-full h-full"
              />
            </div>
            <div className="absolute top-0 bg-gradient-to-t from-black to-transparent z-[7] w-full h-full"></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Community;
