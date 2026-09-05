"use client";

import { useState } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";

interface FormData { name: string; email: string; organization: string; audience: string; message: string; }
const EMPTY: FormData = { name: "", email: "", organization: "", audience: "", message: "" };

const FIELD =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[0.9375rem] text-ink outline-none transition-colors placeholder:text-silver focus:border-ink";

export function BriefingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<FormData>(EMPTY);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 450));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex min-h-[26rem] flex-col justify-center border border-line bg-surface p-8" role="status">
        <span className="flex h-10 w-10 items-center justify-center border border-live/40 bg-live-tint">
          <Check className="h-4 w-4 text-live" strokeWidth={1.5} />
        </span>
        <h3 className="t-h3 mt-6">Request received</h3>
        <p className="t-small mt-3 max-w-sm text-graphite">
          Thank you{data.name ? `, ${data.name}` : ""}. We will read the context and respond within one business day
          with the right next step — a briefing, a demonstration, or a partnership conversation.
        </p>
        <button
          type="button"
          onClick={() => { setSubmitted(false); setData(EMPTY); }}
          className="link-arrow mt-8 self-start text-ink"
        >
          Submit another request <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-surface p-6 lg:p-8">
      <div className="flex items-center justify-between gap-4 border-b border-line pb-5">
        <div>
          <p className="t-label text-steel">Confidential enquiry</p>
          <h3 className="t-h4 mt-1.5">Request a briefing</h3>
        </div>
        <span className="t-label text-silver">* required</span>
      </div>

      <div className="mt-2 grid gap-x-8 sm:grid-cols-2">
        <label className="block pt-6">
          <span className="t-label text-steel">Full name *</span>
          <input name="name" required autoComplete="name" value={data.name} onChange={handleChange} placeholder="Your name" className={FIELD} />
        </label>
        <label className="block pt-6">
          <span className="t-label text-steel">Work email *</span>
          <input name="email" type="email" required autoComplete="email" value={data.email} onChange={handleChange} placeholder="name@organisation.gov.in" className={FIELD} />
        </label>
        <label className="block pt-6">
          <span className="t-label text-steel">Organisation</span>
          <input name="organization" autoComplete="organization" value={data.organization} onChange={handleChange} placeholder="Department or institution" className={FIELD} />
        </label>
        <label className="block pt-6">
          <span className="t-label text-steel">I represent</span>
          <select name="audience" value={data.audience} onChange={handleChange} className={FIELD}>
            <option value="">Select</option>
            <option>Government / public sector</option>
            <option>Municipal / urban body</option>
            <option>Regulator / supervisory body</option>
            <option>Enterprise / GCC</option>
            <option>Foundation / philanthropy</option>
            <option>University / research</option>
            <option>Newsroom / media</option>
            <option>Legislature / public office</option>
          </select>
        </label>
        <label className="block pt-6 sm:col-span-2">
          <span className="t-label text-steel">What should the conversation cover?</span>
          <textarea
            name="message"
            rows={3}
            value={data.message}
            onChange={handleChange}
            placeholder="The institutional problem, operating context, or evidence need…"
            className={`${FIELD} resize-none`}
          />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-micro max-w-xs text-steel">
          Your details are used only to respond to this enquiry.
        </p>
        <button type="submit" disabled={submitting} className="btn btn-solid disabled:opacity-60">
          {submitting ? (
            <><Loader2 className="h-4 w-4 animate-spin" /> Submitting…</>
          ) : (
            <>Submit request <ArrowRight className="h-4 w-4" strokeWidth={1.5} /></>
          )}
        </button>
      </div>
    </form>
  );
}
