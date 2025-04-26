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
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

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
        <ChalkTitle
          title="Testimonials"
          className="mt-10"
          underlineColor="#f8ab39"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-3 w-full mt-10">
        <div className="w-full flex flex-col justify-center items-start md:items-center gap-4">
          <div className="flex flex-col gap-2 items-center justify-center">
            <h1 className="font-extrabold text-gray-800 font-poppins text-4xl">From our Clients</h1>
            <p className="text-gray-500 text-base font-medium text-inter md:w-1/2">
              Hear straight from our clients about their experience with our
              services.
            </p>
            <div className="flex md:justify-center gap-4">
              <button
                ref={prevRef}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent text-customAccent hover:bg-complementary/10 transition-all duration-300 ease-in-out focus-visible:outline-none focus:outline-none"
              >
                <ChevronLeft className="w-7 h-7" />
              </button>
              <button
                ref={nextRef}
                className="flex items-center justify-center w-12 h-12 rounded-full bg-transparent text-customAccent hover:bg-complementary/10 transition-all duration-300 ease-in-out focus-visible:outline-none focus:outline-none"
              >
                <ChevronRight className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>

        <div className="relative" id="refer">
          <Swiper
            className="min-w-[250px] max-w-[700px]"
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
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.id}>
                <div className={`min-h-[200px] relative flex flex-col gap-5 items-start justify-center p-4 md:p-16 md:rounded-2xl rounded-xl h-full ${ item.id % 2 === 0 ? "bg-customAccent/10" : "bg-complementary/10"}`}>
                  <Quote className="absolute top-0 right-0 w-[120px] h-[120px] text-black/5"/>
                  <div className="relative flex flex-col items-start justify-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 font-poppins">
                      {item.name}
                    </h2>
                  </div>
                  <div className="relative">
                    <p className="font-inter text-sm md:text-lg text-gray-600">{item.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
