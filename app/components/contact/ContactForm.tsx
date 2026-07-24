"use client";

import { useState } from "react";
import { Button } from "../ui/Button";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: "", phone: "", email: "", branch: "", message: "" });
    }, 3000);
  };

  return (
    <section id="inquiry" className="py-20 bg-black text-white">
      <div className="max-w-[800px] mx-auto px-8">
        {/* Form Heading on Top, Content Below */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="inline-flex items-center justify-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white/60 font-medium mb-2">
            <span className="w-8 h-[1px] bg-white/20" />
            QUICK ENQUIRY
            <span className="w-8 h-[1px] bg-white/20" />
          </span>
          <h2 className="font-[var(--font-outfit)] text-4xl font-semibold tracking-tight text-white mb-4">
            Send a
            <span className="font-semibold text-white"> Quick Message</span>
          </h2>
        </div>

        <div className="bg-transparent shadow-none">
          {formSubmitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 text-white mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-white">Message Sent Successfully</h3>
              <p className="text-zinc-400 text-sm">Thank you for contacting ADCB Consultancy. Our team will get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#181818] border border-zinc-600 text-white text-sm focus:outline-none focus:border-white transition-colors rounded-sm placeholder-zinc-600"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#181818] border border-zinc-600 text-white text-sm focus:outline-none focus:border-white transition-colors rounded-sm placeholder-zinc-600"
                    placeholder="Your phone number"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#181818] border border-zinc-600 text-white text-sm focus:outline-none focus:border-white transition-colors rounded-sm placeholder-zinc-600"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="branch" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Preferred Branch
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    value={formData.branch}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#181818] border border-zinc-600 text-white text-sm focus:outline-none focus:border-white transition-colors rounded-sm"
                    required
                  >
                    <option value="" className="bg-[#121212]">Select a branch</option>
                    <option value="kochi" className="bg-[#121212]">Kochi</option>
                    <option value="calicut" className="bg-[#121212]">Calicut</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#181818] border border-zinc-600 text-white text-sm focus:outline-none focus:border-white transition-colors rounded-sm placeholder-zinc-600"
                  placeholder="Tell us about your educational background or requirement..."
                  required
                ></textarea>
              </div>

              <div className="pt-2">
                <Button
                  type="submit"
                  variant="white"
                  size="lg"
                  className="w-full uppercase tracking-wider text-xs font-bold font-[var(--font-outfit)]"
                >
                  Submit Enquiry
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
