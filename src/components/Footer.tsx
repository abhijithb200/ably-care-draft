"use client";

import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Music } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Footer = () => {
  const mainLinks = [
    { title: "About Us", href: "/about" },
    { title: "Careers", href: "/join-team" },
    { title: "Blogs", href: "/blogs" },
  ];

  const servicesLinks = [
    { title: "Home & Community Care", href: "/community" },
    { title: "Accommodation", href: "/accommodation" },
    { title: "Support Coordination", href: "/support-coordination" },
  ];

  const agedCareLinks = [
    { title: "Plan Management", href: "/plan-management" },
    { title: "Psycho-Social Recovery", href: "/psycho-social-recovery" },
    { title: "NDIS Pricing Arrangements", href: "/ndis-pricing-arrangements" },
    { title: "NDIS Funding Eligibility", href: "/ndis-funding-eligibility" },
  ];

  const forLinks = [
    { title: "EAP", href: "/eap" },
    { title: "For Employers", href: "/for-employers" },
    { title: "For Individuals", href: "/for-individuals" },
    { title: "For Therapists", href: "/for-therapists" },
  ];

  const socialLinks = [
    { icon: <Facebook size={24} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={24} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn" },
  ];

  return (
    <footer className="w-full bg-customAccent text-white font-inter mt-56 relative">
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="relative w-[200px] h-[200px] mb-2">
            <Image
              src="/images/main-logo-white.png"
              alt="Ably Care Logo"
              fill
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="space-y-2">
            {mainLinks.map((link) => (
              <div key={link.title}>
                <Link
                  href={link.href}
                  className="hover:underline block py-1 font-poppins"
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            <h1 className="font-poppins text-lg font-semibold">Our Services</h1>
            {servicesLinks.map((link) => (
              <div key={link.title}>
                <Link
                  href={link.href}
                  className={`hover:underline block py-1 ${
                    link.title === "DISABILITY CARE"
                      ? "font-bold font-poppins"
                      : ""
                  }`}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          <div className="space-y-2">
            {agedCareLinks.map((link) => (
              <div key={link.title}>
                <Link
                  href={link.href}
                  className={`hover:underline block py-1 ${
                    link.title === "AGED CARE" ? "font-bold font-poppins" : ""
                  }`}
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-end gap-2 mb-8">
          {socialLinks.map((social) => (
            <Link
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 rounded-full flex items-center justify-center border-2 border-white hover:bg-complementary hover:text-white hover:border-complementary transition-colors"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <Separator className="bg-white/20 my-6" />

        <div className="mb-8">
          <p className="text-sm">
            In the spirit of reconciliation we acknowledge the Traditional
            Custodians of country throughout Australia and their connections to
            land, sea and community. We pay our respect to their Elders past and
            present and extend that respect to all Aboriginal and Torres Strait
            Islander peoples today.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm">
          <p>© Copyright Ably Care {new Date().getFullYear()}</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <Link href="#" className="hover:underline">
              Privacy policy
            </Link>
            <Link href="#" className="hover:underline">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
