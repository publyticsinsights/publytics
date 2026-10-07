# publytics.in — audit and rebuild against the GTM Atlas

**Date:** 7 Oct 2026 · **Source:** *Publytics GTM Atlas* (3 Oct 2026, 73 pp.) · **Baseline:** `main` @ `d4c7efe`, verified identical to the live site (1,327 text nodes, all links and meta, 9 pages).

## 1. The Atlas's eight website findings (§03)

| # | Atlas finding | Status | Where |
|---|---|---|---|
| 1 | Consent Manager date: site said "June–August 2026"; Rule 4 is in force **13 Nov 2026** | Fixed | `content/dates.ts`, Products › Compliance, DPDP page |
| 2 | SDF audit date: site said "Q1 2027"; SDF duties (Rule 13) start **13 May 2027** | Fixed | same |
| 3 | Notification date: gazetted **13 Nov 2025**, PIB **14 Nov 2025** — cite both | Fixed | provenance chips cite both |
| 4 | Footer listed 8 items; Services 7 + 5; Workshop, FDA, Use Case Boost missing; Method Standard in two places | Fixed | Footer, menu and search are derived from one registry: 7 services + 4 programmes; Method Standard appears once, under Evidence |
| 5 | Forward-Deployed Analyst shown only as "Retainer" | Fixed | Published band **₹2.5–4.5 L per analyst-month**, minimum 6 months |
| 6 | No deep pages — every link landed on a generic section page | Fixed | 30 new deep pages: 8 institutions, 6 products, 11 services/programmes, 3 evidence, + How to engage, DPDP 2027 |
| 7 | Evidence mostly future-dated | Addressed | Status stated on every item (live / scheduled / in preparation); live proofs (Method Standard, refusal log, corrections) promoted to their own pages |
| 8 | TN example figures (78% / 35.11% / ~100%) illustrative | Flagged, not fixed | Prominent "illustrative — pending the sourced dataset" notice; **the sourced dataset still needs to be published** |

## 2. Additional findings from this audit

| Finding | Severity | Resolution |
|---|---|---|
| The briefing form showed "Request received" but **sent nothing** | High | Posts to `VITE_BRIEFING_ENDPOINT` when set and confirms only on 2xx; otherwise opens a pre-filled email and says so |
| Homepage "**Live** · Signals monitored 12" — an illustrative number in the reserved live-data colour | High | Replaced with four dated, sourced facts, each with a provenance chip |
| Search button did nothing | Medium | ⌘K / Ctrl+K / "/" command palette over every page, loaded on first use |
| Every sub-nav link pointed at the page it was on | Medium | Anchors (`#context`, `#procurement` …) — 3,273 internal links and anchors verified |
| "Third-party requests: 0" was false (Google Fonts) | Medium | Fonts self-hosted; measured 0 third-party requests |
| "JavaScript ≤ 120 KB" was not met (old site 124 KB) | Medium | Published as measured: 151–181 KB, **over budget** — framework baseline alone is 106 KB |
| LinkedIn / X / GitHub / Newsroom "buttons" were not links | Low | Removed until real URLs exist |
| "தமிழ்" shown as if a Tamil version existed | Low | "Tamil edition in preparation" |
| Relative canonical URLs; no sitemap; no OG image | Low | Absolute canonicals, `sitemap.xml` (38 URLs), `og.png` |
| Static export only discovered top-level routes | Build | Export now crawls rendered links; a route file that renders no page fails the build |

## 3. What the site now says, and what it deliberately does not

Following the decision on 7 Oct 2026: **published service bands + the FDA band + credit rules only.** No product, programme or retainer estimates, no named target accounts, bookings, sales tactics or competitor comparisons from the Atlas appear anywhere. Products state their commercial *model* and *timeline*; pilots are described as scoped to public low-value procurement lines.

Credit rules published for the first time (Atlas §08, recommended): Bootcamp 100% credited within 6 months · Record Model Workshop 50% credited against the pilot · DPDP Readiness Assessment credited toward year one of Compliance & Regtech.

## 4. Information architecture

```
/                        One evidence chain, eight institutions → core → solution map → ladder → calendar → AI → evidence → boundary
/solutions  (+8)         Why now · challenges · what we deploy (by fit) · engagement path · evidence · procurement file · FAQ
/products   (+6)         Does / does not · AI disclosure · who uses it (from Matrix A) · how it is bought · open standards
/services   (+11)        Ladder · services table with bands & credit · programmes · fit matrix (Matrix B)
/engage                  Ladder · five rules · ~7-month timeline · procurement routes for all eight institutions · calendar
/dpdp                    The three dates, corrected, with sources · assessment · platform · by institution · FAQ
/evidence   (+3)         Method Standard v1.0 · refusal log · corrections (incl. corrections to this site)
/public-proof /trust /company
```

## 5. Known-open items

1. **Contact address.** The form falls back to `hello@publytics.in` — confirm it exists, or set `VITE_CONTACT_EMAIL`. Set `VITE_BRIEFING_ENDPOINT` for real submissions.
2. **Sourced TN dataset** for the Public Proof example (Atlas §03 #8, 90-day plan).
3. **Refusal log and field notes** have no published entries; the pages say so rather than imply otherwise.
4. **Leadership profiles, DPDP posture statement, sub-processor list, accessibility conformance statement** — stated as "in preparation".
5. **JavaScript over budget** (151–181 KB vs 120 KB) and **LCP not yet measured** on the deployed site.
6. **Server routing (Caddy):** deep links return the homepage HTML instead of `/<route>/index.html`, and unknown paths return 200 instead of `404.html`. With 30 new deep pages this matters more — fix with `try_files {path} {path}/index.html` and `handle_errors` → `404.html`.
7. **GitHub Pages is disabled** on the repo, so the deploy workflow fails; publytics.in is served from a separate host.
8. Four buyer-voice quotes (municipal, foundations, universities, legislatures) are written from each segment’s Atlas text, as the Atlas gives no quote for them — review before launch.
