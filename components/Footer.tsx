import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-20 py-10 bg-white">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="text-base font-semibold text-gray-900 mb-1" style={{ fontFamily: "var(--font-lora), Georgia, serif" }}>
            The Peptide Digest
          </div>
          <p className="text-xs text-gray-400 max-w-xs">
            Independent coverage of peptide science, regulatory developments, and industry news. For informational purposes only.
          </p>
        </div>
        <div className="flex gap-8 text-xs text-gray-400">
          <div className="flex flex-col gap-2">
            <span className="text-gray-600 font-medium text-xs uppercase tracking-wide mb-1">Topics</span>
            <Link href="/#research" className="hover:text-gray-700 transition-colors">Research</Link>
            <Link href="/#regulatory" className="hover:text-gray-700 transition-colors">Regulatory</Link>
            <Link href="/#industry" className="hover:text-gray-700 transition-colors">Industry</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-gray-600 font-medium text-xs uppercase tracking-wide mb-1">Site</span>
            <Link href="/#about" className="hover:text-gray-700 transition-colors">About</Link>
            <a href="mailto:hello@peptidedigest.com" className="hover:text-gray-700 transition-colors">Contact</a>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-6 mt-8 pt-6 border-t border-gray-100 text-xs text-gray-400">
        © {new Date().getFullYear()} The Peptide Digest. All rights reserved. Content is for informational purposes only and does not constitute medical advice.
      </div>
    </footer>
  );
}
