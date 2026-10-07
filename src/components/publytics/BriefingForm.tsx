import { useState } from "react";
import { ArrowRight, Check, Loader2, Mail } from "lucide-react";
import { BRIEFING_ENDPOINT, CONTACT_EMAIL } from "@/content/site";
import { SEGMENT_LIST as SEGMENTS } from "@/content/segments/meta";

interface FormData {
  name: string;
  email: string;
  organization: string;
  audience: string;
  message: string;
  website: string; // honeypot
}
const EMPTY: FormData = { name: "", email: "", organization: "", audience: "", message: "", website: "" };

const FIELD =
  "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-[0.9375rem] text-ink outline-none transition-colors placeholder:text-silver focus:border-ink";

type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "mailto" } | { kind: "error"; message: string };

/**
 * The briefing request. It reports exactly what happened:
 * - with VITE_BRIEFING_ENDPOINT set, it POSTs JSON and confirms only on a 2xx;
 * - otherwise it opens the visitor's mail client, pre-filled, and says so.
 * The previous form displayed "Request received" without sending anything.
 */
export function BriefingForm({ defaultAudience = "" }: { defaultAudience?: string }) {
  const [state, setState] = useState<State>({ kind: "idle" });
  const [data, setData] = useState<FormData>({ ...EMPTY, audience: defaultAudience });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const subject = `Briefing request — ${data.organization || data.name}`;
  const body = [
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Organisation: ${data.organization}`,
    `Institution type: ${data.audience}`,
    "",
    data.message,
  ].join("\n");
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (data.website) return; // bot
    if (!BRIEFING_ENDPOINT) {
      window.location.href = mailto;
      setState({ kind: "mailto" });
      return;
    }
    setState({ kind: "sending" });
    try {
      const res = await fetch(BRIEFING_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, website: undefined, _subject: subject, source: window.location.pathname }),
      });
      if (!res.ok) throw new Error(`The server answered ${res.status}.`);
      setState({ kind: "sent" });
    } catch (err) {
      setState({ kind: "error", message: err instanceof Error ? err.message : "The request did not send." });
    }
  };

  if (state.kind === "sent" || state.kind === "mailto") {
    const sent = state.kind === "sent";
    return (
      <div className="flex min-h-[26rem] flex-col justify-center border border-line bg-surface p-8" role="status" aria-live="polite">
        <span className={`flex h-10 w-10 items-center justify-center border ${sent ? "border-live/40 bg-live-tint" : "border-line-strong"}`}>
          {sent ? <Check className="h-4 w-4 text-live" strokeWidth={1.5} /> : <Mail className="h-4 w-4 text-ink" strokeWidth={1.5} />}
        </span>
        <h3 className="t-h3 mt-6">{sent ? "Request received" : "Your email is ready to send"}</h3>
        <p className="t-small mt-3 max-w-sm text-graphite">
          {sent ? (
            <>
              Thank you{data.name ? `, ${data.name}` : ""}. A person reads every request and replies within one business day with the
              right next step.
            </>
          ) : (
            <>
              We opened your mail client with the request filled in. It is not sent until you press send there. If nothing opened,
              write to{" "}
              <a href={mailto} className="border-b border-ink text-ink">
                {CONTACT_EMAIL}
              </a>
              .
            </>
          )}
        </p>
        <button
          type="button"
          onClick={() => {
            setState({ kind: "idle" });
            setData({ ...EMPTY, audience: defaultAudience });
          }}
          className="link-arrow mt-8 self-start text-ink"
        >
          Start another request <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="border border-line bg-surface p-6 lg:p-8" noValidate={false}>
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
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            value={data.email}
            onChange={handleChange}
            placeholder="name@organisation.gov.in"
            className={FIELD}
          />
        </label>
        <label className="block pt-6">
          <span className="t-label text-steel">Organisation</span>
          <input
            name="organization"
            autoComplete="organization"
            value={data.organization}
            onChange={handleChange}
            placeholder="Department or institution"
            className={FIELD}
          />
        </label>
        <label className="block pt-6">
          <span className="t-label text-steel">I represent</span>
          <select name="audience" value={data.audience} onChange={handleChange} className={FIELD}>
            <option value="">Select</option>
            {SEGMENTS.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
        </label>
        <label className="block pt-6 sm:col-span-2">
          <span className="t-label text-steel">The one question you cannot evidence today</span>
          <textarea
            name="message"
            rows={3}
            value={data.message}
            onChange={handleChange}
            placeholder="A commitment, an obligation, a figure — and who is asking for it…"
            className={`${FIELD} resize-none`}
          />
        </label>
        <label aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
          Leave this empty
          <input name="website" tabIndex={-1} autoComplete="off" value={data.website} onChange={handleChange} />
        </label>
      </div>

      {state.kind === "error" && (
        <p role="alert" className="mt-6 border-l-2 border-seal bg-seal-tint px-4 py-3 text-[0.875rem] text-graphite">
          {state.message} Nothing was sent. You can try again, or{" "}
          <a href={mailto} className="border-b border-ink text-ink">
            email the request
          </a>
          .
        </p>
      )}

      <div className="mt-8 flex flex-col gap-5 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="t-micro max-w-xs text-steel">
          Used only to respond to this enquiry. The Briefing is free, takes 90 minutes, and comes without a deck.
        </p>
        <button type="submit" disabled={state.kind === "sending"} className="btn btn-solid disabled:opacity-60">
          {state.kind === "sending" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending…
            </>
          ) : (
            <>
              {BRIEFING_ENDPOINT ? "Submit request" : "Compose request"} <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
