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
import { Trash2, Upload } from "lucide-react";


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

interface ReferrerFormState {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  relationship: string;
  address: string;
  additionalInfo: string;
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

  const [invoiceField, setInvoiceField] = useState("");

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

  const [referrerForm, setReferrerForm] = useState<ReferrerFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    relationship: "",
    address: "",
    additionalInfo: "",
  });

  const [ isServicesAgreementSomeone, setIsServicesAgreementSomeone ] = useState(false);

  const [ whoSignedServiceAgreement, setWhoSignedServiceAgreement ] = useState("");

  const [serviceAgreementForm, setServiceAgreementForm] = useState({
    organisation: "",
    fullName: "",
    phone: "",
    email: "",
    address: ""
  });

  const [files, setFiles] = useState<File[]>([]);
  const maxFileSize = 10 * 1024 * 1024;


  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (!selectedFiles) return;
    
    const newFiles: File[] = [];
    let hasError = false;
    
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      if (file.size > maxFileSize) {
        toast({
          title: "File Too Large",
          description: `${file.name} exceeds the 10MB limit`,
          duration: 3000,
          className: "bg-red-500 text-white border-none",
        });
        hasError = true;
        continue;
      }
      newFiles.push(file);
    }
    
    if (!hasError) {
      setFiles(prev => [...prev, ...newFiles]);
    }
  };

  const handleServiceAgreementChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value } = e.target;
    setServiceAgreementForm({
      ...serviceAgreementForm,
      [id.replace("service-agreement-", "")]: value,
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
  
    const fileToBase64 = (file : File) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });
    };
  
    try {
      const filePromises = files.map(async (file) => {
        const base64 = await fileToBase64(file);
        return {
          name: file.name,
          type: file.type,
          size: file.size,
          content: base64
        };
      });
  
      const fileData = await Promise.all(filePromises);
  
      const formData = {
        participant: participantForm,
        referrer: referrerForm,
        serviceAgreementForm: serviceAgreementForm,
        whoSignedServiceAgreement: whoSignedServiceAgreement,
        furtherInfo: furtherInfo,
        invoiceDetails: invoiceField,
        files: fileData,
        timestamp: new Date().toISOString(),
      };
  
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
    } finally {
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

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="w-full">
                <Label className="block text-sm mb-1">
                  Pronunce{" "}
                  <span className="text-red-600">
                    <span className="text-red-600">*</span>
                  </span>
                </Label>
                <Select onValueChange={handleParticipantGenderChange} required>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Please select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="she/her">She/Her</SelectItem>
                    <SelectItem value="he/him">He/Him</SelectItem>
                    <SelectItem value="they/them">They/Them</SelectItem>
                    <SelectItem value="ze/zir">Ze/Zir</SelectItem>
                    <SelectItem value="xe/xem">Xe/Xem</SelectItem>
                    <SelectItem value="sie/hir">Sie/Hir</SelectItem>
                    <SelectItem value="prefer-not-to-say">
                      Prefer not to say
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="w-full">
                <Label htmlFor="preferedName" className="block text-sm mb-1">
                  Preferred Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="preferedName"
                  required
                  onChange={handleParticipantChange}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="w-full">
                <Label htmlFor="firstName" className="block text-sm mb-1">
                  First Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="firstName"
                  required
                  value={participantForm.firstName}
                  onChange={handleParticipantChange}
                />
              </div>
              <div className="w-full">
                <Label className="block text-sm mb-1" htmlFor="lastName">
                  Last Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="lastName"
                  required
                  value={participantForm.lastName}
                  onChange={handleParticipantChange}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="w-full">
                <Label className="block text-sm mb-1">
                  Gender <span className="text-red-600">*</span>
                </Label>
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
                  Participant Email <span className="text-red-600">*</span>
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

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="w-full">
                <Label htmlFor="phone" className="block text-sm mb-1">
                  Participant Phone Number{" "}
                  <span className="text-red-600">*</span>
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
                  Participant Date of Birth{" "}
                  <span className="text-red-600">*</span>
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
                Participant Address <span className="text-red-600">*</span>
              </Label>
              <Input
                id="address"
                placeholder="Please enter your full address"
                required
                value={participantForm.address}
                onChange={handleParticipantChange}
              />
            </div>

            <div>
              <Label htmlFor="ndisNumber" className="block text-sm mb-1">
                NDIS Number <span className="text-red-600">*</span>
              </Label>
              <Input
                id="ndisNumber"
                required
                value={participantForm.ndisNumber}
                onChange={handleParticipantChange}
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="planStartDate" className="block text-sm mb-1">
                  NDIS Plan Start Date <span className="text-red-600">*</span>
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
                  NDIS Plan End Date <span className="text-red-600">*</span>
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
              <div className="flex flex-col sm:flex-row gap-3">
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
                Interpreter required <span className="text-red-600">*</span>
              </Label>
              <RadioGroup
                className="flex flex-col sm:flex-row gap-2"
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
                Communication preferences or requirements{" "}
                <span className="text-red-600">*</span>
              </Label>
              <RadioGroup
                className="flex flex-col sm:flex-row gap-2"
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
                Access requirements <span className="text-red-600">*</span>
              </Label>
              <RadioGroup
                className="flex flex-col sm:flex-row gap-2"
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
          </div>

          {/* Person Making the Referral Section */}
          <div className="space-y-4">
            <h3 className="font-medium text-lg font-poppins">
              <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                Referrer Information
              </span>
            </h3>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="w-full">
                <Label className="block text-sm mb-1">
                  Referrer type <span className="text-red-600">*</span>
                </Label>
                <Select required>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder="Please select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="case-manager">Case Manager</SelectItem>
                    <SelectItem value="early-childhood-partner">
                      Early Childhood Partner
                    </SelectItem>
                    <SelectItem value="family-member">Family Member</SelectItem>
                    <SelectItem value="participant">Participant</SelectItem>
                    <SelectItem value="parent-of-participant">
                      Parent of Participant
                    </SelectItem>
                    <SelectItem value="support-coordinator">
                      Support Coordinator
                    </SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-full">
                <Label
                  htmlFor="referrerOrganisation"
                  className="block text-sm mb-1"
                >
                  Referrer Organisation <span className="text-red-600">*</span>
                </Label>
                <Input id="referrerOrganisation" required />
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="w-full">
                <Label
                  htmlFor="referrerFirstName"
                  className="block text-sm mb-1"
                >
                  Referrer First Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="referrerFirstName"
                  required
                  value={referrerForm.firstName}
                  onChange={handleReferrerChange}
                />
              </div>
              <div className="w-full">
                <Label
                  htmlFor="referrerLastName"
                  className="block text-sm mb-1"
                >
                  Referrer Last Name <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="referrerLastName"
                  required
                  value={referrerForm.lastName}
                  onChange={handleReferrerChange}
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full">
              <div className="w-full">
                <Label htmlFor="referrerEmail" className="block text-sm mb-1">
                  Referrer Email <span className="text-red-600">*</span>
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
                  Referrer Phone Number <span className="text-red-600">*</span>
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

            <div className="w-full flex flex-col gap-3 sm:flex-row">
              <div className="w-full">
                <Label htmlFor="referrerAddress" className="block text-sm mb-1">
                  Address <span className="text-red-600">*</span>
                </Label>
                <Input
                  id="referrerAddress"
                  placeholder="Please enter full address"
                  required
                  value={referrerForm.address}
                  onChange={handleReferrerChange}
                />
              </div>
            </div>

            <div>
              <h3 className="font-medium text-lg font-poppins my-4 mt-7">
                <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                  Diagnosis and Background
                </span>
              </h3>
              <Label
                htmlFor="diagnosisBackground"
                className="block text-sm mb-1"
              >
                Please detail all diagnoses, disabilities, and/or health
                conditions
              </Label>
              <Textarea id="diagnosisBackground" className="h-24 rounded-xl" />
            </div>
            <div>
              <h3 className="font-medium text-lg font-poppins my-4 mt-7">
                <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                  Documentation
                </span>
              </h3>
              <Label htmlFor="documentation" className="block text-sm mb-1">
                Please provide a copy of the most recent NDIS plan and any
                previous allied health and medical reports, if available.
              </Label>

              <div className="w-full rounded-xl border border-dashed border-gray-700 h-36 flex flex-col items-center justify-center">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer rounded-xl font-semibold text-white hover:bg-complementary bg-customAccent px-4 py-2 transition duration-200 ease-in-out "
                >
                  <span>
                    {" "}
                    <Upload className="w-4 h-4 inline-block mr-2" /> Upload a
                    file
                  </span>
                  <Input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                    onChange={handleFileUpload}
                    multiple
                  />
                </label>

                {files.length > 0 && (
                  <div className="mt-3">
                    <ul className="list-disc pl-5 text-sm text-gray-600">
                      {files.map((file, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center"
                        >
                          <span>{file.name}</span>
                          <Button
                            type="button"
                            className="bg-transparent text-red-600 hover:bg-transparent"
                            onClick={() =>
                              setFiles(files.filter((_, i) => i !== index))
                            }
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <p className="text-xs text-gray-500 font-inter mt-2">
                Please Note: If you encounter upload issues, please remove the
                affected file/files and retry uploading.
              </p>
            </div>

            <div>
              <h3 className="font-medium text-lg font-poppins my-4 mt-7">
                <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                  Risk & Safety
                </span>
              </h3>
              <Label className="block text-sm mb-1">
                Are there any court orders applicable? e.g., parole, apprehended
                violence order etc. <span className="text-red-600">*</span>
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
                allied health, medical or support staff?{" "}
                <span className="text-red-600">*</span>
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
                violent or sexual offence?{" "}
                <span className="text-red-600">*</span>
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
                Is the participant currently engaging in alcohol or drug use?{" "}
                <span className="text-red-600">*</span>
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
                own home? <span className="text-red-600">*</span>
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
                upset? Any specific likes or dislikes?{" "}
                <span className="text-red-600">*</span>
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
                  Service Agreement
                </span>
              </h3>
              <div>
                <p>
                  Who will sign the service agreement?{" "}
                  <span className="text-red-600">*</span>
                </p>
                <RadioGroup
                  className="flex flex-col sm:flex-row gap-2 mt-2"
                  onValueChange={(value) => {
                    value === "someone-else"
                      ? setIsServicesAgreementSomeone(true)
                      : setIsServicesAgreementSomeone(false);
                    setWhoSignedServiceAgreement(value);
                  }}
                >
                  <div className="flex items-center gap-2">
                    <RadioGroupItem
                      id="participant"
                      value="participant-myself"
                    />
                    <Label
                      htmlFor="participant-myself"
                      className="text-sm font-normal"
                    >
                      Participant/myself
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="referrer" value="referrer" />
                    <Label htmlFor="referrer" className="text-sm font-normal">
                      Referrer
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="advocate" value="advocate" />
                    <Label htmlFor="advocate" className="text-sm font-normal">
                      Advocate
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="Guardian" value="Guardian" />
                    <Label htmlFor="Guardian" className="text-sm font-normal">
                      Guardian
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem id="someone-else" value="someone-else" />
                    <Label
                      htmlFor="someone-else"
                      className="text-sm font-normal"
                    >
                      Someone else
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              {isServicesAgreementSomeone && (
                <>
                  <div className="w-full flex flex-col mt-6">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      <div className="flex flex-col gap-2 w-full">
                        <Label
                          htmlFor="service-agreement-organisation"
                          className="block text-sm mb-1"
                        >
                          Organisation
                        </Label>
                        <Input
                          id="service-agreement-organisation"
                          placeholder="Organisation"
                          required
                          className="rounded-xl"
                          value={serviceAgreementForm.organisation}
                          onChange={handleServiceAgreementChange}
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <Label
                          htmlFor="service-agreement-full-name"
                          className="block text-sm mb-1"
                        >
                          Full name
                        </Label>
                        <Input
                          id="service-agreement-full-name"
                          placeholder="Full name"
                          required
                          className="rounded-xl"
                          value={serviceAgreementForm.fullName}
                          onChange={handleServiceAgreementChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-3 sm:flex-row mt-3">
                      <div className="flex flex-col gap-2 w-full">
                        <Label
                          htmlFor="service-agreement-phone"
                          className="block text-sm mb-1"
                        >
                          Phone
                        </Label>
                        <Input
                          id="service-agreement-phone"
                          placeholder="Phone"
                          required
                          className="rounded-xl"
                          value={serviceAgreementForm.phone}
                          onChange={handleServiceAgreementChange}
                        />
                      </div>
                      <div className="flex flex-col gap-2 w-full">
                        <Label
                          htmlFor="service-agreement-email"
                          className="block text-sm mb-1"
                        >
                          Email
                        </Label>
                        <Input
                          id="service-agreement-email"
                          placeholder="Email"
                          type="email"
                          required
                          className="rounded-xl"
                          value={serviceAgreementForm.email}
                          onChange={handleServiceAgreementChange}
                        />
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-3 w-full">
                      <Label
                        htmlFor="service-agreement-address"
                        className="block text-sm mb-1"
                      >
                        Address
                      </Label>
                      <Input
                        id="service-agreement-address"
                        placeholder="Address"
                        required
                        className="rounded-xl"
                        value={serviceAgreementForm.address}
                        onChange={handleServiceAgreementChange}
                      />
                    </div>
                  </div>
                </>
              )}
            </div>

            <div>
              <h3 className="font-medium text-lg font-poppins my-4 mt-7">
                <span className="bg-customAccent text-white rounded-xl px-4 py-2">
                  Payment Method
                </span>
              </h3>
              Who does Ably Care invoice? (please select all that apply)
              <div>
                <RadioGroup className="flex flex-col sm:flex-row gap-3 mt-3" value={invoiceField} onValueChange={(value)=>setInvoiceField(value)}>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="ndia" id="invoice-ndia" />
                    <Label htmlFor="invoice-ndia">NDIA</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="self-managed" id="invoice-self-managed" />
                    <Label htmlFor="invoice-self-managed">Self-managed</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="plan-managed" id="invoice-plan-managed" />
                    <Label htmlFor="invoice-plan-managed">Plan-managed</Label>
                  </div>
                </RadioGroup>
              </div>
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
          <div>
            <Label htmlFor="how-hear" className="block text-sm mb-1">
              How did you hear about Ably Care?
            </Label>
            <Select>
              <SelectTrigger id="how-hear" className="rounded-xl">
                <SelectValue placeholder="Please Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="have-used-ably-care">
                  Have used Ably Care before
                </SelectItem>
                <SelectItem value="support-coordinator">
                  Support Coordinator
                </SelectItem>
                <SelectItem value="ably-care-staff-member">
                  Ably Care Staff Member
                </SelectItem>
                <SelectItem value="friends-family">Friends/Family</SelectItem>
                <SelectItem value="online-search">Online Search</SelectItem>
                <SelectItem value="ably-care-website">
                  Ably Care Website
                </SelectItem>
                <SelectItem value="social-media">Social Media</SelectItem>
                <SelectItem value="expo-or-other-event">
                  Expo or other event
                </SelectItem>
                <SelectItem value="newsletter">Newsletter</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
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
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </section>
    </>
  );
};

export default ReferralFormSection;
