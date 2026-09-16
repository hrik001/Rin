import React, { useState } from 'react';
import { Mail, Instagram, Send, CheckCircle2 } from 'lucide-react';
import { BRAND_INFO } from '../data/brand';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'catering',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div id="contact-page" className="min-h-screen bg-[#FAF7F2] pb-24">
      {/* Header */}
      <div className="bg-[#1C1611] text-[#FAF7F2] py-14 sm:py-18">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <span className="text-eyebrow text-[#F5C842]">
            Connect With Us
          </span>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#FAF7F2]">
            Contact & Catering
          </h1>

          <p className="text-sm sm:text-base text-[#D4C7BA] max-w-2xl leading-relaxed">
            Planning a private gathering, need event catering, or want to collaborate? Send us a message or visit our Kolkata outlets.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-eyebrow text-[#8C2223]">
                Direct Contacts
              </span>
              <h2 className="text-2xl font-bold text-[#1C1611]">
                Get in Touch
              </h2>
              <p className="text-body-sm text-[#66584C]">
                Whether you have an event query, feedback, or a media question, we will respond promptly.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-3">
              <a
                href={BRAND_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-white border border-[#E7DFD4] hover:border-[#1C1611] transition-colors flex items-center gap-3.5 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E7DFD4] text-[#8C2223] flex items-center justify-center shrink-0">
                  <Instagram className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1611] group-hover:text-[#8C2223] transition-colors">
                    Instagram Direct Message
                  </p>
                  <p className="text-xs text-[#66584C] mt-0.5">{BRAND_INFO.instagramHandle}</p>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-white border border-[#E7DFD4] flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-[#FAF7F2] border border-[#E7DFD4] text-[#8C2223] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1C1611]">Email Inquiries</p>
                  <p className="text-xs text-[#66584C] mt-0.5">{BRAND_INFO.cateringEmail}</p>
                </div>
              </div>
            </div>

            {/* Outlets Overview Box */}
            <div className="p-5 rounded-xl bg-[#F3ECE1] border border-[#E7DFD4] space-y-3.5">
              <h3 className="font-bold text-sm text-[#1C1611]">
                Physical Outlets
              </h3>

              <div className="space-y-3 text-xs text-[#66584C]">
                <div>
                  <p className="font-bold text-[#1C1611]">Lake Market (Dine-In Restaurant)</p>
                  <p>23A Sardar Shankar Road, Kalighat (Behind Lake Mall)</p>
                  <p className="text-[#8C2223] font-medium mt-0.5">1:30 PM – 11:00 PM · Walk-In Seating</p>
                </div>

                <div className="pt-2.5 border-t border-[#E7DFD4]">
                  <p className="font-bold text-[#1C1611]">Entally (Cloud Kitchen & Delivery Hub)</p>
                  <p>34 Girish Chandra Bose Road (Opp. Market Gate 5)</p>
                  <p className="text-[#8C2223] font-medium mt-0.5">12:30 PM – 10:30 PM · Express Pickup</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Catering & Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-white border border-[#E7DFD4] space-y-5">
              <div className="space-y-1.5">
                <span className="text-eyebrow text-[#8C2223]">
                  Event Inquiries
                </span>
                <h3 className="text-2xl font-bold text-[#1C1611]">
                  Send a Message
                </h3>
                <p className="text-body-sm text-[#66584C]">
                  Organizing food for a gathering, party, or corporate event? Leave your details below and we will contact you.
                </p>
              </div>

              {submitted ? (
                <div className="p-8 rounded-lg bg-[#FAF7F2] border border-[#E7DFD4] text-center space-y-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-700 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1C1611]">
                    Thank you for reaching out
                  </h4>
                  <p className="text-xs text-[#66584C] max-w-sm mx-auto leading-relaxed">
                    We have received your note and will be in touch via phone or email shortly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', subject: 'catering', message: '' });
                    }}
                    className="text-xs font-semibold text-[#8C2223] hover:underline pt-2 cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#66584C]">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Anirban Mukherjee"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E7DFD4] focus:border-[#1C1611] focus:outline-hidden text-[#1C1611]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#66584C]">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98300 00000"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E7DFD4] focus:border-[#1C1611] focus:outline-hidden text-[#1C1611]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#66584C]">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E7DFD4] focus:border-[#1C1611] focus:outline-hidden text-[#1C1611]"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-[#66584C]">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E7DFD4] focus:border-[#1C1611] focus:outline-hidden text-[#1C1611]"
                      >
                        <option value="catering">Party & Gathering Catering</option>
                        <option value="corporate">Corporate Bulk Orders</option>
                        <option value="press">Press / Media Inquiries</option>
                        <option value="feedback">General Inquiries & Feedback</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-[#66584C]">
                      Message or Event Details *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please mention the date, guest count, or any specific requirements..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm rounded-lg bg-[#FAF7F2] border border-[#E7DFD4] focus:border-[#1C1611] focus:outline-hidden text-[#1C1611]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#8C2223] hover:bg-[#721B1C] text-[#FAF7F2] font-semibold text-xs transition-colors cursor-pointer"
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
