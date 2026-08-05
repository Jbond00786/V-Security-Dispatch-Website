"use client";

import { useState, FormEvent } from "react";
import Button from "@/components/ui/Button";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-8 text-center space-y-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 font-bold text-xl">
          ✓
        </div>
        <h3 className="text-xl font-bold text-white">Consultation Request Received</h3>
        <p className="text-sm text-slate-300">
          Thank you for reaching out. Our dispatch operations team will review your requirements and follow up within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Your Name
          </label>
          <input
            type="text"
            required
            placeholder="John Doe"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Company Name
          </label>
          <input
            type="text"
            required
            placeholder="Apex Security Guards"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            placeholder="john@apexsecurity.com"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
            Current Management Platform
          </label>
          <select
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white focus:border-blue-500 focus:outline-none"
          >
            <option value="tracktik">TrackTik</option>
            <option value="silvertrac">Silvertrac</option>
            <option value="connecteam">Connecteam</option>
            <option value="quo">Quo</option>
            <option value="other">Other / Custom</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
          Operational Details & Requirements
        </label>
        <textarea
          rows={4}
          placeholder="Tell us about your guard numbers, shift hours, or current dispatch needs..."
          className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none"
        ></textarea>
      </div>

      <Button variant="secondary" type="submit" className="w-full py-4 text-base">
        Submit Request
      </Button>
    </form>
  );
}