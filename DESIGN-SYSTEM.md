# Publytics Design System v4 — "the Atlas, published"

v3 derived the structural system from a measured Palantir audit. v4 (Oct 2026) recasts it in the **GTM Atlas's own editorial identity**: warm paper, Newsreader serif display with an italic champagne accent, mono annotations, dot-matrix texture, and dark "cover" sections with system-colour glows and film grain. The hierarchy rules (weight 400 everywhere, hairlines, radius 0) are unchanged — emphasis in display type is the serif *italic*, never a weight bump.

---

## 1. What the reference actually does

These are measured values, not impressions. Taken from computed styles on palantir.com and pixel sampling of the five reference captures.

| Property | Measured value |
|---|---|
| Display H1 | 80px / 78px line-height / **−3.4px** tracking / **weight 400** |
| Display alt | 80px / 80px / −4px / 400 |
| Section head | 34px / 36px / −1.7px / 400 |
| Large statement | 48px / 64px / −2px / 400 |
| Body | 18px / 25px / 400 |
| Small / links | 16px / 22.9px / 400 |
| Micro label | 10px / 16px / **+0.5px** / 400 / UPPERCASE |
| Faces | Alliance No.2 (display), Alliance No.1 (text), Apercu Mono Pro |
| Button | 40px tall, 16px/400, **radius 0**, 1px border |
| Large block | radius 4px |

**Dominant colours by pixel share:** `#FFFFFF` 39.5% · `#1D2124` 19.8% · `#FAFAFA` 8.2% · `#EFEFEF` 3.3% · lavender tint family `#F1EEFF`/`#D9D3F5` 4.6% · hairline `#DBDBDB` · mid-grey `#4C4D4F`.

### The three rules that produce the "premium" read

1. **Nothing is bold.** Weight 400 at every size, including buttons and headings. Hierarchy comes from *size and tracking*, never from weight.
2. **Negative tracking scales with size** (−0.045em at display → 0 at body), and display line-height drops **below 1.0**.
3. **Radius is 0–4px, and colour is almost absent.** Saturated colour appears only inside diagrams and series artwork.

---

## 2. Publytics tokens

v4 neutrals are warm — ink-and-paper, like the Atlas — not blue-screen grey. Paper `#FAF8F4`, line `#E4DFD3`, tint `#F3EFE5`. **Champagne** `#CBB488` (dark grounds) / `#8A6D3E` (light) is the Atlas cover's accent: serif-italic display emphasis, ghost numerals and commitment markers only — never buttons, never body text.

| Token | Value | Use |
|---|---|---|
| `ink` | `#1C1B17` (v4, warm) | Primary text, dark surfaces |
| `ink-raised` | `#23262E` | Raised surface on dark |
| `ink-deep` | `#14161C` | Announcement bar, deepest ground |
| `surface` | `#FFFFFF` | Cards, reading surface |
| `paper` | `#FAFAFA` | Page ground |
| `mist` | `#EFEFEF` | Alternating band, light CTA |
| `tint` | `#EEF0F7` | Inset feature panel |
| `line` | `#DBDBDB` | Hairlines |
| `graphite` | `#4A4D55` | Body text |
| `steel` | `#74777E` | Labels, captions |
| `brand` | `#1B2A4E` | Primary action hover only |

### Reserved colour — the rule *is* the system

- **Live / verdigris** `#0F6B60` text, `#17857A` mark, `#4FC7B4` on dark — means **this data is real and current**. Never decoration, never a button.
- **Seal** `#8E2A1F` / `#A8382A` / tint `#F7E8E4` — means **Publytics said no, or Publytics was wrong**. Boundary, refusal log, corrections. Nothing else, ever.

> A visitor who spends four minutes on the site should be able to state the colour rule without being told it.

### System key (added with the GTM Atlas rebuild, Oct 2026)

One hue per **system the buyer purchases**, taken from the Atlas legend (teal Delivery, rust Obligation, indigo Accountability) and shifted so it never collides with the two reserved colours:

| Token | Value | Means |
|---|---|---|
| `sys-delivery` | `#22668A` petrol | Delivery system — Civic Data, GovTech Workflow |
| `sys-obligation` | `#A8601F` ochre | Obligation system — Compliance & Regtech |
| `sys-accountability` | `#4B48A6` indigo | Accountability system — Research & Policy, Narrative & Media, Fundraising & CSR |

Used **only** on system tags (`.sys-tag`), matrix headers, fit marks and diagram strokes — never on buttons, never for live data, never for refusals.

---

## 3. Type

