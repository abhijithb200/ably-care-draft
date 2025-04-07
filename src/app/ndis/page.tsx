import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Hero from '@/components/ndis/Hero';
import ChalkTitle from '@/components/ChalkTItle';
import { ndisJourneyBulletPoints, ndisPrinciplesData } from '@/data/serviceData';


export const metadata = {
  title: "NDIS | Ably Care",
}


const Ndis =()=> {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <Hero />
      </main>
      <div className="flex flex-col min-h-screen" id='ndis-more'>
        {/* Main Content */}
        <section className="py-6 md:py-16 container mx-auto px-4 max-w-6xl">
          <div className="mb-7 flex flex-col items-start justify-center lg:items-center">
            <ChalkTitle
              title="What is the NDIS?"
              className="mt-10"
              underlineColor="#B97021"
            />
            <p className="text-gray-700 max-w-3xl lg:mx-auto text-left lg:text-center font-inter text-sm mt-5">
              The National Disability Insurance Scheme (NDIS) is a significant
              social reform in Australia, designed to provide individualized
              support to people with permanent and significant disabilities. It
              shifts the focus from a welfare-based system to an insurance-based
              approach, empowering individuals to have greater choice and
              control over the supports they receive.
            </p>
          </div>

          {/* Key Principles */}
          <div className="mb-16 mt-20">
            <div className="w-full flex items-start justify-center lg:items-center">
              <ChalkTitle
                title="Key Principles of the NDIS"
                className="mt-10"
                underlineColor="#B97021"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 rounded-2xl overflow-hidden">
              {ndisPrinciplesData.map((principle, index) => (
                <div key={index} className={`flex flex-col items-start justify-center p-10 overflow-hidden group hover:bg-customAccent ${ index % 2 === 0 ? "bg-customAccent/20" : "bg-complementary/10"}`}>
                  <div className="w-full gap-3 flex flex-col items-start justify-center translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                    <div className="relative w-32 h-32 group-hover:w-20 group-hover:h-20 left-[50%] translate-x-[-50%] group-hover:translate-x-0 group-hover:left-0 transition-all duration-300 ease-out">
                      <Image
                        src={principle.image}
                        alt={principle.title}
                        fill
                        sizes="100%"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="flex items-center justify-center w-full group-hover:justify-start">
                      <h1 className="text-gray-800 group-hover:text-white text-2xl font-poppins font-semibold text-center group-hover:text-start transition-all duration-300 ease-in-out">
                        {principle.title}
                      </h1>
                    </div>
                    <p className="text-sm text-white text-inter opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out">
                      {principle.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* NDIS Journey Section */}
          <div className="mb-16">
            <div className='w-full flex items-center justify-start lg:justify-center'>
              <ChalkTitle
                title='For Those Just Starting Their NDIS Journey'
                className="mt-10"
                underlineColor="#B97021"
              />
            </div>
            <p className="text-gray-600 my-8 text-center max-w-3xl mx-auto font-inter text-sm">
              Navigating the NDIS can initially seem complex, but with the right
              support, it can become a manageable and empowering process. Here's
              a detailed breakdown of how our NDIS staff can assist:
            </p>

            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {ndisJourneyBulletPoints.map((item, index) => (
                <Card className="rounded-xl overflow-hidden bg-gray-50" key={index}>
                  <CardHeader className="pl-0">
                    <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
                      <CardTitle className="text-white font-poppins">{ index + 1 } .</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-inter">
                      <h1 className="mb-2 font-poppins text-gray-700 font-semibold text-lg">
                        {item.title}
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
          </div>
        </section>
      </div>
    </>
  );
}

export default Ndis