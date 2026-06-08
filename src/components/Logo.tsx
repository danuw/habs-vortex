interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 120, className = '' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="HABS Vortex logo"
    >
      <defs>
        <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#d4f060" />
          <stop offset="50%" stopColor="#9dc928" />
          <stop offset="100%" stopColor="#6a9e10" />
        </linearGradient>
        <radialGradient id="innerGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#1f5048" />
          <stop offset="100%" stopColor="#0f2e2a" />
        </radialGradient>
        <path id="topArc" d="M 22,100 A 78,78 0 0,1 178,100" />
      </defs>

      {/* Lime-green outer ring */}
      <circle cx="100" cy="100" r="98" fill="#7acc2a" />
      {/* Navy ring */}
      <circle cx="100" cy="100" r="92" fill="#0a1a42" />
      {/* Dark teal inner fill */}
      <circle cx="100" cy="100" r="72" fill="url(#innerGlow)" />

      {/* Vortex body — main wave */}
      <g transform="translate(100,106)">
        <path
          d="M-30 8 C-38-4,-36-20,-18-26 C-2-32,14-22,22-8 C30 6,26 22,14 28 C2 34,-12 28,-20 18 Z"
          fill="#5b9de8"
          opacity="0.65"
        />
        <path
          d="M-6-26 C10-38,34-28,40-12 C46 4,34 22,18 26 C4 30,-10 22,-14 8 C-18-6,-12-20,-6-26 Z"
          fill="#7b6de0"
          opacity="0.88"
        />
        {/* Eye / curl */}
        <ellipse cx="10" cy="-2" rx="11" ry="13" fill="#3d52b8" opacity="0.9" />
        <circle cx="10" cy="-2" r="4.5" fill="#0a1a42" />
        <circle cx="10" cy="-2" r="2" fill="#1a3d38" />

        {/* Lightning wisps */}
        <path d="M-10-32 L-5-22 L-12-18 L-6-8" stroke="#b0deff" strokeWidth="1.6" fill="none" opacity="0.75" />
        <path d="M2-37 L6-26 L1-22 L5-12" stroke="#d4eeff" strokeWidth="1.3" fill="none" opacity="0.65" />
        <path d="M16-33 L13-24 L18-19 L15-10" stroke="#b0deff" strokeWidth="1.1" fill="none" opacity="0.55" />

        {/* Spray / foam at bottom */}
        <path d="M-32 20 C-40 26,-44 34,-36 38" stroke="#5b9de8" strokeWidth="2.2" fill="none" opacity="0.6" />
        <path d="M-22 26 C-27 34,-24 42,-16 42" stroke="#7bbde8" strokeWidth="1.6" fill="none" opacity="0.5" />
        <path d="M-12 30 C-14 38,-8 44,-4 40" stroke="#a0d4f0" strokeWidth="1.2" fill="none" opacity="0.4" />
      </g>

      {/* Arced team name */}
      <text
        fontFamily="'Arial Black', 'Impact', Arial, sans-serif"
        fontWeight="900"
        fontSize="21"
        fill="url(#textGrad)"
        letterSpacing="2.5"
      >
        <textPath href="#topArc" startOffset="50%" textAnchor="middle">
          HABS VORTEX
        </textPath>
      </text>
    </svg>
  );
}
