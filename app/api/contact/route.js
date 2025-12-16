import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const toEmail = process.env.CONTACT_TO || "hrishikeshjanjal1@gmail.com";
const user = process.env.GMAIL_USER;
const pass = process.env.GMAIL_APP_PASSWORD || process.env.GMAIL_PASS;

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstname, lastname, email, phone, service, message } = body || {};

    if (!firstname || !lastname || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields." },
        { status: 400 }
      );
    }

    if (!user || !pass) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Email is not configured. Add GMAIL_USER and GMAIL_APP_PASSWORD to your environment.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    await transporter.sendMail({
      from: `"Portfolio Contact" <${user}>`,
      to: toEmail,
      replyTo: email,
      subject: `Portfolio inquiry from ${firstname} ${lastname}`,
      text: `
Name: ${firstname} ${lastname}
Email: ${email}
Phone: ${phone || "Not provided"}
Service: ${service || "Not specified"}

Message:
${message}
      `,
      html: `
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message?.replace(/\n/g, "<br/>")}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error", error);
    return NextResponse.json(
      { success: false, message: "Failed to send message. Please try again later." },
      { status: 500 }
    );
  }
}
