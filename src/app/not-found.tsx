import { Button } from "@/components/ui/button"


const GlobalNotFound = () => {
  return (
    <>
      <div className="w-full h-60 lg:h-96 xl:h-[450px] flex lg:rounded-2xl overflow-hidden mt-32 p-2">
        <div className="w-full flex lg:p-4  flex-col justify-center items-center gap-2">
          <h1 className="font-poppins font-extrabold text-customAccent text-5xl md:text-8xl">404</h1>
          <h1 className="font-poppins text-2xl text-center font-semibold">
            Oops! Looks like you are lost.
          </h1>
          <p className="font-poppins text-center text-xs text-gray-600">
            The page you are looking for does not exist. <br className="hidden md:block" /> Please check the URL or return to the home page.
          </p>
          <a href="/">
            <Button
              variant={"default"}
              className="mt-5 bg-customAccent hover:bg-complementary text-white"
            >
              Home
            </Button>
          </a>
        </div>
      </div>
    </>
  )
}

export default GlobalNotFound