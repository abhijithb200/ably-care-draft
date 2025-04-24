"use client";

import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import ChalkTitle from "./ChalkTItle";

interface StepsCardsProps {
  title: string;
  stepsData: {
    image: string;
    description: string;
  }[];
}

const StepsCards = ({ stepsData, title }: StepsCardsProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);

  useEffect(() => {
    if (swiperRef.current && prevRef.current && nextRef.current) {
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <>
      <div className="flex justify-start md:justify-center">
        <ChalkTitle title={title} className="mt-10" underlineColor="#f8ab39" />
      </div>
      <div className="mt-10 relative" id="refer">
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          allowTouchMove={false}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            if (prevRef.current && nextRef.current) {
              const navigation = swiper.params.navigation;
              if (navigation && typeof navigation === "object") {
                navigation.prevEl = prevRef.current;
                navigation.nextEl = nextRef.current;
              }
              swiper.navigation.init();
              swiper.navigation.update();
            }
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {stepsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card className="rounded-xl overflow-hidden bg-gray-50 h-[300px]">
                <CardHeader className="pl-0">
                  <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
                    <div className="relative w-[100px] h-[100px]">
                      <Image
                        src={item.image}
                        alt="Service icon"
                        fill
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter">
                    <h1 className="mb-2 font-poppins text-gray-700 font-semibold text-lg">
                      Step {index + 1}
                    </h1>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex justify-center mt-6 gap-4">
          <button
            ref={prevRef}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-customAccent text-white shadow-md hover:bg-complementary transition-all duration-300 ease-in-out focus:outline-none"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            ref={nextRef}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-customAccent text-white shadow-md hover:bg-complementary transition-all duration-300 ease-in-out focus:outline-none"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default StepsCards;
