import Image from "next/image";
import Link from "next/link";
import { images, type ImageKey } from "@/components/images";

interface ArticleHeroProps {
  category: string;
  title: React.ReactNode;
  dek?: string | null;
  /** Byline/date row content — pass the article's existing meta so wording is unchanged. */
  meta: React.ReactNode;
  image: ImageKey;
}

export function ArticleHero({ category, title, dek, meta, image }: ArticleHeroProps) {
  const img = images[image];
  return (
    <header className="article-hero">
      <div className="article-measure">
        <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-5">
          <Link href="/" className="kicker text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)] transition-colors">
            The Peptide Digest
          </Link>
          <span aria-hidden className="h-3 w-px bg-[color:var(--color-rule)]" />
          <span className="kicker text-[color:var(--color-accent)]">{category}</span>
        </nav>

        <h1 className="headline">{title}</h1>

        {dek ? <p className="dek">{dek}</p> : null}

        <div className="byline">
          <span className="byline-author">By The Peptide Digest Staff</span>
          <span className="byline-meta">{meta}</span>
        </div>
      </div>

      <figure className="lead-figure">
        <div className="lead-frame">
          <Image
            src={img.src}
            width={img.width}
            height={img.height}
            alt={img.alt}
            preload
            sizes="(max-width: 896px) 100vw, 896px"
            className="h-full w-full object-cover"
          />
        </div>
        <figcaption className="caption">
          {img.caption}{" "}
          <span className="credit">
            Photo:{" "}
            <a href={img.sourceUrl} target="_blank" rel="noopener noreferrer">
              {"credit" in img && img.credit ? img.credit.replace(/^Photo: /, "") : `${img.photographer} / Unsplash`}
            </a>
          </span>
        </figcaption>
      </figure>
    </header>
  );
}
