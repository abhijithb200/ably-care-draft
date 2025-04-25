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

interface OriginState {
  firstNationPeople: boolean;
  culturallyLinguistically: boolean;
  naOrigin: boolean;
}

interface ReferralReasonsState {
  ndisCoordination: boolean;
  socialWork: boolean;
  both: boolean;
}

interface ParticipantFormState {
  firstName: string;
  lastName: string;
  gender: string;
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
  interpreterRequired: string;
  communicationPreferences: string;
  accessRequirements: string;
  courtOrders: string;
  physicalAggression: string;
  incarceration: string;
  drugUse: string;
  homeVisitRisks: string;
  triggerInformation: string;
  origin: OriginState;
}

interface InvoiceOptionsState {
  ndia: boolean;
  selfManaged: boolean;
  planManaged: boolean;
}

interface ReferrerFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  relationship: string;
  address: string;
  additionalInfo: string;
}

interface InvoiceDetailsState {
  organisation: string;
  fullName: string;
  organisationEmail: string;
  organisationPhone: string;
  servicesManagedNdia: string;
}

const ReferralFormSection = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const [furtherInfo, setFurtherInfo] = useState("");
  const [ loading, setLoading ] = useState(false);

  const { toast } = useToast?.() || {
    toast: (props: {
      title?: string;
      description: string;
      duration?: number;
      className?: string;
    }) => alert(props.description),
  };

  const [invoiceField, setInvoiceField] = useState({
    ndia: false,
    selfManaged: false,
    planManaged: false,
    area: false,
  });

  const [isNdis, setIsNdis] = useState<boolean>(false);

  const [invoiceDetails, setInvoiceDetails] = useState<InvoiceDetailsState>({
    organisation: "",
    fullName: "",
    organisationEmail: "",
    organisationPhone: "",
    servicesManagedNdia: "",
  });

  const [participantForm, setParticipantForm] = useState<ParticipantFormState>({
    firstName: "",
    lastName: "",
    gender: "",
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
    interpreterRequired: "",
    communicationPreferences: "",
    accessRequirements: "",
    courtOrders: "",
    physicalAggression: "",
    incarceration: "",
    drugUse: "",
    homeVisitRisks: "",
    triggerInformation: "",
    origin: {
      firstNationPeople: false,
      culturallyLinguistically: false,
      naOrigin: false,
    },
  });

  const [invoiceOptions, setInvoiceOptions] = useState<InvoiceOptionsState>({
    ndia: false,
    selfManaged: false,
    planManaged: false,
  });

  const [referrerForm, setReferrerForm] = useState<ReferrerFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relationship: "",
    address: "",
    additionalInfo: "",
  });

  const handleInvoiceOptionCheckbox = (id: keyof InvoiceOptionsState) => {
    setInvoiceOptions({
      ...invoiceOptions,
      [id]: !invoiceOptions[id],
    });
  };

  const handleParticipantChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setParticipantForm({
      ...participantForm,
      [id]: value,
    });
  };

  const handleParticipantGenderChange = (value: string) => {
    setParticipantForm({
      ...participantForm,
      gender: value,
    });
  };

  const handleReferrerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;

    if (id === "referrerFirstName") {
      setReferrerForm({
        ...referrerForm,
        firstName: value,
      });
    } else if (id === "referrerLastName") {
      setReferrerForm({
        ...referrerForm,
        lastName: value,
      });
    } else if (id === "referrerEmail") {
      setReferrerForm({
        ...referrerForm,
        email: value,
      });
    } else if (id === "referrerPhone") {
      setReferrerForm({
        ...referrerForm,
        phone: value,
      });
    } else if (id === "referrerAddress") {
      setReferrerForm({
        ...referrerForm,
        address: value,
      });
    } else if (id === "additionalInfo") {
      setReferrerForm({
        ...referrerForm,
        additionalInfo: value,
      });
    }
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

  const handleOriginCheckbox = (id: keyof OriginState) => {
    setParticipantForm({
      ...participantForm,
      origin: {
        ...participantForm.origin,
        [id]: !participantForm.origin[id],
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

  const handleInvoiceFieldChange = (option?: string) => {
    if (option) {
      setInvoiceField((prev) => {
        const updated = {
          ...prev,
          [option as keyof typeof prev]: !prev[option as keyof typeof prev],
        };

        const anyChecked =
          updated.ndia || updated.selfManaged || updated.planManaged;

        return {
          ...updated,
          area: anyChecked,
        };
      });

      if (option === "ndia") {
        setIsNdis(!isNdis);
      }
    }
  };

  const handleInvoiceDetailsChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = e.target;

    if (id === "invoiceFieldOrganisation") {
      setInvoiceDetails({
        ...invoiceDetails,
        organisation: value,
      });
    } else if (id === "invoiceFieldFullName") {
      setInvoiceDetails({
        ...invoiceDetails,
        fullName: value,
      });
    } else if (id === "invoiceFieldOrganisationEmail") {
      setInvoiceDetails({
        ...invoiceDetails,
        organisationEmail: value,
      });
    } else if (id === "invoiceFieldOrganisationPhone") {
      setInvoiceDetails({
        ...invoiceDetails,
        organisationPhone: value,
      });
    } else if (id === "servicesManagedNdia") {
      setInvoiceDetails({
        ...invoiceDetails,
        servicesManagedNdia: value,
      });
    }
  };

  const handleServicesManagedNdiaChange = (value: string) => {
    setInvoiceDetails({
      ...invoiceDetails,
      servicesManagedNdia: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      participant: participantForm,
      referrer: referrerForm,
      invoiceOptions: invoiceOptions,
      invoiceDetails: invoiceDetails,
      furtherInfo: furtherInfo,
      timestamp: new Date().toISOString(),
    };

    try {
      const response = await fetch("/api/refferal-submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Referral Submitted",
          description:
            "Thank you! Your referral has been submitted successfully.",
          duration: 3000,
          className: "bg-green-500 text-white border-none",
        });
      } else {
        toast({
          title: "Submission Failed",
          description:
            data.message ||
            "There was an error submitting your referral. Please try again.",
          duration: 5000,
          className: "bg-red-500 text-white border-none",
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Error",
        description:
          "There was an error connecting to our server. Please try again later.",
        duration: 5000,
        className: "bg-red-500 text-white border-none",
      });
    }finally{
      setLoading(false);
    }
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
          <div className="flex flex-col gap-6 mb-12 w-full">
            <h3 className="font-medium text-lg font-poppins">
              <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                Participant Details
              </span>
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

            <div className="flex flex-col md:flex-row gap-3 w-full">
              <div className="w-full">
                <Label className="block text-sm mb-1">Gender *</Label>
                <Select
                  value={participantForm.gender}
                  onValueChange={handleParticipantGenderChange}
                  required
                >
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Please select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Male</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="different-identity">
                      Different Identity
                    </SelectItem>
                    <SelectItem value="non-binary">
                      Non-binary/Gender Fluid
                    </SelectItem>
                    <SelectItem value="aboriginal">Aboriginal</SelectItem>
                    <SelectItem value="torres-strait">
                      Torres Strait Islander
                    </SelectItem>
                    <SelectItem value="aboriginal-torres">
                      Aboriginal & Torres Strait Islander
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full">
                <Label htmlFor="email" className="block text-sm mb-1">
                  Participant Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@example.com"
                  value={participantForm.email}
                  onChange={handleParticipantChange}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full">
              <div className="w-full">
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
              </div>

              <div className="w-full">
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
                className="h-24 rounded-xl"
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
                    htmlFor="ndisCoordination"
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
                  <Label htmlFor="socialWork" className="text-sm font-normal">
                    Social Work Services
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="both"
                    checked={participantForm.referralReasons.both}
                    onCheckedChange={() => handleReferralReasonCheckbox("both")}
                  />
                  <Label htmlFor="both" className="text-sm font-normal">
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
                className="h-24 rounded-xl"
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
                placeholder="NDIS Plan Number"
                required
                value={participantForm.ndisNumber}
                onChange={handleParticipantChange}
              />
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
              <Label className="block text-sm mb-1">Origin</Label>
              <div className="flex flex-col md:flex-row gap-3">
                <div>
                  <Checkbox
                    id="firstNationPeople"
                    className="mr-2"
                    checked={participantForm.origin.firstNationPeople}
                    onCheckedChange={() =>
                      handleOriginCheckbox("firstNationPeople")
                    }
                  />
                  <Label
                    htmlFor="firstNationPeople"
                    className="text-sm font-normal"
                  >
                    First Nations People
                  </Label>
                </div>
                <div>
                  <Checkbox
                    id="culturallyLinguistically"
                    className="mr-2"
                    checked={participantForm.origin.culturallyLinguistically}
                    onCheckedChange={() =>
                      handleOriginCheckbox("culturallyLinguistically")
                    }
                  />
                  <Label
                    htmlFor="culturallyLinguistically"
                    className="text-sm font-normal"
                  >
                    Culturally and linguistically diverse
                  </Label>
                </div>
                <div>
                  <Checkbox
                    id="naOrigin"
                    className="mr-2"
                    checked={participantForm.origin.naOrigin}
                    onCheckedChange={() => handleOriginCheckbox("naOrigin")}
                  />
                  <Label htmlFor="naOrigin" className="text-sm font-normal">
                    N/A
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <Label className="block text-sm mb-1">
                Interpreter required *
              </Label>
              <RadioGroup
                className="flex flex-col md:flex-row gap-2"
                value={participantForm.interpreterRequired}
                onValueChange={(value) =>
                  handleRadioChange("interpreterRequired", value)
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="yes-interpreter" value="yes" />
                  <Label
                    htmlFor="yes-interpreter"
                    className="text-sm font-normal"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="no-interpreter" value="no" />
                  <Label
                    htmlFor="no-interpreter"
                    className="text-sm font-normal"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="block text-sm mb-1">
                Communication preferences or requirements *
              </Label>
              <RadioGroup
                className="flex flex-col md:flex-row gap-2"
                value={participantForm.communicationPreferences}
                onValueChange={(value) =>
                  handleRadioChange("communicationPreferences", value)
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="yes-comm" value="yes" />
                  <Label htmlFor="yes-comm" className="text-sm font-normal">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="no-comm" value="no" />
                  <Label htmlFor="no-comm" className="text-sm font-normal">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="block text-sm mb-1">
                Access requirements *
              </Label>
              <RadioGroup
                className="flex flex-col md:flex-row gap-2"
                value={participantForm.accessRequirements}
                onValueChange={(value) =>
                  handleRadioChange("accessRequirements", value)
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="yes-access" value="yes" />
                  <Label htmlFor="yes-access" className="text-sm font-normal">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="no-access" value="no" />
                  <Label htmlFor="no-access" className="text-sm font-normal">
                    No
                  </Label>
                </div>
              </RadioGroup>
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
                className="flex flex-col md:flex-row gap-2"
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
          </div>

          {/* Person Making the Referral Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg font-poppins">
              <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                Referrer Information
              </span>
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
                  onChange={handleReferrerChange}
                />
                <Input
                  id="referrerLastName"
                  placeholder="Last Name"
                  required
                  value={referrerForm.lastName}
                  onChange={handleReferrerChange}
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-3 w-full">
              <div className="w-full">
                <Label htmlFor="referrerEmail" className="block text-sm mb-1">
                  Referrer Email *
                </Label>
                <Input
                  id="referrerEmail"
                  type="email"
                  placeholder="example@example.com"
                  required
                  value={referrerForm.email}
                  onChange={handleReferrerChange}
                />
              </div>

              <div className="w-full">
                <Label htmlFor="referrerPhone" className="block text-sm mb-1">
                  Referrer Phone Number *
                </Label>
                <Input
                  id="referrerPhone"
                  type="tel"
                  placeholder="0000000000"
                  required
                  value={referrerForm.phone}
                  onChange={handleReferrerChange}
                />
              </div>
            </div>

            <div className="w-full flex flex-col gap-3 md:flex-row">
              <div className="w-full">
                <Label htmlFor="relationship" className="block text-sm mb-1">
                  Relationship with Participant
                </Label>
                <Select
                  value={referrerForm.relationship}
                  onValueChange={handleRelationshipChange}
                >
                  <SelectTrigger className="rounded-xl">
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

              <div className="w-full">
                <Label htmlFor="referrerAddress" className="block text-sm mb-1">
                  Address
                </Label>
                <Input
                  id="referrerAddress"
                  placeholder="Street Address, Suburb, State and Postcode"
                  required
                  value={referrerForm.address}
                  onChange={handleReferrerChange}
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg font-poppins my-4 mt-7">
                <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                  Additional Information
                </span>
              </h3>
              <Label htmlFor="additionalInfo" className="block text-sm mb-1">
                Any Additional Information (i.e., Security/safety concerns,
                attendees for assessment)
              </Label>
              <Textarea
                id="additionalInfo"
                className="h-24 rounded-xl"
                value={referrerForm.additionalInfo}
                onChange={handleReferrerChange}
              />
            </div>

            <div>
              <h3 className="font-medium text-lg font-poppins my-4 mt-7">
                <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                  Risk & Safety
                </span>
              </h3>
              <Label className="block text-sm mb-1">
                Are there any court orders applicable? e.g., parole, apprehended
                violence order etc.
              </Label>
              <RadioGroup
                value={participantForm.courtOrders}
                onValueChange={(value) =>
                  handleRadioChange("courtOrders", value)
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="yes-court" value="yes" />
                  <Label htmlFor="yes-court" className="text-sm font-normal">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="no-court" value="no" />
                  <Label htmlFor="no-court" className="text-sm font-normal">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="block text-sm mb-1">
                Has the participant ever been physically aggressive towards
                allied health, medical or support staff?
              </Label>
              <RadioGroup
                value={participantForm.physicalAggression}
                onValueChange={(value) =>
                  handleRadioChange("physicalAggression", value)
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="yes-aggression" value="yes" />
                  <Label
                    htmlFor="yes-aggression"
                    className="text-sm font-normal"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="no-aggression" value="no" />
                  <Label
                    htmlFor="no-aggression"
                    className="text-sm font-normal"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="block text-sm mb-1">
                Has the participant been incarcerated in a prison, juvenile
                detention centre or spent time in a forensic hospital for a
                violent or sexual offence?
              </Label>
              <RadioGroup
                value={participantForm.incarceration}
                onValueChange={(value) =>
                  handleRadioChange("incarceration", value)
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="yes-incarceration" value="yes" />
                  <Label
                    htmlFor="yes-incarceration"
                    className="text-sm font-normal"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="no-incarceration" value="no" />
                  <Label
                    htmlFor="no-incarceration"
                    className="text-sm font-normal"
                  >
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="block text-sm mb-1">
                Is the participant currently engaging in alcohol or drug use?
              </Label>
              <RadioGroup
                value={participantForm.drugUse}
                onValueChange={(value) => handleRadioChange("drugUse", value)}
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="yes-drug" value="yes" />
                  <Label htmlFor="yes-drug" className="text-sm font-normal">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="no-drug" value="no" />
                  <Label htmlFor="no-drug" className="text-sm font-normal">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="block text-sm mb-1">
                Are there any known risks for visiting the participant in their
                own home?
              </Label>
              <RadioGroup
                value={participantForm.homeVisitRisks}
                onValueChange={(value) =>
                  handleRadioChange("homeVisitRisks", value)
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="yes-home-risk" value="yes" />
                  <Label
                    htmlFor="yes-home-risk"
                    className="text-sm font-normal"
                  >
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="no-home-risk" value="no" />
                  <Label htmlFor="no-home-risk" className="text-sm font-normal">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label className="block text-sm mb-1">
                Is there any other information we need to know about the client?
                e.g., are there any topics that may trigger the client to become
                upset? Any specific likes or dislikes?
              </Label>
              <RadioGroup
                value={participantForm.triggerInformation}
                onValueChange={(value) =>
                  handleRadioChange("triggerInformation", value)
                }
              >
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="yes-trigger" value="yes" />
                  <Label htmlFor="yes-trigger" className="text-sm font-normal">
                    Yes
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <RadioGroupItem id="no-trigger" value="no" />
                  <Label htmlFor="no-trigger" className="text-sm font-normal">
                    No
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <h3 className="font-medium text-lg font-poppins my-4 mt-7">
                <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                  Payment Method
                </span>
              </h3>
              Who does Ably Care invoice? (please select all that apply)
              <div className="flex gap-5 mb-6 mt-2">
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="ndia"
                    checked={invoiceOptions.ndia}
                    onCheckedChange={() => {
                      handleInvoiceOptionCheckbox("ndia");
                      handleInvoiceFieldChange("ndia");
                    }}
                  />
                  <Label htmlFor="ndia" className="text-sm font-normal">
                    NDIA
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="selfManaged"
                    checked={invoiceOptions.selfManaged}
                    onCheckedChange={() => {
                      handleInvoiceOptionCheckbox("selfManaged");
                      handleInvoiceFieldChange("selfManaged");
                    }}
                  />
                  <Label htmlFor="selfManaged" className="text-sm font-normal">
                    Self-managed
                  </Label>
                </div>
                <div className="flex items-center gap-2">
                  <Checkbox
                    id="planManaged"
                    checked={invoiceOptions.planManaged}
                    onCheckedChange={() => {
                      handleInvoiceOptionCheckbox("planManaged");
                      handleInvoiceFieldChange("planManaged");
                    }}
                  />
                  <Label htmlFor="planManaged" className="text-sm font-normal">
                    Plan-managed
                  </Label>
                </div>
              </div>
              {isNdis && (
                <div className="my-4">
                  <p className="text-sm text-gray-600 font-inter mb-2">
                    If you have Behaviour support funding, please check if you
                    are Agency Managed on your plan as this might be different
                    to the other categories.
                  </p>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="servicesManagedNdia">
                      Services NDIA Managed
                    </Label>
                    <Select
                      value={invoiceDetails.servicesManagedNdia}
                      onValueChange={handleServicesManagedNdiaChange}
                    >
                      <SelectTrigger
                        id="servicesManagedNdia"
                        className="rounded-xl"
                      >
                        <SelectValue placeholder="Please Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="support-coordination">
                          Support Coordination
                        </SelectItem>
                        <SelectItem value="social-work">Social Work</SelectItem>
                        <SelectItem value="behavior-support">
                          Behavior Support
                        </SelectItem>
                        <SelectItem value="therapy-services">
                          Therapy Services
                        </SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}
              {invoiceField.area && (
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 mt-4 flex-col md:flex-row">
                    <div className="w-full flex flex-col gap-2">
                      <Label htmlFor="invoiceFieldOrganisation">
                        Organisation
                      </Label>
                      <Input
                        id="invoiceFieldOrganisation"
                        placeholder="Organisation"
                        value={invoiceDetails.organisation}
                        onChange={handleInvoiceDetailsChange}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <Label htmlFor="invoiceFieldFullName">Full name</Label>
                      <Input
                        id="invoiceFieldFullName"
                        placeholder="Full name"
                        value={invoiceDetails.fullName}
                        onChange={handleInvoiceDetailsChange}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-4 mt-2">
                    <div className="w-full flex flex-col gap-2">
                      <Label htmlFor="invoiceFieldOrganisationEmail">
                        Organisation Email
                      </Label>
                      <Input
                        id="invoiceFieldOrganisationEmail"
                        placeholder="Organisation Email"
                        value={invoiceDetails.organisationEmail}
                        onChange={handleInvoiceDetailsChange}
                      />
                    </div>
                    <div className="w-full flex flex-col gap-2">
                      <Label htmlFor="invoiceFieldOrganisationPhone">
                        Organisation Phone
                      </Label>
                      <Input
                        id="invoiceFieldOrganisationPhone"
                        placeholder="Organisation Phone"
                        value={invoiceDetails.organisationPhone}
                        onChange={handleInvoiceDetailsChange}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg font-poppins my-4 mt-7">
              <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                Further Information
              </span>
            </h3>
            <Textarea
              id="furtherInfo"
              className="h-24 rounded-xl"
              placeholder="Relevant information not previously mentioned"
              value={furtherInfo}
              onChange={(e) => setFurtherInfo(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-3 mb-12">
            <h1 className="text-lg font-poppins font-semibold text-gray-800">
              Disclaimer
            </h1>
            <p className="text-sm text-gray-600 font-inter">
              Ably Care will attempt to contact the nominated person in the
              referral form as soon as the referral has been processed to
              schedule an appointment at the earliest and most convenient time.
              If we are unable to contact you via telephone and you have
              indicated a preferred appointment day and time when completing the
              referral, we will do our best to schedule at, or around this time
              and send you an SMS and email with these details. If no
              appointment day and time were indicated on the referral form, we
              will need to make contact to confirm a suitable day and time for
              the appointment and will send you an SMS and email which can be
              responded to outlining preferred days and times. If we do not hear
              back from you within ten business days after attempting our first
              contact, we will be required to close the case to make space for
              other clients requiring Ably Care services.
            </p>
            <div className="items-top flex space-x-2">
              <Checkbox
                id="disclaimer"
                checked={isAgreed}
                onCheckedChange={() => setIsAgreed(!isAgreed)}
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="disclaimer"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree that I have obtained the participant's consent to
                  submit this referral form to Ablycare for processing.
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
              { loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ReferralFormSection;
