import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { BriefingForm } from "./BriefingForm";
import { PlatformStack } from "./PlatformStack";
import {
  BoundaryPanel,
  DisclosureTriptych,
  Eyebrow,
  IndexRow,
  IntegrityChecklist,
  IssueCard,
  MegaCta,
  NotchCard,
  OperatingLoop,
  ProvenanceChip,
  Say,
  Statement,
} from "./system";

/* ══════════════════════════ 1 · HERO ══════════════════════════ */

export function Hero() {
  return (
    <section className="relative -mt-[4.75rem] overflow-hidden bg-ink pt-[4.75rem] text-inverse">
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
            When a citizen asks whether the promise was kept, who answers?
          </h1>
          <p className="t-lead mt-8 max-w-xl text-inverse-dim">
            Publytics builds the data and AI infrastructure that public institutions run on — the layer between
            government, the people it serves, and the organisations that work alongside both.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/public-proof" className="btn btn-on-dark">
              Read the argument <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link to="/company" hash="contact" className="btn btn-ghost-on-dark">
              Request a briefing
            </Link>
          </div>
        </div>

        <div className="relative">
          <PlatformStack className="h-auto w-full" />
          <p className="t-label mt-2 text-center text-inverse-faint">
            The platform · five layers · illustrative
          </p>
        </div>
      </div>

      {/* live signal strip */}
      <div className="relative border-t border-line-inverse">
        <div className="shell flex flex-wrap items-center gap-x-10 gap-y-4 py-5">
          <span className="t-label flex items-center gap-2 text-live-bright">
            <span className="h-1.5 w-1.5 rounded-full bg-live-bright motion-safe:animate-pulse" />
            Live
          </span>
          {[
            ["Signals monitored", "12"],
            ["Languages", "Tamil-first"],
            ["Review", "Human-led"],
            ["Method Standard", "v1.0"],
          ].map(([k, v]) => (
            <div key={k} className="flex items-baseline gap-3">
              <span className="t-label text-inverse-faint">{k}</span>
              <span className="figure-num text-[0.9375rem] text-inverse">{v}</span>
            </div>
          ))}
          <p className="t-label ml-auto hidden text-inverse-faint lg:block">
            Illustrative interface. No client or citizen data is shown.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 2 · AUDIENCE INDEX ══════════════════════ */

const AUDIENCES = [
  "Government & public sector",
  "Municipal & urban bodies",
  "Regulators & supervisory bodies",
  "Enterprise & GCCs",
  "Foundations & philanthropy",
  "Universities & research",
  "Newsrooms & media",
  "Legislatures & public offices",
];

export function AudienceIndex() {
  return (
    <section className="bg-paper">
      <div className="shell band-tight">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <Eyebrow tone="steel">Start with your institution</Eyebrow>
          <Link to="/solutions" className="t-label ml-auto border border-line-strong px-3 py-2 text-steel transition-colors hover:border-ink hover:text-ink">
            See all
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {AUDIENCES.map((a) => (
            <Link
              key={a}
              to="/solutions"
              className="pill hover:bg-ink hover:text-paper"
            >
              {a}
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
    <section className="rule bg-paper">
      <div className="shell band">
        <Statement>
          Most institutions can report <Say>what they announced</Say> and <Say>what they spent</Say>. Almost none can
          show <Say>the chain between them</Say>.
        </Statement>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="max-w-xl">
            <p className="t-body text-graphite">
              The gap is structural, not personal. A department can produce a budget line and a press release. It
              usually cannot produce, on demand and in the language the citizen actually speaks, the record that
              connects the two — what was committed, what was verified, by whom, when, and with what stated limits.
            </p>
            <p className="t-body mt-5 text-graphite">
              Owning that evidence chain is what separates an institution that is accountable from one that is merely
              audited. It is not a reporting problem. It is an infrastructure problem, and it is the one we build for.
            </p>
            <Link to="/public-proof" className="link-arrow mt-8 text-ink">
              Read the full argument <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="lg:pt-1">
            <Eyebrow tone="steel">The operating loop</Eyebrow>
            <div className="mt-6">
              <OperatingLoop />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 4 · THE PLATFORM ══════════════════════ */

const LAYERS = [
  {
    index: "0.1",
    kicker: "One way to say “a promise,” in every department",
    title: "Civic record model",
    body: "The typed model — promise, scheme, obligation, department, ward, grievance, delivery event, beneficiary, regulation — that all six product families address. Multilingual at the schema, not at the presentation layer.",
  },
  {
    index: "0.2",
    kicker: "Every fact carries the record of how we know it",
    title: "Evidence ledger",
    body: "Source, collection method, version, effective date, confidence and error rate attach to the fact, not to the report. No number renders anywhere in a Publytics product without them.",
  },
  {
    index: "0.3",
    kicker: "Tamil-first means benchmarked, not translated",
    title: "Language layer",
    body: "Retrieval, classification and summarisation over Tamil, Tamil-English code-mixing, dialect and transliteration in civic text. Built on open Indic models; the benchmark and the civic evaluation set are ours.",
  },
  {
    index: "0.4",
    kicker: "A date you can hold us to",
    title: "Publication engine",
    body: "Ships a tracker on an announced date, versioned, with a diff against the previous edition and a machine-readable dataset.",
  },
  {
    index: "0.5",
    kicker: "A workflow that cannot produce its disclosure does not ship",
    title: "Disclosure gate",
    body: "The three-line pattern — where AI is used, what it does not do, who reviews — enforced in code rather than written in copy.",
  },
];

export function PlatformSection() {
  return (
    <section className="rule bg-surface">
      <div className="shell band">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <Eyebrow tone="steel">The platform</Eyebrow>
            <h2 className="t-h2 mt-6">One public-interest infrastructure layer. Five parts.</h2>
          </div>
          <p className="t-small max-w-md text-graphite lg:pb-1">
            Modular enough to enter through one operational need. Coherent enough to become shared infrastructure
            across an institution — because every product addresses the same record model, the same ledger, and the
            same language layer.
          </p>
        </div>

        <div className="mt-14">
          {LAYERS.map((l) => (
            <IndexRow key={l.index} index={l.index} kicker={l.kicker} title={l.title} href="/products" linkLabel="Explore">
              {l.body}
            </IndexRow>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════ 5 · THREE SYSTEMS / SIX FAMILIES ══════════════════ */

const SYSTEMS = [
  {
    name: "The delivery system",
    line: "Know who you serve, and prove how you served them.",
    body: "Registries connected, cases routed and closed, service levels visible by ward, commitments tracked from announcement to commissioning.",
    families: ["Civic Data & Constituent Intelligence", "GovTech Workflow & Identity"],
  },
  {
    name: "The obligation system",
    line: "Show the regulator the discharge, not the intention.",
    body: "Regulatory tracking and audit tooling built around India’s compliance calendar — and around the DPDP clock that runs to 13–14 May 2027.",
    families: ["Compliance & Regtech"],
  },
  {
    name: "The accountability system",
    line: "Publish a number that survives a challenge.",
    body: "Field research, legislative and manifesto tracking, multilingual narrative monitoring, and the donor and grant layer that connects a mandate to a programme.",
    families: ["Research & Policy Intelligence", "Narrative & Media Intelligence", "Fundraising & CSR Infrastructure"],
  },
];

export function SystemsSection() {
  return (
    <section className="rule bg-paper">
      <div className="shell band">
        <Eyebrow tone="steel">What you buy</Eyebrow>
        <h2 className="t-h2 mt-6 max-w-3xl">Three systems. Six product families.</h2>

        <div className="mt-12 grid gap-px bg-line md:grid-cols-3">
          {SYSTEMS.map((s) => (
            <article key={s.name} className="flex flex-col bg-paper p-7 lg:p-8">
              <p className="t-label text-live">{s.name}</p>
              <h3 className="t-h3 mt-5">{s.line}</h3>
              <p className="t-small mt-4 text-graphite">{s.body}</p>
              <ul className="mt-7 space-y-2.5 pt-6 rule">
                {s.families.map((f) => (
                  <li key={f} className="text-[0.9375rem] leading-snug text-graphite">{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/products" className="link-arrow text-ink">
            See all product families <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 6 · AI, STATED PLAINLY ══════════════════════ */

export function AiSection() {
  return (
    <section className="relative overflow-hidden bg-ink text-inverse">
      <div aria-hidden="true" className="mesh-inverse absolute inset-0" />
      <div className="shell band relative">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <div>
            <Eyebrow tone="inverse">AI at Publytics</Eyebrow>
            <h2 className="t-h2 mt-6 text-inverse">
              Every product uses AI somewhere. We state exactly where — and where it does not.
            </h2>
            <p className="t-small mt-6 max-w-md text-inverse-dim">
              Institutional trust requires bounded systems, not broad claims. The disclosure pattern below is generated
              from each product’s own configuration, not written by hand — so a workflow that cannot produce its
              disclosure does not ship.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/trust" className="btn btn-on-dark">
                Read our AI principles <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
              </Link>
              <Link to="/company" hash="contact" className="btn btn-ghost-on-dark">Discuss AI governance</Link>
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
            { t: "Tamil-first, multilingual", b: "Designed for Indian-language, dialect, and code-mixed contexts — not English-first assumptions.", link: "See the benchmark" },
            { t: "Data stays bounded", b: "Client constituent data is not used to train models outside the client’s governed environment." },
            { t: "Non-partisan by design", b: "We do not sell political targeting or persuasion systems to parties or candidates." },
          ].map((c) => (
            <div key={c.t} className="bg-ink p-7">
              <h3 className="t-h4 text-inverse">{c.t}</h3>
              <p className="t-micro mt-3 text-inverse-dim">{c.b}</p>
              {c.link && (
                <Link to="/trust" className="link-arrow mt-6 text-live-bright">
                  {c.link} <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 7 · PROOF OF RIGOUR ══════════════════════ */

export function RigourSection() {
  return (
    <section className="bg-surface">
      <div className="shell band">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-start lg:gap-16">
          <div>
            <Eyebrow tone="steel">Proof of rigour</Eyebrow>
            <h2 className="t-h2 mt-6">The method is part of the product.</h2>
            <p className="t-body mt-6 max-w-md text-graphite">
              Every published tracker and research output makes its evidence inspectable: what was measured, how it
              was collected, who funded it, when it changed, and what its limitations are.
            </p>
            <p className="t-small mt-6 max-w-md text-steel">
              An example, with its provenance attached: DPDP full adjudicatory enforcement lands{" "}
              <span className="text-ink">13–14 May 2027</span>{" "}
              <ProvenanceChip
                source="DPDP Rules, Schedule"
                method="statutory commencement date"
                date="14 Nov 2025"
                version="1"
                limitations="Commencement date as notified; subject to further notification."
              />
              . Click the marker to open the record.
            </p>
            <Link to="/evidence" className="link-arrow mt-8 text-ink">
              The Method Standard, v1.0 <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
          <IntegrityChecklist />
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 8 · EVIDENCE ══════════════════════ */

export function EvidenceSection() {
  return (
    <section className="rule bg-paper">
      <div className="shell band">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow tone="steel">Evidence</Eyebrow>
            <h2 className="t-h2 mt-6 max-w-2xl">Research built to be read, cited, and challenged.</h2>
          </div>
          <Link to="/evidence" className="link-arrow text-ink">
            All evidence <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <IssueCard
            issue="01"
            title="Publytics Is Not a Dashboard Company"
            subtitle="A dashboard reports a state. Evidence records a chain."
            theme="indigo"
            status="Publishing soon"
          />
          <IssueCard
            issue="02"
            title="The Method Standard"
            subtitle="Five items. Certify your output against them, whoever you are."
            theme="teal"
            status="v1.0 · published"
          />
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            { label: "Trackers", body: "Method-led public evidence products with downloadable data and clear provenance.", when: "First edition 31 March 2027" },
            { label: "Field notes", body: "Concise observations from implementation, standards work, and institutional practice.", when: "Published fortnightly" },
            { label: "The refusal log", body: "Every engagement we declined under our boundary, anonymised, dated, with the criteria applied.", when: "Updated as it happens" },
          ].map((c) => (
            <article key={c.label} className="flex flex-col justify-between border border-line bg-surface p-6">
              <div>
                <h3 className="t-h4">{c.label}</h3>
                <p className="t-micro mt-3 text-graphite">{c.body}</p>
              </div>
              <p className="t-label mt-10 text-live">{c.when}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 9 · THE BOUNDARY ══════════════════════ */

export function BoundarySection() {
  return (
    <section className="bg-paper">
      <div className="shell pb-20 lg:pb-24">
        <BoundaryPanel>
          <h2 className="t-h2 text-seal">We sell to institutions. Never to contestants.</h2>
          <p className="t-body mt-6 max-w-2xl text-ink">
            Publytics does not provide political targeting or persuasion systems to political parties or candidates.
          </p>
          <p className="t-small mt-4 max-w-2xl text-graphite">
            Where our buyer is an elected representative, the engagement is with the public office — paid from public
            funds, discharging public duties, and its outputs pass to that office’s successor. Where an output
            concerns an election, it is published openly or not produced at all.
          </p>
          <div className="mt-8 flex flex-wrap gap-6">
            <Link to="/trust" className="link-arrow text-seal">
              Read the boundary policy <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
            <Link to="/evidence" className="link-arrow text-seal">
              The refusal log <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>
        </BoundaryPanel>
      </div>
    </section>
  );
}

/* ══════════════════════ 10 · WHAT WE ARE ASKED ══════════════════════ */

export function VoicesSection() {
  return (
    <section className="rule bg-paper">
      <div className="shell band">
        <Eyebrow tone="steel">What institutions ask us first</Eyebrow>
        <h2 className="t-h2 mt-6 max-w-3xl">The questions that start every engagement.</h2>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <NotchCard label="Secretary, state department">
            “We have the announcement and we have the spend. What we cannot produce is the line between them, by ward,
            in Tamil, on the day someone asks.”
          </NotchCard>
          <NotchCard label="Compliance officer, GCC">
            “We have a policy. What we do not have is a record that would survive an inspection in May 2027.”
          </NotchCard>
          <NotchCard label="Supervisory body">
            “Returns arrive on a cycle, self-declared, in formats that resist comparison. We are supervising a
            population we cannot see.”
          </NotchCard>
          <NotchCard label="Newsroom, data desk">
            “We need the dataset, the method, and the ability to disagree with you in print.”
          </NotchCard>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════ 11 · CLOSE ══════════════════════ */

export function CtaSection() {
  return (
    <section id="contact" className="rule bg-paper scroll-mt-28">
      <div className="shell band">
        <MegaCta />

        <div className="mt-20 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <Eyebrow tone="steel">Start a conversation</Eyebrow>
            <h2 className="t-h2 mt-6">Bring us the institutional question — not a software shopping list.</h2>
            <p className="t-body mt-6 max-w-md text-graphite">
              We route your enquiry to the right conversation: a government briefing, an enterprise demonstration, or
              a research partnership.
            </p>
          </div>
          <BriefingForm />
        </div>
      </div>
    </section>
  );
}
