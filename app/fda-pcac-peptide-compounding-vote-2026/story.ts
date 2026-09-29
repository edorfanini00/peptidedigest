import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  slug: "fda-pcac-peptide-compounding-vote-2026",
  title:
    "What the FDA's July 2026 peptide compounding vote actually changes",
  description:
    "On July 23 and 24, the FDA's advisory committee recommended six peptides for the 503A compounding list, overruling its own career scientists. The vote is advisory, rulemaking takes months, and the RUO market is unchanged. Here is what the decision means and what still has to happen.",
  date: "2026-09-29T08:00:00-04:00",
  type: "NewsArticle",
  category: "Regulatory",
  image: "fdaPcacMeeting",
  vials: ["nad", "ghk"],
  notice:
    "This article covers a regulatory advisory process. None of the compounds discussed are FDA-approved drugs. Research-grade peptides remain research use only.",
  lead: "On July 23 and 24, the FDA's Pharmacy Compounding Advisory Committee voted to recommend six research peptides for inclusion on the agency's list of bulk drug substances that licensed compounding pharmacies may use.[1] The committee overruled the written recommendation of the FDA's own career scientists, who had advised against adding all seven compounds under review.[1] The vote doesn't make these compounds FDA-approved, and pharmacies still can't legally compound them today. Formal rulemaking, typically a twelve-to-twenty-four month process, has to conclude first.[2]",
  sections: [
    {
      title: "What happened at the White Oak campus in July",
      id: "what-happened",
      paragraphs: [
        "The Pharmacy Compounding Advisory Committee, known as the PCAC, met over two days at the FDA's headquarters in Silver Spring, Maryland, on July 23 and 24, 2026, under docket FDA-2025-N-6895.[1][3] It was convened to review seven compounds for potential inclusion on the Section 503A Bulk Drug Substances List, the formal mechanism that determines what state-licensed compounding pharmacies are legally permitted to prepare for patients with a valid prescription.[1]",
        "The committee voted on each compound separately. On Day 1, July 23, it voted to recommend KPV, MOTS-c, and two additional compounds for the list.[1] On Day 2, July 24, it recommended Semax (8 votes to 5, one abstention) and Epitalon (7 to 4), and rejected Emideltide, also called DSIP, by 6 votes to 7.[3] Six of seven compounds cleared the committee.[1]",
        "Every yes vote overturned the FDA staff's written briefing position, which had recommended against all seven.[1] Observers in the room described an audible gasp when the first Day 1 tally was announced, with panel members subsequently splitting along fault lines of clinical access versus scientific standard of evidence.[3]",
      ],
    },
    {
      title: "Two years of regulatory movement that led here",
      id: "regulatory-backstory",
      paragraphs: [
        "The starting point for understanding July's vote is September 2023, when the FDA placed more than a dozen research peptides in Category 2 of the 503A bulk substances framework, a designation that effectively ended legal compounding access for those compounds.[2] The agency cited limited human safety data and immunogenicity concerns.[2]",
        "That position began to shift in 2026. On February 27, HHS Secretary Robert F. Kennedy Jr. announced that roughly fourteen of the nineteen restricted compounds would be reconsidered for reclassification, calling the 2023 restrictions an overreach.[4] This was a policy signal, not yet a regulatory action.[4] The signal became a formal action on April 15 and 16, 2026, when the FDA published a Federal Register notice removing twelve compounds from Category 2, citing withdrawal of the underlying nominations.[2] The April removal did not add any compound to the approved compounding list; it left them in a limbo state, neither restricted nor authorized.[2][4]",
        "The July meeting was the first formal step toward resolving that limbo. The PCAC's role is to review scientific evidence and give the FDA a recommendation on whether a substance should be added to the 503A bulks list. The committee does not issue approvals, and its recommendations are advisory and non-binding.[1]",
      ],
    },
    {
      title: "Why the FDA's own scientists said no",
      id: "why-scientists-said-no",
      paragraphs: [
        "In briefing documents circulated before the meeting, FDA staff reviewed each compound against three criteria: physicochemical characterization, historical compounding use, and evidence of safety and effectiveness for the nominated indications.[2]",
        "On effectiveness, the staff found the human clinical record thin or absent across all seven compounds. For several, the entirety of available human data was a single meeting abstract or one small uncontrolled study.[5] On safety, staff identified unresolved immunogenicity concerns — the risk that the immune system may react to the compound itself — along with incomplete purity characterization data for injectable formulations.[5]",
        "One dissenting panelist who voted no captured the staff's position bluntly: the committee was responding to market demand, not to a decision grounded in solid science.[3] Elizabeth Rebello, a pharmacist and anesthesiologist on the panel, cited lack of efficacy data and safety concerns as her reasons for voting against one of the Day 1 compounds.[3]",
      ],
    },
    {
      title: "What panel members said to justify yes votes",
      id: "yes-vote-rationale",
      paragraphs: [
        "Members who voted yes frequently cited patient access and what several called medical freedom. The argument was that barring demand does not eliminate demand; it routes patients toward less regulated sources.[4] Some referenced the large number of public comments submitted before the meeting in support of compounding access.[2]",
        "The panel's composition drew scrutiny. The reconstituted committee seated for these votes included eight new members. Several held financial ties to businesses that sell, prescribe, or administer the compounds under review.[5] This raised conflict-of-interest questions that were publicly noted before and during the meeting.[5] The FDA did not publicly comment on the composition question during the proceedings.[3]",
        "The vote margins were close throughout. KPV and two other Day 1 compounds passed 8 to 6 with one abstention each.[1] MOTS-c passed 7 to 5 with two abstentions.[1] The pattern held on Day 2: Semax passed 8 to 5, Epitalon 7 to 4, and Emideltide was the only candidate rejected, by a single vote.[3]",
      ],
    },
    {
      title: "What the vote does and does not change right now",
      id: "what-changes",
      paragraphs: [
        "A favorable PCAC recommendation authorizes the FDA to begin formal rulemaking, specifically to publish a proposed rule in the Federal Register, open a notice-and-comment period, and eventually issue a final rule.[2] Until a final rule takes effect, compounding pharmacies cannot legally prepare these compounds under 503A, even with a favorable PCAC recommendation in hand.[2]",
        "The process typically takes twelve to twenty-four months from the date of the PCAC vote.[2] No date has been published for the proposed rule for any of the six recommended compounds. The FDA may also depart from the committee's recommendation, though the agency has said it rarely does.[1]",
        "The research-use-only market operates independently of this process. Vendors supplying research-grade peptides do not need 503A compounding authorization to operate. The PCAC vote does not change the regulatory status of research-grade material in either direction.[2]",
        "For 503A access to become a legal reality, a patient also needs a valid prescription from a licensed prescriber and access to a licensed compounding pharmacy willing to prepare the compound. Even after rulemaking, the pathway is not direct-to-consumer.[2]",
      ],
    },
    {
      title: "Five more compounds, and a second panel meeting before February",
      id: "what-comes-next",
      paragraphs: [
        "The July meeting covered seven of the compounds removed from Category 2 in April. Five more were deferred to a subsequent PCAC meeting scheduled to take place before the end of February 2027.[4] Those five include GHK-Cu (injectable formulation), Cathelicidin LL-37, Dihexa acetate, and PEG-MGF.[4]",
        "Non-injectable GHK-Cu was handled separately: the FDA placed it on Category 1 in May 2026, meaning it may already be compounded under enforcement discretion for the non-injectable route.[4] That separate determination does not cover injectable GHK-Cu, which remains in the queue for the February meeting.[4]",
        "The FDA has not indicated whether the six compounds from the July vote will be given priority in the rulemaking calendar or whether the February docket will be processed on a parallel timeline.[4] The agency's silence about 503B outsourcing facilities, which operate under separate rules and serve larger patient populations, has also drawn comment from industry observers who expected a coordinated statement.[4]",
      ],
    },
  ],
  faqs: [
    {
      q: "Does the FDA's July 2026 PCAC vote mean these peptides are now FDA-approved?",
      a: "No. The vote is an advisory recommendation to the FDA from an external committee. It is not a drug approval, does not create an approved indication, and does not establish safety or efficacy in the FDA's own assessment. Formal rulemaking still has to conclude before any change takes legal effect.",
      refs: [1, 2],
    },
    {
      q: "Can compounding pharmacies legally prepare these peptides now?",
      a: "Not under 503A. A compound needs to be on the FDA's final 503A Bulk Drug Substances List before a licensed compounding pharmacy may legally prepare it for a patient. The July PCAC vote is a step toward that list, not arrival on it. Rulemaking typically takes twelve to twenty-four months.",
      refs: [1, 2],
    },
    {
      q: "Why did the FDA's own scientists recommend against all seven compounds?",
      a: "The FDA staff briefing documents found insufficient human clinical data to assess effectiveness for the nominated indications, unresolved immunogenicity and purity characterization concerns for injectable formulations, and incomplete physicochemical characterization. Staff recommended against all seven. The committee voted against that recommendation for six of the seven.",
      refs: [5],
    },
    {
      q: "What does the vote mean for the research-use-only peptide market?",
      a: "Nothing directly. Research-grade peptides sold for laboratory and non-clinical research purposes operate outside the 503A compounding framework. The PCAC vote addresses prescription compounding access for patients, not the RUO market. Research-grade material remains research use only regardless of the outcome.",
      refs: [2],
    },
    {
      q: "Which peptides were reviewed, and which ones were recommended?",
      a: "Seven compounds were reviewed. Six received favorable votes: KPV (wound healing and inflammatory conditions), MOTS-c (obesity and osteoporosis), Semax (cerebral ischemia, migraine, and trigeminal neuralgia), Epitalon (insomnia), and two additional compounds reviewed on Day 1. Emideltide, also known as DSIP, was rejected by a single vote.",
      refs: [1, 3],
    },
  ],
  sources: [
    {
      id: 1,
      url: "https://www.mcdermottlaw.com/insights/bulk-list-bound-pcac-backs-majority-of-peptides-in-two-day-public-meeting/",
      title:
        "PCAC backs majority of peptides in two-day public meeting (McDermott Will & Emery, July 2026)",
    },
    {
      id: 2,
      url: "https://peptidehub.bio/journal/fda-pcac-vote-outcomes-july-2026-bpc-157-tb-500-compounding",
      title:
        "FDA advisory committee voted yes — here is what that actually changes (PeptideHub, July 2026)",
    },
    {
      id: 3,
      url: "https://thepeptidedesk.com/the-fda-peptide-vote-what-just-happened-and-what-it-actually-means",
      title: "The FDA peptide vote: what just happened (Peptide Desk, July 2026)",
    },
    {
      id: 4,
      url: "https://www.thefdalawblog.com/2026/04/fdas-peptide-rally-what-compounders-and-industry-need-to-know-post-1-of-2/",
      title:
        "FDA's Pep(tide) Rally: What compounders and industry need to know (FDA Law Blog, April 2026)",
    },
    {
      id: 5,
      url: "https://www.ajmc.com/view/5-things-to-know-about-the-fda-s-peptide-reversal",
      title:
        "5 Things to Know About the FDA's Peptide Reversal (AJMC, August 2026)",
    },
    {
      id: 6,
      url: "https://www.fda.gov/advisory-committees/advisory-committee-calendar/july-23-24-2026-meeting-pharmacy-compounding-advisory-committee-07232026",
      title: "July 23-24, 2026: Meeting of the Pharmacy Compounding Advisory Committee (FDA.gov)",
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
