"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import {
  CheckCircle,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
  Building,
  Facebook,
  Instagram,
  Linkedin,
  Music,
} from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ChalkTitle from "../ChalkTItle";
import Link from "next/link";

const socialLinks = [
  { icon: <Facebook size={24} />, href: "#", label: "Facebook" },
  { icon: <Instagram size={24} />, href: "#", label: "Instagram" },
  { icon: <Linkedin size={24} />, href: "#", label: "LinkedIn" },
];

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [fileAttachment, setFileAttachment] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileAttachment(files[0]);
    } else {
      setFileAttachment(null);
    }
  };

  const onSubmit = async (data: FormValues) => {
    setLoading(true);

    try {
      let fileBase64 = null;

      if (fileAttachment) {
        fileBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result as string);
          reader.onerror = reject;
          reader.readAsDataURL(fileAttachment);
        });
      }

      const response = await fetch("/api/contact-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          file: fileBase64,
          fileName: fileAttachment?.name || "",
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        form.reset();
        setFileAttachment(null);
      } else {
        alert("Something went wrong while submitting. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert("Submission failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <main className="container mx-auto px-4 py-12" id="contact">
        <div className="grid md:grid-cols-2 gap-12 font-inter">
          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 font-poppins">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <div className="bg-customAccent/15 p-3 rounded-full mr-4">
                  <MapPin className="text-customAccent" />
                </div>
                <div className="text-gray-600">
                  <h3 className="font-semibold text-lg font-poppins text-gray-800">
                    Address
                  </h3>
                  <p>Ably Care</p>
                  <p>Nicholls ACT, Australia</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-customAccent/15 p-3 rounded-full mr-4">
                  <Mail className="text-customAccent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a
                    href="mailto:info@ablycare.com.au"
                    className="text-customAccent hover:text-complementary hover:underline"
                  >
                    info@ablycare.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-customAccent/15 p-3 rounded-full mr-4">
                  <Phone className="text-customAccent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                  <a
                    href="tel:0403469451"
                    className="text-customAccent hover:text-complementary hover:underline"
                  >
                    0403 469 451
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-customAccent/15 p-3 rounded-full mr-4">
                  <Building className="text-customAccent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 font-poppins">
                    ABN
                  </h3>
                  <p className="text-gray-600">68670001653</p>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4 font-poppins text-gray-800">
                  Business Hours
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium text-gray-600">
                    Monday to Friday:
                  </div>
                  <div className="text-gray-600">9:00 am – 5:00 pm</div>
                  <div className="font-medium text-gray-600">
                    Saturday & Sunday:
                  </div>
                  <div className="text-gray-600">Closed</div>
                </div>
              </div>

              <div className="flex flex-wrap justify-start gap-2 mb-8">
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
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">
                Send Us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <Alert className="mb-6 bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertTitle>Success!</AlertTitle>
                  <AlertDescription>
                    Thank you for your message! We'll get back to you soon.
                  </AlertDescription>
                </Alert>
              ) : (
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Name <span className="text-red-600">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Email <span className="text-red-600">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="your.email@example.com"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone</FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="Your phone number"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Message <span className="text-red-600">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Your message"
                              rows={5}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormItem>
                      <FormLabel>File Attachment (optional)</FormLabel>
                      <FormControl>
                        <Input type="file" onChange={handleFileChange} />
                      </FormControl>
                    </FormItem>

                    <Button
                      type="submit"
                      className="w-full bg-customAccent hover:bg-complementary text-white"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
};

export default ContactFormSection;
