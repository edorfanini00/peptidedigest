"use client";

type AnalyticsWindow = Window & { gtag?: (...args: unknown[]) => void };

interface IQONLinkProps {
  href?: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}

export function IQONLink({
  href = "https://www.iqonhealth.com/shop",
  className,
  children,
  target = "_blank",
  rel = "noopener noreferrer",
}: IQONLinkProps) {
  function handleClick() {
    if (typeof window !== "undefined" && typeof (window as AnalyticsWindow).gtag === "function") {
      (window as AnalyticsWindow).gtag!("event", "iqon_shop_click", {
        event_category: "outbound",
        event_label: href,
        transport_type: "beacon",
      });
    }
  }

  return (
    <a href={href} target={target} rel={rel} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}
