/**
 * Event measurement integration point.
 * - Meta Pixel loads only when META_PIXEL_ID is set in config.ts.
 * - Every event is also pushed to window.dataLayer (for Google Tag Manager, if added later).
 */
import { META_PIXEL_ID } from "./config";

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
  push?: unknown;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
    dataLayer?: Record<string, unknown>[];
  }
}

/** Standard Meta events used on this page. */
export type StandardEvent = "PageView" | "ViewContent" | "InitiateCheckout";

let pixelStarted = false;

export function initMetaPixel(pixelId: string = META_PIXEL_ID) {
  if (typeof window === "undefined" || pixelStarted || !pixelId.trim()) return;
  pixelStarted = true;

  if (!window.fbq) {
    const fbq: FbqFn = function (...args: unknown[]) {
      if (fbq.callMethod) fbq.callMethod(...args);
      else fbq.queue!.push(args);
    } as FbqFn;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    window.fbq = fbq;
    window._fbq = fbq;
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);
  }

  window.fbq("init", pixelId.trim());
  window.fbq("track", "PageView");
}

export function trackEvent(
  name: StandardEvent | (string & {}),
  params: Record<string, unknown> = {},
) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: name, ...params });

  if (!window.fbq) return;
  const standard: string[] = ["PageView", "ViewContent", "InitiateCheckout"];
  window.fbq(standard.includes(name) ? "track" : "trackCustom", name, params);
}
