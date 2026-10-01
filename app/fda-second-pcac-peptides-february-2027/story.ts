import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  slug: "fda-second-pcac-peptides-february-2027",
  title:
    "Five more peptides are heading to FDA's advisory panel: what the February 2027 review covers",
  description:
    "The FDA split its 2026 peptide review into two separate Pharmacy Compounding Advisory Committee meetings. After July's session covered seven compounds, a second meeting scheduled before February 2027 will evaluate GHK-Cu (injectable), Melanotan II, LL-37, Dihexa acetate, and PEG-MGF. Here is what each compound is and what the review process means.",
  date: "2026-10-01T08:00:00-04:00",
  type: "NewsArticle",
  category: "Regulation",
  image: "fdaPcacSecond",
  vials: ["ghk", "epithalon"],
  notice:
    "This article covers FDA regulatory process and scheduled advisory committee activity. None of the compounds discussed are approved drugs. Their inclusion on a PCAC agenda is an evaluation step, not authorization to compound or use them clinically. Research-grade compounds are for laboratory use only.",
  lead: "The FDA has scheduled a second Pharmacy Compounding Advisory Committee meeting before the end of February 2027 to evaluate five additional peptides for the 503A Bulk Drug Substances List — the list that lets licensed compounders legally prepare a substance against individual prescriptions.[1][2] The compounds on the agenda are GHK-Cu (injectable routes), Melanotan II, Cathelicidin (LL-37), Dihexa acetate, and Pegylated Mechano Growth Factor (PEG-MGF). The FDA announced this second session on April 15, 2026, when it removed twelve peptides from its Category 2 'may not be compounded' list and divided the follow-up review between two meetings.[1] The July 23–24, 2026 session covered seven compounds, six of which received favorable committee votes — recommendations the FDA has not yet acted on.[3] A fixed date, location, and public-comment docket for the February 2027 session have not been published as of October 2026.[1]",
  sections: [
    {
      title: "How the FDA got here: two tracks, two meetings",
      id: "background",
      paragraphs: [
        "In September 2023, the FDA placed nineteen peptides on its Category 2 interim list — substances the agency said 'may present significant safety risks' for compounding. Category 2 status effectively barred their use in preparations under Sections 503A and 503B of the Food, Drug, and Cosmetic Act.[4]",
        "In February 2026, then-incoming HHS Secretary Robert F. Kennedy Jr. signaled publicly that these restrictions would be revisited. On April 15, 2026, the FDA formally removed twelve of those peptides from Category 2 and scheduled two separate PCAC sessions to evaluate them for the 503A Bulks List.[1] The twelve compounds were split into two groups for separate meetings rather than one extended session; the FDA did not publicly explain the split.",
        "PCAC recommendations are advisory. The committee votes on whether available evidence supports adding a substance to the 503A Bulks List, but FDA retains final authority. Even a unanimous favorable vote requires the FDA to issue a proposed rule, accept public comment, and issue a final rule — a process that regulatory lawyers generally estimate takes six to eighteen months from PCAC vote to effective date.[2][3]",
        "The July 2026 session produced favorable votes for six of seven compounds on the first-batch agenda. KPV, MOTS-c, Semax, and Epitalon cleared; Emideltide (DSIP) did not. All six had been recommended against by FDA career scientists before the committee reached its conclusions.[3] As of October 2026, the FDA has not published a proposed rule or interim enforcement policy for any of them.",
      ],
    },
    {
      title: "GHK-Cu (injectable): the split compound",
      id: "ghk-cu",
      paragraphs: [
        "GHK-Cu presents a regulatory situation unique among the twelve compounds: its topical form is already on the FDA's 503A Category 1 list — meaning licensed compounders can currently prepare it for topical use. Only the injectable route is before the February 2027 panel.[1][6]",
        "GHK-Cu is a naturally occurring copper-binding tripeptide (glycyl-L-histidyl-L-lysine complexed with Cu2+) found in human plasma, saliva, and wound fluid. Its plasma levels decline roughly 60 percent between ages 20 and 60. The compound has two published randomized controlled trials in humans, one on diabetic wound healing and one on skin aging — an unusually strong evidence base for a research peptide.[5]",
        "The distinction between topical and injectable routes matters because compounding pharmacies are currently permitted to prepare topical GHK-Cu against individual prescriptions but not injectable forms. A favorable PCAC vote on the injectable route and subsequent FDA rulemaking would extend that permission to sterile injectable preparations.",
      ],
    },
    {
      title: "Melanotan II: the high-scrutiny compound",
      id: "melanotan",
      paragraphs: [
        "Melanotan II is a synthetic cyclic heptapeptide analog of alpha-melanocyte-stimulating hormone (alpha-MSH), a melanocortin receptor agonist primarily studied for skin pigmentation effects. It was in FDA Category 2 from September 2023 and was removed in April 2026.[1][4]",
        "Regulatory commentary has consistently flagged Melanotan II as the highest-scrutiny compound in the February 2027 batch. The compound has documented adverse event reports in the published literature, including nausea, facial flushing, blood pressure changes, and involuntary erections. It was the subject of a 2009 FDA consumer alert warning against purchase of online products.[4]",
        "FDA career staff recommended against adding Melanotan II to the Category 2 list in the original 2023 review based on the adverse event record. The February 2027 committee will evaluate whether current evidence supports compounding use under 503A. A favorable PCAC vote would not eliminate the adverse event history; it would trigger a rulemaking process in which that history would be part of the public record.",
        "The compound should be noted separately from GLP-1 receptor agonists like semaglutide, which work through entirely different receptors and mechanisms. Melanotan II has no role in blood sugar regulation.",
      ],
    },
    {
      title: "Cathelicidin LL-37: from immune defense to compounding candidate",
      id: "ll37",
      paragraphs: [
        "Cathelicidin LL-37 is a 37-residue human host-defense peptide derived from the C-terminal fragment of the protein hCAP-18, encoded on chromosome 3.[1][2] It is one of the principal endogenous antimicrobial peptides in human skin, respiratory mucosa, and intestinal epithelium, active against bacteria, fungi, and some viruses through membrane disruption.",
        "Beyond direct antimicrobial activity, LL-37 has immune-modulatory functions: it recruits leukocytes, stimulates angiogenesis, modulates Toll-like receptor signaling, and activates keratinocyte migration in wound models.[2] Laboratory research has examined it for wound healing, inflammatory skin conditions, and anti-biofilm applications.",
        "LL-37 was removed from Category 2 in April 2026 alongside the other eleven peptides. Regulatory commentary from law firms tracking the space has noted that LL-37's endogenous origin and published mechanism data may give it a stronger position in the PCAC review than compounds with purely synthetic or less-characterized profiles.[2]",
        "No large-scale completed clinical trials of LL-37 for any indication have been published. Most evidence comes from in-vitro and animal models. The compound was previously in Category 2 of the FDA's 503A interim list before April 2026.",
      ],
    },
    {
      title: "Dihexa acetate: the angiotensin-derived nootropic",
      id: "dihexa",
      paragraphs: [
        "Dihexa is a modified hexapeptide derived from angiotensin IV (the four-to-eight sequence of angiotensin II), with the structure N-hexanoic acid-Tyr-Ile-6-aminohexanoic amide in its acetate salt form.[1][2] It was developed as part of research into the hepatocyte growth factor (HGF) and its receptor c-Met, a signaling axis with documented roles in synaptic density and memory formation.",
        "Research interest has centered primarily on cognition. Studies in rodent models of Alzheimer's disease found that dihexa improved spatial memory and increased hippocampal spine density through HGF/c-Met pathway activation.[2] The compound has been commercially marketed for cognitive enhancement despite the absence of published human clinical trials.",
        "Regulatory concern about dihexa has included its prior lack of human safety data and its commercial presence in a gray market before the 2023 Category 2 listing. The February 2027 PCAC review will evaluate whether available evidence supports compounding use; FDA career scientists' original assessment recommended against 503A inclusion across the entire 2023 Category 2 list.[4]",
      ],
    },
    {
      title: "PEG-MGF: the PEGylated muscle repair peptide",
      id: "peg-mgf",
      paragraphs: [
        "Pegylated mechano growth factor (PEG-MGF) is a synthetic, PEGylated form of mechano growth factor, a splice variant of insulin-like growth factor 1 (IGF-1Ec) produced in skeletal muscle in response to mechanical loading and damage.[1][2]",
        "MGF activates satellite cells — the muscle stem cells responsible for repair following mechanical stress — through a distinct receptor pathway from the IGF-1 Ea splice variant. PEGylation extends the compound's half-life in serum relative to non-PEGylated MGF, which degrades rapidly. Research has been primarily in animal models of muscle injury and aging.[2]",
        "PEG-MGF occupies a niche research space relative to the other February 2027 compounds, with lower search and commercial visibility than GHK-Cu or Melanotan II. Its PCAC review will assess whether published evidence, which is predominantly preclinical, supports 503A compounding eligibility.",
      ],
    },
    {
      title: "What the advisory process means — and does not mean",
      id: "process",
      paragraphs: [
        "A favorable PCAC vote in February 2027 would recommend that the FDA add one or more of these compounds to the 503A Bulks List. It would not immediately permit compounding, change their legal status, or constitute an FDA finding that they are safe or effective for any use.",
        "The July 2026 session showed that PCAC and FDA career staff can reach opposite conclusions: staff recommended against all seven July peptides; the committee voted favorably on six. FDA is not legally required to follow PCAC's advice.[3]",
        "The rulemaking timeline adds further distance between a favorable vote and practical compounding access. Under standard notice-and-comment procedures, the period between PCAC vote and a final rule has historically ranged from several months to more than a year.[2][3] Whether Secretary Kennedy would use the statutory authority in Section 503A(c) — permitting the Secretary to skip PCAC consultation 'to protect the public health' — to accelerate placement of these compounds into Category 1 remains, as of October 2026, unresolved speculation.[4]",
        "Researchers and laboratories working with any of these compounds in the current period should note that their removal from Category 2 means the FDA is no longer treating them as presenting significant compounding safety risks, but it does not mean they are permitted for compounding, cleared for clinical use, or available in any legal form other than as research-use-only reagents from vendors operating under appropriate conditions.",
      ],
    },
  ],
  faqs: [
    {
      q: "Which five peptides are scheduled for the February 2027 FDA advisory panel?",
      a: "GHK-Cu (injectable routes only; topical GHK-Cu is already on the Category 1 list), Melanotan II, Cathelicidin (LL-37), Dihexa acetate, and Pegylated Mechano Growth Factor (PEG-MGF). The FDA has not published a fixed date or public-comment docket for this session as of October 2026.",
      refs: [1, 2],
    },
    {
      q: "Does a PCAC recommendation immediately permit compounding?",
      a: "No. A favorable PCAC vote is advisory. The FDA is not required to follow it. Even after a favorable vote, formal notice-and-comment rulemaking is required before a substance is added to the 503A Bulks List. That process typically takes six to eighteen months or longer. The six July 2026 favorable votes have not yet resulted in any FDA proposed rule or enforcement policy change.",
      refs: [2, 3],
    },
    {
      q: "What happened to the six peptides that got favorable votes in July 2026?",
      a: "Six compounds from the July 2026 first-batch agenda received favorable advisory committee votes. As of October 2026, the FDA has not issued a proposed rule, Federal Register notice, interim enforcement policy, or draft guidance following those recommendations. The agency stated it will review the record. Emideltide (DSIP) did not receive a favorable vote.",
      refs: [3],
    },
    {
      q: "Why was injectable GHK-Cu put on a separate review from topical GHK-Cu?",
      a: "Topical GHK-Cu was placed on the FDA's 503A Category 1 list earlier, meaning it was already evaluated and approved for compounding in topical form. Injectable GHK-Cu has a different regulatory profile because sterile injectable preparations carry different safety and manufacturing standards than topical formulations. The FDA placed the injectable route on Category 2 in 2023 and removed it in April 2026; the February 2027 PCAC session will assess whether it should be added to the 503A Bulks List for injectable compounding.",
      refs: [1, 6],
    },
    {
      q: "What is the current legal status of these five peptides for research use?",
      a: "All five were removed from Category 2 in April 2026. They are not in the FDA's Category 1 list (except topical GHK-Cu). They remain outside the 503A Bulks List and cannot legally be compounded by pharmacies for patient use. Research-grade versions may be available from vendors operating under research-use-only conditions for laboratory purposes.",
      refs: [1, 4],
    },
  ],
  sources: [
    {
      id: 1,
      url: "https://chemverify.com/learn/fda-second-pcac-peptide-review-2027",
      title: "The Next Tranche: Five More Peptides Headed to a Second FDA PCAC Review by February 2027. ChemVerify, June 2026.",
    },
    {
      id: 2,
      url: "https://www.bipc.com/fda-voted-yes-on-six-peptides-now-what-the-regulatory-road-ahead",
      title: "FDA Advisory Committee Voted Yes on Six Peptides. Now What? The Regulatory Road Ahead. Buchanan Ingersoll & Rooney, August 2026.",
    },
    {
      id: 3,
      url: "https://peptidenewsdigest.org/tag/pcac",
      title: "PCAC News: Pharmacy Compounding Advisory Committee Votes. Peptide News Digest. July–August 2026 coverage of both PCAC days and post-vote status.",
    },
    {
      id: 4,
      url: "https://peptidelibrary.io/legal/are-peptides-legal-in-the-us",
      title: "Are Peptides Legal in the US? (2026 FDA Category Guide). Peptide Library, 2026.",
    },
    {
      id: 5,
      url: "https://almanac.a1c.io/2026/06/19/the-copper-peptide-that-declines-with-age-and-drives-tissue-repair",
      title: "The Copper Peptide That Declines With Age and Drives Tissue Repair. Almanac, June 2026.",
    },
    {
      id: 6,
      url: "https://www.thefdalawblog.com/2026/04/fdas-peptide-rally-what-compounders-and-industry-need-to-know-post-1-of-2/",
      title: "FDA's Pep(tide) Rally! What Compounders and Industry Need to Know. FDA Law Blog, April 2026.",
    },
  ],
  related: [
    {
      url: "/fda-pcac-peptide-compounding-vote-2026",
      title: "What the FDA's July 2026 peptide compounding vote actually changes",
    },
    {
      url: "/ghk-cu-peptide-research-what-studies-show",
      title: "GHK-Cu: what the research on this copper peptide actually shows",
    },
    {
      url: "/mots-c-mitochondria-peptide-research",
      title: "MOTS-c: the peptide your mitochondria make and what the research says it does",
    },
    {
      url: "/kpv-peptide-research-what-studies-show",
      title: "KPV peptide: what the research actually shows on gut inflammation and wound healing",
    },
  ],
};
