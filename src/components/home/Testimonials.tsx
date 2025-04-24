"use client";

import { testimonialsData } from "@/data/testimonialsData"
import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation,Autoplay } from "swiper/modules";
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
import ChalkTitle from "../ChalkTItle";


const Testimonials = () => {
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
        <ChalkTitle title="Testimonials" className="mt-10" underlineColor="#B97021" />
      </div>
      <div className="mt-10 relative" id="refer">
        <Swiper
          modules={[Navigation,Autoplay]}
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
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {testimonialsData.map((item, index) => (
            <SwiperSlide key={item.id}>
              <Card className="rounded-xl overflow-hidden bg-gray-50 min-h-[200px]">
                <CardHeader className="pl-0">
                  <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
                    <h2 className="text-lg font-bold text-white font-poppins">{item.name}</h2>
                    <p className="text-sm text-white/40 text-inter">{item.position}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="font-inter">
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

export default Testimonials;
