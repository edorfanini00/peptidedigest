// Match the two visible crumbs rendered by ArticleHero: publication and category.
export function articleBreadcrumbSchema(category: string, articleUrl: string) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "The Peptide Digest", item: "https://peptidedigest.co" },
      { "@type": "ListItem", position: 2, name: category, item: articleUrl },
    ],
  };
}
