// Landing-page analytics. GA4 only (NEXT_PUBLIC_GA_ID); with no ID set every call is a no-op.
// A "connect_click" means the visitor tapped a button — it is NOT a confirmed follow.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export function trackConnectClick(button: string) {
  window.gtag?.("event", "connect_click", { button });
}
