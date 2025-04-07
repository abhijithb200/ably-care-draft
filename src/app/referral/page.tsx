import Hero from "@/components/referral/Hero"
import RefferalFormSection from "@/components/referral/RefferalFormSection"

export const metadata = {
  title: "Referral | Ably Care",
}

const Referral = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <Hero/>
      </main>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-10">
        <RefferalFormSection/>
      </main>
    </>
  )
}

export default Referral