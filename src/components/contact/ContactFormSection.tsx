'use client';

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { 
  Alert,
  AlertDescription,
  AlertTitle 
} from "@/components/ui/alert";
import { CheckCircle, AlertCircle, Phone, Mail, MapPin, Building } from 'lucide-react';
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ChalkTitle from '../ChalkTItle';

const formSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().optional(),
  message: z.string().min(1, { message: "Message is required" }),
  privacy: z.boolean().refine(val => val === true, {
    message: "You must agree to our privacy policy"
  })
});

type FormValues = z.infer<typeof formSchema>;

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [fileAttachment, setFileAttachment] = useState<File | null>(null);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    }
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setFileAttachment(files[0]);
    } else {
      setFileAttachment(null);
    }
  };

  const onSubmit = (data: FormValues) => {
    console.log({ ...data, attachment: fileAttachment });
    setSubmitted(true);
    form.reset();
    setFileAttachment(null);
  };

  return (
    <>
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12" id="contact">
        <div className="grid md:grid-cols-2 gap-12 font-inter">
          {/* Contact Information */}
          <Card className='rounded-2xl'>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800 font-poppins">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-start">
                <div className="bg-complementary/15 p-3 rounded-full mr-4">
                  <MapPin className="text-complementary" />
                </div>
                <div className='text-gray-600'>
                  <h3 className="font-semibold text-lg font-poppins text-gray-800">Address</h3>
                  <p>Ably Care</p>
                  <p>Nicholls ACT, Australia</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-complementary/15 p-3 rounded-full mr-4">
                  <Mail className="text-complementary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <a href="mailto:info@ablycare.com.au" className="text-complementary hover:text-customAccent hover:underline">
                    info@ablycare.com.au
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-complementary/15 p-3 rounded-full mr-4">
                  <Phone className="text-complementary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">Phone</h3>
                  <a href="tel:0403469451" className="text-complementary hover:text-customAccent hover:underline">
                    0403 469 451
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-complementary/15 p-3 rounded-full mr-4">
                  <Building className="text-complementary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-800 font-poppins">ABN</h3>
                  <p className='text-gray-600'>68670001653</p>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="font-semibold text-lg mb-4 font-poppins text-gray-800">Business Hours</h3>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium text-gray-600">Monday to Friday:</div>
                  <div className='text-gray-600'>9:00 am – 5:00 pm</div>
                  <div className="font-medium text-gray-600">Saturday & Sunday:</div>
                  <div className='text-gray-600'>Closed</div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Form */}
          <Card className='rounded-2xl'>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-800">Send Us a Message</CardTitle>
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
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name <span className="text-red-600">*</span></FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Your name"
                              {...field}
                            />
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
                          <FormLabel>Email <span className="text-red-600">*</span></FormLabel>
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
                          <FormLabel>Message <span className="text-red-600">*</span></FormLabel>
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
                        <Input
                          type="file"
                          onChange={handleFileChange}
                        />
                      </FormControl>
                    </FormItem>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-complementary hover:bg-customAccent text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </Form>
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* Map Integration */}
        <div className="mt-12">
            <div className='w-full flex items-center justify-center'>
                <ChalkTitle
                    title="Our Location"
                    className="my-10"
                    underlineColor="#B97021"
                />
            </div>
          <Card>
            <CardContent className="p-0">
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13138.597785185367!2d149.0917!3d-35.1896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164b74d49e36f5%3A0x500ea6ea76956b0!2sNicholls%20ACT%202913!5e0!3m2!1sen!2sau!4v1616998765432!5m2!1sen!2sau"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}

export default ContactFormSection;