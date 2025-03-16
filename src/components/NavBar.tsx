'use client'

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
      <header className="w-full bg-white border-b border-gray-100 font-poppins">
        <div className="mx-auto px-4 w-full lg:max-w-7xl">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/nav-logo.png"
                  alt="Ably Care Logo"
                  width={100}
                  height={100}/>
              </Link>
            </div>
            <div className="hidden lg:block ml-10">
              <nav>
                <NavigationMenu>
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <Link href={"/"}>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          NDIS
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Our Services
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                          <ListItem href="/docs" title="Item Title">
                            item
                          </ListItem>
                          <ListItem
                            href="/docs/installation"
                            title="Item Title"
                          >
                            item
                          </ListItem>
                          <ListItem
                            href="/docs/primitives/typography"
                            title="Item Title"
                          >
                            item
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Referral
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          About Us
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Blog
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Career
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </nav>
            </div>
            <div className="hidden lg:flex items-center justify-end gap-2">
              <a href="/">
                <Button variant={"outline"} className="rounded-xl">
                    Login
                </Button>
              </a>
              <a href="/">
                <Button className="bg-customAccent hover:bg-customAccent/80 rounded-xl">
                    Contact Us
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
                <Link href={"/"}>
                  <button className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                    <span>NDIS</span>
                  </button>
                </Link>
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
                    <div className="pl-4 pr-3 py-2 space-y-2">
                      <Link
                        href={"/"}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <div className="font-medium">Title</div>
                        <div className="text-xs text-gray-500">Description</div>
                      </Link>
                    </div>
                    <div className="pl-4 pr-3 py-2 space-y-2">
                      <Link
                        href={"/"}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                      >
                        <div className="font-medium">Title</div>
                        <div className="text-xs text-gray-500">Description</div>
                      </Link>
                    </div>
                  </>
                )}
              </div>
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Refarral
              </Link>
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                About Us
              </Link>
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Blog
              </Link>
              <Link
                href="/"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              >
                Career
              </Link>
            </div>
            <div className="px-5 py-4 mt-4 flex justify-center gap-2">
              <Button variant={"outline"} className="rounded-xl">Login</Button>
              <a
                href="/login">
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