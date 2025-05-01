import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

interface InvoiceDetailsState {
  organisation: string;
  fullName: string;
  organisationEmail: string;
  organisationPhone: string;
  servicesManagedNdia: string;
}

interface ServiceAgreementFormState {
  organisation: string;
  fullName: string;
  phone: string;
  email: string;
  address: string;
}

interface FileData {
  name: string;
  type: string;
  size: number;
  content: string;
}

type invoiceField = "ndia" | "self-managed" | "plan-managed";

interface FormData {
  participant: ParticipantFormState;
  referrer: ReferrerFormState;
  serviceAgreementForm: ServiceAgreementFormState;
  whoSignedServiceAgreement: string;
  furtherInfo: string;
  invoiceDetails: invoiceField;
  files: FileData[];
  timestamp: string;
}

const formatBoolean = (value: boolean): string => value ? 'Yes' : 'No';

const formatIdentities = (identities: IdentitiesState): string => {
  const selected = Object.entries(identities)
    .filter(([_, value]) => value)
    .map(([key, _]) => {
      const formatted = key.replace(/([A-Z])/g, ' $1');
      return formatted.charAt(0).toUpperCase() + formatted.slice(1);
    });
  
  return selected.length > 0 ? selected.join(', ') : 'None selected';
};

const formatOrigin = (origin: OriginState): string => {
  const selected = Object.entries(origin)
    .filter(([_, value]) => value)
    .map(([key, _]) => {
      if (key === 'firstNationPeople') return 'First Nations People';
      if (key === 'culturallyLinguistically') return 'Culturally and linguistically diverse';
      if (key === 'naOrigin') return 'N/A';
      return key;
    });
  
  return selected.length > 0 ? selected.join(', ') : 'None selected';
};

const formatReferralReasons = (reasons: ReferralReasonsState): string => {
  const selected = Object.entries(reasons)
    .filter(([_, value]) => value)
    .map(([key, _]) => {
      if (key === 'ndisCoordination') return 'NDIS Coordination Services';
      if (key === 'socialWork') return 'Social Work Services';
      if (key === 'both') return 'Both Services';
      return key;
    });
  
  return selected.length > 0 ? selected.join(', ') : 'None selected';
};

