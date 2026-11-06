import Image from "next/image";
import styles from "./IQONICBanner.module.css";

export function IQONICBanner() {
  return <aside className={styles.banner} aria-label="IQONIC app">
    <Image src="/iqonic/app-icon.png" width={64} height={64} alt="IQONIC app icon" className={styles.icon} />
    <div className={styles.copy}><p className={styles.brand}>IQONIC · By IQON Health</p><h2>Calculate more with IQONIC</h2><p>Keep your calculations close at hand.</p></div>
    <a href="https://apps.apple.com/us/app/iqonic/id6765689488" target="_blank" rel="noopener noreferrer">Explore the app <span aria-hidden="true">↗</span></a>
  </aside>;
}
