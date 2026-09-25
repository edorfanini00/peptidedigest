import Link from "next/link";

export function Nav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--color-rule)] bg-[color:var(--color-paper)]/95 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-paper)]/85">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-14 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="font-serif text-[1.15rem] sm:text-xl font-semibold tracking-tight text-[color:var(--color-ink)] whitespace-nowrap"
        >
          The Peptide Digest
        </Link>
        <div className="flex items-center gap-4 sm:gap-7 text-[13px] sm:text-sm font-medium text-[color:var(--color-muted)]">
          <Link href="/#regulatory" className="hover:text-[color:var(--color-ink)] transition-colors">Regulatory</Link>
          <Link href="/#industry" className="hover:text-[color:var(--color-ink)] transition-colors">Industry</Link>
          <Link href="/#about" className="hidden sm:inline hover:text-[color:var(--color-ink)] transition-colors">About</Link>
        </div>
      </div>
    </nav>
  );
}
