"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { Checkbox } from "../ui/checkbox";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useToast } from "@/hooks/use-toast";

interface IdentitiesState {
  male: boolean;
  female: boolean;
  nonBinary: boolean;
  differentIdentity: boolean;
  aboriginal: boolean;
  torresStrait: boolean;
  aboriginalTorres: boolean;
  other: boolean;
}

interface ReferralReasonsState {
  ndisCoordination: boolean;
  socialWork: boolean;
  both: boolean;
}

interface ParticipantFormState {
  firstName: string;
  lastName: string;
  identities: IdentitiesState;
  email: string;
  phone: string;
  dateOfBirth: string;
  address: string;
  disability: string;
  referralReasons: ReferralReasonsState;
  additionalDetails: string;
  ndisNumber: string;
  planStartDate: string;
  planEndDate: string;
  fundingManagement: string;
  guardian: string;
  attachDocuments: string;
}

interface ReferrerFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  relationship: string;
  additionalInfo: string;
}

const ReferralFormSection = () => {

  const [ isAgreed, setIsAgreed ] = useState(false);

  const { toast } = useToast?.() || {
    toast: (props: {
      title?: string;
      description: string;
      duration?: number;
      className?: string;
    }) => alert(props.description),
  };

  const [participantForm, setParticipantForm] = useState<ParticipantFormState>({
    firstName: "",
    lastName: "",
    identities: {
      male: false,
      female: false,
      nonBinary: false,
      differentIdentity: false,
      aboriginal: false,
      torresStrait: false,
      aboriginalTorres: false,
      other: false,
    },
    email: "",
    phone: "",
    dateOfBirth: "",
    address: "",
    disability: "",
    referralReasons: {
      ndisCoordination: false,
      socialWork: false,
      both: false,
    },
    additionalDetails: "",
    ndisNumber: "",
    planStartDate: "",
    planEndDate: "",
    fundingManagement: "",
    guardian: "",
    attachDocuments: "",
  });

  const [referrerForm, setReferrerForm] = useState<ReferrerFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relationship: "",
    additionalInfo: "",
  });

  const handleParticipantChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setParticipantForm({
      ...participantForm,
      [id]: value,
    });
  };

  const handleReferrerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    const fieldName =
      id.replace("referrer", "").charAt(0).toLowerCase() +
      id.replace("referrer", "").slice(1);

    setReferrerForm({
      ...referrerForm,
      [fieldName]: value,
    });
  };

  const handleIdentityCheckbox = (id: keyof IdentitiesState) => {
    setParticipantForm({
      ...participantForm,
      identities: {
        ...participantForm.identities,
        [id]: !participantForm.identities[id],
      },
    });
  };

  const handleReferralReasonCheckbox = (id: keyof ReferralReasonsState) => {
    setParticipantForm({
      ...participantForm,
      referralReasons: {
        ...participantForm.referralReasons,
        [id]: !participantForm.referralReasons[id],
      },
    });
  };

  const handleRadioChange = (field: string, value: string) => {
    setParticipantForm({
      ...participantForm,
      [field]: value,
    });
  };

  const handleRelationshipChange = (value: string) => {
    setReferrerForm({
      ...referrerForm,
      relationship: value,
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      participant: participantForm,
      referrer: referrerForm,
      timestamp: new Date().toISOString(),
    };

    console.log("Form submission data:", formData);

    toast({
      title: "Referral Submitted",
      description: "Thank you! Your referral has been submitted successfully.",
      duration: 3000,
      className: "bg-green-500 text-white border-none",
    });
  };

  return (
    <>
      <div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        id="refer"
      >
        <Card className="rounded-xl overflow-hidden bg-gray-50">
          <CardHeader className="pl-0">
            <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
              <div className="relative w-[100px] h-[100px]">
                <Image
                  src={"/icons/fill-form-icon.png"}
                  alt="Service icon"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-white font-poppins">Step 1</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="font-inter">
              <h1 className="mb-2 font-poppins text-gray-700 font-semibold text-lg">
                Fill out the form
              </h1>
              Complete the referral form with your details and the person you're
              referring to our services.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="rounded-xl overflow-hidden bg-gray-50">
          <CardHeader className="pl-0">
            <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
              <div className="relative w-[100px] h-[100px]">
                <Image
                  src={"/icons/reachout-icon.png"}
                  alt="Service icon"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-white font-poppins">Step 2</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="font-inter">
              <h1 className="mb-2 font-poppins text-gray-700 font-semibold text-lg">
                We Reach Out
              </h1>
              Our team will contact them to understand their specific needs and
              provide personalized support.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="rounded-xl overflow-hidden bg-gray-50">
          <CardHeader className="pl-0">
            <div className="relative bg-customAccent rounded-xl rounded-l-none p-4 flex flex-col items-start justify-center">
              <div className="relative w-[100px] h-[100px]">
                <Image
                  src={"/icons/done.png"}
                  alt="Service icon"
                  fill
                  className="w-full h-full object-cover"
                />
              </div>
              <CardTitle className="text-white font-poppins">Step 3</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <CardDescription className="font-inter">
              <h1 className="mb-2 font-poppins text-gray-700 font-semibold text-lg">
                Create Positive Change
              </h1>
              Together, we create a positive impact on someone's life through
              exceptional care and support.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
      <section className="mx-auto p-2 w-full md:max-w-4xl mt-12">
        <div className="flex flex-col gap-3 mb-12">
          <h1 className="text-lg font-poppins font-semibold text-gray-800">
            Please note that the following information/documents will be needed
            when completing this referral form:
          </h1>
          <ul className="list-disc pl-5 text-gray-600 font-inter text-sm">
            <li>NDIS Number</li>
            <li>NDIS Plan</li>
            <li>
              Knowing if what services are NDIA Managed, Plan-Managed or
              Self-Managed (outlined in your NDIS Plan)
            </li>
            <li>Plan Manager contact and billing details if Plan-Managed</li>
            <li>Support Coordinator contact details</li>
            <li>
              Knowing if your plan is on Proda (old NDIA computer system) or
              Pace (new NDIA computer system). You would have been advised of
              this in your most recent Plan Review if you have moved to the new
              computer system.
            </li>
          </ul>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 font-inter">
          {/* Person Requiring NDIS Support Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg border-b pb-2 font-poppins mb-8">
              Details of Person Requiring NDIS Support
            </h3>

            <div>
              <Label htmlFor="firstName" className="block text-sm mb-1">
                Participant Name *
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  id="firstName"
                  placeholder="First Name"
                  required
                  value={participantForm.firstName}
                  onChange={handleParticipantChange}
                />
                <Input
                  id="lastName"
                  placeholder="Last Name"
                  required
                  value={participantForm.lastName}
                  onChange={handleParticipantChange}
                />
              </div>
            </div>

            <div>
              <Label className="block text-sm mb-1">
                Participant Identifies as (Please tick any that is applicable) *
              </Label>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="male"
                    checked={participantForm.identities.male}
                    onCheckedChange={() => handleIdentityCheckbox("male")}
                  />
                  <Label htmlFor="male" className="text-sm font-normal">
                    Male
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="female"
                    checked={participantForm.identities.female}
                    onCheckedChange={() => handleIdentityCheckbox("female")}
                  />
                  <Label htmlFor="female" className="text-sm font-normal">
                    Female
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="nonBinary"
                    checked={participantForm.identities.nonBinary}
                    onCheckedChange={() => handleIdentityCheckbox("nonBinary")}
                  />
                  <Label htmlFor="non-binary" className="text-sm font-normal">
                    Non-binary/Gender Fluid
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="differentIdentity"
                    checked={participantForm.identities.differentIdentity}
                    onCheckedChange={() =>
                      handleIdentityCheckbox("differentIdentity")
                    }
                  />
                  <Label
                    htmlFor="different-identity"
                    className="text-sm font-normal"
                  >
                    Different Identity
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="aboriginal"
                    checked={participantForm.identities.aboriginal}
                    onCheckedChange={() => handleIdentityCheckbox("aboriginal")}
                  />
                  <Label htmlFor="aboriginal" className="text-sm font-normal">
                    Aboriginal
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="torresStrait"
                    checked={participantForm.identities.torresStrait}
                    onCheckedChange={() =>
                      handleIdentityCheckbox("torresStrait")
                    }
                  />
                  <Label
                    htmlFor="torres-strait"
                    className="text-sm font-normal"
                  >
                    Torres Strait Islander
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="aboriginalTorres"
                    checked={participantForm.identities.aboriginalTorres}
                    onCheckedChange={() =>
                      handleIdentityCheckbox("aboriginalTorres")
                    }
                  />
                  <Label
                    htmlFor="aboriginal-torres"
                    className="text-sm font-normal"
                  >
                    Aboriginal & Torres Strait Islander
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="other"
                    checked={participantForm.identities.other}
                    onCheckedChange={() => handleIdentityCheckbox("other")}
                  />
                  <Label
                    htmlFor="other-identity"
                    className="text-sm font-normal"
                  >
                    Other
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="block text-sm mb-1">
                Participant Email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="example@example.com"
                value={participantForm.email}
                onChange={handleParticipantChange}
              />
            </div>

            <div>
              <Label htmlFor="phone" className="block text-sm mb-1">
                Participant Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="0000000000"
                required
                value={participantForm.phone}
                onChange={handleParticipantChange}
              />
              <p className="text-xs text-gray-500 mt-1">
                Please enter a valid phone number
              </p>
            </div>

            <div>
              <Label htmlFor="dateOfBirth" className="block text-sm mb-1">
                Participant Date of Birth *
              </Label>
              <Input
                id="dateOfBirth"
                type="date"
                required
                value={participantForm.dateOfBirth}
                onChange={handleParticipantChange}
              />
            </div>

            <div>
              <Label htmlFor="address" className="block text-sm mb-1">
                Participant Address *
              </Label>
              <Input
                id="address"
                placeholder="Street Address, Suburb, State and Postcode"
                required
                value={participantForm.address}
                onChange={handleParticipantChange}
              />
            </div>

            <div>
              <Label htmlFor="disability" className="block text-sm mb-1">
                Disability/Diagnosis
              </Label>
              <Textarea
                id="disability"
                className="h-24"
                value={participantForm.disability}
                onChange={handleParticipantChange}
              />
            </div>

            <div>
              <Label className="block text-sm mb-1">
                Reason for Referral *
              </Label>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="ndisCoordination"
                    checked={participantForm.referralReasons.ndisCoordination}
                    onCheckedChange={() =>
                      handleReferralReasonCheckbox("ndisCoordination")
                    }
                  />
                  <Label
                    htmlFor="ndis-coordination"
                    className="text-sm font-normal"
                  >
                    NDIS Coordination Services
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="socialWork"
                    checked={participantForm.referralReasons.socialWork}
                    onCheckedChange={() =>
                      handleReferralReasonCheckbox("socialWork")
                    }
                  />
                  <Label htmlFor="social-work" className="text-sm font-normal">
                    Social Work Services
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="both"
                    checked={participantForm.referralReasons.both}
                    onCheckedChange={() => handleReferralReasonCheckbox("both")}
                  />
                  <Label
                    htmlFor="both-services"
                    className="text-sm font-normal"
                  >
                    Both
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <Label htmlFor="additionalDetails" className="block text-sm mb-1">
                Additional Details for Referral
              </Label>
              <Textarea
                id="additionalDetails"
                className="h-24"
                value={participantForm.additionalDetails}
                onChange={handleParticipantChange}
              />
            </div>

            <div>
              <Label htmlFor="ndisNumber" className="block text-sm mb-1">
                NDIS Number *
              </Label>
              <Input
                id="ndisNumber"
                placeholder="Eg. 43454354"
                required
                value={participantForm.ndisNumber}
                onChange={handleParticipantChange}
              />
              <p className="text-xs text-gray-500 mt-1">NDIS Plan Number</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="planStartDate" className="block text-sm mb-1">
                  NDIS Plan Start Date *
                </Label>
                <Input
                  id="planStartDate"
                  type="date"
                  required
                  value={participantForm.planStartDate}
                  onChange={handleParticipantChange}
                />
              </div>
              <div>
                <Label htmlFor="planEndDate" className="block text-sm mb-1">
                  NDIS Plan End Date *
                </Label>
                <Input
                  id="planEndDate"
                  type="date"
                  required
                  value={participantForm.planEndDate}
                  onChange={handleParticipantChange}
                />
              </div>
            </div>

            <div>
              <Label className="block text-sm mb-1">
                How is your NDIS funding managed? *
              </Label>
              <RadioGroup
                value={participantForm.fundingManagement}
                onValueChange={(value) =>
                  handleRadioChange("fundingManagement", value)
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="plan-managed" value="plan-managed" />
                  <Label htmlFor="plan-managed" className="text-sm font-normal">
                    Plan managed
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="self-managed" value="self-managed" />
                  <Label htmlFor="self-managed" className="text-sm font-normal">
                    Self managed
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="ndia-managed" value="ndia-managed" />
                  <Label htmlFor="ndia-managed" className="text-sm font-normal">
                    NDIA managed
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="guardian" className="block text-sm mb-1">
                Guardian or Plan Nominee (if applicable)
              </Label>
              <Input
                id="guardian"
                placeholder="Name / Email / Phone number"
                value={participantForm.guardian}
                onChange={handleParticipantChange}
              />
            </div>

            <div>
              <Label className="block text-sm mb-1">
                Do you want to attach any documents? (NDIS plan, support plan,
                behavioral plan etc.)
              </Label>
              <RadioGroup
                value={participantForm.attachDocuments}
                onValueChange={(value) =>
                  handleRadioChange("attachDocuments", value)
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="yes-docs" value="yes" />
                  <Label htmlFor="yes-docs" className="text-sm font-normal">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="no-docs" value="no" />
                  <Label htmlFor="no-docs" className="text-sm font-normal">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          {/* Person Making the Referral Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg border-b pb-2 font-poppins mb-7 mt-10">
              Person Making the Referral
            </h3>

            <div>
              <Label htmlFor="referrerFirstName" className="block text-sm mb-1">
                Referrer Name *
              </Label>
              <div className="grid grid-cols-2 gap-3">
                <Input
                  id="referrerFirstName"
                  placeholder="First Name"
                  required
                  value={referrerForm.firstName}
                  onChange={(e) =>
                    setReferrerForm({
                      ...referrerForm,
                      firstName: e.target.value,
                    })
                  }
                />
                <Input
                  id="referrerLastName"
                  placeholder="Last Name"
                  required
                  value={referrerForm.lastName}
                  onChange={(e) =>
                    setReferrerForm({
                      ...referrerForm,
                      lastName: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div>
              <Label htmlFor="referrerEmail" className="block text-sm mb-1">
                Referrer Email *
              </Label>
              <Input
                id="referrerEmail"
                type="email"
                placeholder="example@example.com"
                required
                value={referrerForm.email}
                onChange={(e) =>
                  setReferrerForm({ ...referrerForm, email: e.target.value })
                }
              />
            </div>

            <div>
              <Label htmlFor="referrerPhone" className="block text-sm mb-1">
                Referrer Phone Number *
              </Label>
              <Input
                id="referrerPhone"
                type="tel"
                placeholder="0000000000"
                required
                value={referrerForm.phone}
                onChange={(e) =>
                  setReferrerForm({ ...referrerForm, phone: e.target.value })
                }
              />
              <p className="text-xs text-gray-500 mt-1">
                Please enter a valid phone number
              </p>
            </div>

            <div>
              <Label htmlFor="relationship" className="block text-sm mb-1">
                Relationship with Participant
              </Label>
              <Select
                value={referrerForm.relationship}
                onValueChange={handleRelationshipChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Please Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="family">Family Member</SelectItem>
                  <SelectItem value="guardian">Guardian</SelectItem>
                  <SelectItem value="friend">Friend</SelectItem>
                  <SelectItem value="healthcare">
                    Healthcare Professional
                  </SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="additionalInfo" className="block text-sm mb-1">
                Any Additional Information (i.e., Security/safety concerns,
                attendees for assessment)
              </Label>
              <Textarea
                id="additionalInfo"
                className="h-24"
                value={referrerForm.additionalInfo}
                onChange={(e) =>
                  setReferrerForm({
                    ...referrerForm,
                    additionalInfo: e.target.value,
                  })
                }
              />
            </div>
          </div>

          <div className="flex flex-col gap-3 mb-12">
            <h1 className="text-lg font-poppins font-semibold text-gray-800">
              Disclaimer
            </h1>
            <p className="text-sm text-gray-600 font-inter">
              I confirm that I have obtained the participant's consent to submit
              this referral form to Ably Care for processing. I also confirm
              that the information provided is accurate and complete to the best
              of my knowledge.
            </p>
            <div className="items-top flex space-x-2">
              <Checkbox id="disclaimer" checked={isAgreed} onCheckedChange={() => setIsAgreed(!isAgreed)} />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="disclaimer"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the above statement.
                </label>
              </div>
            </div>
          </div>

          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              className="bg-customAccent hover:bg-complementary text-white font-poppins"
              disabled={!isAgreed}
            >
              Submit
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ReferralFormSection;
