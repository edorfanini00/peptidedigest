import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-rule)] mt-20 py-12 bg-[color:var(--color-paper-deep)]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div className="font-serif text-lg font-semibold text-[color:var(--color-ink)] mb-1">
            The Peptide Digest
          </div>
          <p className="text-sm text-[color:var(--color-muted)] max-w-sm leading-relaxed">
            Independent coverage of peptide science, regulatory developments, and industry news. For informational purposes only.
          </p>
        </div>
        <div className="flex gap-10 text-sm text-[color:var(--color-muted)]">
          <div className="flex flex-col gap-2">
            <span className="kicker text-[color:var(--color-ink)] mb-1">Topics</span>
            <Link href="/#regulatory" className="hover:text-[color:var(--color-ink)] transition-colors">Regulatory</Link>
            <Link href="/#industry" className="hover:text-[color:var(--color-ink)] transition-colors">Industry</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="kicker text-[color:var(--color-ink)] mb-1">Site</span>
            <Link href="/#about" className="hover:text-[color:var(--color-ink)] transition-colors">About</Link>
            <a href="mailto:hello@peptidedigest.com" className="hover:text-[color:var(--color-ink)] transition-colors">Contact</a>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-5 sm:px-6 mt-10 pt-6 border-t border-[color:var(--color-rule)] text-xs text-[color:var(--color-muted)] leading-relaxed">
        © {new Date().getFullYear()} The Peptide Digest. All rights reserved. Content is for informational purposes only and does not constitute medical advice. Photographs are illustrative stock images from Unsplash unless otherwise noted.
      </div>
    </footer>
  );
}
