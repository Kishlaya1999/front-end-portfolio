/**
 * Theme variant registry.
 * Each entry provides an id, display label, and the 3 preview swatch colors
 * (bg, accent, heading) used both in the dropdown UI and as a reference for
 * which CSS custom properties the variant overrides.
 *
 * Default variants (midnight / snow) match the existing :root and
 * [data-theme="light"] CSS — they need no additional override selectors.
 */

export const DARK_THEMES = [
  {
    id: "midnight",
    label: "Midnight",
    isDefault: true,
    colors: { bg: "#1a2238", accent: "#ff6a3d", heading: "#9daaf2" },
  },
  {
    id: "obsidian",
    label: "Obsidian",
    colors: { bg: "#13111c", accent: "#06b6d4", heading: "#a5b4fc" },
  },
  {
    id: "emerald",
    label: "Emerald",
    colors: { bg: "#0f1a14", accent: "#10b981", heading: "#86efac" },
  },
  {
    id: "crimson",
    label: "Crimson",
    colors: { bg: "#1c1017", accent: "#f43f5e", heading: "#fda4af" },
  },
];

export const LIGHT_THEMES = [
  {
    id: "snow",
    label: "Snow",
    isDefault: true,
    colors: { bg: "#f5f5f7", accent: "#ff6a3d", heading: "#1d1d1f" },
  },
  {
    id: "sage",
    label: "Sage",
    colors: { bg: "#f1f5f1", accent: "#059669", heading: "#1a3a2a" },
  },
  {
    id: "arctic",
    label: "Arctic",
    colors: { bg: "#f0f4f8", accent: "#2563eb", heading: "#1e3a5f" },
  },
  {
    id: "blossom",
    label: "Blossom",
    colors: { bg: "#fdf2f8", accent: "#db2777", heading: "#831843" },
  },
];

export const DEFAULT_DARK_VARIANT = "midnight";
export const DEFAULT_LIGHT_VARIANT = "snow";
