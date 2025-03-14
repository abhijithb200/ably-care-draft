import Hero from "@/components/home/Hero";

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
    </>
  );
}
