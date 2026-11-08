type AnalyticsWindow = Window & {
  gtag?: (...args: unknown[]) => void;
  dataLayer?: ArrayLike<unknown>[];
  "ga-disable-G-QLTHZGWLMP"?: boolean;
};

export const IQONIC_APP_STORE_URL = "https://apps.apple.com/us/app/iqonic/id6765689488";
// Parent-verified single-platform route; all campaign parameters are static.
export const IQONIC_ATTRIBUTION_URL = "https://app.appsflyer.com/id6765689488?pid=peptidedigest&c=calculator_banner&af_channel=web&af_ad=iqonic_banner";

export function iqonicAttributionAllowed(): boolean {
  try {
    if (typeof window === "undefined") return false;
    const analytics = window as AnalyticsWindow;
    const privacy = navigator as Navigator & { globalPrivacyControl?: boolean };
    if (
      window.location.pathname !== "/peptide-calculator" ||
      privacy.globalPrivacyControl === true ||
      privacy.doNotTrack === "1" ||
      analytics["ga-disable-G-QLTHZGWLMP"] === true
    ) return false;

    // The site currently has no CMP. Honor any queued gtag consent choice,
    // including Arguments objects used by the existing gtag wrapper.
    const denied = new Set<string>();
    for (const command of analytics.dataLayer ?? []) {
      if (!command || command[0] !== "consent") continue;
      const settings = command[2] as Record<string, unknown> | undefined;
      for (const purpose of ["analytics_storage", "ad_storage", "ad_user_data", "ad_personalization"]) {
        if (settings?.[purpose] === "denied") denied.add(purpose);
        // Grants apply only to their own purpose. Regional/default grants
        // cannot erase a known refusal for optional marketing attribution.
        if (command[1] === "update" && !settings?.region && settings?.[purpose] === "granted") denied.delete(purpose);
      }
    }
    return denied.size === 0;
  } catch {
    return false;
  }
}

export function iqonicBannerDestination(): string {
  return iqonicAttributionAllowed() ? IQONIC_ATTRIBUTION_URL : IQONIC_APP_STORE_URL;
}

// A banner activation is an outbound click, never an attributed download.
// False selects the plain App Store fallback; navigation stays native.
export function trackIQONICBannerClick(): boolean {
  try {
    if (!iqonicAttributionAllowed()) return false;
    const analytics = window as AnalyticsWindow;
    if (typeof analytics.gtag !== "function") return true;

    analytics.gtag("event", "iqonic_banner_click", {
      send_to: "G-QLTHZGWLMP",
      event_category: "outbound",
      event_label: "peptide_calculator_iqonic_banner",
      // Override automatic URL/referrer context; never read inputs or queries.
      page_location: "https://peptidedigest.co/peptide-calculator",
      page_referrer: "",
      page_title: "Peptide Calculator",
      transport_type: "beacon",
    });
    return true;
  } catch {
    // Optional analytics must never prevent the App Store link from opening.
    return false;
  }
}
