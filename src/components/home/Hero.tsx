import Image from "next/image";
import { Button } from "../ui/button";
import ParticlesBackground from "../ParticlesBackground";


const Hero = () => {
  return (
    <>
      <main className="w-full h-screen md:h-[500px] md:max-h-[800px] flex justify-center items-center">
        <div className="relative w-full h-full lg:max-w-7xl rounded-3xl">
          <div className="w-full h-full z-[3] flex flex-col items-start justify-center p-4 gap-3">
            <h1 className="font-poppins text-white text-4xl font-bold">Compassionate Care, Tailored for You</h1>
            <p className="text-white text-xs font-extralight font-inter">
              At Ably Care, we provide personalized, high-quality healthcare
              services with warmth and dedication. Whether it's disability
              support, aged care, or mental well-being, our expert team is here
              to empower and uplift every individual. Your care, your way
              because you deserve the best
            </p>
            <Button className="bg-customAccent text-white hover:bg-customAccent/80 rounded-xl">See More</Button>
          </div>
          <div className="absolute top-0 left-0 w-full h-full lg:max-w-7xl rounded-3xl overflow-hidden z-[-1]">
            <div className="absolute w-full h-full bg-gradient-to-t from-black/70 to-transparent z-[3]"></div>
            <div className="absolute w-full h-full z-[2] overflow-hidden">
              <ParticlesBackground/>
            </div>
            <div className="absolute w-full h-full z-[1]">
              <Image
                src="/images/hero-bg.jpg"
                alt="Ably Care Logo"
                fill
                className="absolute w-full h-full object-cover"
              />
            </div>
          </div>
          image
        </div>
      </main>
    </>
  );
};

export default Hero;
