"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon } from "lucide-react";
import BlogsHero from '@/components/blogs/BlogsHero';

interface Blog {
  id: number;
  title: string;
  date: string;
  summary: string;
  content: string;
  image?: string;
  tags?: string[];
}

export default function BlogPage(): JSX.Element {
  const [openBlogId, setOpenBlogId] = useState<number | null>(null);
  
  const blogs: Blog[] = [
    {
      id: 1,
      title: "Care Notes: A Key to Quality Care",
      date: "12 Apr 2025",
      summary: "Progress notes are essential in NDIS service delivery, serving as a critical tool for documenting care, ensuring compliance, and enhancing participant outcomes.",
      content: `<h2>Understanding Progress Notes</h2>
      <p>Progress notes are short, structured records that support workers and allied health professionals complete after interacting with a participant. They describe what happened during a shift, session, or service, how the participant responded, and note any concerns or changes.</p>
      <p>They help tell the story of a participant's support journey over time — capturing daily progress, shifts in wellbeing, risks, achievements, or challenges.</p>
      
      <h2>Importance in NDIS Compliance</h2>
      <p>Under NDIS rules and the NDIS Quality and Safeguards Commission standards, providers must keep clear, timely, and accurate records. Progress notes form part of this documentation trail. They can:</p>
      <ul>
        <li>Confirm that supports are being delivered as outlined in a participant's plan</li>
        <li>Provide a record for audits, reviews, or reassessments</li>
        <li>Protect both participants and providers in case of complaints or incidents</li>
        <li>Help with continuity of care when new workers come on board</li>
      </ul>
      
      <h2>Enhancing Participant Outcomes</h2>
      <p>Well-kept notes are not just about compliance — they also improve support. Documenting changes in behaviour, mood, health, or capacity helps support teams adjust care in real-time.</p>`,
      tags: ["NDIS", "Documentation", "Care Quality"]
    },
    {
      id: 2,
      title: "NDIS Eligibility Reassessments: 2025 Key Changes",
      date: "12 Apr 2025",
      summary: "NDIS eligibility reassessments in 2025 come with streamlined processes, updated timelines, and a renewed focus on functional needs—not just diagnoses.",
      content: `<h2>What Is an NDIS Reassessment?</h2>
      <p>An NDIS reassessment (previously known as a "plan review") is a scheduled check-in with the NDIA to determine if a participant's current supports are still appropriate, or if they need to be adjusted.</p>
      <p>Reassessments can result in:</p>
      <ul>
        <li>Continuation of the same funding and supports</li>
        <li>Changes to the plan based on current needs</li>
        <li>Transitions to longer-term or more tailored funding</li>
      </ul>
      
      <h2>What's New in 2025?</h2>
      <p>As of 2025, several key updates have been made to the reassessment process:</p>
      <ul>
        <li>Simplified evidence requirements – Less repetitive paperwork is now needed, especially for ongoing and stable conditions.</li>
        <li>Longer plan durations – Some participants may receive 3–5 year plans if their support needs are stable, reducing the burden of frequent reviews.</li>
        <li>Functional capacity focus – The NDIA is placing greater emphasis on a participant's functional ability and day-to-day impact, not just clinical diagnosis.</li>
      </ul>`,
      tags: ["NDIS", "Policy", "2025 Updates"]
    },
    {
      id: 3,
      title: "Applying for Your NDIS Worker Screening check",
      date: "12 Apr 2025",
      summary: "The NDIS Worker Screening Check (NDISWC) is essential for safeguarding participants by ensuring only suitable workers are engaged in NDIS-related roles.",
      content: `<h2>What is the NDIS Worker Screening Check?</h2>
      <p>The NDIS Worker Screening Check (NDISWC) is a national assessment for workers engaged in risk-assessed roles with NDIS participants. It determines whether a person poses an unacceptable risk to people with disability.</p>
      <p>The check is conducted by the relevant state or territory screening unit, in line with the NDIS Quality and Safeguards Commission's guidelines.</p>
      
      <h2>Who Needs to Apply?</h2>
      <p>You need an NDISWC if you are:</p>
      <ul>
        <li>Working in a risk-assessed role (e.g., providing direct support or supervision).</li>
        <li>Employed by a registered NDIS provider.</li>
        <li>A self-employed sole trader delivering NDIS services.</li>
        <li>A volunteer in a risk-assessed role.</li>
      </ul>`,
      tags: ["Worker Screening", "Compliance", "Employment"]
    },
    {
      id: 4,
      title: "The Art of Moving Mindfully",
      date: "12 Apr 2025",
      summary: "Mindfulness in Motion introduces a movement-based approach to emotional regulation and mental wellness for NDIS participants, blending physical activity with mindfulness.",
      content: `<h2>What is Mindfulness in Motion?</h2>
      <p>Mindfulness in Motion is a therapeutic strategy that blends physical movement with present-moment awareness. Instead of sitting still to meditate, people engage in gentle, intentional activities—like walking, stretching, or dancing—while focusing on breath, sensations, and emotions in real-time.</p>
      <p>This practice supports mental and emotional health, especially for people who find traditional mindfulness hard due to sensory sensitivities, restlessness, or attention challenges.</p>
      
      <h2>Why Movement-Based Mindfulness Works</h2>
      <p>Mindfulness and movement activate both the mind and body, making it easier to:</p>
      <ul>
        <li>Discharge stress through motion</li>
        <li>Improve body awareness and regulation</li>
        <li>Enhance focus and concentration</li>
        <li>Build emotional resilience</li>
      </ul>`,
      tags: ["Mindfulness", "Mental Health", "Therapeutic"]
    },
    {
      id: 5,
      title: "NDIS Cancellation Policy Made Simple: Here's What You Need to Know",
      date: "12 Apr 2025",
      summary: "Life can be unpredictable, and sometimes appointments need to be cancelled. But when it comes to NDIS services, it's important to understand the cancellation policy.",
      content: `<h2>What is the NDIS Cancellation Policy?</h2>
      <p>The NDIS Cancellation Policy helps both participants and service providers manage cancellations in a fair and consistent way. When a participant needs to cancel or reschedule a session, the policy outlines how cancellations are handled—especially when they happen at short notice.</p>
      <p>This ensures that providers can continue to offer high-quality services while protecting participants from unfair charges.</p>
      
      <h2>What Counts as Short Notice?</h2>
      <p>Under the NDIS guidelines, a cancellation is considered short notice if it's made less than 7 days before the scheduled session. This means that if you cancel or miss an appointment within 7 days, providers may charge for the session.</p>
      <p>However, there are some exceptions and flexibility for situations like emergencies, illness, or other genuine reasons. It's always worth discussing with your provider if something unexpected comes up.</p>`,
      tags: ["NDIS", "Policy", "Appointments"]
    },
    {
      id: 6,
      title: "What will happen to my NDIS plan once I turn 65?",
      date: "23 Jan 2025",
      summary: "Turning 65 is an important milestone for NDIS participants, but it doesn't mean the end of your NDIS support. Learn how your plan might change when you turn 65.",
      content: `<h2>What Happens When You Turn 65?</h2>
      <p>Turning 65 is often associated with transitioning into the aged care system, but when it comes to your NDIS plan, things might not change as drastically as you think. If you are an NDIS participant and you're approaching 65, the NDIS offers you the opportunity to continue your plan, but with some important considerations.</p>
      <p>After you turn 65, you still have access to the same services under the NDIS if you were already an eligible participant before your 65th birthday. However, if you weren't receiving NDIS support before turning 65, you will no longer be eligible for NDIS funding, and you may be referred to the aged care system for support.</p>
      
      <h2>NDIS and the Transition to Aged Care</h2>
      <p>While the NDIS is designed to provide support for people under 65 with permanent and significant disabilities, turning 65 doesn't mean you're immediately cut off from support. In fact, the NDIS allows you to continue receiving support after 65 if you already have a plan in place.</p>`,
      tags: ["NDIS", "Aged Care", "Transitions"]
    }
  ];

  return (
    <main className="mx-auto p-2 w-full lg:max-w-7xl mt-20">
      <BlogsHero />

      <div className="container mx-auto px-4 py-12 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Card key={blog.id} className="flex flex-col rounded-xl h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center text-sm text-gray-500 mb-2 font-inter">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {blog.date}
                </div>
                <CardTitle className="text-xl font-bold text-customAccent font-poppins">{blog.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow font-inter">
                <p className="text-gray-600">{blog.summary}</p>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <div className="flex flex-wrap gap-2 mb-4">
                  {blog.tags?.map((tag, index) => (
                    <Badge key={index} variant="outline" className="bg-customAccent/10 text-customAccent hover:bg-customAccent-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-customAccent hover:bg-complementary">Read More</Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center text-sm text-gray-500 mb-2 font-inter">
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {blog.date}
                      </div>
                      <DialogTitle className="text-2xl font-bold text-customAccent font-poppins">{blog.title}</DialogTitle>
                      <DialogDescription className="text-gray-600 mt-2 font-inter">{blog.summary}</DialogDescription>
                    </DialogHeader>
                    
                    <div className="mt-6">
                      <div 
                        className="prose max-w-none font-inter" 
                        dangerouslySetInnerHTML={{ __html: blog.content }} 
                      />
                    </div>
                    
                    <div className="mt-8 pt-4 border-t border-gray-200">
                      <div className="flex flex-wrap gap-2">
                        {blog.tags?.map((tag, index) => (
                          <Badge key={index} variant="outline" className="bg-blue-50 text-customAccent hover:bg-complementary font-inter">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}