export async function POST(request: Request) {
  try {
    const formData: FormData = await request.json();
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const { participant, referrer, invoiceDetails, serviceAgreementForm, whoSignedServiceAgreement, furtherInfo, files, timestamp } = formData;
    
    const attachments = files && files.length > 0 ? files.map(file => {
      const base64Data = file.content.split(';base64,').pop() || '';
      
      return {
        filename: file.name,
        content: Buffer.from(base64Data, 'base64'),
        contentType: file.type
      };
    }) : [];

    const fileList = files && files.length > 0 
      ? files.map(file => `<li>${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)</li>`).join('')
      : '<li>No files attached</li>';
    
    const emailContent = `
      <h2>New Referral Form Submission</h2>
      <p>Submitted on: ${new Date(timestamp).toLocaleString()}</p>
      
      <h3>Participant Details</h3>
      <ul>
        <li><strong>Name:</strong> ${participant.firstName} ${participant.lastName}</li>
        <li><strong>Gender:</strong> ${participant.gender}</li>
        <li><strong>Email:</strong> ${participant.email || 'Not provided'}</li>
        <li><strong>Phone:</strong> ${participant.phone}</li>
        <li><strong>Date of Birth:</strong> ${participant.dateOfBirth}</li>
        <li><strong>Address:</strong> ${participant.address}</li>
        <li><strong>Identities:</strong> ${formatIdentities(participant.identities)}</li>
        <li><strong>Origin:</strong> ${formatOrigin(participant.origin)}</li>
        <li><strong>Disability/Diagnosis:</strong> ${participant.disability || 'Not provided'}</li>
        <li><strong>Referral Reasons:</strong> ${formatReferralReasons(participant.referralReasons)}</li>
        <li><strong>Additional Details:</strong> ${participant.additionalDetails || 'Not provided'}</li>
        <li><strong>NDIS Number:</strong> ${participant.ndisNumber}</li>
        <li><strong>NDIS Plan Period:</strong> ${participant.planStartDate} to ${participant.planEndDate}</li>
        <li><strong>Funding Management:</strong> ${participant.fundingManagement}</li>
        <li><strong>Guardian/Nominee:</strong> ${participant.guardian || 'Not provided'}</li>
        <li><strong>Attach Documents:</strong> ${participant.attachDocuments}</li>
        <li><strong>Interpreter Required:</strong> ${participant.interpreterRequired}</li>
        <li><strong>Communication Preferences:</strong> ${participant.communicationPreferences}</li>
        <li><strong>Access Requirements:</strong> ${participant.accessRequirements}</li>
      </ul>
      
      <h3>Referrer Details</h3>
      <ul>
        <li><strong>Name:</strong> ${referrer.firstName} ${referrer.lastName}</li>
        <li><strong>Email:</strong> ${referrer.email}</li>
        <li><strong>Phone:</strong> ${referrer.phone}</li>
        <li><strong>Relationship with Participant:</strong> ${referrer.relationship}</li>
        <li><strong>Address:</strong> ${referrer.address || 'Not provided'}</li>
        <li><strong>Additional Info:</strong> ${referrer.additionalInfo || 'Not provided'}</li>
      </ul>
      
      <h3>Risk & Safety</h3>
      <ul>
        <li><strong>Court Orders Applicable:</strong> ${participant.courtOrders}</li>
        <li><strong>History of Physical Aggression:</strong> ${participant.physicalAggression}</li>
        <li><strong>Incarceration History:</strong> ${participant.incarceration}</li>
        <li><strong>Current Drug/Alcohol Use:</strong> ${participant.drugUse}</li>
        <li><strong>Home Visit Risks:</strong> ${participant.homeVisitRisks}</li>
        <li><strong>Trigger Information:</strong> ${participant.triggerInformation}</li>
      </ul>
      
      <h3>Invoice Options</h3>
      <p>${invoiceDetails}</p>
      
      <h3>Service Agreement Details</h3>
      <ul>
        <li><strong>Who Signed Service Agreement:</strong> ${whoSignedServiceAgreement || 'Not provided'}</li>
        <li><strong>Organisation:</strong> ${serviceAgreementForm.organisation || 'Not provided'}</li>
        <li><strong>Full Name:</strong> ${serviceAgreementForm.fullName || 'Not provided'}</li>
        <li><strong>Phone:</strong> ${serviceAgreementForm.phone || 'Not provided'}</li>
        <li><strong>Email:</strong> ${serviceAgreementForm.email || 'Not provided'}</li>
        <li><strong>Address:</strong> ${serviceAgreementForm.address || 'Not provided'}</li>
      </ul>
      
      <h3>Further Information</h3>
      <p>${furtherInfo || 'No additional information provided'}</p>
      
      <h3>Attached Files</h3>
      <ul>
        ${fileList}
      </ul>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Referral: ${participant.firstName} ${participant.lastName}`,
      html: emailContent,
      attachments: attachments
    };

    await transporter.sendMail(mailOptions);

    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: referrer.email,
      subject: 'Thank you for your referral',
      html: `
        <h2>Thank you for your referral</h2>
        <p>Dear ${referrer.firstName} ${referrer.lastName},</p>
        <p>We have received your referral for ${participant.firstName} ${participant.lastName}. Our team will review the information and contact you soon regarding the next steps.</p>
        <p>If you have any questions or need to provide additional information, please don't hesitate to contact us.</p>
        <p>Best regards,<br>Ably Care Team</p>
      `
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({ success: true, message: 'Referral submitted successfully' });
  } catch (error) {
    console.error('Error in referral form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to submit referral', error: String(error) },
      { status: 500 }
    );
  }
}