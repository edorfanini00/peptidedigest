import type { Metadata } from "next";
import Link from "next/link";
import { Fragment } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ArticleHero } from "@/components/ArticleHero";
import { images, type ImageKey } from "@/components/images";
import { IQONPartner, type IQONVial } from "@/components/IQONPartner";
import styles from "./NewsroomArticle.module.css";

export interface NewsroomStory {
  slug: string; title: string; description: string; date: string;
  type: "Article" | "NewsArticle"; category: string; image: ImageKey;
  vials: [IQONVial, IQONVial]; lead: string; notice: string;
  sections: { title: string; id: string; paragraphs: string[] }[];
  faqs: { q: string; a: string; refs: number[] }[];
  sources: { id: number; url: string; title: string; doi?: string }[];
  related: { url: string; title: string }[];
}
const base = "https://peptidedigest.co";
export function newsroomMetadata(story: NewsroomStory): Metadata {
  const image = images[story.image];
  const url = `${base}/${story.slug}`;
  return {
    title: { absolute: `${story.title} | The Peptide Digest` }, description: story.description,
    alternates: { canonical: url },
    openGraph: { type: "article", url, title: story.title, description: story.description,
      publishedTime: story.date, modifiedTime: story.date,
      images: [{ url: base + image.src, width: image.width, height: image.height, alt: image.alt }] },
    twitter: { card: "summary_large_image", title: story.title, description: story.description,
      images: [base + image.src] },
  };
}
function RichText({ text, story }: { text: string; story: NewsroomStory }) {
  return text.split(/(\[\d+\]|\[[^\]]+\]\([^\)]+\))/g).map((part, index) => {
    const citation = /^\[(\d+)\]$/.exec(part);
    if (citation) {
      const source = story.sources.find(s => s.id === Number(citation[1]));
      if (!source) throw new Error(`Missing source ${part}`);
      return <a key={index} href={source.url} title={source.title} aria-label={`Source ${source.id}: ${source.title}`} className="text-[color:var(--color-accent)] underline text-sm">{part}</a>;
    }
    const link = /^\[([^\]]+)\]\(([^\)]+)\)$/.exec(part);
    if (link) return <Link key={index} href={link[2]}>{link[1]}</Link>;
    return <Fragment key={index}>{part}</Fragment>;
  });
}
export function NewsroomArticle({ story }: { story: NewsroomStory }) {
  const url = `${base}/${story.slug}`;
  const image = images[story.image];
  const schema = { "@context": "https://schema.org", "@graph": [
    { "@type": story.type, "@id": `${url}#article`, headline: story.title, description: story.description,
      datePublished: story.date, dateModified: story.date,
      author: { "@type": "Organization", name: "The Peptide Digest", url: base },
      publisher: { "@type": "NewsMediaOrganization", name: "The Peptide Digest", url: base },
      image: { "@type": "ImageObject", url: base + image.src, width: image.width, height: image.height },
      mainEntityOfPage: { "@type": "WebPage", "@id": url }, citation: story.sources.map(s => s.url) },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "The Peptide Digest", item: base },
      { "@type": "ListItem", position: 2, name: story.title, item: url } ] },
    { "@type": "FAQPage", mainEntity: story.faqs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) }
  ] };
  return <><Nav /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <main className="article-shell">
      <ArticleHero category={story.category} title={story.title} meta={<time dateTime={story.date}>{new Intl.DateTimeFormat("en-US", { timeZone: "America/New_York", month: "long", day: "numeric", year: "numeric" }).format(new Date(story.date))}</time>} image={story.image} />
      <article className={`article-body ${styles.body}`} data-newsroom-article>
        <p data-answer-lead className="text-lg font-medium"><RichText text={story.lead} story={story} /></p>
        <IQONPartner vial={story.vials[0]} variant="inline" />
        <p className="text-sm text-[color:var(--color-muted)]">{story.notice}</p>
        <nav aria-label="In this article" className="not-prose border-y border-[color:var(--color-rule)] py-5 my-8"><p className="kicker mb-3">In this article</p><ul className="space-y-2 text-sm">{story.sections.map(s => <li key={s.id}><a href={`#${s.id}`} className="text-[color:var(--color-accent)] underline">{s.title}</a></li>)}<li><a href="#questions">Frequently asked questions</a></li></ul></nav>
        {story.sections.map(section => <section key={section.id} className={styles.section} aria-labelledby={section.id}>
          <h2 id={section.id} className="scroll-mt-24">{section.title}</h2>
          {section.paragraphs.every(p => p.startsWith("- ")) ? <ul>{section.paragraphs.map((p, i) => <li key={i}><RichText text={p.slice(2)} story={story} /></li>)}</ul> : section.paragraphs.map((p, i) => <p key={i}><RichText text={p} story={story} /></p>)}
        </section>)}
        <section className={styles.section} aria-labelledby="questions"><h2 id="questions" className="scroll-mt-24">Frequently asked questions</h2>{story.faqs.map((faq, i) => <div className={styles.faq} key={faq.q} data-faq><h3 id={`question-${i + 1}`}>{faq.q}</h3><p data-faq-answer>{faq.a}</p><p className="text-sm" aria-label="Answer sources"><RichText text={faq.refs.map(n => `[${n}]`).join(" ")} story={story} /></p></div>)}</section>
        <section className={styles.section} aria-labelledby="sources"><h2 id="sources">Sources and further reading</h2><ol className="text-sm break-words">{story.sources.map(source => <li key={source.id} value={source.id}><a href={source.url}>{source.title}</a>{source.doi ? <>. DOI: <a href={`https://doi.org/${source.doi}`}>{source.doi}</a></> : null}</li>)}</ol></section>
        <section className={styles.section} aria-labelledby="related"><h2 id="related">Related reading</h2><ul>{story.related.map(link => <li key={link.url}><Link href={link.url}>{link.title}</Link></li>)}</ul></section>
        <IQONPartner vial={story.vials[1]} />
      </article>
    </main><Footer /></>;
}
