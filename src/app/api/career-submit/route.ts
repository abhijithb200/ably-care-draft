import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { Readable } from "stream";
import { Buffer } from "buffer";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const contactNumber = formData.get("contactNumber") as string;
    const postcode = formData.get("postcode") as string;
    const file = formData.get("resume") as File;

    if (!firstName || !lastName || !email || !contactNumber || !postcode || !file) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    const resumeAttachment = {
      filename: file.name,
      content: buffer,
    };

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_RECEIVER,
      subject: `New Career Application from ${firstName} ${lastName}`,
      html: `
        <h3>New Application Details</h3>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact Number:</strong> ${contactNumber}</p>
        <p><strong>Postcode:</strong> ${postcode}</p>
        <p><em>The applicant's resume is attached.</em></p>
      `,
      attachments: [resumeAttachment],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Application submitted successfully!" });
  } catch (error) {
    console.error("Error submitting support worker application:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
