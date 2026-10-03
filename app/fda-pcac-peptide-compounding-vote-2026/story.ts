import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  slug: "fda-pcac-peptide-compounding-vote-2026",
  title:
    "What the FDA's July 2026 peptide compounding vote actually changes",
  description:
    "FDA advisers recommended six peptides for the 503A compounding list in July 2026. What the vote means for rulemaking, prescription access and research use.",
  date: "2026-09-29T08:00:00-04:00",
  dateModified: "2026-10-03T13:22:44.305Z",
  correction: "Correction: We corrected the compounding eligibility rules, research use labeling and regulatory chronology, including the May restoration of non-injectable GHK-Cu to Category 1. We also corrected the four review criteria, narrowed the evidence claims, and removed an unsupported panelist attribution, agency-silence claims and rulemaking timetable.",
  type: "NewsArticle",
  category: "Regulatory",
  image: "fdaPcacMeeting",
  vials: ["nad", "ghk"],
  notice:
    "This article covers a regulatory advisory process. A compounding recommendation is not FDA drug approval. Research-grade peptides are not approved for human use by this vote.",
  lead: "On July 23 and 24, 2026, the FDA's Pharmacy Compounding Advisory Committee recommended six of seven peptides for the agency's 503A compounding list, going against FDA staff recommendations on those six.[1][9] The vote is advisory: it does not approve a drug or itself add a substance to the list.[2][6]",
  sections: [
    {
      title: "What happened at the White Oak campus in July",
      id: "what-happened",
      paragraphs: [
        "The Pharmacy Compounding Advisory Committee, known as the PCAC, met at the FDA's White Oak campus in Silver Spring, Maryland, under docket FDA-2025-N-6895.[6] It reviewed seven compounds for potential inclusion on the Section 503A Bulk Drug Substances List, one statutory route for using bulk substances in patient-specific compounding.[7][9]",
        "The committee voted on each compound separately. On July 23, it recommended KPV, MOTS-c and two additional compounds for the list. On July 24, it recommended Semax and Epitalon, and rejected Emideltide, also called DSIP. Six of seven compounds received favorable recommendations.[1]",
        "FDA's written briefing had proposed excluding the free base and acetate forms of all seven compounds. The panel agreed with staff on Emideltide and disagreed on the other six.[1][9]",
      ],
    },
    {
      title: "Regulatory changes from 2023 to the July vote",
      id: "regulatory-backstory",
      paragraphs: [
        "In September 2023, the FDA placed more than a dozen research peptides in Category 2 of its interim compounding framework, citing safety concerns about immune reactions and impurities alongside limited human clinical data.[1][4] Category 2 substances were outside the agency's Category 1 enforcement discretion policy.[2]",
        "On February 27, 2026, Health and Human Services Secretary Robert F. Kennedy Jr. announced that many restricted peptides would be considered for reclassification.[1] In April, FDA announced the removal of twelve peptides from Category 2 following withdrawal of their nominations.[1][4] Separately, its April 16 Federal Register notice scheduled the July advisory meeting.[8] Removal from Category 2 did not itself confer Category 1 status or add the substances to the final 503A bulks list.[1][2]",
        "The July meeting brought seven of those substances to the PCAC for scientific review. Its role was to advise the FDA on inclusion in the 503A bulks list, with the agency retaining responsibility for the decision.[6][9]",
      ],
    },
    {
      title: "Why the FDA's own scientists said no",
      id: "why-scientists-said-no",
      paragraphs: [
        "FDA's briefing introduction sets out four evaluation criteria: physical and chemical characterization, safety issues, evidence of effectiveness or lack of effectiveness, and historical use in compounded drug products. FDA weighs those criteria together for each substance.[9]",
        "Staff concerns centered on limited evidence of safety and effectiveness, along with insufficient information to characterize the substances, meaning to establish their chemical identity and properties.[1][9] The written proposals recommended against adding each of the seven compounds and their evaluated forms to the list.[9]",
      ],
    },
    {
      title: "What panel members said to justify yes votes",
      id: "yes-vote-rationale",
      paragraphs: [
        "Supporters of inclusion emphasized patient access and argued that bringing the compounds into pharmacy compounding could improve oversight of a market already supplying them.[1]",
        "The American Journal of Managed Care reported that the reconstituted committee included eight new members.[5]",
        "The votes were close. KPV and two other Day 1 compounds passed 8 to 6 with one abstention each; MOTS-c passed 7 to 5 with two abstentions. On Day 2, Semax passed 8 to 5 and Epitalon 7 to 4, each with one abstention. Emideltide received six yes votes and seven no votes, with one abstention.[1]",
      ],
    },
    {
      title: "What the vote does and does not change right now",
      id: "what-changes",
      paragraphs: [
        "The PCAC advises the FDA. Formal additions to the 503A bulks list require FDA rulemaking, with a proposed rule followed by public comment and a final rule.[2] The list is one of the statute's conditional alternatives for bulk substances: they must meet an applicable United States Pharmacopeia (USP) or National Formulary (NF) monograph and the USP compounding chapter; if no monograph exists, they must be components of FDA-approved drugs; if neither alternative applies, they must appear on the final bulks list.[7]",
        "The vote sets no deadline for a final rule, and FDA can depart from the committee's recommendation.[6][7] Separately, FDA's interim policy describes conditions under which it does not intend to take enforcement action over certain Category 1 substances while evaluation proceeds. That discretion remains subject to the policy's conditions, including registered manufacturers and a valid certificate of analysis, as well as the other 503A requirements.[2]",
        "The vote concerns compounding for patients. It does not approve research-grade products for human use.[6][7] Research use only wording also does not override evidence of intended human use. In its March 2026 warning letter to Gram Peptides, FDA cited product claims and the circumstances of sale despite the company's research use labeling.[10]",
        "Section 503A centers on an identified patient and a valid prescription. It covers compounding by a licensed pharmacist in a state-licensed pharmacy or federal facility, or by a licensed physician, and permits limited anticipatory compounding under specified conditions.[7] Addition of a bulk substance to the list would not remove the statute's other requirements.[2][7]",
      ],
    },
    {
      title: "Five more compounds and the next advisory review",
      id: "what-comes-next",
      paragraphs: [
        "FDA has announced another PCAC meeting to consider five more substances for the 503A bulks list, with a target before the end of February 2027. Its announcement includes GHK-Cu, Cathelicidin LL-37, Dihexa acetate and PEG-MGF among the candidates, and says the time and location will be scheduled later.[12]",
        "GHK-Cu has a separate category history for non-injectable use. FDA's May 14, 2026 categories document records its restoration to Category 1 after an April 22 removal. A nominator clarified on May 5 that it intended to withdraw only the injectable nomination.[11] The restored entry excludes injectable routes and remains subject to the interim policy's conditions, rather than constituting final-list inclusion or drug approval.[2][11]",
        "The next advisory review will address another group of candidates, while formal changes to the 503A bulks list remain an FDA rulemaking decision.[2][12] For the six that received favorable July votes, the result supplies a recommendation for that decision, with neither a guaranteed outcome nor a deadline for completing it.[6][7]",
      ],
    },
  ],
  faqs: [
    {
      q: "Does the FDA's July 2026 PCAC vote mean these peptides are now FDA-approved?",
      a: "No. The PCAC vote is an advisory recommendation, not FDA drug approval or a finding that the compounds are safe and effective. It does not itself add a substance to the 503A bulks list, which FDA develops through rulemaking.",
      refs: [1, 2],
    },
    {
      q: "Can compounding pharmacies legally prepare these peptides now?",
      a: "The vote alone does not authorize compounding. For bulk substances, Section 503A has conditional routes through an applicable USP or NF monograph and the USP compounding chapter, components of FDA-approved drugs when no monograph exists, or the final bulks list when neither alternative applies. FDA separately has a conditional interim enforcement policy for Category 1 substances. A favorable advisory vote is not itself a listing or an enforcement policy.",
      refs: [2, 7],
    },
    {
      q: "Why did the FDA's own scientists recommend against all seven compounds?",
      a: "Staff raised concerns about limited safety and effectiveness evidence and insufficient characterization of the substances. FDA's written proposals recommended against adding all seven compounds in their evaluated forms. The panel nevertheless recommended six. Those recommendations do not resolve the evidence gaps identified by staff.",
      refs: [1, 9],
    },
    {
      q: "What does the vote mean for the research-use-only peptide market?",
      a: "The vote concerns patient compounding and does not approve research-grade peptides for human use. Research use only wording is not a legal shield when product claims or the circumstances of sale show intended human use.",
      refs: [7, 10],
    },
    {
      q: "Which peptides were reviewed, and which ones were recommended?",
      a: "Seven compounds were reviewed. Six received favorable votes: KPV, MOTS-c, Semax, Epitalon and two additional compounds reviewed on Day 1. Emideltide, also known as DSIP, was rejected by a single vote. These were recommendations for the compounding list, not approvals for treating particular conditions.",
      refs: [1, 6],
    },
  ],
  sources: [
    {
      id: 1,
      url: "https://www.mcdermottlaw.com/insights/bulk-list-bound-pcac-backs-majority-of-peptides-in-two-day-public-meeting/",
      title: "PCAC backs majority of peptides in two-day public meeting (McDermott Will & Emery, July 2026)",
    },
    {
      id: 2,
      url: "https://www.fda.gov/media/174456/download?attachment=",
      title: "Interim Policy on Compounding Using Bulk Drug Substances Under Section 503A (FDA, January 2025)",
    },
    {
      id: 4,
      url: "https://www.thefdalawblog.com/2026/04/fdas-peptide-rally-what-compounders-and-industry-need-to-know-post-1-of-2/",
      title: "FDA's Pep(tide) Rally: What compounders and industry need to know (FDA Law Blog, April 2026)",
    },
    {
      id: 5,
      url: "https://www.ajmc.com/view/5-things-to-know-about-the-fda-s-peptide-reversal",
      title: "5 Things to Know About the FDA's Peptide Reversal (AJMC, August 2026)",
    },
    {
      id: 6,
      url: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026",
      title: "July 23-24, 2026: Meeting of the Pharmacy Compounding Advisory Committee (FDA.gov)",
    },
    {
      id: 7,
      url: "https://www.govinfo.gov/content/pkg/USCODE-2024-title21/html/USCODE-2024-title21-chap9-subchapV-partA-sec353a.htm",
      title: "21 U.S.C. 353a: Pharmacy compounding (2024 U.S. Code, GovInfo)",
    },
    {
      id: 8,
      url: "https://www.govinfo.gov/content/pkg/FR-2026-04-16/pdf/2026-07361.pdf",
      title: "Pharmacy Compounding Advisory Committee: Notice of Meeting (Federal Register, April 16, 2026)",
    },
    {
      id: 9,
      url: "https://www.fda.gov/media/193342/download",
      title: "FDA Briefing Document Introduction: July 23 and 24, 2026 Pharmacy Compounding Advisory Committee",
    },
    {
      id: 10,
      url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/gram-peptides-721806-03312026",
      title: "Gram Peptides warning letter (FDA, March 31, 2026)",
    },
    {
      id: 11,
      url: "https://www.fda.gov/media/94155/download?attachment=",
      title: "Bulk Drug Substances Nominated for Use in Compounding Under Section 503A (FDA, updated May 14, 2026)",
    },
    {
      id: 12,
      url: "https://www.fda.gov/advisory-committees/pharmacy-compounding-advisory-committee/meeting-pharmacy-compounding-advisory-committee",
      title: "Planned Pharmacy Compounding Advisory Committee meeting before the end of February 2027 (FDA)",
    },
  ],
  related: [
    {
      url: "/fda-glp1-compounding-exclusion-proposed-rule-2026",
      title:
        "FDA moves to permanently close bulk compounding of GLP-1 drugs: what the proposed rule means",
    },
    {
      url: "/empower-pharmacy-fda-warning-letter-september-2026",
      title: "Empower Pharmacy FDA warning: what the September letter establishes",
    },
    {
      url: "/peptide-enforcement-2026",
      title: "Peptide enforcement in 2026: the full timeline",
    },
    {
      url: "/what-does-research-use-only-mean",
      title: "What does research use only actually mean?",
    },
  ],
};
