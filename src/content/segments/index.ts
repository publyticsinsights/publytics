import type { Segment, SegmentSlug } from "../types";
import { SEGMENT_ORDER } from "../matrices";
import { government } from "./government";
import { municipal } from "./municipal";
import { regulators } from "./regulators";
import { enterprise } from "./enterprise";
import { foundations } from "./foundations";
import { universities } from "./universities";
import { newsrooms } from "./newsrooms";
import { legislatures } from "./legislatures";

const BY_SLUG: Record<SegmentSlug, Segment> = {
  government,
  municipal,
  regulators,
  enterprise,
  foundations,
  universities,
  newsrooms,
  legislatures,
};

export const SEGMENTS: Segment[] = SEGMENT_ORDER.map((slug) => BY_SLUG[slug]);

export const segmentBySlug = (slug: string): Segment | undefined =>
  SEGMENTS.find((s) => s.slug === slug);
