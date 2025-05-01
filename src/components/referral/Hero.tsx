import Image from "next/image"
import { Button } from "../ui/button"


const Hero = () => {
  return (
    <>
        <div className="w-full h-60 lg:h-96 xl:h-[450px] flex lg:rounded-2xl overflow-hidden">
            <div className="flex lg:p-4  flex-col justify-center items-center gap-2 lg:justify-center lg:items-start lg:w-[50%]">
                <h1 className="font-poppins text-4xl text-center font-semibold lg:text-start lg:text-4xl xl:text-5xl">Make a Difference <br className="hidden md:block"/>Through Referrals</h1>
                <p className="font-inter text-xs text-center text-gray-600 w-[85%] md:w-[70%] lg:w-[500px] lg:text-start xl:text-sm">
                    At Ably Care, we believe in the power of community and the impact of personal recommendations. If you know someone who could benefit from our dedicated care services, refer them to us today!
                </p>
                <a href="#refer">
                    <Button variant={"default"} className="mt-5 bg-customAccent hover:bg-complementary text-white">
                        Refer Now
                    </Button>
                </a>
            </div>
            <div className="hidden lg:flex w-[50%] h-full relative">
                <Image 
                    src="/images/char-draft01.png"
                    alt="Ably Care Persona"
                    width={250}
                    height={250}
                    className="absolute bottom-0 left-0 z-[5]"
                />
                <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-r from-white to-transparent z-[3]"></div>
                <div className="relative w-full h-full z-[1]">
                    <Image
                        src="/images/referral-hero.jpg"
                        alt="Ably Care Hero Image"
                        fill
                        sizes="100%"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero