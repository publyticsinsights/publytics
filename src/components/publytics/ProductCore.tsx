/**
 * The shared core, drawn in the same isometric grammar as the platform
 * stack — but making the Products page's own argument rather than the
 * homepage's.
 *
 * The homepage stack answers "what is the platform made of" (five layers).
 * This answers "why does the second purchase cost less than the first":
 * three systems, six families, all resolving to one shared core.
 *
 * The cube counts are not decorative — they are the real family counts
 * per system (delivery 2, obligation 1, accountability 3).
 */

// Centre line. The viewBox is wider than the drawing so the longest
// annotation ("LANGUAGE LAYER · TAMIL-FIRST", which at 10px mono with
// 0.09em tracking runs ~193px) clears the left edge.
const MID = 380;

const SYSTEMS = [
  { name: "DELIVERY SYSTEM", count: 2, cx: 175 },
  { name: "OBLIGATION SYSTEM", count: 1, cx: MID },
  { name: "ACCOUNTABILITY SYSTEM", count: 3, cx: 585 },
];

const CORE = [
  { label: "CIVIC RECORD MODEL", side: "left", cy: 238, live: false },
  { label: "EVIDENCE LEDGER", side: "right", cy: 302, live: true },
  { label: "LANGUAGE LAYER · TAMIL-FIRST", side: "left", cy: 366, live: false },
];

const W = 140;   // plane half-width
const H = 80;    // plane half-height
const WALL = 9;  // plane thickness
const CW = 15;   // cube half-width
const CH = 8.5;  // cube half-height
const CD = 14;   // cube depth
const CLUSTER_Y = 120;

/** Grid positions per family count, ordered back-to-front for correct overlap. */
function cubeGrid(count: number): [number, number][] {
  if (count === 1) return [[0, 0]];
  if (count === 2) return [[0, 0], [1, 0]];
  return [[0, 0], [1, 0], [0, 1]];
}

function Cube({ x, y }: { x: number; y: number }) {
  return (
    <g>
      {/* left wall */}
      <path
        d={`M ${x - CW} ${y} L ${x} ${y + CH} L ${x} ${y + CH + CD} L ${x - CW} ${y + CD} Z`}
        fill="#ffffff"
        fillOpacity="0.07"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="0.7"
      />
      {/* right wall */}
      <path
        d={`M ${x + CW} ${y} L ${x} ${y + CH} L ${x} ${y + CH + CD} L ${x + CW} ${y + CD} Z`}
        fill="#ffffff"
        fillOpacity="0.04"
        stroke="rgba(255,255,255,0.30)"
        strokeWidth="0.7"
      />
      {/* top face */}
      <polygon
        points={`${x},${y - CH} ${x + CW},${y} ${x},${y + CH} ${x - CW},${y}`}
        fill="#ffffff"
        fillOpacity="0.15"
        stroke="rgba(255,255,255,0.55)"
        strokeWidth="0.8"
      />
    </g>
  );
}

export function ProductCore({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 760 470"
      className={className}
      role="img"
      aria-label="Three systems and six product families resolving to one shared core: the civic record model, the evidence ledger, and the Tamil-first language layer."
    >
      <defs>
        <linearGradient id="pc-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.11" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {/* ── the three systems, as clusters of family cubes ── */}
      {SYSTEMS.map((sys) => {
        const cells = cubeGrid(sys.count);
        return (
          <g key={sys.name}>
            <text
              x={sys.cx}
              y={62}
              textAnchor="middle"
              fill="rgba(255,255,255,0.66)"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.09em" }}
            >
              {sys.name}
            </text>
            <text
              x={sys.cx}
              y={78}
              textAnchor="middle"
              fill="rgba(255,255,255,0.34)"
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.09em" }}
            >
              /{sys.count} {sys.count === 1 ? "FAMILY" : "FAMILIES"}
            </text>

            {cells
              .slice()
              .sort((a, b) => a[0] + a[1] - (b[0] + b[1]))
              .map(([i, j], n) => (
                <Cube key={n} x={sys.cx + (i - j) * CW} y={CLUSTER_Y + (i + j) * CH} />
              ))}

            {/* connector down into the core */}
            <path
              d={`M ${sys.cx} 162 L ${sys.cx} 186 L ${MID} 200 L ${MID} ${238 - H / 2 - 6}`}
              fill="none"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth="0.9"
              strokeDasharray="2 4"
            />
          </g>
        );
      })}

      {/* ── the shared core ── */}
      {CORE.map((layer, i) => {
        const stroke = layer.live ? "#4FC7B4" : "rgba(255,255,255,0.45)";
        const labelX = layer.side === "right" ? MID + W + 24 : MID - W - 24;
        const anchor = layer.side === "right" ? "start" : "end";
        const lineFrom = layer.side === "right" ? MID + W - 4 : MID - W + 4;
        const lineTo = layer.side === "right" ? MID + W + 16 : MID - W - 16;

        return (
          <g key={layer.label}>
            {/* thickness */}
            <path
              d={`M ${MID - W} ${layer.cy} L ${MID} ${layer.cy + H / 2} L ${MID + W} ${layer.cy} L ${MID + W} ${layer.cy + WALL} L ${MID} ${layer.cy + H / 2 + WALL} L ${MID - W} ${layer.cy + WALL} Z`}
              fill="#ffffff"
              fillOpacity="0.06"
            />
            {/* face */}
            <polygon
              points={`${MID},${layer.cy - H / 2} ${MID + W},${layer.cy} ${MID},${layer.cy + H / 2} ${MID - W},${layer.cy}`}
              fill="url(#pc-face)"
              stroke={stroke}
              strokeWidth="1"
            />

            {/* record marks */}
            {Array.from({ length: 5 }).map((_, r) =>
              Array.from({ length: 7 }).map((__, c) => {
                const u = (c - 3) / 7;
                const v = (r - 2) / 5;
                const x = MID + (u + v) * W * 0.9;
                const y = layer.cy + (v - u) * (H / 2) * 0.9;
                const on = (r * 7 + c + i * 5) % 4 === 0;
                return (
                  <circle
                    key={`${r}-${c}`}
                    cx={x}
                    cy={y}
                    r={on ? 2.3 : 1}
                    fill={layer.live && on ? "#4FC7B4" : "#ffffff"}
                    opacity={on ? 0.85 : 0.28}
                  />
                );
              }),
            )}

            {/* leader line + annotation */}
            <line x1={lineFrom} y1={layer.cy} x2={lineTo} y2={layer.cy} stroke="rgba(255,255,255,0.34)" strokeWidth="0.8" />
            <text
              x={labelX}
              y={layer.cy + 3.5}
              textAnchor={anchor}
              fill={layer.live ? "#4FC7B4" : "rgba(255,255,255,0.62)"}
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.09em" }}
            >
              {layer.label}
            </text>
          </g>
        );
      })}

      {/* ── the claim, stated under the drawing ── */}
      <text
        x={MID}
        y="442"
        textAnchor="middle"
        fill="rgba(255,255,255,0.42)"
        style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.09em" }}
      >
        ONE RECORD MODEL · ONE EVIDENCE LEDGER · ONE LANGUAGE LAYER
      </text>
    </svg>
  );
}
