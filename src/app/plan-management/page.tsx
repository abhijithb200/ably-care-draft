import ChalkTitle from "@/components/ChalkTItle";
import PlanManagementHero from "@/components/planManagement/PlanManagementHero";
import { CircleCheckBig } from "lucide-react";



const PlanManagement = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <PlanManagementHero />
      </main>
      <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-20">
        <ChalkTitle
          title="Unlocking Choice & Control"
          className="mt-10 md:w-2/3 lg:text-center"
          underlineColor="#B97021"
        />
        <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
          Managing your NDIS plan shouldn’t be overwhelming.<br className="hidden md:block"/> Our expert Plan Management services provide
        </p>
      </div>
      <div className="w-full lg:w-[500px] mx-auto flex flex-col rounded-2xl overflow-hidden mt-6">
        {[
          {
            title: "Freedom to Choose Providers",
            subTitle: "Including those not registered with the NDIS.",
          },
          {
            title: "Stress-Free Financial Administration",
            subTitle: "We handle invoices, payments, and tracking.",
          },
          {
            title: "Full Transparency & Compliance",
            subTitle: "We ensure your funds are managed accurately.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer flex gap-2 items-start w-full p-6 ${
              index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/20"
            } hover:bg-customAccent transition-all duration-300 ease-in-out group`}
          >
            <CircleCheckBig className="text-green-500 w-5 h-5 mt-1" />
            <div className="w-full flex flex-col items-start justify-center gap-1">
              <h1 className="font-poppins text-lg text-gray-800 group-hover:text-white transition-all duration-300 ease-in-out">
                {item.title}
              </h1>
              <p className="w-[90%] text-sm md:w-auto font-inter text-gray-600 group-hover:text-white transition-all duration-300 ease-in-out">
                {item.subTitle}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PlanManagement;
