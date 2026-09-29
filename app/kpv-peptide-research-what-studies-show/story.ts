import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  slug: "kpv-peptide-research-what-studies-show",
  title: "KPV peptide: what the research actually shows on gut inflammation and wound healing",
  description:
    "KPV is a three-amino-acid peptide fragment of alpha-MSH that enters cells through the PEPT1 transporter and quiets inflammatory signaling. Its preclinical record in gut inflammation is credible. When an FDA advisory panel reviewed it in July 2026, staff found no human trial data sufficient to establish effectiveness for its nominated uses.",
  date: "2026-09-29T08:00:00-04:00",
  type: "Article",
  category: "Compound research",
  image: "kpvLabVial",
  vials: ["glutathione", "bac-water"],
  notice:
    "All KPV research discussed here is preclinical or early-stage. KPV is not FDA-approved. Research-grade KPV is supplied for laboratory research purposes only.",
  lead: "KPV is a tripeptide, three amino acids long: lysine, proline, and valine. It is the C-terminal fragment of alpha-melanocyte-stimulating hormone, a natural pituitary peptide, and it has been studied for its effects on inflammatory signaling in cell cultures and animal models since the early 2000s.[1] When the FDA's Pharmacy Compounding Advisory Committee reviewed it in July 2026 as a candidate for the 503A compounding drugs list, the agency's own scientific staff concluded that available evidence did not establish effectiveness for either of KPV's nominated uses — wound healing and inflammatory conditions.[6] The committee voted 8 to 6 to recommend it anyway.[5]",
  sections: [
    {
      title: "What KPV is and how it enters cells",
      id: "what-kpv-is",
      paragraphs: [
        "Alpha-melanocyte-stimulating hormone, or alpha-MSH, is a thirteen-amino-acid pituitary hormone with documented anti-inflammatory properties. KPV is its last three amino acids: Lys-Pro-Val.[1] Researchers began studying this fragment after finding that the C-terminal end of alpha-MSH carried a significant portion of the hormone's anti-inflammatory activity in its own right.[1][4]",
        "The compound enters cells primarily through the PEPT1 transporter, a protein normally responsible for absorbing di- and tripeptides from food in the gut lining.[2] What makes this relevant to the gut inflammation research is that inflamed tissue expresses higher levels of PEPT1 than healthy tissue, which means KPV uptake concentrates in the tissue most affected by inflammatory conditions.[2] This property drove a lot of the early interest in KPV as a candidate for oral delivery in inflammatory bowel disease research.[2]",
        "Once inside the cell, KPV suppresses two major signaling pathways that drive inflammatory responses: NF-kB and the MAPK cascade.[2] These pathways regulate the production of pro-inflammatory cytokines, including interleukin-6 and TNF-alpha, and their inhibition reduces downstream inflammation in cell models.[2]",
      ],
    },
    {
      title: "Where the preclinical evidence is strongest",
      id: "preclinical-evidence",
      paragraphs: [
        "The gut inflammation research is the most developed part of the KPV evidence base.[1] Two standard mouse colitis models — DSS-induced colitis and TNBS-induced transfer colitis — have been used to study KPV's effects in a whole-animal setting.[7] In the DSS model, mice receiving KPV recovered body weight earlier and showed significantly reduced inflammatory infiltrates in colon tissue compared with control animals, confirmed through myeloperoxidase activity measurements in the colonic tissue.[7]",
        "The transfer colitis model, which induces a T-cell-mediated colitis closer in mechanism to Crohn's disease than DSS colitis, produced similar findings: recovery, body weight regain, and reduced inflammatory changes under KPV treatment.[7] Two different colitis models reaching the same direction of effect is a meaningful preclinical signal, though it is not clinical evidence. The models test biological plausibility in a simplified animal system, not safety and efficacy in human patients.[7]",
        "A 2016 study from the Emory and Georgia State research groups, which have worked on KPV since at least 2008, found that KPV reduced tumor formation in a chemically induced colon cancer model.[2] The authors noted KPV's potential to inhibit inflammation across multiple preclinical colon models.[2] This cancer-biology context is distinct from the wound healing and IBD research, and the carcinogenesis model was an exploratory finding rather than a primary research focus.[2]",
        "The wound healing research is less mature. The most direct wound study used a three-layered film dressing that released KPV first, followed by epidermal growth factor, in a glucose-responsive pattern, tested in diabetic mice.[3] Diabetic wounds are a demanding model because chronic inflammation in diabetic tissue typically stalls the normal healing sequence. The film significantly improved wound repair rate compared with control dressings in that setting.[3] The study tested a specialized engineered delivery system, not a simple topical cream, and the results belong to the diabetic mouse model that produced them.[3]",
      ],
    },
    {
      title: "What the FDA staff found when they reviewed KPV",
      id: "fda-review",
      paragraphs: [
        "When FDA scientists reviewed KPV ahead of the July 23 PCAC meeting, they evaluated it against three criteria: physicochemical characterization, historical compounding use, and evidence of safety and effectiveness for its nominated indications.[5]",
        "On effectiveness, staff concluded the evidence did not establish that KPV works for wound healing or inflammatory conditions in the evaluated population — human patients.[5] The cell culture and mouse model data, while credible as preclinical research, does not constitute clinical effectiveness evidence under the FDA's review framework for compounding eligibility.[5] On safety, staff identified incomplete immunogenicity and purity characterization data for injectable formulations.[5]",
        "The committee overruled that conclusion 8 to 6.[5] As with the other Day 1 compounds, the yes votes emphasized patient access and unmet need rather than addressing the specific evidentiary gaps the staff identified.[5] The committee's recommendation is advisory and non-binding; formal rulemaking is required before KPV could legally appear in compounded preparations.[5][6]",
      ],
    },
    {
      title: "One clinical trial and what it covers",
      id: "clinical-trial",
      paragraphs: [
        "A search of ClinicalTrials.gov in late August 2026 found a registered human study for KPV in progress.[2] The existence of a registered trial distinguishes KPV from many compounds in the 503A review queue, which have no clinical trial record at all.[2]",
        "What a trial registration establishes is that researchers are studying the compound in human participants under an approved protocol. Registration does not establish results, safety, or efficacy, and a trial in progress cannot be cited as evidence of clinical benefit.[2] Results would need to be published and independently evaluated before they could support a clinical claim.[2]",
        "The route and delivery format of any human trial matters significantly for KPV because the preclinical record spans oral, topical, rectal, and injectable administration — and findings from one route do not automatically transfer to another.[2][3] The PEPT1-concentration effect that makes oral or intracolonic delivery in gut inflammation research mechanistically plausible does not apply to subcutaneous injection in the same way.[2]",
      ],
    },
    {
      title: "What KPV's regulatory status means for researchers",
      id: "regulatory-status",
      paragraphs: [
        "KPV is not FDA-approved for any indication and has no approved therapeutic use in the United States or in any major Western jurisdiction as of September 2026.[5] Its removal from FDA Category 2 in April 2026 reduced enforcement scrutiny of the compound's placement in the compounding classification framework, but removal from Category 2 does not constitute approval or authorization to compound.[6]",
        "Research-grade KPV is supplied for laboratory and in vitro research. That research use status is not changed by the PCAC vote, and the advisory recommendation does not create any pathway for purchasing research-grade KPV as a treatment.[5][6] If the rulemaking process concludes favorably and KPV reaches Category 1, the resulting access pathway would require a licensed prescriber, an individual prescription, and a licensed 503A compounding pharmacy — not a research vendor.[6]",
        "The twenty studies indexed on PubMed as of June 2026 cover a range of preclinical and delivery contexts.[1] The evidence is real and is appropriate for researchers working on inflammatory signaling, gut barrier function, wound biology, and peptide delivery systems. What it does not yet cover is a completed human trial with published endpoints for any of the uses the FDA reviewed.[1][5]",
      ],
    },
  ],
  faqs: [
    {
      q: "What is KPV?",
      a: "KPV is a tripeptide — three amino acids: lysine, proline, and valine — that is the C-terminal fragment of alpha-melanocyte-stimulating hormone. It enters cells via the PEPT1 transporter and suppresses NF-kB and MAPK inflammatory signaling pathways. It is studied for gut inflammation and wound healing in preclinical models and is not FDA-approved.",
      refs: [1, 2],
    },
    {
      q: "Has KPV been tested in humans?",
      a: "At least one human trial for KPV is registered on ClinicalTrials.gov and was in progress as of late August 2026. The trial registration confirms research activity but does not establish results. No published randomized controlled trial has confirmed KPV's effectiveness for wound healing or inflammatory conditions in human patients.",
      refs: [2],
    },
    {
      q: "What did the FDA say about KPV in July 2026?",
      a: "The FDA's career scientific staff reviewed KPV for its nominated uses of wound healing and inflammatory conditions and recommended against adding it to the 503A Bulk Drug Substances List, citing insufficient human effectiveness evidence and incomplete safety characterization for injectable formulations. The FDA's advisory committee voted 8 to 6 to recommend it anyway. The recommendation is advisory and does not constitute FDA approval.",
      refs: [5, 6],
    },
    {
      q: "What is the PEPT1 transporter connection to KPV research?",
      a: "PEPT1 is a transporter protein in the gut lining that absorbs di- and tripeptides from digested food. Inflamed intestinal tissue upregulates PEPT1 expression, which means oral or intracolonic KPV can concentrate in inflamed areas. This mechanism is one reason researchers have studied KPV for gut inflammation using oral delivery. It does not apply in the same way to injectable formulations.",
      refs: [2],
    },
  ],
  sources: [
    {
      id: 1,
      url: "https://whatpeptidesdo.com/research/kpv",
      title:
        "KPV Research and Studies — 20 PubMed-indexed studies (WhatPeptidesDo, updated June 2026)",
    },
    {
      id: 2,
      url: "https://musculoskeletalkey.com/kpv-peptide-what-researchers-should-know-about-inflammation-gut-health-and-immune-balance",
      title:
        "KPV Peptide: What Researchers Should Know About Inflammation, Gut Health, and Immune Balance (Musculoskeletal Key, August 2026)",
    },
    {
      id: 3,
      url: "https://kpv.com/article/kpv-for-wound-healing",
      title:
        "KPV for Wound Healing Research: Inside the Diabetic Mouse Study (KPV.com, updated July 24 2026)",
    },
    {
      id: 4,
      url: "https://newtropin.com/blog/kpv-gi-dermatological-inflammation-research",
      title:
        "KPV for GI and Dermatological Inflammation: Clinical Research Summary (Newtropin, May 2026)",
    },
    {
      id: 5,
      url: "https://www.mcdermottlaw.com/insights/bulk-list-bound-pcac-backs-majority-of-peptides-in-two-day-public-meeting/",
      title:
        "PCAC backs majority of peptides in two-day public meeting (McDermott Will & Emery, July 2026)",
    },
    {
      id: 6,
      url: "https://peptidedocket.com/",
      title: "Peptide Docket — US Peptide Regulatory Status Tracker (updated July 24 2026)",
    },
    {
      id: 7,
      url: "https://pubmed.ncbi.nlm.nih.gov/18092346/",
      title:
        "Melanocortin-derived tripeptide KPV has anti-inflammatory potential in murine models of inflammatory bowel disease (PubMed PMID 18092346)",
    },
  ],
  related: [
    {
      url: "/fda-pcac-peptide-compounding-vote-2026",
      title:
        "What the FDA's July 2026 peptide compounding vote actually changes",
    },
    {
      url: "/what-does-research-use-only-mean",
      title: "What does research use only actually mean?",
    },
    {
      url: "/peptide-enforcement-2026",
      title: "Peptide enforcement in 2026: the full timeline",
    },
    {
      url: "/how-to-read-peptide-coa",
      title: "How to read a peptide certificate of analysis",
    },
  ],
};
