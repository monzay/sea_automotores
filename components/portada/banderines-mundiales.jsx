"use client";

const PALETA = [
  "#74ACDF",
  "#ffffff",
  "#74ACDF",
  "#ffffff",
  "#5599CC",
  "#ffffff",
];

function generarBanderines(n, vw) {
  const margen = vw < 500 ? 28 : 40;
  const ancho  = vw - margen * 2;

  return Array.from({ length: n }, (_, i) => {
    const x             = Math.round(margen + i * (ancho / (n - 1)));
    const entradaDelay  = (i * 0.09).toFixed(2);
    const swayDelay     = (i * 0.09 + 0.72).toFixed(2);
    const swayDuracion  = (4.5 + (i % 6) * 0.45).toFixed(2);

    return {
      x,
      y: 28,
      color: PALETA[i % PALETA.length],
      animation: [
        `entrada-banderin 0.62s cubic-bezier(0.34,1.56,0.64,1) ${entradaDelay}s 1 normal both`,
        `sway-pennant ${swayDuracion}s ease-in-out ${swayDelay}s infinite`,
      ].join(", "),
    };
  });
}

const DESKTOP = { n: 13, vw: 1180, halfW: 13 };
const MOBILE  = { n: 7,  vw: 390,  halfW: 12 };

function RenderSVG({ n, vw, halfW }) {
  const banderines = generarBanderines(n, vw);
  const cuerda     = `M0,28 C${vw * 0.2},44 ${vw * 0.8},44 ${vw},28`;

  return (
    <svg
      width="100%"
      height="110"
      viewBox={`0 0 ${vw} 110`}
      preserveAspectRatio="none"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={cuerda} stroke="rgba(0,0,0,0.07)" strokeWidth="5"   fill="none" strokeLinecap="round" />
      <path d={cuerda} stroke="rgba(18,12,6,0.45)" strokeWidth="1.5" fill="none" strokeLinecap="round" />

      {banderines.map((b, i) => (
        <g key={i} style={{ transformOrigin: "50% 0%", animation: b.animation }}>
          <polygon
            points={`${b.x - halfW},${b.y + 2} ${b.x + halfW},${b.y + 2} ${b.x},${b.y + 62}`}
            fill="rgba(0,0,0,0.12)"
            transform="translate(2,2)"
          />
          <polygon
            points={`${b.x - halfW},${b.y} ${b.x + halfW},${b.y} ${b.x},${b.y + 60}`}
            style={{ fill: b.color }}
            stroke={b.color === "#ffffff" ? "rgba(116,172,223,0.5)" : "rgba(255,255,255,0.12)"}
            strokeWidth="0.8"
          />
          <circle
            cx={b.x}
            cy={b.y + 60}
            r="2.8"
            style={{
              fill: b.color === "#ffffff" ? "rgba(116,172,223,0.6)" : "rgba(255,255,255,0.4)",
            }}
          />
        </g>
      ))}
    </svg>
  );
}

function BanderinesMundiales() {
  return (
    <div
      className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden"
      style={{ height: "110px", zIndex: 5 }}
    >
      {/* Mobile */}
      <div className="block md:hidden w-full h-full">
        <RenderSVG {...MOBILE} />
      </div>

      {/* Desktop */}
      <div className="hidden md:block w-full h-full">
        <RenderSVG {...DESKTOP} />
      </div>
    </div>
  );
}

export { BanderinesMundiales };
