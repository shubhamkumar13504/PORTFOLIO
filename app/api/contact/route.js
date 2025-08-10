// import { NextResponse } from "next/server";
// import nodemailer from 'nodemailer';
// export async function POST(req) {
//   const { name, email, message } = await req.json()
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,     // your Gmail address
//       pass: process.env.EMAIL_PASS,     // your Gmail app password
//     },
//   })
//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER,
//     subject: `New message from ${name}`,
//     text: message,
//     replyTo: email
//   }
//    try {
//     await transporter.sendMail(mailOptions)
//     return NextResponse.json({ success: true }, { status: 200 })
//   } catch (error) {
//     console.error(error)
//     return NextResponse.json({ success: false }, { status: 500 })
//   }
// }
// app/api/contact/route.ts (for TypeScript) or route.js (for JS)

// import { Resend } from "resend";
// import { NextResponse } from "next/server";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export async function POST(req) {
//   const { name, email, message } = await req.json();

//   try {
//     const data = await resend.emails.send({
//       from: `${name} <onboarding@resend.dev>`, // or use your verified domain
//       to: ["shubhamkumar13504@gmail.com"],
//       subject: `New message from ${name}`,
//       reply_to: email, // Enables "Reply" to go to sender
//       text: `
// You received a new message from your contact form.

// Name: ${name}
// Email: ${email}
// Message: ${message}
//       `,
//     });

//     return NextResponse.json({ success: true });
//   } catch (error) {
//     console.error(error);
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req) {
  // Prevent build crash if key is missing
  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = await req.json();

    const data = await resend.emails.send({
      from: `${name} <onboarding@resend.dev>`, // Use your verified domain if available
      to: ["shubhamkumar13504@gmail.com"], // keep your working recipient
      subject: `New message from ${name}`,
      reply_to: email,
      text: `
You received a new message from your contact form.

Name: ${name}
Email: ${email}
Message: ${message}
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
