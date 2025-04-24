import React from "react";
import ChalkTitle from "../ChalkTItle";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Image from "next/image";
import { servicesData } from "@/data/serviceData";

const ServiceSection = () => {
  return (
    <>
      <div className="flex items-center justify-start md:justify-center">
        <ChalkTitle
          title="Our Services"
          className="mt-10"
          underlineColor="#f8ab39"
        />
      </div>
      <div className="mt-7">
        <div className="flex flex-col items-start justify-center md:items-center w-full font-inter text-gray-600 text-sm text-center">
          <p>Tailored to Your Needs,</p>
          <p>Discover the Difference of Personalized Care.</p>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <Card className="rounded-xl overflow-hidden bg-gray-50" key={index}>
              <CardHeader className="pl-0">
                <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
                  <div className="relative w-[100px] h-[100px]">
                    <Image
                      src={service.image}
                      alt="Service icon"
                      fill
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-white font-poppins">
                    {service.title}
                  </CardTitle>
                  {service.ndisLogo && (
                    <div className="absolute top-[-26px] right-[15px] w-[100px] h-[100px] z-10">
                      <Image
                        src={"/icons/ndis-logo.png"}
                        alt="Service icon"
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-inter">
                  {service.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                <Button className="rounded-xl bg-complementary text-white hover:bg-customAccent">
                  Find out more
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
