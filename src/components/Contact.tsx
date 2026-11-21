'use client';

import { useState } from 'react';
import { Mail, Phone, Briefcase, Copy, Check, Send, Code2, Globe, Loader2, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '@/data/portfolioData';

interface FieldErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [status, setStatus] = useState<'idle' | 'submitting' | 'sent' | 'fallback' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const mailtoHref = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
  )}`;

  const validate = (): FieldErrors => {
    const errors: FieldErrors = {};
    if (!formData.name.trim()) {
      errors.name = 'Please enter your name.';
    }
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!EMAIL_REGEX.test(formData.email.trim())) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please enter at least 10 characters describing your project.';
    }
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = (await res.json()) as { ok?: boolean; delivered?: boolean; error?: string };

      if (!res.ok) {
        setStatus('error');
        setErrorMessage(data.error ?? 'Something went wrong. Please try again.');
        return;
      }

      if (data.delivered) {
        setStatus('sent');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('fallback');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please try again or use direct email.');
    }
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl space-y-2.5 mb-12">
          <div className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200/80">
            Contact
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
            Let&apos;s Build Your <span className="text-blue-600">Next Web App</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Ready to discuss a project or opportunity? Reach out directly via email, WhatsApp, or the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Contact Details & Socials */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card */}
            <div className="p-5 rounded-xl surface-card flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-600" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-slate-500 font-medium">Direct Email</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-sm font-semibold text-slate-900 hover:text-blue-600 transition-colors truncate block"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={copyEmail}
                aria-label="Copy email address"
                title="Copy email address"
                className="min-w-[44px] min-h-[44px] rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200 text-slate-600 hover:text-slate-900 transition-colors flex items-center justify-center shrink-0"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="p-5 rounded-xl surface-card">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-lg bg-emerald-50 border border-emerald-200/80 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Phone &amp; WhatsApp</p>
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-slate-900 hover:text-emerald-700 transition-colors"
                  >
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-3 gap-3">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 min-h-[76px] rounded-xl surface-card surface-card-interactive flex flex-col items-center justify-center gap-1.5 text-center group"
              >
                <Code2 className="w-5 h-5 text-slate-700 group-hover:text-blue-600" />
                <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">GitHub</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 min-h-[76px] rounded-xl surface-card surface-card-interactive flex flex-col items-center justify-center gap-1.5 text-center group"
              >
                <Globe className="w-5 h-5 text-blue-600" />
                <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">LinkedIn</span>
              </a>

              <a
                href={PERSONAL_INFO.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 min-h-[76px] rounded-xl surface-card surface-card-interactive flex flex-col items-center justify-center gap-1.5 text-center group"
              >
                <Briefcase className="w-5 h-5 text-emerald-700" />
                <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900">Upwork</span>
              </a>
            </div>
          </div>

          {/* Contact Message Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-xl surface-card">
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-slate-900">Send Direct Message</h3>
                <p className="text-xs text-slate-600">
                  Share your project requirements and timeline to get started.
                </p>
              </div>

              {status === 'sent' && (
                <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Thank you! Your message has been sent successfully. I will respond shortly.</span>
                </div>
              )}

              {status === 'fallback' && (
                <div className="p-4 rounded-lg bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium space-y-2">
                  <p>Direct email delivery is not configured on the server yet. Click below to send via your email client:</p>
                  <a
                    href={mailtoHref}
                    className="inline-flex items-center gap-2 px-3 min-h-[44px] rounded-lg bg-amber-100 hover:bg-amber-200/80 text-amber-950 font-semibold transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Email App to Send</span>
                  </a>
                </div>
              )}

              {status === 'error' && (
                <div className="p-4 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="contact-name" className="block text-xs font-semibold text-slate-700">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (fieldErrors.name) setFieldErrors({ ...fieldErrors, name: undefined });
                    }}
                    placeholder="e.g. John Doe"
                    className="w-full px-3.5 min-h-[44px] rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 transition-colors"
                  />
                  {fieldErrors.name && (
                    <p className="text-xs text-rose-600">{fieldErrors.name}</p>
                  )}
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-email" className="block text-xs font-semibold text-slate-700">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (fieldErrors.email) setFieldErrors({ ...fieldErrors, email: undefined });
                    }}
                    placeholder="john@company.com"
                    className="w-full px-3.5 min-h-[44px] rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 transition-colors"
                  />
                  {fieldErrors.email && (
                    <p className="text-xs text-rose-600">{fieldErrors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="block text-xs font-semibold text-slate-700">
                  Project Requirement / Message
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (fieldErrors.message) setFieldErrors({ ...fieldErrors, message: undefined });
                  }}
                  placeholder="Describe your web application requirement, stack preferences, or project scope..."
                  className="w-full p-3.5 rounded-lg bg-white border border-slate-300 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-600/15 transition-colors resize-none"
                />
                {fieldErrors.message && (
                  <p className="text-xs text-rose-600">{fieldErrors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full min-h-[44px] rounded-lg font-semibold text-sm text-white bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {status === 'submitting' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message to Naim</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