| Role | Class | Size / LH / Tracking |
|---|---|---|
| Display XL | `t-display-xl` | clamp(44→80) / 0.96 / −0.043em |
| Display | `t-display` | clamp(36→56) / 1.0 / −0.04em |
| H2 | `t-h2` | clamp(28→34) / 1.06 / −0.038em |
| H3 | `t-h3` | clamp(22→24) / 1.18 / −0.025em |
| Lead | `t-lead` | clamp(18→20) / 1.45 |
| Body | `t-body` | 18 / 1.45 |
| Small | `t-small` | 16 / 1.45 |
| Label | `t-label` | 10 / uppercase / +0.09em / mono |

**Faces (v4):** Newsreader, opsz pinned at 42 (display serif, roman + italic — the open Tiempos equivalent, matching the Atlas) · Inter (text, UI, H4 and below) · IBM Plex Mono (labels, data). Tamil: Noto Sans Tamil, set one step larger at 1.8 leading, never uppercase, never letter-spaced. The serif is reserved for display sizes (H3 up), exactly as the Atlas reserves it for headlines.

---

## 4. Signature devices

| Device | Reference origin | Publytics use |
|---|---|---|
| **Provenance chip** | — (Publytics original) | After every figure. No chip, no number. |
| **`/0.1` index rows** | Palantir product rows | Platform layers, programmes, solutions |
| **Pill tab switcher** | Own/Route/Govern/Deploy/Learn | Record · Verify · Publish · Challenge · Correct |
| **Disclosure triptych** | — (Publytics original) | Where AI is used / does not / human review |
| **Boundary panel** | — (Publytics original) | Seal-left-rule panel, refusals only |
| **Series issue card** | "Palantir Explained" cards | Evidence series, one colour per issue |
| **Twin mega CTA** | Request a Demo / Start Building | Request a briefing / Read Public Proof |
| **Notch card** | Cut-corner quote cards | Institutional questions, procurement facts |
| **Inset tint panel** | Ontology hero | Platform architecture feature |
| **Exploded isometric stack** | Ontology layer diagram | The five platform layers, mono leader lines |
| **Full-screen menu** | Palantir hamburger | Full index, derived from the content registries |
| **Fit marks** | Atlas matrix notation | ● primary/high · ◐ secondary/medium · ○ optional/low · — not offered |
| **Solution matrix** | Atlas Matrix A | Institution × product family, every cell derived from `content/matrices.ts` |
| **Credit ladder** | Atlas §09 | Briefing → Bootcamp → Workshop/Assessment → Pilot → Annual → Expand, with published bands |
| **Dated timeline** | Atlas §08 | Statutory dates and Publytics commitments, each with its provenance |
| **Status badge** | — | live (verdigris) · open · scheduled · in preparation · in scoping — status is stated, never implied |
| **Command palette** | — | ⌘K / Ctrl+K / "/" search over every page; loaded on first use |

---

## 5. Layout

- Container **1352px** max, 40px gutters desktop / 20px mobile.
- Band rhythm: 72px → 96px → 120px.
- Hairlines separate sections; borders are used sparingly.
- Radius 0 default, 4px on mega-CTA and inset panels.

---

## 6. Governance gates

A page does not ship unless:

1. Every number carries a provenance chip.
2. Every AI claim carries a populated disclosure triptych.
3. Every product page carries a *what it does not do* block.
4. Every sentence is present indicative or a dated commitment — never conditional.
5. Contrast, keyboard path and focus states pass; the page renders with JS disabled.
6. It is inside the performance budget, measured.
7. If in the Tamil launch scope, the Tamil version ships with it.


---

## 7. Content architecture (Oct 2026)

Every page renders from typed registries in `src/content/`, mirroring the GTM Atlas data model — a **segment** buys **product families**, enters through **services & programmes**, and is shown **evidence**:

| File | Holds |
|---|---|
| `types.ts` | The model, with the public-content rule: only published bands are prices |
| `segments/meta.ts` + `segments/*.ts` | The eight institutions — light fields (menus, cards, search) apart from the full deep-dives (code-split) |
| `families.ts` · `offerings.ts` · `evidence.ts` | Six families, seven services + four programmes, seven kinds of evidence |
| `matrices.ts` | Atlas Matrices A–C. Every "who leads with what" on the site is derived from here |
| `systems.ts` · `dates.ts` | Three systems + five core layers; every cited date with its provenance |
| `nav.ts` | Menu, footer and search index — derived, so a new registry entry appears everywhere |

A fact is stated once. Pages never type a list the registries already hold.
