/**
 * The platform stack, drawn as an exploded isometric instrument with
 * monospace leader-line annotations — the reference's diagram grammar,
 * carrying Publytics' own five layers.
 *
 * Not decoration: each plane is a layer of the architecture, and the
 * labels are the layer names used everywhere else on the site.
 */

const LAYERS = [
  { label: "PUBLICATION ENGINE", side: "right", dense: false },
  { label: "DISCLOSURE GATE", side: "left", dense: false },
  { label: "LANGUAGE LAYER · TAMIL-FIRST", side: "right", dense: true },
  { label: "EVIDENCE LEDGER", side: "left", dense: true },
  { label: "CIVIC RECORD MODEL", side: "right", dense: false },
];

const W = 150;
const H = 86;
const GAP = 62;
const CX = 300;
const TOP = 74;

function diamond(cx: number, cy: number, w = W, h = H) {
  return `${cx},${cy - h / 2} ${cx + w},${cy} ${cx},${cy + h / 2} ${cx - w},${cy}`;
}

export function PlatformStack({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 700 500"
      className={className}
      role="img"
      aria-label="The Publytics platform: five layers — civic record model, evidence ledger, language layer, disclosure gate, and publication engine."
    >
      <defs>
        <linearGradient id="ps-face" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0.03" />
        </linearGradient>
      </defs>

      {LAYERS.map((layer, i) => {
        const cy = TOP + i * GAP;
        const isLive = layer.dense;
        const stroke = isLive ? "#4FC7B4" : "rgba(255,255,255,0.42)";
        const labelX = layer.side === "right" ? CX + W + 26 : CX - W - 26;
        const anchor = layer.side === "right" ? "start" : "end";
        const lineFrom = layer.side === "right" ? CX + W - 4 : CX - W + 4;
        const lineTo = layer.side === "right" ? CX + W + 18 : CX - W - 18;

        return (
          <g key={layer.label}>
            {/* side wall, giving each plane thickness */}
            <path
              d={`M ${CX - W} ${cy} L ${CX} ${cy + H / 2} L ${CX + W} ${cy} L ${CX + W} ${cy + 9} L ${CX} ${cy + H / 2 + 9} L ${CX - W} ${cy + 9} Z`}
              fill="#ffffff"
              fillOpacity="0.06"
            />
            {/* face */}
            <polygon points={diamond(CX, cy)} fill="url(#ps-face)" stroke={stroke} strokeWidth="1" />

            {/* record marks on the face */}
            {Array.from({ length: isLive ? 5 : 3 }).map((_, r) =>
              Array.from({ length: isLive ? 7 : 5 }).map((__, c) => {
                const cols = isLive ? 7 : 5;
                const rows = isLive ? 5 : 3;
                const u = (c - (cols - 1) / 2) / cols;
                const v = (r - (rows - 1) / 2) / rows;
                const x = CX + (u + v) * W * 0.92;
                const y = cy + (v - u) * (H / 2) * 0.92;
                const on = (r * cols + c + i * 3) % 4 === 0;
                return (
                  <circle
                    key={`${r}-${c}`}
                    cx={x}
                    cy={y}
                    r={on ? 2.4 : 1.1}
                    fill={isLive && on ? "#4FC7B4" : "#ffffff"}
                    opacity={on ? 0.85 : 0.3}
                  />
                );
              }),
            )}

            {/* leader line + annotation */}
            <line x1={lineFrom} y1={cy} x2={lineTo} y2={cy} stroke="rgba(255,255,255,0.34)" strokeWidth="0.8" />
            <text
              x={labelX}
              y={cy + 3.5}
              textAnchor={anchor}
              fill={isLive ? "#4FC7B4" : "rgba(255,255,255,0.62)"}
              style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: "10px", letterSpacing: "0.09em" }}
            >
              {layer.label}
            </text>
          </g>
        );
      })}

      {/* the vertical spine tying the layers together */}
      <line x1={CX} y1={TOP - 30} x2={CX} y2={TOP + (LAYERS.length - 1) * GAP + 60} stroke="rgba(255,255,255,0.16)" strokeWidth="1" strokeDasharray="2 4" />
    </svg>
  );
}
