import ChalkTitle from "@/components/ChalkTItle";
import NdisFundingHero from "@/components/ndis-funding-eligibility/NdisFundingHero";
import NdisStepsCards from "@/components/ndis-funding-eligibility/NdisStepsCards";
import Image from "next/image";

const NdisFunding = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <NdisFundingHero />
      </main>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-10">
        <NdisStepsCards />

        <div className="w-full flex flex-col lg:flex-row gap-5 justify-center items-center mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2">
            <ChalkTitle
              title="NDIS Funding Eligibility"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <div className="font-inter text-gray-600 my-5 text-sm lg:text-base">
              <p>To get funding under the NDIS, you must:</p>
              <ul className="list-disc list-outside ml-4 my-2">
                <li>Have a permanent disability that significantly affects your ability to take part in day-to-day activities</li>
                <li>Be younger than 65 years of age at the time of your first NDIS plan</li>
                <li>Be an Australian citizen or hold a permanent visa or a Protected Special Category visa</li>
              </ul>
              <p>If you are over 65 years of age, you may be eligible for a Home Care Package under My Aged Care.</p>
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

        <div className="w-full flex flex-col lg:flex-row-reverse gap-5 justify-center items-center mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2">
            <ChalkTitle
              title="Thinking about your goals"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <div className="font-inter text-gray-600 my-5 text-sm lg:text-base">
              <p>The NDIS takes a lifetime approach. It is in place to help people with a disability learn the skills to live independently and to support them with daily tasks. Setting goals is an important element of every NDIS plan, as it gives both you and the NDIA an idea of what actions to take in order to improve your future</p>
              <br />
              <p>Before applying for an NDIS plan, it is a good idea to consider what you want from your funding. Here are some questions you can ask yourself in order to come up with achievable goals that will shape your plan:</p>
              <br />
              <ul className="list-disc list-outside ml-4">
                <li>What is important to me?</li>
                <li>How do I like to spend my time?</li>
                <li>What do I need to live my best life?</li>
                <li>How could my health and wellbeing improve?</li>
                <li>What networks could I be connecting with to help me?</li>
                <li>What will help me be more involved in the community?</li>
                <li>How can I build confidence in different aspects of my life?</li>
              </ul>
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

        <div className="w-full flex flex-col lg:flex-row gap-5 justify-center items-center mt-10 lg:mt-20">
          <div className="w-full lg:w-1/2">
            <ChalkTitle
              title="Preparing for your application"
              className="mt-10"
              underlineColor="#f8ab39"
            />
            <div className="font-inter text-gray-600 my-5 text-sm lg:text-base">
              <p>Preparing before you apply for NDIS funding will make the application process a little easier.</p>
              <br />
              <p>You may be asked for the following information when you apply for NDIS funding:</p>
              <br />
              <ul className="list-disc list-outside ml-4 my-2">
                <li>Your name, age, living situation and residency / visa status and supporting evidence</li>
                <li>Details and evidence about your disability, including how it effects your daily life</li>
                <li>Any relevant reports you already have from medical practitioners and allied health professionals</li>
                <li>Whether you give permission for the NDIS to talk to third parties about your disability, including Centrelink, doctors or people who currently look after you</li>
              </ul>
              <br />
              <p>It is also a good idea to think about whether you want someone you trust involved any meetings and phone calls with the NDIA.</p>
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
      </main>
    </>
  );
};

export default NdisFunding;
