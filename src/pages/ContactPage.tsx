import React, { useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { BRAND_INFO, OUTLETS } from '../data/brand';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'catering',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-page" className="min-h-screen bg-[#FAF7F2] pb-24">
      {/* Header */}
      <div className="bg-[#1C1611] text-[#FAF7F2] py-14 sm:py-20 border-b border-[#33261D]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF7F2]/10 text-xs font-mono text-[#F5C842]">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with Rinchen&apos;s Momo</span>
          </div>

          <h1 className="font-serif-heading text-4xl sm:text-5xl font-extrabold tracking-tight">
            Contact & Catering
          </h1>

          <p className="text-sm sm:text-base text-[#D4C7BA] max-w-2xl mx-auto font-sans-body">
            Have a catering inquiry, press request, or want to collaborate? Reach out directly or visit our Kolkata outlets.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Info Columns (Col 5) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#8C2223]">
                Direct Contacts
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#1C1611]">
                We&apos;re Always Happy to Chat Food
              </h2>
              <p className="text-xs sm:text-sm text-[#66584C] leading-relaxed">
                Whether you are a food lover, journalist, or event host, we welcome your thoughts and collaborations.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-[#E8DFD3] hover:border-[#8C2223] transition-colors flex items-center gap-3 group shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-[#8C2223]/10 text-[#8C2223] flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1611] group-hover:text-[#8C2223] transition-colors">
                    Instagram Direct Message
                  </p>
                  <p className="text-xs text-[#66584C] font-mono">{BRAND_INFO.instagramHandle}</p>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-white border border-[#E8DFD3] flex items-center gap-3 shadow-xs">
                <div className="w-10 h-10 rounded-lg bg-[#F5C842]/20 text-[#1C1611] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-[#8C2223]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1611]">Email Inquiries</p>
                  <p className="text-xs text-[#66584C] font-mono">{BRAND_INFO.cateringEmail}</p>
                </div>
              </div>
            </div>

            {/* Outlets Overview Box */}
            <div className="p-6 rounded-xl bg-[#F3ECE1] border border-[#E8DFD3] space-y-4">
              <h3 className="font-serif-heading font-bold text-base text-[#1C1611]">
                Our Physical Outlets
              </h3>

              <div className="space-y-3 text-xs text-[#66584C]">
                <div>
                  <p className="font-bold text-[#1C1611]">Lake Market (Dine-In Restaurant)</p>
                  <p>23A, Sardar Shankar Road, Kalighat (Behind Lake Mall)</p>
                  <p className="font-mono text-[#8C2223] mt-0.5">1:30 PM – 11:00 PM · Walk-In Tables</p>
                </div>

                <div className="pt-2 border-t border-[#E8DFD3]">
                  <p className="font-bold text-[#1C1611]">Entally (Takeaway & Delivery Hub)</p>
                  <p>34, Girish Chandra Bose Road (Opp. Market Gate 5)</p>
                  <p className="font-mono text-[#8C2223] mt-0.5">12:30 PM – 10:30 PM · Express Pickup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form: Catering & Collaborations (Col 7) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#E8DFD3] shadow-sm space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F3ECE1] text-[#8C2223] text-xs font-mono font-semibold">
                  <Sparkles className="w-3 h-3 text-[#F5C842]" />
                  <span>Catering & Collaborations</span>
                </div>
                <h3 className="font-serif-heading text-2xl font-bold text-[#1C1611]">
                  Send an Inquiry
                </h3>
                <p className="text-xs sm:text-sm text-[#66584C]">
                  Planning food for an intimate house gathering, wedding party, office lunch, or media feature?
                  Leave your details and Rinchen&apos;s team will get back to you.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-xl bg-[#FAF7F2] border border-[#E8DFD3] text-center space-y-3">
                  <div className="w-12 h-12 rounded-full bg-[#8C2223] text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-serif-heading text-xl font-bold text-[#1C1611]">
                    Thank You for Reaching Out!
                  </h4>
                  <p className="text-xs sm:text-sm text-[#66584C] max-w-sm mx-auto">
                    We have received your message and will contact you via email or phone shortly.
                    In the meantime, follow our updates on Instagram @rinchen_momo.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'catering', message: '' });
                    }}
                    className="text-xs font-semibold text-[#8C2223] underline pt-2"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#66584C] uppercase font-semibold">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anirban Mukherjee"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E8DFD3] focus:border-[#8C2223] focus:outline-hidden text-[#1C1611]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#66584C] uppercase font-semibold">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98300 00000"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E8DFD3] focus:border-[#8C2223] focus:outline-hidden text-[#1C1611]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#66584C] uppercase font-semibold">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E8DFD3] focus:border-[#8C2223] focus:outline-hidden text-[#1C1611]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-mono text-[#66584C] uppercase font-semibold">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E8DFD3] focus:border-[#8C2223] focus:outline-hidden text-[#1C1611]"
                      >
                        <option value="catering">Party & Gathering Catering</option>
                        <option value="corporate">Corporate Bulk Orders</option>
                        <option value="press">Press / Media Interview</option>
                        <option value="feedback">General Feedback & Hello</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-[#66584C] uppercase font-semibold">
                      Your Message or Event Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the event date, approximate guest count, or questions..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E8DFD3] focus:border-[#8C2223] focus:outline-hidden text-[#1C1611]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#8C2223] hover:bg-[#A81E16] text-[#FAF7F2] font-semibold text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
