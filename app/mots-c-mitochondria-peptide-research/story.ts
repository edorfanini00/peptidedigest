import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  slug: "mots-c-mitochondria-peptide-research",
  title:
    "MOTS-c: the peptide your mitochondria make and what the research says it does",
  description:
    "MOTS-c is a short peptide encoded not by nuclear DNA but by the mitochondrial genome itself. Research in rodents and cell models shows it activates AMPK through the folate-AICAR pathway, improves insulin sensitivity, and counters cellular senescence. Here is what the studies establish and where the evidence is still thin.",
  date: "2026-09-30T08:00:00-04:00",
  type: "Article",
  category: "Research",
  image: "motscMitochondria",
  vials: ["mots-c", "nad"],
  notice:
    "This article covers preclinical and mechanistic research on MOTS-c. Most evidence comes from rodent and cell-culture studies. There are no large-scale completed clinical trials in humans. MOTS-c is not an FDA-approved drug or treatment for any condition. Research-grade MOTS-c is for laboratory use only.",
  lead: "MOTS-c is a 16-amino-acid peptide encoded within the mitochondrial genome, specifically in the 12S ribosomal RNA gene, rather than in nuclear DNA.[1] That origin makes it unusual. Most peptides studied in this context come from protein fragments or synthetic analogs. MOTS-c is produced inside the cell's own energy organelles and can travel to the nucleus, where it appears to regulate genes involved in stress adaptation and metabolic balance.[2] Most of the evidence for its effects comes from rodent studies and cell culture, with limited human data. The FDA's advisory committee recommended it for the 503A compounding list in July 2026, a step that does not constitute approval or establish clinical benefit.[3]",
  sections: [
    {
      title: "Where MOTS-c comes from and what makes it different",
      id: "origin",
      paragraphs: [
        "The human mitochondrial genome encodes thirteen proteins, all components of the oxidative phosphorylation machinery that produces ATP. For decades, that list was considered complete. Starting around 2011, researchers identified short open reading frames — brief stretches of DNA that code for small proteins — embedded in what had been treated as non-coding regions of the mitochondrial genome.[1] MOTS-c was the first such peptide to be described in detail, in a 2015 Cell Metabolism paper from the Cohen laboratory at USC.[1]",
        "MOTS-c is 16 amino acids long, with the sequence MRWQEMGYIFYPRKLR. It is encoded in the 12S rRNA gene, translated in the mitochondrial cytoplasm, and then secreted into the cell's cytoplasm and eventually the bloodstream.[2] Exercise, fasting, and metabolic stress all increase MOTS-c levels in plasma, which led early researchers to describe it as a mitokine — a hormone-like signal emitted by mitochondria in response to cellular conditions.[2]",
        "The retromitochondrial origin matters because it positions MOTS-c as part of a retrograde communication pathway: mitochondria telling the nucleus how conditions look from the energy-production side of the cell. Most intercellular signaling is prograde — the nucleus instructing the mitochondria. MOTS-c represents the other direction.[2]",
      ],
    },
    {
      title: "The AMPK pathway: what the research says MOTS-c actually does",
      id: "mechanism",
      paragraphs: [
        "The most studied mechanism for MOTS-c's metabolic effects runs through the folate cycle and de novo purine biosynthesis pathway. MOTS-c inhibits enzymes in the folate cycle, which leads to an accumulation of AICAR (5-aminoimidazole-4-carboxamide ribonucleotide), a naturally occurring AMP-kinase activator.[1][2] AICAR phosphorylates and activates AMPK, the cellular energy sensor that regulates glucose uptake, fatty acid oxidation, and mitochondrial biogenesis.[2]",
        "In the 2015 Cell Metabolism study, MOTS-c treatment improved insulin sensitivity in high-fat-diet-fed mice and aged mice, reduced fat accumulation, and activated AMPK in skeletal muscle.[1] These were mouse models, not human clinical trials. A 2019 follow-up using metabolomics found that MOTS-c administration reduced three plasma pathways — sphingolipid metabolism, monoacylglycerol metabolism, and dicarboxylate metabolism — that are elevated in obesity and type 2 diabetes models.[5]",
        "Under stress or exercise, MOTS-c also translocates to the nucleus, where it appears to bind to promoter regions containing antioxidant response elements (ARE) and upregulate stress adaptation genes.[2] This nuclear translocation is distinct from the cytoplasmic AMPK signaling and appears to operate through a separate pathway involving AMPK-dependent phosphorylation of MOTS-c itself.[2] The two functions — metabolic regulation via AICAR-AMPK and nuclear stress-adaptation via ARE — are likely complementary but have been studied in separate experimental systems.",
      ],
    },
    {
      title: "Pancreatic islet senescence: a 2025 study and what it showed",
      id: "islet-senescence",
      paragraphs: [
        "A 2025 study in Experimental & Molecular Medicine examined whether MOTS-c could slow beta-cell senescence in a mouse model of type 1 diabetes (NOD mice), which develop autoimmune destruction of insulin-producing beta cells.[4] The researchers treated NOD mice with 0.5 mg/kg MOTS-c intraperitoneally per day and compared outcomes to scrambled peptide controls and exendin-4 (a GLP-1 receptor agonist) controls.[4]",
        "MOTS-c treatment reduced markers of cellular senescence in pancreatic islets, improved mitochondrial morphology in treated cells, and increased oxidative phosphorylation activity.[4] The researchers also performed gene microarray analysis on islet cells isolated from 60-week-old mice and identified changes in genes associated with mitochondrial function and senescence pathways.[4]",
        "The study's limitations are important. NOD mice are one experimental model of autoimmune diabetes; results in this model do not establish effect in human type 1 or type 2 diabetes. The study used injected MOTS-c at a specific dose in animals — there are no published randomized trials of MOTS-c in human diabetic populations. The study does not address clinical safety, optimal dosing, or long-term effects in humans.[4]",
      ],
    },
    {
      title: "Exercise mimetic and aging: what 'exercise mimetic' actually means here",
      id: "exercise-aging",
      paragraphs: [
        "Several MOTS-c researchers use the term \"exercise mimetic\" to describe its metabolic profile, because MOTS-c levels rise during physical activity and its AMPK-activating effects overlap with pathways activated by aerobic exercise.[2] This framing requires a caveat: activating a subset of downstream metabolic signals is not the same as exercise. Exercise engages cardiovascular, musculoskeletal, immune, and neurological systems simultaneously in ways that no single compound replicates.[2]",
        "What the evidence more specifically supports is that MOTS-c activates AMPK in skeletal muscle, that aged rodents treated with MOTS-c show improved insulin sensitivity comparable to younger controls in some studies, and that MOTS-c plasma levels in humans decline with age.[2] A cross-sectional human study measured MOTS-c plasma concentrations across age groups and found lower levels in older adults and in individuals with obesity and type 2 diabetes.[2] These are associations in an observational study, not evidence that supplementing MOTS-c reverses aging or prevents diabetes in humans.",
        "The FDA's Pharmacy Compounding Advisory Committee recommended MOTS-c for the 503A Bulk Drug Substances List in July 2026 in the context of obesity and osteoporosis as nominated indications.[3] The committee's favorable vote was advisory, based on a review of limited human safety and efficacy data, and was opposed by FDA career scientists who found the human clinical evidence insufficient.[3] A final rule is required before any compounding pharmacy can legally prepare MOTS-c for patients.",
      ],
    },
    {
      title: "What has not been established",
      id: "limitations",
      paragraphs: [
        "There are no published large-scale phase 2 or phase 3 randomized clinical trials of MOTS-c in humans for any indication. Most evidence comes from rodent studies, cell culture, and small observational measurements in human plasma. Animal metabolism, dosing pharmacokinetics, and disease models differ from human biology in ways that make direct extrapolation unreliable.[2][4]",
        "The route of administration studied in most animal work is intraperitoneal injection, which is not a clinically practical route for human use. Oral bioavailability has not been established for MOTS-c, and intranasal delivery has not been examined in the published literature to the same extent as it has for other research peptides.[2]",
        "Sponsor interest is also relevant context. Several of the metabolomics and insulin-sensitivity studies on MOTS-c were funded by or conducted at institutions with intellectual property interests in MOTS-c analogs and related compounds.[1][5] That does not invalidate the findings, but independent replication of the key animal studies in MOTS-c's mechanistic profile has been limited.",
      ],
    },
  ],
  faqs: [
    {
      q: "What is MOTS-c and where does it come from?",
      a: "MOTS-c is a 16-amino-acid peptide encoded in the mitochondrial genome, specifically within the 12S ribosomal RNA gene. It is translated inside mitochondria and released into the cytoplasm and bloodstream. It is one of a class of peptides called mitochondrial-derived peptides, distinct from nuclear-encoded peptides.",
      refs: [1, 2],
    },
    {
      q: "What does MOTS-c do in rodent studies?",
      a: "In mouse models, MOTS-c treatment improved insulin sensitivity, reduced fat accumulation, and activated AMPK in skeletal muscle. The primary molecular mechanism studied involves inhibition of the folate cycle, accumulation of AICAR, and downstream AMPK activation. MOTS-c also translocates to the nucleus under stress, where it appears to activate antioxidant response element genes.",
      refs: [1, 2],
    },
    {
      q: "Has MOTS-c been tested in humans?",
      a: "No large-scale clinical trials have been completed. Observational studies have measured MOTS-c plasma levels in humans across age and metabolic disease groups and found lower levels in older adults and people with obesity and type 2 diabetes. These are associations, not evidence of clinical benefit from MOTS-c treatment. The FDA advisory committee review in July 2026 found the human efficacy evidence insufficient.",
      refs: [2, 3],
    },
    {
      q: "What did the FDA advisory committee say about MOTS-c in July 2026?",
      a: "The FDA's Pharmacy Compounding Advisory Committee voted to recommend MOTS-c for the 503A Bulk Drug Substances List, with obesity and osteoporosis listed as nominated indications. The FDA's own career scientists had advised against the recommendation, citing limited human clinical data. A favorable PCAC vote is advisory and does not change MOTS-c's current regulatory status. Formal rulemaking is required before compounding pharmacies can legally prepare it for patients.",
      refs: [3],
    },
    {
      q: "Is MOTS-c FDA-approved or available as a medical treatment?",
      a: "No. MOTS-c is not FDA-approved for any indication. Research-grade MOTS-c is sold for laboratory research use only. As of September 30, 2026, compounding pharmacies cannot legally prepare it for patients under 503A, even following the advisory committee's recommendation. Rulemaking must conclude before any legal compounding access exists.",
      refs: [3],
    },
  ],
  sources: [
    {
      id: 1,
      url: "https://pubmed.ncbi.nlm.nih.gov/25738459/",
      title:
        "The mitochondrial-derived peptide MOTS-c promotes metabolic homeostasis and reduces obesity and insulin resistance — Lee et al., Cell Metabolism (2015)",
    },
    {
      id: 2,
      url: "https://pubmed.ncbi.nlm.nih.gov/36670507",
      title:
        "Mitochondria-derived peptide MOTS-c: effects and mechanisms related to stress, metabolism and aging — Wan et al., Journal of Translational Medicine (2023)",
    },
    {
      id: 3,
      url: "https://www.bmj.com/content/394/bmj-2026-100422.full.pdf",
      title:
        "Peptides: US advisory committee recommends six for FDA 'compounding list' — BMJ (2026)",
    },
    {
      id: 4,
      url: "https://www.nature.com/articles/s12276-025-01521-1",
      title:
        "Mitochondrial-encoded peptide MOTS-c prevents pancreatic islet cell senescence to delay diabetes — Experimental & Molecular Medicine (2025)",
    },
    {
      id: 5,
      url: "https://pubmed.ncbi.nlm.nih.gov/31293078",
      title:
        "The mitochondrial-derived peptide MOTS-c is a regulator of plasma metabolites and enhances insulin sensitivity — Bhatt et al., PubMed (2019)",
    },
  ],
  related: [
    {
      url: "/fda-pcac-peptide-compounding-vote-2026",
      title: "What the FDA's July 2026 peptide compounding vote actually changes",
    },
    {
      url: "/kpv-peptide-research-what-studies-show",
      title: "KPV peptide: what the research actually shows on gut inflammation and wound healing",
    },
    {
      url: "/what-does-research-use-only-mean",
      title: "What Does Research Use Only (RUO) Actually Mean in 2026?",
    },
  ],
};
