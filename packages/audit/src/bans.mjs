/**
 * Hard bans — patterns that violate the Axiom / Rams × NYCTA design system.
 *
 * Each entry is a regex; matches across the file count as one violation
 * unless otherwise noted in `scope` (e.g. "imports", "class", "css-prop").
 *
 * Lines that look like comments or are inside a `// axiom-audit-ignore`
 * directive are skipped.
 */

export const BANS = {
  /** Tailwind utility classes that smuggle in template chrome. */
  tailwind: [
    // Rounded corners
    { re: /\brounded-(sm|md|lg|xl|2xl|3xl|full)\b/g, msg: 'Rounded corners are banned. Use square (0–2px) edges only.' },
    { re: /\brounded-t(?:l|r|tr|tl|br)?-(sm|md|lg|xl|2xl|3xl|full)\b/g, msg: 'Rounded corners are banned.' },
    { re: /\brounded-b(?:l|r|tr|tl|br)?-(sm|md|lg|xl|2xl|3xl|full)\b/g, msg: 'Rounded corners are banned.' },
    // Shadows
    { re: /\bshadow-(sm|md|lg|xl|2xl|inner)\b/g, msg: 'Drop shadows are banned. Use hairline borders instead.' },
    { re: /\bshadow\b(?!\s*:)/g, msg: 'Drop shadows are banned.' },
    // Gradients
    { re: /\bbg-gradient-to-[a-z]+\b/g, msg: 'Gradients are banned. Use solid colors only.' },
    // Blur
    { re: /\bblur(?:-\d+)?\b/g, msg: 'Blur is banned (no glassmorphism).' },
    { re: /\bbackdrop-blur(?:-\w+)?\b/g, msg: 'Backdrop-blur is banned (no glassmorphism).' },
    // Emoji-grade color utilities
    { re: /\b(?:bg|text|border)-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d+\b/g, msg: 'Emoji-grade color utilities are banned. Use --blue, --red, or trunk tokens only.' },
    // Gradient color stops
    { re: /\bfrom-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d+\b/g, msg: 'Gradient color stops are banned.' },
    { re: /\bvia-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d+\b/g, msg: 'Gradient color stops are banned.' },
    { re: /\bto-(red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-\d+\b/g, msg: 'Gradient color stops are banned.' },
    // Heavy font weights
    { re: /\bfont-bold\b/g, msg: 'Font weight 700+ is banned on data. Use 500–600 max.' },
    { re: /\bfont-extrabold\b/g, msg: 'Font weight 700+ is banned.' },
    { re: /\bfont-black\b/g, msg: 'Font weight 700+ is banned.' },
  ],

  /** CSS / inline style violations. Both kebab-case (CSS) and camelCase (React inline styles). */
  css: [
    { re: /linear-gradient\s*\(/g, msg: 'linear-gradient is banned.' },
    { re: /radial-gradient\s*\(/g, msg: 'radial-gradient is banned.' },
    { re: /conic-gradient\s*\(/g, msg: 'conic-gradient is banned.' },
    { re: /\bbackdrop-filter\s*:/g, msg: 'backdrop-filter is banned (no glassmorphism).' },
    { re: /\bbackdropFilter\s*:/g, msg: 'backdrop-filter is banned (no glassmorphism).' },
    { re: /\bfilter\s*:[^;]*\bblur\s*\(/g, msg: 'CSS blur filter is banned.' },
    { re: /\bfilter\s*:[^;]*\bblur\s*\(/g, msg: 'CSS blur filter is banned.' },
    { re: /\bbox-shadow\s*:[^;]*[1-9]px/g, msg: 'Non-zero box-shadow is banned. Use hairline borders instead.' },
    { re: /\bboxShadow\s*:\s*['"][^'"]*[1-9]px/g, msg: 'Non-zero boxShadow is banned. Use hairline borders instead.' },
    { re: /\bfont-weight\s*:\s*(7\d\d|8\d\d|9\d\d)\b/g, msg: 'Font weight 700+ is banned on DATA. Confirm this is a label/button, not a value.', severity: 'warn' },
    { re: /\bfontWeight\s*:\s*(7\d\d|8\d\d|9\d\d)\b/g, msg: 'Font weight 700+ is banned on DATA. Confirm this is a label/button, not a value.', severity: 'warn' },
    { re: /\bborder-radius\s*:[^;]*[3-9]px/g, msg: 'border-radius ≥ 3px is banned. Use 0 or 2px.' },
    { re: /\bborderRadius\s*:\s*['"][^'"]*[3-9]px/g, msg: 'borderRadius ≥ 3px is banned. Use 0 or 2px.' },
    { re: /\bborder-radius\s*:[^;]*\d+rem\b/g, msg: 'rem-based border-radius is banned.' },
    { re: /\bborderRadius\s*:\s*['"][^'"]*\d+rem/g, msg: 'rem-based borderRadius is banned.' },
  ],

  /** Color literals in code — pure #000 and #fff are banned. */
  colors: [
    { re: /['"`]#[0-9a-fA-F]{6}['"`]/g, msg: 'Hardcoded hex color. Use --paper / --ink / --blue / --red / trunk tokens.', severity: 'warn' },
    { re: /['"`]#000(?:000)?['"`]/g, msg: 'Pure #000 is banned. Use --ink (#191712).' },
    { re: /['"`]#fff(?:fff)?['"`]/g, msg: 'Pure #fff is banned. Use --paper (#f6f5f2).' },
  ],

  /** Arrows / chevrons — must be solid greyscale triangles, never Unicode. */
  arrows: [
    { re: /[→➔➜➡︎⇨]/g, msg: 'Unicode arrows are banned. Use the <Arrow/> component.' },
    { re: /[←⇦]/g, msg: 'Unicode arrows are banned. Use the <Arrow/> component.' },
    { re: /[↑⇧]/g, msg: 'Unicode arrows are banned. Use the <Arrow/> component.' },
    { re: /[↓⇩]/g, msg: 'Unicode arrows are banned. Use the <Arrow/> component.' },
  ],

  /** Motion — entrance choreography, bounce easing. */
  motion: [
    { re: /\banimate-bounce\b/g, msg: 'Bounce animation is banned.' },
    { re: /\btransition-all\s+duration-(7|8|9|10)\d{2,}\b/g, msg: 'Transitions over 700ms are too slow.' },
    // Overshoot = a control-point Y outside [0,1]. y == 1 is easeOutQuint, which is legal.
    { re: /\bcubic-bezier\s*\(\s*-?[\d.]+\s*,\s*(?:-[\d.]+|1\.\d+|[2-9][\d.]*)\s*,/g, msg: 'Bounce/overshoot easing is banned (y1 outside 0..1). Use --ease-out or --ease-in-out.' },
    { re: /\bcubic-bezier\s*\(\s*-?[\d.]+\s*,\s*-?[\d.]+\s*,\s*-?[\d.]+\s*,\s*(?:-[\d.]+|1\.\d+|[2-9][\d.]*)\s*\)/g, msg: 'Bounce/overshoot easing is banned (y2 outside 0..1). Use --ease-out or --ease-in-out.' },
  ],

  /** ---------------------------------------------------------------
   *  ORIGIN TELLS — added 2026-09-08.
   *
   *  The bans above catch decoration. These catch *provenance*: the
   *  cluster of defaults that lets a stranger identify a surface as
   *  agent-generated from a screenshot or a View-Source.
   *
   *  No single hit here condemns a page. The tell is the stack.
   *  See ANTI-TEMPLATE.md.
   *  --------------------------------------------------------------- */

  /** The typefaces every generator reaches for. The #1 visual tell. */
  fonts: [
    { re: /family=(Inter|Roboto|Poppins|Montserrat|Open\+Sans|Lato|Geist|Space\+Grotesk|Instrument\+Serif|Manrope|DM\+Sans)\b/g, msg: 'Banned template font in a Google Fonts URL. See ANTI-TEMPLATE.md §2.1.' },
    { re: /['"](Inter|Roboto|Poppins|Montserrat|Open Sans|Lato|Geist|Space Grotesk|Instrument Serif|Manrope|DM Sans)['"]/g, msg: 'Banned template font. These are the six-plus faces every AI reaches for; a reader clocks them at ten metres.' },
    { re: /font-family\s*:\s*system-ui\b/g, msg: 'system-ui as the primary face is a generator default. Name a real typeface.' },
    { re: /fontFamily\s*:\s*['"]system-ui/g, msg: 'system-ui as the primary face is a generator default. Name a real typeface.' },
  ],

  /** "VibeCode purple" and the Tailwind default blue — the most-cited palette tells. */
  slopColors: [
    { re: /#(?:6366f1|818cf8|a5b4fc|8b5cf6|a855f7|7c3aed|6d28d9|4f46e5|7e22ce|c084fc|d946ef|e879f9)\b/gi, msg: 'VibeCode purple/indigo/violet. The single most-cited AI-slop colour family.' },
    { re: /#(?:3b82f6|2563eb|60a5fa|1d4ed8)\b/gi, msg: 'Tailwind default blue. Banned by house law (§14).' },
    { re: /\bbg-clip-text\b/g, msg: 'Gradient text on headings is a generator default.' },
    { re: /-webkit-background-clip\s*:\s*text/g, msg: 'Gradient text on headings is a generator default.' },
  ],

  /** Build-tool fingerprints, leaked keys, dev-server references shipped to production. */
  provenance: [
    { re: /<meta[^>]+name=["']generator["'][^>]*>/gi, msg: 'Generator meta tag names the tool that built this. Remove it.' },
    { re: /\b(?:lovable\.app|bolt\.new|v0\.dev|\.framer\.app|builder\.io)\b/gi, msg: 'Builder-platform host left in the source. Remove it.' },
    { re: /https?:\/\/api\.(?:anthropic|openai)\.com/g, msg: 'Client-side call to an AI vendor API. Move it server-side — this also leaks the key.' },
    { re: /\b(?:sk-ant-[A-Za-z0-9_-]{12,}|sk-[A-Za-z0-9]{24,}|AIza[A-Za-z0-9_-]{30,})\b/g, msg: 'API key literal in source. Rotate it — a key that touched history is burned (§16.1 Law 4).' },
    { re: /https?:\/\/(?:localhost|127\.0\.0\.1):\d+/g, msg: 'Dev-server reference. If this ships, it is a production tell and usually a broken link.' },
  ],

  /** Layout reflexes. Judgment calls — warnings, not errors. */
  layout: [
    { re: /\bgrid-cols-3\b/g, msg: 'Three-equal-card row is the most recognisable AI layout. Legitimate only if the content is genuinely three peers.', severity: 'warn' },
    { re: /\btext-center\b/g, msg: 'Centred content is the generator default. Dense content is never centred (house law).', severity: 'warn' },
    { re: /\bbento\b/gi, msg: 'Bento grid is a 2024–2026 generator default.', severity: 'warn' },
    { re: /(?:Now in Beta|Coming Soon|Powered by AI|✨)/gi, msg: 'Sparkle/beta pill. Filler chrome.', severity: 'warn' },
    { re: /['">]\s*(?:99\.9%|99%|100%|10k\+|1M\+|10x|24\/7)\s*['"<]/gi, msg: 'Fake-precision stat banner. Every number carries source, tier and age (§16.1 Law 3) or it does not ship.', severity: 'warn' },
  ],

  /** Marketing-copy tells. Warnings — the writer decides. */
  copy: [
    { re: /\b(?:seamless(?:ly)?|cutting-edge|game-chang\w+|revolutioni[sz]\w+|supercharg\w+|unlock the power|transform your|elevate your|innovative solution\w*|robust solution\w*|delve|tapestry|leverage the)\b/gi, msg: 'Buzzword tell. Plain words, or cut it (§12.4 / Dr-Non-Write).', severity: 'warn' },
  ],


  /** NYCTA — closed trunk palette. Any non-canonical --rt-* is a 9th trunk. */
  nycta: [
    { re: /--rt-(?!blue|orange|green|red|purple|yellow|grey|brown|ink)[a-z]+\b/g, msg: 'A 9th trunk color is banned. Use the closed 8-trunk palette only.' },
  ],
};

/** Files to skip during audit. */
export const SKIP_PATTERNS = [
  /node_modules/,
  /dist/,
  /build/,
  /\.next/,
  /coverage/,
  /\.git/,
  /package-lock\.json$/,
  /pnpm-lock\.yaml$/,
  /yarn\.lock$/,
  /tsconfig.*\.json$/,
  /vitest\.config\./,
  /vite\.config\./,
  /wrangler\.toml$/,
  /README\.md$/i,
  /LICENSE$/i,
  /NOTICE\.md$/i,
  /\.test\.(ts|tsx|js|jsx)$/,
  /\.spec\.(ts|tsx|js|jsx)$/,
  /__tests__\//,
  /__mocks__\//,
  /packages\/(react|audit|tailwind-preset)\//, // self-audit skip
];

/** Extensions to scan. */
export const SCAN_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.mjs', '.cjs', '.css', '.scss', '.html', '.vue', '.svelte'];

/** File extensions that count as UI-rendering files. Rules that
 *  only make sense for UI (e.g. Unicode arrows, class names) are
 *  scoped to these so a data adapter full of "→" in string literals
 *  doesn't get flagged. */
export const UI_EXTENSIONS = ['.tsx', '.jsx', '.html', '.vue', '.svelte', '.css', '.scss'];

/** Rule ids that only apply to UI files. */
export const UI_ONLY_RULES = new Set(['arrows', 'tailwind', 'layout', 'copy']);
