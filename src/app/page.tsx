import CoreValueSection from "@/components/home/CoreValueSection";
import Hero from "@/components/home/Hero";
import ServiceSection from "@/components/home/ServiceSection";
import TeamSection from "@/components/home/TeamSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";

export const metadata = {
  title : "Home | Ably Care",
  description : "Ably Care"
}

export default function Home() {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl">
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
        <CoreValueSection />
      </section>
    </>
  );
}
