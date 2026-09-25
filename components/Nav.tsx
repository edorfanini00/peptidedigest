import Link from "next/link";

export function Nav() {
  return (
    <nav className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight text-gray-900" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
          The Peptide Digest
        </Link>
        <div className="flex items-center gap-6 text-sm text-gray-500">
          <Link href="/#research" className="hover:text-gray-900 transition-colors">Research</Link>
          <Link href="/#regulatory" className="hover:text-gray-900 transition-colors">Regulatory</Link>
          <Link href="/#industry" className="hover:text-gray-900 transition-colors">Industry</Link>
          <Link href="/#about" className="hover:text-gray-900 transition-colors">About</Link>
        </div>
      </div>
    </nav>
  );
}
