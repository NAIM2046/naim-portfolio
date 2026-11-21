import { NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = body.name?.trim() ?? '';
    const email = body.email?.trim() ?? '';
    const message = body.message?.trim() ?? '';

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Please fill in your name, email, and message.' },
        { status: 400 }
      );
    }

    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address.' },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? 'naim2046juiit@gmail.com';

    if (resendApiKey) {
      const resendRes = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL ?? 'Portfolio <onboarding@resend.dev>',
          to: [toEmail],
          reply_to: email,
          subject: `Portfolio Inquiry from ${name}`,
          text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        }),
      });

      if (!resendRes.ok) {
        return NextResponse.json(
          { error: 'Failed to send email. Please try direct email instead.' },
          { status: 502 }
        );
      }

      return NextResponse.json({ ok: true, delivered: true });
    }

    return NextResponse.json({
      ok: true,
      delivered: false,
      message: 'Email provider is not configured on the server yet.',
    });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request payload.' },
      { status: 400 }
    );
  }
}
