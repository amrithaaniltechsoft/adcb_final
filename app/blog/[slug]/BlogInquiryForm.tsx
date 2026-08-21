"use client";

import { useState } from "react";
import { submitEnquiryEmail } from "@/lib/formSubmit";

export default function BlogInquiryForm() {
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      await submitEnquiryEmail("New Blog Enquiry - ADCB Website", formState);
      setIsSubmitted(true);
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white p-6 md:p-8 border border-white/10 rounded-sm">
      {isSubmitted ? (
        <div className="text-center py-6">
          <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-green-500/20 text-green-500 mb-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <h3 className="font-[var(--font-outfit)] text-lg font-bold mb-2">Thank You!</h3>
          <p className="text-zinc-400 text-xs leading-relaxed">
            Your inquiry has been received. Our expert admissions advisors will connect with you shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 text-xs text-[#ED1C24] hover:underline uppercase tracking-wider font-semibold cursor-pointer"
          >
            Send another query
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <h3 className="font-[var(--font-outfit)] text-lg font-bold tracking-tight mb-1 text-white">
              Need Expert Guidance?
            </h3>
            <p className="text-zinc-400 text-xs font-light leading-relaxed">
              Fill in your details below and secure your customized admission strategy counseling today.
            </p>
          </div>

          <div className="border-t border-white/10 pt-2" />

          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Full Name <span className="text-[#ED1C24]">*</span>
            </label>
            <input
              type="text"
              id="name"
              required
              value={formState.name}
              onChange={(e) => setFormState({ ...formState, name: e.target.value })}
              placeholder="e.g. John Doe"
              className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ED1C24] transition-colors"
            />
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Phone Number <span className="text-[#ED1C24]">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formState.phone}
              onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
              placeholder="e.g. +91 98765 43210"
              className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ED1C24] transition-colors"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-[10px] font-bold text-zinc-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formState.email}
              onChange={(e) => setFormState({ ...formState, email: e.target.value })}
              placeholder="e.g. name@example.com"
              className="w-full bg-zinc-900 border border-white/10 rounded-sm px-4 py-3 text-white text-sm focus:outline-none focus:border-[#ED1C24] transition-colors"
            />
          </div>

          {/* Course */}
          {submitError && (
            <p className="text-xs text-[#ED1C24] text-center">
              Something went wrong while sending your enquiry. Please try again.
            </p>
          )}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#ED1C24] hover:bg-red-700 disabled:opacity-60 text-white font-bold text-xs uppercase tracking-widest py-4 px-6 transition-all duration-300 rounded-sm shadow-md active:scale-[0.98] cursor-pointer"
          >
            {isSubmitting ? "Submitting..." : "Submit Consultation Request"}
          </button>
        </form>
      )}
    </div>
  );
}
