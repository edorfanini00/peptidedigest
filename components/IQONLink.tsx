"use client";

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
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("event", "iqon_shop_click", {
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
