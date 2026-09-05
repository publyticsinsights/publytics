# Publytics Design System v3

Derived from a measured analysis of the reference set (`Publitics Ref web` captures + palantir.com live audit), applied to the content architecture in `publytics-web.md`.

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

Neutrals carry a faint blue-violet cast so they read as chosen, not defaulted.

| Token | Value | Use |
|---|---|---|
| `ink` | `#1B1E26` | Primary text, dark surfaces |
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

**Faces:** Inter Tight (display) · Inter (text) · IBM Plex Mono (labels, data) — the closest open equivalents to the Alliance No.2 / No.1 / Apercu Mono pairing. Tamil: Noto Sans Tamil, set one step larger at 1.8 leading, never uppercase, never letter-spaced.

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
| **Full-screen menu** | Palantir hamburger | Seven-item IA |

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
