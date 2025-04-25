"use client";

import { testimonialsData } from "@/data/testimonialsData";
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import ChalkTitle from "../ChalkTItle";
import { supportServices } from "@/data/accommadationsSupport";

const NdisJourneyCards = () => {
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
      <div className="mt-10 relative" id="refer">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          allowTouchMove={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          loop={true}
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
        >
          {supportServices.map((item, index) => (
            <SwiperSlide key={index}>
              <Card
                className="rounded-xl overflow-hidden bg-gray-50"
                key={index}
              >
                <CardHeader className="pl-0">
                  <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
                    <CardTitle className="text-white font-poppins">
                      {index + 1} .
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter">
                    <h1 className="mb-2 font-poppins text-gray-700 font-semibold text-lg">
                      {item.title}
                    </h1>
                    <p className="text-gray-700 text-sm">{item.description}</p>
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

export default NdisJourneyCards;
