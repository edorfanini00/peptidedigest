// Reusable editorial building blocks (STAT/Axios-style).
// KeyFacts and PullQuote must only ever quote wording already in the article.

export function SectionLabel({ label, id }: { label: string; id?: string }) {
  return (
    <div id={id} className="section-label scroll-mt-20">
      <h2>{label}</h2>
      <span aria-hidden />
    </div>
  );
}

export function KeyFacts({ title = "Key facts", items }: { title?: string; items: React.ReactNode[] }) {
  return (
    <aside className="key-facts" aria-label={title}>
      <div className="kicker text-[color:var(--color-accent)] mb-3">{title}</div>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </aside>
  );
}

export function PullQuote({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <blockquote className="pull-quote">
      <p>{children}</p>
      {cite ? <cite>{cite}</cite> : null}
    </blockquote>
  );
}
