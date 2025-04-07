import ContactFormSection from "@/components/contact/ContactFormSection"
import Hero from "@/components/contact/Hero"


export const metadata = {
  title: "Contact | Ably Care",
}

const Contact = () => {
  return (
    <>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
        <Hero/>
      </main>
      <main className="mx-auto p-2 w-full lg:max-w-7xl mt-12">
        <ContactFormSection/>
      </main>
    </>
  )
}

export default Contact