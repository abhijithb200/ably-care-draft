import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Ably Care",
  description: `At Ably Care, we understand that true care goes beyond assistance. It's about 
    building genuine connections and empowering you to live your life to the fullest. We 
    provide personalized home and disability support, crafted with empathy and 
    expertise. Discover a partner who truly cares. `,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Toaster/>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
