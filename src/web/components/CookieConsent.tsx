import { useEffect, useState } from "react";

const STORAGE_KEY = "cranesauctions-cookie-consent";
const GA_ID = "G-SXQHVN87DD";

type ConsentState = "accepted" | "declined" | null;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

function loadGoogleAnalytics() {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.dataLayer) {
    window.dataLayer = [];
  }

  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };
  }

  if (!document.getElementById("ga-gtag-script")) {
    const script = document.createElement("script");
    script.id = "ga-gtag-script";
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", GA_ID);
}

export default function CookieConsent() {
  const [consent, setConsent] = useState<ConsentState>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as ConsentState;
      if (saved === "accepted" || saved === "declined") {
        setConsent(saved);
      }
    } catch {
      setConsent(null);
    } finally {
      setReady(true);
    }
  }, []);

  useEffect(() => {
    if (consent === "accepted") {
      loadGoogleAnalytics();
    }
  }, [consent]);

  const persistConsent = (value: Exclude<ConsentState, null>) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch {
      // Ignore storage access issues and keep in-memory consent state.
    }
    setConsent(value);
  };

  if (!ready || consent !== null) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] p-3 sm:p-4">
      <div className="mx-auto max-w-5xl rounded-2xl border border-white/10 bg-[#101827]/96 p-4 text-white shadow-[0_24px_60px_rgba(0,0,0,0.28)] backdrop-blur sm:p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#c9a227]">
              Cookie Consent
            </p>
            <h3 className="mt-2 text-lg font-black sm:text-xl">
              Help us improve the site with optional analytics
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              We use Google Analytics to understand traffic and improve the
              experience. You can accept or decline optional analytics cookies.
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={() => persistConsent("declined")}
              className="inline-flex min-h-11 items-center justify-center rounded border border-white/20 px-5 text-sm font-bold uppercase tracking-[0.14em] text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Decline
            </button>
            <button
              type="button"
              onClick={() => persistConsent("accepted")}
              className="inline-flex min-h-11 items-center justify-center rounded bg-[#c9a227] px-5 text-sm font-bold uppercase tracking-[0.14em] text-[#101827] transition hover:bg-[#b8911f]"
            >
              Accept Analytics
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
