import ChalkTitle from "@/components/ChalkTItle";
import StepsCards from "@/components/StepsCards";
import SupportWorkerApplicationForm from "@/components/support-worker/SupportWorkerApplicationForm";
import SupportWorkerHero from "@/components/support-worker/SupportWorkerHero";
import { supportWorkerStepsData } from "@/data/SupportWorkerStepsData";
import Image from "next/image";

const SupportWorker = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <SupportWorkerHero />
      </main>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-10">
        <div className="w-full flex flex-col lg:flex-row-reverse gap-5 lg:gap-20 justify-center items-center mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2">
            <ChalkTitle
              title="What does a support worker do?"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <div className="font-inter text-gray-600 my-5 text-sm lg:text-lg">
              <p>
                Support workers at Leora Healthcare provide physical, emotional
                and practical support to older people or people living with
                disability. This is a rewarding job that is ideal for
                individuals who require flexibility with their hours and are
                looking for a meaningful way to make a difference in people’s
                lives.
              </p>
            </div>
          </div>
          <div className="w-full relative overflow-hidden rounded-xl h-52 md:h-64 lg:h-96 lg:w-1/2">
            <Image
              src="/images/mission-stock.jpg"
              alt="Ably Care Persona"
              fill
              sizes="100%"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>

        <div className="mb-7 flex flex-col items-start justify-center lg:items-center mt-24">
          <ChalkTitle
            title="Why join Ably Care Healthcare?"
            className="mt-10 lg:w-[65%] text-start lg:text-center"
            underlineColor="#f8ab39"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 rounded-2xl gap-10 mb-36">
          {[
            {
              image: "/icons/clinic-icon.png",
              title: "Above Award Rates",
              subTitle:
                "Above Award Rates It is our commitment to pay our support workers well above the minimum award rate.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Dedicated Care Coordination",
              subTitle:
                "You’ll have a dedicated care coordination team! You can turn to any member of the team if you have any questions.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Onsite and Online Training",
              subTitle:
                "Build your skills and knowledge with onsite training sessions, supplemented by our online Learning Management System.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Rewards and Recognition",
              subTitle:
                "We recognise excellent performance with monthly ‘Cheers for Peers’ events, where we celebrate a ‘Support Worker of the Month’ and a ‘Learner of the Month’.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Regular Coffee Catchups",
              subTitle:
                "We host informal cafe catchups for support workers to meet their care team, ask questions, and connect. Coffee or tea is on us!",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Modern EAP",
              subTitle:
                "Gain access to our award-winning platform that provides 24/7 mental health support.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Career Growth and Development",
              subTitle:
                "Various career progression opportunities for support workers – and we provide support, training, mentorship and encouragement along the way.",
            },
            {
              image: "/icons/clinic-icon.png",
              title: "Social Events",
              subTitle:
                "We invite support workers to various social events, from local meet-ups to organisation-wide celebrations.",
            },
          ].map((item, index) => (
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

        <div className="w-full mt-10">
          <StepsCards
            title="Join Our Team In Just A Few Steps"
            stepsData={supportWorkerStepsData}
          />
        </div>
        <div className="w-full mt-20">
          <SupportWorkerApplicationForm/>
        </div>
      </main>
    </>
  );
};

export default SupportWorker;
