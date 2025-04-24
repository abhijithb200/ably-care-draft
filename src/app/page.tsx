import CoreValueSection from "@/components/home/CoreValueSection";
import Hero from "@/components/home/Hero";
import ServiceSection from "@/components/home/ServiceSection";
import TeamSection from "@/components/home/TeamSection";
import Testimonials from "@/components/home/Testimonials";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import ParticlesBackground from "@/components/ParticlesBackground";

export const metadata = {
  title: "Home | Ably Care",
  description: "Ably Care",
};

export default function Home() {
  return (
    <>
      <div className="w-full relative z-[2]">
        <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
          <Hero />
        </main>
        <section className="mx-auto p-2 w-full lg:max-w-7xl mt-6">
          <ServiceSection />
        </section>
        <section className="mx-auto p-2 w-full lg:max-w-7xl mt-12">
          <WhyChooseSection />
        </section>
        <section className="mx-auto p-2 w-full lg:max-w-7xl mt-12">
          <TeamSection />
        </section>
        <section className="mx-auto p-2 w-full lg:max-w-7xl mt-12">
          <Testimonials />
        </section>
        <section className="mx-auto p-2 w-full lg:max-w-7xl mt-12">
          <CoreValueSection />
        </section>
      </div>
      <div className="fixed top-0 left-0 w-full h-screen z-[-1] overflow-hidden">
        <ParticlesBackground />
      </div>
    </>
  );
}
