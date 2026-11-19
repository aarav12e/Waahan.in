export function RoadScene() {
  return (
    <svg
      className="road-scene"
      viewBox="0 0 920 260"
      role="img"
      aria-label="Map-style route preview with a location pin"
    >
      <defs>
        <pattern id="mapGrid" width="46" height="46" patternUnits="userSpaceOnUse">
          <path d="M46 0H0V46" fill="none" stroke="currentColor" strokeWidth="1" />
        </pattern>
        <linearGradient id="routeFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#FFC400" stopOpacity=".12" />
          <stop offset=".2" stopColor="#FFC400" />
          <stop offset=".78" stopColor="#FFC400" />
          <stop offset="1" stopColor="#18B6A4" stopOpacity=".15" />
        </linearGradient>
      </defs>

      <rect width="920" height="260" fill="url(#mapGrid)" opacity=".22" />

      <g className="map-roads" fill="none" stroke="currentColor" strokeWidth="12" opacity=".09" strokeLinecap="round">
        <path d="M-20 208C120 208 168 154 278 154S420 96 540 96S708 142 940 142" />
        <path d="M96 -20C96 48 142 72 142 132S172 212 172 280" />
        <path d="M758 -20C758 48 710 74 710 134S680 214 680 280" />
      </g>

      <g className="map-roads-fine" fill="none" stroke="currentColor" strokeWidth="2" opacity=".13" strokeLinecap="round">
        <path d="M-20 208C120 208 168 154 278 154S420 96 540 96S708 142 940 142" />
        <path d="M96 -20C96 48 142 72 142 132S172 212 172 280" />
        <path d="M758 -20C758 48 710 74 710 134S680 214 680 280" />
      </g>

      <path
        className="route-path"
        d="M116 188H280C320 188 334 156 334 128V124C334 92 358 72 392 72H582C622 72 646 96 646 136V150C646 178 670 202 708 202H804"
        fill="none"
        stroke="url(#routeFade)"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <g className="route-node route-node-start" transform="translate(116 188)">
        <circle r="20" fill="#FFC400" opacity=".10" />
        <circle r="8" fill="#FFC400" />
        <circle r="3" fill="#0B0B0F" />
      </g>

      <g className="route-node route-node-mid" transform="translate(334 124)">
        <circle r="16" fill="#18B6A4" opacity=".12" />
        <circle r="7" fill="#18B6A4" />
      </g>

      <g className="route-node route-node-end" transform="translate(804 202)">
        <circle r="24" fill="#FFC400" opacity=".10" />
        <path d="M0-22c-13 0-23 10-23 23 0 15 23 32 23 32S23 16 23 1C23-12 13-22 0-22Z" fill="#FFC400" />
        <circle cy="-1" r="7" fill="#0B0B0F" />
      </g>

      <g className="map-pulse" transform="translate(582 72)">
        <circle r="13" fill="#18B6A4" opacity=".18" />
        <circle r="5" fill="#18B6A4" />
      </g>
    </svg>
  );
}
