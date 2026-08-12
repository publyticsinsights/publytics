"use client";

import { useState } from "react";
import { Check, Loader2, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  organization: string;
  role: string;
  message: string;
}

export function BriefingForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [data, setData] = useState<FormData>({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate a brief network touch so the state change feels deliberate.
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="surface-panel rounded-xl p-8 text-center">
        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
          <Check className="h-6 w-6 text-signal" aria-hidden="true" />
        </span>
        <h3 className="mt-6 text-lg font-bold">Request received</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted">
          Thank you, {data.name || "there"}. Our strategy team will review your details and reach out
          within one business day to schedule a confidential executive briefing.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setData({ name: "", email: "", organization: "", role: "", message: "" });
          }}
          className="mt-6 text-sm font-medium text-signal-soft underline-offset-4 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="surface-panel rounded-xl p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="briefing-name" className="text-sm font-medium">
            Full name <span className="text-signal">*</span>
          </label>
          <input
            id="briefing-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full rounded-md border border-border bg-navy-deep px-4 py-2.5 text-sm text-foreground placeholder:text-ink-muted/60 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="briefing-email" className="text-sm font-medium">
            Work email <span className="text-signal">*</span>
          </label>
          <input
            id="briefing-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={data.email}
            onChange={handleChange}
            placeholder="jane@campaign.org"
            className="w-full rounded-md border border-border bg-navy-deep px-4 py-2.5 text-sm text-foreground placeholder:text-ink-muted/60 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="briefing-organization" className="text-sm font-medium">
            Organization
          </label>
          <input
            id="briefing-organization"
            name="organization"
            type="text"
            autoComplete="organization"
            value={data.organization}
            onChange={handleChange}
            placeholder="Party, campaign or consultancy"
            className="w-full rounded-md border border-border bg-navy-deep px-4 py-2.5 text-sm text-foreground placeholder:text-ink-muted/60 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="briefing-role" className="text-sm font-medium">
            Role
          </label>
          <select
            id="briefing-role"
            name="role"
            value={data.role}
            onChange={handleChange}
            className="w-full rounded-md border border-border bg-navy-deep px-4 py-2.5 text-sm text-foreground focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
          >
            <option value="">Select a role</option>
            <option value="Campaign leadership">Campaign leadership</option>
            <option value="Strategy / Research">Strategy / Research</option>
            <option value="Field operations">Field operations</option>
            <option value="Communications / Media">Communications / Media</option>
            <option value="Fundraising">Fundraising</option>
            <option value="Consultant / Agency">Consultant / Agency</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div className="space-y-2 sm:col-span-2">
          <label htmlFor="briefing-message" className="text-sm font-medium">
            What would you like to cover?
          </label>
          <textarea
            id="briefing-message"
            name="message"
            rows={3}
            value={data.message}
            onChange={handleChange}
            placeholder="Constituency, timeline, or specific VotHub products of interest..."
            className="w-full resize-none rounded-md border border-border bg-navy-deep px-4 py-2.5 text-sm text-foreground placeholder:text-ink-muted/60 focus:border-signal focus:outline-none focus:ring-1 focus:ring-signal"
          />
        </div>
      </div>

      <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-ink-muted">
          <span className="text-signal">*</span> Required. All enquiries are handled under strict
          confidentiality.
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-signal)] transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Request a briefing
            </>
          )}
        </button>
      </div>
    </form>
  );
}
