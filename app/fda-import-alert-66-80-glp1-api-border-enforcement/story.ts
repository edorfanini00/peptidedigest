import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  slug: "fda-import-alert-66-80-glp1-api-border-enforcement",
  title:
    "FDA's GLP-1 import alert: what the September 2026 update adds and why one Green List manufacturer is now under scrutiny",
  description:
    "The FDA updated Import Alert 66-80 on September 21, 2026, adding new peptide product codes and expanding the Green List to orforglipron. Separately, a Chinese API manufacturer already on the list allegedly repackaged unapproved semaglutide and altered records. Here is what changed and what the fraud case means.",
  date: "2026-09-30T08:00:00-04:00",
  type: "NewsArticle",
  category: "Regulatory",
  image: "glp1ImportAlert",
  vials: ["nad", "mots-c"],
  notice:
    "This article covers FDA regulatory and enforcement actions. It does not address the therapeutic use of any compound. Research-grade peptides remain research use only.",
  lead: "The FDA revised Import Alert 66-80 on September 21, 2026, extending its border-detention authority over GLP-1 active pharmaceutical ingredients to cover new product codes, including a broader \"Hormone N.E.C.\" category, and adding orforglipron API — the ingredient in Eli Lilly's newly approved oral diabetes drug Foundayo — to the Green List of trusted foreign suppliers.[1] The update followed an August 21 revision in which the agency disclosed that one in five of the 48 foreign GLP-1 API sites it had evaluated was noncompliant — and separately described a Chinese manufacturer already on the Green List that allegedly obtained unapproved semaglutide from an unlisted facility, relabeled it, altered records, and shipped it into U.S. commerce.[2]",
  sections: [
    {
      title: "What Import Alert 66-80 is and how it works",
      id: "what-it-is",
      paragraphs: [
        "Import Alert 66-80, formally titled \"Detention Without Physical Examination of Glucagon-Like Peptide-1 (GLP-1) Receptor Agonist Bulk Drug Substances,\" is an administrative mechanism that allows FDA field officers at U.S. ports of entry to detain incoming shipments of GLP-1 active pharmaceutical ingredients without inspecting them first.[1] The legal basis is a finding that the products appear adulterated under Section 501 of the Federal Food, Drug, and Cosmetic Act.[1]",
        "Before the alert existed, FDA could detain a shipment only after physical sampling. Under the alert, detention becomes the default for non-listed manufacturers. The burden shifts to the importer: to get a shipment released, the company must submit evidence — certificates of analysis, manufacturing records, stability data, chain-of-custody documentation — demonstrating the ingredient meets CGMP standards.[1]",
        "The Green List is the exception. Manufacturers that have passed an FDA inspection or submitted sufficient records are exempted from automatic detention. Their shipments can still be sampled, but they are not subject to the alert's default hold.[1][2]",
      ],
    },
    {
      title: "Why the agency built it in the first place",
      id: "backstory",
      paragraphs: [
        "The alert originated in September 2025, when GLP-1 drug shortages had pushed a large share of the market toward compounding pharmacies, many of which sourced bulk API from overseas suppliers. The FDA evaluated 48 foreign GLP-1 API manufacturing sites and found 10 — roughly 21 percent — noncompliant with basic manufacturing standards under Section 501.[1][2]",
        "The agency also described a specific evasion pattern: manufacturers registering with FDA, offering API for U.S. import, refusing records requests, and then deregistering — all within a short window.[1] The pattern suggested some suppliers were cycling in and out of the FDA's tracking system to avoid scrutiny. Registration theater, with a real-looking FDA establishment number on the sales deck and no intention of sustaining compliance.",
        "Since those shortages, courts have held that the semaglutide and tirzepatide shortage designations have ended. The Fifth Circuit upheld FDA's position in August 2026, citing Novo Nordisk's capacity of roughly 5.8 million packages per month against about 520,000 compounded packages.[3] That ruling legally narrowed the pathway for compounding pharmacies to continue producing these drugs. But Import Alert 66-80 remained on the books, and its September 2026 revision expanded it further.",
      ],
    },
    {
      title: "What the September 2026 revision added",
      id: "september-update",
      paragraphs: [
        "The September 21, 2026 update made two material changes. First, it added new FDA product codes to the alert's scope: four codes under the \"Hormone N.E.C.\" category (product code 64R) covering non-sterile powder, sterile powder, and API forms intended for further manufacturing or prescription compounding.[1] Adding these broader codes gives FDA import field staff authority to detain a wider range of peptide-adjacent shipments under the same mechanism, not just compounds that fit an existing named GLP-1 drug code.",
        "Second, orforglipron API appeared on the Green List for the first time.[1] Orforglipron, sold under the brand name Foundayo, is Lilly's oral non-peptide GLP-1 receptor agonist approved by the FDA on April 1, 2026. Unlike semaglutide and tirzepatide, orforglipron is a small molecule, not a peptide. The FDA listed three manufacturers for the API and one for an orforglipron solid-dispersion drug product intermediate, with sites identified by country: two in China, one in Ireland, and the intermediate in Portugal.[1]",
        "Unlike the semaglutide and tirzepatide entries, which use separate product subcodes distinguishing API intended \"for further manufacturing\" from API \"for Rx compounding,\" orforglipron appears under a single product code without that distinction.[1][4] At least one legal analysis has noted that this framing does not create a compounding authorization — Green List status exempts a manufacturer from automatic detention, it does not authorize the underlying compounding — but the single code is ambiguous about intended end use.[4]",
      ],
    },
    {
      title: "The Harbin case: a Green List fraud allegation",
      id: "harbin-case",
      paragraphs: [
        "Among the more serious disclosures in the August 2026 revision of the alert was a description of Harbin Jixianglong Biotech, a Chinese API manufacturer that had been placed on the Green List.[2][4] FDA described conduct that, if accurate, would be a direct circumvention of the alert's purpose: Harbin allegedly obtained semaglutide API from a facility that was not on the Green List, relabeled it under Harbin's name, altered manufacturing and retest records, and shipped the product into U.S. commerce.[2] The agency said this conduct may have been an attempt to evade Import Alert 66-80.[2]",
        "Harbin's status on the Green List at the time meant its shipments were presumptively trusted. The allegations, if borne out, would mean a trusted manufacturer used that status as a conduit for product from an untrusted one. FDA has not published a charging document or criminal referral in connection with the Harbin situation, and the company's regulatory status should be understood as an allegation by FDA, not a proven finding.[2]",
        "The case has drawn a response from at least one external analyst who published an appeal in September 2026 arguing the Green List mechanism should be shut down entirely on the grounds that firm-level trust credentials are reusable by bad actors, the list is redacted so the public cannot audit it, and FDA's own noncompliance data shows the supply chain warrants universal scrutiny rather than presumptive trust.[4]",
      ],
    },
    {
      title: "What this means for the research peptide supply chain",
      id: "supply-chain-implications",
      paragraphs: [
        "Import Alert 66-80 covers bulk API entering the United States, not finished research vials already in circulation. The alert applies at the border, and its effect on any particular research supplier depends on where that supplier's upstream API originates and whether that upstream manufacturer is on the Green List or has passed an independent customs review.[1]",
        "The expansion of the alert to cover \"Hormone N.E.C.\" product codes is the most directly relevant change for the broader peptide market. Those codes were not in the original alert and bring a wider range of peptide-adjacent bulk substance shipments under default detention authority.[1] What that means in practice depends on how FDA field officers apply the codes at specific ports, which is not spelled out publicly in the alert itself.",
        "The fraud allegation against Harbin has a separate implication for anyone relying on COAs or supplier claims without independent testing: the company whose name is on the paperwork is not always the company that made the product.[2][4] FDA's own summary of the situation is a fairly direct statement that import documentation in this supply chain has been falsified by at least one Green List manufacturer.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is Import Alert 66-80?",
      a: "It is an FDA administrative tool that lets port officers detain shipments of GLP-1 active pharmaceutical ingredients without physically inspecting them first. Shipments from manufacturers on the Green List are exempted. The alert was first issued in September 2025 and revised multiple times through September 2026.",
      refs: [1],
    },
    {
      q: "Does the September 2026 update affect research peptide suppliers?",
      a: "The update adds broader 'Hormone N.E.C.' product codes to the alert's scope, which extends default detention authority to a wider range of peptide-adjacent bulk substances at the border. It does not change the legal status of research-grade peptides sold domestically, but suppliers sourcing API internationally may be affected at the import level depending on their upstream supplier's Green List status.",
      refs: [1],
    },
    {
      q: "What is the Green List, and who is on it?",
      a: "The Green List is the set of foreign manufacturers whose GLP-1 API shipments are exempted from automatic detention under Import Alert 66-80. FDA does not publicly disclose the names of Green List firms; only countries and product codes appear in the public version of the alert. A manufacturer can be added after demonstrating CGMP compliance through inspection or submitted records.",
      refs: [1, 2],
    },
    {
      q: "What happened with Harbin Jixianglong Biotech?",
      a: "FDA described conduct by Harbin, a Chinese API manufacturer on the Green List, in which it allegedly sourced semaglutide from an unlisted facility, relabeled it, altered records, and exported it to the United States. FDA said this may have been an attempt to circumvent Import Alert 66-80. These are FDA's allegations; Harbin has not been charged in a U.S. court proceeding as of September 30, 2026.",
      refs: [2, 4],
    },
    {
      q: "Why was orforglipron added to the Green List?",
      a: "Orforglipron (Foundayo) is Lilly's oral non-peptide GLP-1 drug approved in April 2026. FDA added orforglipron API from three foreign manufacturers and an intermediate from a fourth to the Green List in August 2026. The agency has not publicly explained the rationale beyond the standard CGMP evaluation process. Critics have noted that unlike semaglutide and tirzepatide entries, the orforglipron product code does not distinguish API for manufacturing from API for compounding.",
      refs: [1, 4],
    },
  ],
  sources: [
    {
      id: 1,
      url: "https://www.accessdata.fda.gov/cms_ia/importalert_1186.html",
      title: "Import Alert 66-80 — FDA (revised September 21, 2026)",
    },
    {
      id: 2,
      url: "https://pepsreview.com/articles/fda-glp-1-green-list-faces-shutdown-call-over-counterfeit-api-risk",
      title: "FDA GLP-1 'Green List' Faces Shutdown Call Over Counterfeit API Risk — PepsReview",
    },
    {
      id: 3,
      url: "https://www.fda.gov/drugs/drug-alerts-and-statements/fdas-concerns-unapproved-glp-1-drugs-used-weight-loss",
      title: "FDA's Concerns with Unapproved GLP-1 Drugs Used for Weight Loss — FDA",
    },
    {
      id: 4,
      url: "https://rxborderdefense.com/resources/through-the-green-list",
      title: "Through the Green List — RxBorderDefense.com",
    },
  ],
  related: [
    {
      url: "/fda-glp1-compounding-exclusion-proposed-rule-2026",
      title: "FDA moves to permanently close bulk compounding of GLP-1 drugs: what the proposed rule means",
    },
    {
      url: "/fda-pcac-peptide-compounding-vote-2026",
      title: "What the FDA's July 2026 peptide compounding vote actually changes",
    },
    {
      url: "/empower-pharmacy-fda-warning-letter-september-2026",
      title: "Empower Pharmacy FDA warning: what the September letter establishes",
    },
  ],
};
