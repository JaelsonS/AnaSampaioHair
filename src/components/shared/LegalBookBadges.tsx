/** Badges oficiais em SVG inline — nunca partem por encoding/CDN. */

export function LivroReclamacoesBadge({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 220"
      role="img"
      aria-label="Livro de Reclamações"
      width="96"
      height="33"
    >
      <rect width="640" height="220" fill="#000" />
      <circle cx="145" cy="110" r="92" fill="#E30613" />
      <text
        x="72"
        y="100"
        fill="#000"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontSize="34"
        fontWeight="900"
      >
        LIVRO
      </text>
      <text
        x="98"
        y="140"
        fill="#000"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontSize="34"
        fontWeight="900"
      >
        DE
      </text>
      <text
        x="250"
        y="128"
        fill="#8B0000"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontSize="42"
        fontWeight="900"
      >
        RECLAMAÇÕES
      </text>
    </svg>
  )
}

export function LivroElogiosBadge({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 560 220"
      role="img"
      aria-label="Livro de Elogios"
      width="90"
      height="33"
    >
      <rect width="560" height="220" fill="#000" />
      <circle cx="145" cy="110" r="92" fill="#00A651" />
      <text
        x="72"
        y="100"
        fill="#000"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontSize="34"
        fontWeight="900"
      >
        LIVRO
      </text>
      <text
        x="98"
        y="140"
        fill="#000"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontSize="34"
        fontWeight="900"
      >
        DE
      </text>
      <text
        x="250"
        y="128"
        fill="#00A651"
        fontFamily="Arial Black, Arial, Helvetica, sans-serif"
        fontSize="42"
        fontWeight="900"
      >
        ELOGIOS
      </text>
    </svg>
  )
}
