import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { BriefingForm } from "./BriefingForm";
import { PlatformStack } from "./PlatformStack";
import {
  BoundaryPanel,
  DisclosureTriptych,
  Eyebrow,
  IndexRow,
  IntegrityChecklist,
  MegaCta,
  OperatingLoop,
  ProvenanceChip,
  Say,
  Statement,
} from "./system";
import {
  CreditLadder,
  DatedTimeline,
  SectionHead,
  SolutionMatrix,
  StatusBadge,
  SystemTag,
  SystemsMap,
} from "./atlas";
import { SEGMENT_LIST as SEGMENTS } from "@/content/segments/meta";
import { CORE } from "@/content/systems";
import { EVIDENCE } from "@/content/evidence";
import { FACTS } from "@/content/dates";
import { evidenceHref } from "@/content/nav";
import type { DatedFact } from "@/content/types";

function Chip({ fact, live = false }: { fact: DatedFact; live?: boolean }) {
  return (
    <ProvenanceChip
      source={fact.source}
      method={fact.method}
      date={fact.date}
      live={live}
      {...(fact.limitations ? { limitations: fact.limitations } : {})}
    />
  );
}

/* ══════════════════════════ 1 · HERO ══════════════════════════ */

export function Hero() {
  const facts: { k: string; v: string; fact: DatedFact; live?: boolean }[] = [
    { k: "Method Standard", v: "v1.0 · published", fact: FACTS.methodStandard, live: true },
    { k: "Publytics Tracker 1", v: FACTS.tracker1.value, fact: FACTS.tracker1 },
    { k: "DPDP obligations", v: FACTS.dpdpFull.value, fact: FACTS.dpdpFull },
    { k: "TN low-value line", v: FACTS.tnLowValue.value, fact: FACTS.tnLowValue },
  ];
  return (
    <section className="relative -mt-[5rem] overflow-hidden atmo pt-[5rem] sm:-mt-[5.75rem] sm:pt-[5.75rem] text-inverse">
      <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-64"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(20,22,28,.85))" }}
      />
      <div className="shell relative grid gap-14 pt-16 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-20 lg:pb-24">
        <div>
          <Eyebrow tone="inverse">Public Proof</Eyebrow>
          <h1 className="t-display-xl mt-7 text-inverse">
            When a citizen asks whether the promise was kept —{" "}
            <em className="t-serif-i text-accent">who answers?</em>
          </h1>
          <p className="t-lead mt-8 max-w-xl text-inverse-dim">
            Publytics builds the data and AI infrastructure public institutions run on: one evidence
            chain from what was committed to what was delivered — verified, dated, in Tamil, and
            able to survive a challenge.
          </p>
          <p className="t-label mt-7 text-inverse-faint">
            Eight institutions · Six product families ·{" "}
            <span className="text-accent">One evidence chain</span>
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/solutions" className="btn btn-on-dark">
              Find your institution <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link to="/company" hash="contact" className="btn btn-ghost-on-dark">
              Request a free briefing
            </Link>
          </div>
        </div>

        <div className="relative">
          <PlatformStack className="h-auto w-full" />
          <p className="t-label mt-2 text-center text-inverse-faint">
            The shared core · five layers · illustrative
          </p>
        </div>
      </div>

      {/* Dated facts — every value carries its record. Nothing here is a simulated live metric. */}
      <div className="relative border-t border-line-inverse">
        <div className="shell grid gap-x-10 gap-y-5 py-5 sm:grid-cols-2 lg:grid-cols-4">
          {facts.map((f) => (
            <div key={f.k} className="flex flex-col gap-1.5">
              <span className="t-label text-inverse-faint">{f.k}</span>
              <span className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                <span className="figure-num text-[0.9375rem] text-inverse">{f.v}</span>
                <span className="[&_.chip]:text-inverse-dim">
                  <Chip fact={f.fact} {...(f.live ? { live: true } : {})} />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════ 2 · ONE CHAIN, EIGHT INSTITUTIONS ══════════════════ */

export function InstitutionsSection() {
  return (
    <section className="bg-paper">
      <div className="shell band">
        <SectionHead
          eyebrow="Start with your institution"
          title="One evidence chain. Eight institutions. Each buys it in a different shape."
          brief="A secretary, a compliance officer, a programme officer and a data editor each ask a different first question. Each pathway reflects its own procurement route, budget head and definition of value."
        />
        <div className="mt-14 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          {SEGMENTS.map((s) => (
            <Link
              key={s.slug}
              to="/solutions/$slug"
              params={{ slug: s.slug }}
              className="group card-lift relative flex min-h-[19rem] flex-col bg-surface p-6"
            >
              <div className="flex items-center justify-between gap-3">
                <span className="t-index text-silver">/{s.index}</span>
                <span className="flex flex-wrap justify-end gap-3">
                  {s.systems.map((id) => (
                    <SystemTag
                      key={id}
                      id={id}
                      label={
                        id === "delivery"
                          ? "Delivery"
                          : id === "obligation"
                            ? "Obligation"
                            : "Accountability"
                      }
                    />
                  ))}
                </span>
              </div>
              <h3 className="t-h4 mt-8">{s.name}</h3>
              <p className="t-serif-i mt-4 text-[1.0625rem] leading-snug text-graphite">
                “{s.question.quote}”
              </p>
              <span className="mt-auto flex items-center gap-2 pt-8 text-[0.875rem] text-ink">
                <span className="border-b border-current pb-0.5">See the pathway</span>
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  strokeWidth={1.5}
                />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 3 · THE ARGUMENT ══════════════════════ */

export function ArgumentSection() {
  return (
    <section className="rule bg-surface">
      <div className="shell band">
        <Statement>
          Most institutions can report <Say>what they announced</Say> and <Say>what they spent</Say>
          . Almost none can show <Say>the chain between them</Say>.
        </Statement>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16" data-reveal>
          <div className="max-w-xl">
            <p className="t-body text-graphite">
              The gap is structural, not personal. A department can produce a budget line and a
              press release. It usually cannot produce, on demand and in the language the citizen
              speaks, the record that connects the two — what was committed, what was verified, by
              whom, when, and with what stated limits.
            </p>
            <p className="t-body mt-5 text-graphite">
              That is not a reporting problem. It is an infrastructure problem — and it is the one
              we build for.
            </p>
            <Link to="/public-proof" className="link-arrow mt-8 text-ink">
              Read the full argument <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="lg:pt-1">
            <Eyebrow tone="steel">The operating loop every product implements</Eyebrow>
            <div className="mt-6">
              <OperatingLoop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════ 4 · DECODED: CORE → SYSTEMS → FAMILIES ══════════════════ */

export function PlatformSection() {
  return (
    <section className="rule bg-paper">
      <div className="shell band">
        <SectionHead
          eyebrow="What you buy"
          title="One core. Three systems. Six product families."
          brief="Every family addresses the same record model, ledger and language layer — so the second purchase is configuration, not a new implementation."
        />
        <div className="mt-14" data-reveal>
          <SystemsMap />
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
          <div>
            <Eyebrow tone="steel">The shared core</Eyebrow>
            <h3 className="t-h2 mt-6">Five layers beneath every product.</h3>
            <p className="t-small mt-5 max-w-sm text-graphite">
              Three are ours outright — the record model, the evidence ledger and the disclosure
              gate — with the Tamil civic evaluation set inside the language layer. The rest is
              assembled on open Indic models and India’s public digital infrastructure.
            </p>
            <Link to="/products" className="link-arrow mt-8 text-ink">
              The platform <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
          <div>
            {CORE.map((l) => (
              <IndexRow key={l.index} index={l.index} kicker={l.ownership} title={l.name}>
                {l.body}
              </IndexRow>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════ 5 · WHO BUYS WHAT — the solution map ══════════════════ */

export function SolutionMapSection() {
  return (
    <section className="rule bg-surface">
      <div className="shell band">
        <SectionHead
          eyebrow="The solution map"
          title="Which product each institution leads with."
          brief="Research & Policy Intelligence is the most widely shared family — the lead product for four of the eight. Compliance & Regtech is the fastest to deploy."
        />
        <div className="mt-12" data-reveal>
          <SolutionMatrix />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════ 6 · ONE WAY IN — the credit ladder ══════════════════ */

export function LadderSection() {
  return (
    <section className="relative overflow-hidden atmo text-inverse">
      <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
      <div className="shell band relative">
        <SectionHead
          tone="dark"
          eyebrow="How every engagement begins"
          title="One way in, for every institution. Each step is credited against the next."
          brief="Start with a free 90-minute Briefing on one question you cannot evidence today. Prove it on your own data in a day. Pilots are scoped to fit public low-value procurement lines, and the annual price is written into the pilot."
        />
        <div className="mt-14" data-reveal>
          <CreditLadder tone="dark" />
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link to="/engage" className="btn btn-on-dark">
            How to engage, step by step <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
          <Link to="/services" className="btn btn-ghost-on-dark">
            Every service, with its band
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════ 7 · START WHERE THE DEADLINE IS ══════════════════ */

export function CalendarSection() {
  return (
    <section className="rule bg-paper">
      <div className="shell band">
        <SectionHead
          eyebrow="Start where the deadline is"
          title="The dates that frame every engagement — statutory, and our own."
          brief="Two belong to the law, one to the budget cycle, and two are commitments we made in public — so you can hold us to them."
        />
        <div className="mt-16" data-reveal>
          <DatedTimeline tone="light" />
        </div>
        <div className="mt-14 grid gap-3 md:grid-cols-2">
          <Link
            to="/dpdp"
            className="group card-lift flex items-end justify-between gap-6 border border-line bg-surface p-6"
          >
            <span>
              <span className="t-label text-steel">Enterprise · GCCs · Regulators</span>
              <span className="t-h3 mt-3 block">DPDP readiness, before 13 May 2027</span>
            </span>
            <ArrowRight
              className="mb-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
              strokeWidth={1.25}
            />
          </Link>
          <Link
            to="/evidence"
            hash="trackers"
            className="group card-lift flex items-end justify-between gap-6 border border-line bg-surface p-6"
          >
            <span>
              <span className="t-label text-steel">Government · Municipal · Research</span>
              <span className="t-h3 mt-3 block">Publytics Tracker 1, on 31 March 2027</span>
            </span>
            <ArrowRight
              className="mb-1 h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1"
              strokeWidth={1.25}
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 8 · AI, STATED PLAINLY ══════════════════════ */

export function AiSection() {
  return (
    <section className="relative overflow-hidden atmo text-inverse">
      <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
      <div className="shell band relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow tone="inverse">AI at Publytics</Eyebrow>
            <h2 className="t-h2 mt-6 text-inverse">
              Every product uses AI somewhere. We state exactly where — and where it does not.
            </h2>
            <p className="t-small mt-6 max-w-md text-inverse-dim">
              Institutional trust requires bounded systems, not broad claims. Each product publishes
              its own disclosure, and the disclosure gate blocks a workflow that cannot produce one.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/trust" hash="ai-principles" className="btn btn-on-dark">
                Read our AI principles <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
          <div className="lg:pt-2">
            <DisclosureTriptych
              used="Classification, multilingual retrieval, anomaly detection, summarisation, and decision support within defined workflows."
              notDone="AI does not make high-impact public decisions, determine eligibility, or operate as a political persuasion system."
              review="People remain accountable for interpretation, escalation, approval, and any action that affects a person or institution."
            />
          </div>
        </div>

        <div className="mt-16 grid gap-px bg-line-inverse md:grid-cols-3">
          {[
            {
              t: "Tamil-first, benchmarked",
              b: "Built for Tamil, code-mixed, dialect and transliterated civic text, with a Tamil civic evaluation set so accuracy can be checked before acceptance.",
            },
            {
              t: "Data stays bounded",
              b: "Client data is never used to train models outside the client’s governed environment. Residency is written into the contract.",
            },
            {
              t: "Non-partisan by design",
              b: "We do not sell political targeting or persuasion systems to parties or candidates — and we log what we decline.",
            },
          ].map((c) => (
            <div key={c.t} className="border border-line-inverse bg-ink-raised/55 p-7">
              <h3 className="t-h4 text-inverse">{c.t}</h3>
              <p className="t-micro mt-3 text-inverse-dim">{c.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 9 · EVIDENCE — live now vs dated ══════════════════════ */

export function EvidenceSection() {
  return (
    <section className="bg-surface">
      <div className="shell band">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <div>
            <Eyebrow tone="steel">Why trust a young company</Eyebrow>
            <h2 className="t-h2 mt-6">
              The method is part of the product — and it is already public.
            </h2>
            <p className="t-body mt-6 max-w-md text-graphite">
              A field note proves practice. A tracker proves method. An impact study proves outcome.
              Until our first tracker ships on <span className="text-ink">31 March 2027</span>{" "}
              <Chip fact={FACTS.tracker1} />, the strongest proofs are the ones live today: the
              Method Standard, the refusal log, and a corrections policy that publishes our errors
              first.
            </p>
            <Link to="/evidence/method-standard" className="link-arrow mt-8 text-ink">
              The Method Standard, v1.0 <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
          <IntegrityChecklist />
        </div>

        <div className="mt-16 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4" data-reveal>
          {EVIDENCE.filter((e) => e.slug !== "method-standard")
            .slice(0, 4)
            .map((e) => (
              <Link
                key={e.slug}
                to={evidenceHref(e.slug)}
                className="group card-lift flex min-h-[13rem] flex-col bg-paper p-6"
              >
                <StatusBadge status={e.status} label={e.statusLabel} />
                <h3 className="t-h4 mt-6">{e.name}</h3>
                <p className="t-micro mt-3 text-graphite">{e.rule}</p>
                <ArrowUpRight
                  className="mt-auto h-4 w-4 self-end text-steel transition-colors group-hover:text-ink"
                  strokeWidth={1.5}
                />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 10 · THE BOUNDARY ══════════════════════ */

export function BoundarySection() {
  return (
    <section className="rule bg-paper">
      <div className="shell band">
        <BoundaryPanel>
          <h2 className="t-h2 text-seal">We sell to institutions. Never to contestants.</h2>
          <p className="t-body mt-6 max-w-2xl text-ink">
            Publytics does not provide political targeting or persuasion systems to political
            parties or candidates.
          </p>
          <p className="t-small mt-4 max-w-2xl text-graphite">
            Where our buyer is an elected representative, the engagement is with the public office —
            paid from public funds, discharging public duties, and its outputs pass to that office’s
            successor. Where an output concerns an election, it is published openly or not produced
            at all.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link to="/trust" hash="boundary" className="link-arrow text-seal">
              Read the boundary policy <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link to="/evidence/refusal-log" className="link-arrow text-seal">
              The refusal log <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </BoundaryPanel>
      </div>
    </section>
  );
}

/* ══════════════════════ 11 · CLOSE ══════════════════════ */

export function CtaSection() {
  return (
    <section id="contact" className="rule scroll-mt-28 bg-paper">
      <div className="shell band">
        <MegaCta />

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow tone="steel">Start a conversation</Eyebrow>
            <h2 className="t-h2 mt-6">
              Bring us the institutional question — not a software shopping list.
            </h2>
            <p className="t-body mt-6 max-w-md text-graphite">
              Every first meeting is the free Briefing: 90 minutes on one commitment, obligation or
              figure you cannot evidence today. No deck.
            </p>
          </div>
          <BriefingForm />
        </div>
      </div>
    </section>
  );
}
