import AccomadationsHero from "@/components/accomadations/AccomadationsHero";
import ChalkTitle from "@/components/ChalkTItle";
import { CircleCheckBig } from "lucide-react";



const Accomadations = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <AccomadationsHero />
      </main>
      <section className="mx-auto p-2 w-full lg:max-w-7xl">
        <div className="py-6 md:py-16 container mx-auto px-4 max-w-6xl">
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <ChalkTitle
              title="About Our Accommodation Services"
              className="mt-10"
              underlineColor="#B97021"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
                Ably Care is committed to providing NDIS-funded Supported Independent Living (SIL) services, ensuring individuals receive personalized support in a home that meets their unique needs. We go beyond accommodation by connecting you with medical professionals and essential service providers to ensure comprehensive, 360° care.
            </p>
          </div>

          <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-20">
            <ChalkTitle
              title="Understanding NDIS Supported Independent Living (SIL)"
              className="mt-10 md:w-2/3 lg:text-center"
              underlineColor="#B97021"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
                Supported Independent Living (SIL) is a core component of NDIS funding, aimed at helping individuals with disabilities live as independently as possible. It includes:
            </p>
          </div>
          <div className="w-full lg:w-[500px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-6">
            {
                [
                    "Access to safe and suitable housing",
                    "Personalized daily care to support individual needs",
                    "Skill development to foster self-reliance",
                    "Reliable transport solutions for accessibility and mobility"
                ].map((item,index)=>(
                    <div key={index} className={`cursor-pointer flex gap-2 items-start w-full p-6 ${ index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/20" } hover:bg-customAccent transition-all duration-300 ease-in-out group`}>
                        <CircleCheckBig className="text-green-500 w-5 h-5"/>
                        <p className="w-[90%] md:w-auto font-inter text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
                            {item}
                        </p>
                    </div>
                ))
            }
          </div>
        </div>
      </section>
    </>
  );
};

export default Accomadations;
