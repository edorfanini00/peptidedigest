"use client";

import Image from "next/image";
import { useEffect, useRef, type SyntheticEvent } from "react";
import { IQONIC_APP_STORE_URL, iqonicBannerDestination, trackIQONICBannerClick } from "@/lib/iqonic-attribution";
import styles from "./IQONICBanner.module.css";

export function IQONICBanner() {
  const link = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    if (link.current) link.current.href = iqonicBannerDestination();
  }, []);

  function refreshDestination(event: SyntheticEvent<HTMLAnchorElement>) {
    event.currentTarget.href = iqonicBannerDestination();
  }

  function handleActivation(event: SyntheticEvent<HTMLAnchorElement>) {
    event.currentTarget.href = trackIQONICBannerClick() ? iqonicBannerDestination() : IQONIC_APP_STORE_URL;
  }

  return <aside className={styles.banner} aria-label="IQONIC app">
    <Image src="/iqonic/app-icon.png" width={64} height={64} alt="IQONIC app icon" className={styles.icon} />
    <div className={styles.copy}><p className={styles.brand}>IQONIC</p><p>Keep your calculations close at hand.</p></div>
    <a ref={link} href={IQONIC_APP_STORE_URL} target="_blank" rel="noopener noreferrer"
      onFocus={refreshDestination} onPointerDown={refreshDestination} onContextMenu={refreshDestination}
      onClick={handleActivation} onAuxClick={event => { if (event.button === 1) handleActivation(event); else refreshDestination(event); }}
    >Get IQONIC <span aria-hidden="true">↗</span></a>
  </aside>;
}
