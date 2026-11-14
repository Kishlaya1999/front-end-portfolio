/**
 * Feature Flags — hardcoded toggles for controlling portfolio features.
 * Change values here and restart the dev server (Vite hot-reloads on save).
 */

const FEATURE_FLAGS = {
  /**
   * Navigation mode:
   *   "navbar" — classic fixed top navbar
   *   "dock"   — macOS-style bottom dock
   */
  NAVIGATION: "dock",

  /**
   * Enable liquid glass effect on the dock panel.
   * Only applies when NAVIGATION is "dock".
   */
  DOCK_GLASS: true,

  /**
   * Glass rendering mode (only used when DOCK_GLASS is true):
   *   "frosted"    — liquid glass with refraction/chromatic aberration on the panel itself
   *   "refraction" — WebGL backdrop mode that bends page content visible through the dock
   */
  DOCK_GLASS_MODE: "frosted",
};

export default FEATURE_FLAGS;
