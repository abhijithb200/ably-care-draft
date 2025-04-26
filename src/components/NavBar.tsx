"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { aboutUsData, ourServicesData } from "@/data/serviceData";

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileMenuOpen]);

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className="w-full bg-white border-b border-gray-100 font-poppins fixed top-0 z-50">
      <div className="mx-auto px-4 w-full lg:max-w-7xl">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/nav-logo.png"
                alt="Ably Care Logo"
                width={170}
                height={100}
              />
            </Link>
          </div>
          <div className="hidden lg:block ml-10">
            <nav>
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href={"/ndis"}>
                      <NavigationMenuTrigger className="text-base">
                        NDIS
                      </NavigationMenuTrigger>
                    </Link>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                        {[
                          {
                            image: "/icons/ndis-pricing-elegibility.jpg.png",
                            title: "NDIS Pricing Arrangements",
                            description:
                              "Understanding NDIS Pricing arrangements, ensuring you",
                            link: "/ndis-pricing-arrangements",
                          },
                          {
                            image: "/icons/ndis-funding.png",
                            title: "NDIS Funding Eligibility",
                            description:
                              "Understanding NDIS Funding eligibility, ensuring you",
                            link: "/ndis-funding-eligibility",
                          },
                        ].map((item, index) => (
                          <ListItem href={item.link} key={index}>
                            <div className="w-full flex gap-2">
                              <div className="relative w-[50px] h-[50px]">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  sizes="100%"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="w-[60%]">
                                <h1 className="text-black text-lg">
                                  {item.title}
                                </h1>
                                <p className="text-sm">{item.description}</p>
                              </div>
                            </div>
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base">
                      Our Services
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[800px] lg:grid-cols-3">
                        {ourServicesData.map((item, index) => (
                          <ListItem href={item.link} key={index}>
                            <div className="w-full flex gap-2">
                              <div className="relative w-[50px] h-[50px]">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  sizes="100%"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="w-[60%]">
                                <h1 className="text-black text-lg">
                                  {item.title}
                                </h1>
                                <p className="text-sm">{item.description}</p>
                              </div>
                            </div>
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link
                      href="/referral"
                      legacyBehavior
                      passHref
                      className="text-base"
                    >
                      <NavigationMenuLink
                        className={`${navigationMenuTriggerStyle()}`}
                      >
                        <span className="text-base">Referral</span>
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base">
                      About Us
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                        {aboutUsData.map((item, index) => (
                          <ListItem href={item.link} key={index}>
                            <div className="w-full flex gap-2">
                              <div className="relative w-[50px] h-[50px]">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  sizes="100%"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="w-[60%]">
                                <h1 className="text-black text-lg">
                                  {item.title}
                                </h1>
                                <p className="text-sm">{item.description}</p>
                              </div>
                            </div>
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-base">
                      Career
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-2 p-4 md:w-[400px] lg:w-[600px] lg:grid-cols-2">
                        {[
                          {
                            image: "/icons/career-1.png",
                            title: "Become a support worker",
                            description:
                              "Empower others to live their best life with your care and support.",
                            link: "/support-worker",
                          },
                          {
                            image: "/icons/career-2.png",
                            title: "Join our team",
                            description:
                              "Be part of a passionate team that drives meaningful change.",
                            link: "/join-us",
                          },
                        ].map((item, index) => (
                          <ListItem href={item.link} key={index}>
                            <div className="w-full flex gap-2">
                              <div className="relative w-[50px] h-[50px]">
                                <Image
                                  src={item.image}
                                  alt={item.title}
                                  fill
                                  sizes="100%"
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="w-[60%]">
                                <h1 className="text-black text-lg">
                                  {item.title}
                                </h1>
                                <p className="text-sm">{item.description}</p>
                              </div>
                            </div>
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>
          <div className="hidden lg:flex items-center justify-end gap-2">
            <a href="/contact">
              <Button className="bg-customAccent hover:bg-complementary rounded-xl transition-all duration-300 ease-in-out relative overflow-hidden group">
                <span className="relative z-10 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-complementary group-hover:via-white group-hover:to-complementary group-hover:animate-shine">
                  Contact Us
                </span>
              </Button>
            </a>
          </div>
          <div className="lg:hidden flex items-center">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black bg-opacity-25"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-end p-4">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X className="block h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="h-full overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <div>
              <div className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                <button
                  className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => (window.location.href = "/ndis")}
                >
                  <span>NDIS</span>
                </button>
                <span
                  className="ml-2 transition-transform duration-200"
                  style={{
                    transform:
                      activeDropdown === "ndis"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                  onClick={() => toggleDropdown("ndis")}
                >
                  <ChevronDown />
                </span>
              </div>
              {activeDropdown === "ndis" && (
                <>
                  {[
                    {
                      image: "/icons/ndis-pricing-elegibility.jpg.png",
                      title: "NDIS Pricing Arrangements",
                      description:
                        "Understanding NDIS Pricing arrangements, ensuring you",
                      link: "/ndis-pricing-arrangements",
                    },
                    {
                      image: "/icons/ndis-funding.png",
                      title: "NDIS Funding Eligibility",
                      description:
                        "Understanding NDIS Funding eligibility, ensuring you",
                      link: "/ndis-funding-eligibility",
                    },
                  ].map((item, index) => (
                    <div className="pl-4 pr-3 py-2 space-y-2" key={index}>
                      <Link
                        href={item.link}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <div className="w-full flex gap-2">
                          <div className="relative w-[30px] h-[30px]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="100%"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h1 className="text-black text-sm">{item.title}</h1>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
            <div>
              <button
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => toggleDropdown("services")}
              >
                <span>Our Services</span>
                <span
                  className="ml-2 transition-transform duration-200"
                  style={{
                    transform:
                      activeDropdown === "services"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                >
                  <ChevronDown />
                </span>
              </button>
              {activeDropdown === "services" && (
                <>
                  {ourServicesData.map((item, index) => (
                    <div className="pl-4 pr-3 py-2 space-y-2" key={index}>
                      <Link
                        href={item.link}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <div className="w-full flex gap-2">
                          <div className="relative w-[30px] h-[30px]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="100%"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h1 className="text-black text-sm">{item.title}</h1>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
            <Link
              href="/referral"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Referral
            </Link>
            <div>
              <button
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => toggleDropdown("about")}
              >
                <span>About Us</span>
                <span
                  className="ml-2 transition-transform duration-200"
                  style={{
                    transform:
                      activeDropdown === "about"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                >
                  <ChevronDown />
                </span>
              </button>
              {activeDropdown === "about" && (
                <>
                  {aboutUsData.map((item, index) => (
                    <div className="pl-4 pr-3 py-2 space-y-2" key={index}>
                      <Link
                        href={item.link}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <div className="w-full flex gap-2">
                          <div className="relative w-[30px] h-[30px]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="100%"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h1 className="text-black text-sm">{item.title}</h1>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
            <Link
              href="/blogs"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              Blog
            </Link>
            <div>
              <button
                className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                onClick={() => toggleDropdown("career")}
              >
                <span>Career</span>
                <span
                  className="ml-2 transition-transform duration-200"
                  style={{
                    transform:
                      activeDropdown === "career"
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                  }}
                >
                  <ChevronDown />
                </span>
              </button>
              {activeDropdown === "career" && (
                <>
                  {[
                    {
                      image: "/icons/career-1.png",
                      title: "Become a support worker",
                      description:
                        "Empower others to live their best life with your care and support.",
                      link: "/support-worker",
                    },
                    {
                      image: "/icons/career-2.png",
                      title: "Join our team",
                      description:
                        "Be part of a passionate team that drives meaningful change.",
                      link: "/join-us",
                    },
                  ].map((item, index) => (
                    <div className="pl-4 pr-3 py-2 space-y-2" key={index}>
                      <Link
                        href={item.link}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <div className="w-full flex gap-2">
                          <div className="relative w-[30px] h-[30px]">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              sizes="100%"
                              className="w-full h-full object-contain"
                            />
                          </div>
                          <div>
                            <h1 className="text-black text-sm">{item.title}</h1>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
          <div className="px-5 py-4 mt-4 flex justify-center gap-2">
            <a href="/contact">
              <Button className="text-white bg-customAccent hover:bg-customAccent/80 rounded-xl">
                Contact Us
              </Button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
