"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do we need to migrate our data to a new platform?",
    a: "No. We do not provide or mandate proprietary software. Our dispatchers log directly into your existing accounts — TrackTik, Silvertrac, Connecteam, Quo, and others — leaving your data ecosystem fully intact.",
  },
  {
    q: "How do your dispatchers handle localized geographical nuances?",
    a: "Our dispatchers undergo rigorous communication training focused on professional American corporate diction, and are anchored by your platforms' live digital mapping tools.",
  },
  {
    q: "What happens if our software suffers an outage?",
    a: "We maintain secondary, offline communication protocols. Our dispatchers instantly transition to manual telephone rolls and external logging spreadsheets, so coverage never stops.",
  },
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto divide-y divide-slate-200">
      {faqs.map((faq, idx) => (
        <div key={idx} className="py-5">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between text-left gap-4 text-slate-900 font-semibold text-lg"
          >
            <span>{faq.q}</span>
            <span className="w-7 h-7 rounded-full border border-slate-300 flex items-center justify-center text-blue-600 font-bold">
              {openIndex === idx ? "−" : "+"}
            </span>
          </button>
          {openIndex === idx && (
            <p className="mt-3 text-slate-600 text-sm leading-relaxed max-w-2xl">
              {faq.a}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}