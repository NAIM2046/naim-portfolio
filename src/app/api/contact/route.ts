import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields (name, email, message).' }, { status: 400 });
    }

    // SMTP Credentials from environment variables
    const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER || 'naim2046juiit@gmail.com';
    const smtpPass = process.env.SMTP_PASS; // Gmail App Password (16 characters)

    if (smtpPass) {
      // Send using Nodemailer with Gmail / Custom SMTP Transporter
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      });

      await transporter.sendMail({
        from: `"${name}" <${smtpUser}>`,
        replyTo: email,
        to: 'naim2046juiit@gmail.com',
        subject: `🚀 New Web Project Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; padding: 24px; background-color: #07090e; color: #ffffff; border-radius: 16px; border: 1px solid #1e293b;">
            <h2 style="color: #06b6d4; border-bottom: 1px solid #334155; padding-bottom: 12px; margin-top: 0;">🚀 New Portfolio Direct Inquiry</h2>
            <p style="font-size: 14px; margin: 8px 0;"><strong style="color: #a855f7;">Client Name:</strong> ${name}</p>
            <p style="font-size: 14px; margin: 8px 0;"><strong style="color: #a855f7;">Client Email:</strong> <a href="mailto:${email}" style="color: #38bdf8; font-weight: bold;">${email}</a></p>
            <p style="font-size: 14px; margin: 16px 0 8px 0;"><strong style="color: #a855f7;">Project Requirement / Message:</strong></p>
            <div style="background-color: #0f172a; padding: 18px; border-radius: 12px; border: 1px solid #334155; white-space: pre-wrap; color: #e2e8f0; font-size: 14px; line-height: 1.6;">
              ${message}
            </div>
            <hr style="border: 0; border-top: 1px solid #334155; margin-top: 24px;" />
            <p style="font-size: 12px; color: #94a3b8; text-align: center;">Sent via Naim Hossain Portfolio API (Nodemailer Transporter)</p>
          </div>
        `,
      });
    } else {
      // Fallback API dispatch to FormSubmit so messages reach naim2046juiit@gmail.com instantly
      const formSubmitRes = await fetch(`https://formsubmit.co/ajax/naim2046juiit@gmail.com`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `🚀 New Web Project Inquiry from ${name}`,
          _template: 'table',
        }),
      });

      if (!formSubmitRes.ok) {
        throw new Error('Fallback mail delivery failed.');
      }
    }

    return NextResponse.json({
      success: true,
      message: 'Your message has been delivered to naim2046juiit@gmail.com!',
    });
  } catch (error: any) {
    console.error('Nodemailer API Error:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to send email via Nodemailer route.' },
      { status: 500 }
    );
  }
}
