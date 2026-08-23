# Reposition Publytics around public-interest infrastructure

## Goal
Replace the current political-campaign narrative with the uploaded strategy’s core position: Publytics builds rigorous data and AI infrastructure for government, enterprise/GCC, and civic or research institutions.

## Homepage redesign
- Rework the header around audience-led Solutions, product families, Services, AI governance, Insights, and Company while keeping a prominent briefing action.
- Replace the hero with the strategy positioning line, three audience pathways, and a lightweight live-signal visual rather than campaign-market statistics.
- Add a three-audience proof band so government, enterprise, and civic/research visitors can immediately self-select.
- Replace VotHub’s seven campaign products with a systems map of the six strategy-defined product families.
- Add a plain-language AI module using the repeated pattern: where AI is used, what it does not do, and where humans review.
- Add a rigorous methodology/tracker module and an Insights preview without inventing clients, certifications, benchmarks, or outcomes.
- Reframe services, company messaging, footer, and the briefing form for institutional buyers; explicitly state the non-partisan boundary.
- End with segmented actions: government briefing, enterprise demo, and research partnership.

## Visual direction
- Move from a dark campaign-tech aesthetic to an editorial, institutional system: off-white content surfaces, graphite type, restrained navy brand color, and a distinct live-data accent used only in charts/status signals.
- Preserve the Publytics logo and brand visibility while improving hierarchy, typography, accessibility, responsive behavior, and low-bandwidth performance.
- Use real UI/data-style diagrams built with lightweight HTML/CSS; avoid stock imagery and unsupported decorative claims.

## Technical details
- Keep this as a focused single-page Phase 1 implementation using the existing TanStack Start structure.
- Update semantic design tokens in `src/styles.css`; update the homepage components and route metadata only.
- Keep the existing client-side briefing confirmation behavior, but revise fields and options for the three target audiences.
- Verify the production build, browser rendering, navigation, form submission, and mobile/desktop layouts.
