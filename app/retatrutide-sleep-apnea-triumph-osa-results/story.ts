import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "retatrutide-sleep-apnea-triumph-osa-results",
  "title": "Retatrutide reduced sleep apnea severity in two Phase 3 trials",
  "description": "Two Phase 3 trials cut the apnea-hypopnea index at 80 weeks in obstructive sleep apnea. The published paper reports two different sets of results and explains why.",
  "date": "2026-10-29T12:30:00Z",
  "type": "Article",
  "category": "Clinical research",
  "image": "retatrutideOsa20261029",
  "vials": [
    "nad",
    "ss31"
  ],
  "lead": "The experimental triple agonist retatrutide lowered the apnea-hypopnea index in adults with obstructive sleep apnea and obesity in two Phase 3 trials, by roughly 24 and 22 events per hour more than placebo at 80 weeks with the 9 mg and 12 mg doses in participants who did not have type 2 diabetes, and by roughly 14 and 15 events per hour more in participants who did, according to results published by the New England Journal of Medicine on October 20, 2026. The same paper also reports intention-to-treat results that stay within 0.6 events per hour of those figures at every dose in both trials, and both trials were funded by Eli Lilly.",
  "notice": "Retatrutide is investigational and is not approved for obstructive sleep apnea or any other use. IQON Labs' research use only catalog is not connected to Lilly's trials.",
  "sections": [
    {
      "title": "What the two trials tested",
      "id": "what-the-trials-tested",
      "paragraphs": [
        "Retatrutide is an investigational molecule that activates three hormone receptors at once: glucose-dependent insulinotropic polypeptide (GIP), glucagon-like peptide-1 (GLP-1) and glucagon. It is given once weekly by subcutaneous injection and is not approved for any use.",
        "The sleep data come from protocols nested inside two much larger studies. TRIUMPH-1 (NCT05929066) enrolled 2,335 people to test weight change and related conditions, and TRIUMPH-2 (NCT05929079) enrolled 1,152 people with type 2 diabetes. Within those basket trials, the obstructive sleep apnea portions randomized 243 participants without type 2 diabetes and 448 with it. Both registrations list change from baseline in the apnea-hypopnea index at week 80 as a primary outcome for the sleep subset, confirming that the breathing endpoint was pre-specified rather than discovered afterward.",
        "Participants had moderate-to-severe obstructive sleep apnea and a body mass index of at least 27. The apnea-hypopnea index is the average number of times per hour of sleep that breathing stops (an apnea) or becomes too shallow (a hypopnea). The trial populations started high: a mean of 58.6 events per hour in the first trial and 55.9 in the second, which is in the severe range. Mean body weight at entry was 119.6 kg and 115.9 kg."
      ]
    },
    {
      "title": "What the trials measured and what they found",
      "id": "what-they-found",
      "paragraphs": [
        "Participants were assigned to retatrutide at 4 mg, 9 mg or 12 mg, or placebo, in addition to lifestyle counseling. The primary endpoint compared the 9 mg and 12 mg doses against placebo on change in the apnea-hypopnea index at 80 weeks.",
        "In TRIUMPH-1-OSA, the mean index fell by 22.9 events per hour on 4 mg, 34.3 on 9 mg and 31.7 on 12 mg, against 9.9 on placebo. The differences from placebo were minus 13.0 events per hour for 4 mg (95% confidence interval, minus 23.0 to minus 3.0), minus 24.4 for 9 mg (minus 34.1 to minus 14.7) and minus 21.9 for 12 mg (minus 32.2 to minus 11.5).",
        "In TRIUMPH-2-OSA, the mean index fell by 19.2, 24.7 and 25.4 events per hour on 4 mg, 9 mg and 12 mg, against 10.3 on placebo. The differences from placebo were minus 8.9 (minus 15.9 to minus 2.0), minus 14.4 (minus 21.6 to minus 7.2) and minus 15.1 (minus 22.5 to minus 7.7) events per hour.",
        "Those are large reductions against a severe baseline. They are also averages across groups of a few hundred people each, with confidence intervals that widen at the lower dose, and the trial did not test whether the treated groups reached any particular threshold that clinicians use to define remission."
      ]
    },
    {
      "title": "Why the two trials gave different answers",
      "id": "two-populations",
      "paragraphs": [
        "The trials enrolled different populations and started at different weights, and the diabetes trial showed a smaller treatment difference at every dose. Baseline severity was similar, so the difference is not explained by people in the second trial having milder disease at entry. The second trial enrolled people whose type 2 diabetes was managed on stable medication and whose average body weight was about 4 kg lower.",
        "The paper reports the two trials together but does not present them as a comparison of one population against the other, and it does not attribute the gap to a specific mechanism. Whatever explains it, the practical reading is that a person with both obstructive sleep apnea and type 2 diabetes should not assume the larger of the two sets of numbers applies to them."
      ]
    },
    {
      "title": "Why one trial has two answers",
      "id": "two-answers",
      "paragraphs": [
        "The paper reports the sleep results twice, using two different ways of handling participants whose treatment stopped or failed.",
        "The primary analysis uses a hybrid-treatment estimand. For participants who had an event suggesting treatment failure, it applies a hypothetical strategy, which estimates what the outcome would have been had the participant stayed on treatment, and for other intercurrent events it applies a treatment policy strategy, which uses the observed outcome regardless. The intention-to-treat analysis counts every participant in the group they were assigned to, whether or not they kept taking the drug.",
        "Under intention-to-treat, the differences from placebo were minus 13.2, minus 24.7 and minus 22.5 events per hour in TRIUMPH-1-OSA and minus 8.8, minus 13.9 and minus 15.0 events per hour in TRIUMPH-2-OSA. Every one of those figures is within 0.6 events per hour of its primary counterpart, so the two analyses agree closely: the intention-to-treat values run marginally larger in TRIUMPH-1-OSA and marginally smaller in TRIUMPH-2-OSA.",
        "Neither number is wrong. They answer different questions. The primary analysis asks what the drug does under continued treatment. The intention-to-treat analysis asks what happened to everyone who was randomized, including people who stopped. Headlines that quote one figure without the other are publishing the answer to a question the reader may not have asked."
      ]
    },
    {
      "title": "Weight loss moved with the breathing measure",
      "id": "weight-and-breathing",
      "paragraphs": [
        "Body weight fell by 12.5 to 22.2 percent in TRIUMPH-1-OSA and 12.1 to 18.5 percent in TRIUMPH-2-OSA, against 4.8 and 5.6 percent on placebo, using the paper's treatment-regimen estimand.",
        "Weight reduction is the best-established way to reduce obstructive sleep apnea severity, and this trial design cannot separate the two effects. There is no arm in which weight was held constant while the drug was given, so the results show that the breathing measure and body weight moved together in the same groups, not that one caused the other. The authors report an improvement in a sleep endpoint alongside substantial weight loss. Readers who want to know whether the drug has an effect on breathing independent of weight will not find that answer in these two trials."
      ]
    },
    {
      "title": "What the abstract reports about side effects, and who paid for the trial",
      "id": "safety-and-sponsor",
      "paragraphs": [
        "The published abstract states that the most common adverse events were gastrointestinal, which matches the pattern seen with other drugs in this class. It does not publish rates, and it does not state the observation window for those events, so no percentage should be attached to this sentence without going to the full paper and its supplement.",
        "The trial was funded by Eli Lilly, and six of the twelve listed authors are Lilly employees. The registrations list Eli Lilly as the sponsor. That does not make the results wrong, and the paper is peer reviewed, but the sponsor designed, ran and analyzed the trial, and it holds the regulatory interest in the compound. Independent replication and longer safety follow-up are what would test these findings beyond the sponsor's program."
      ]
    },
    {
      "title": "What remains open",
      "id": "what-remains-open",
      "paragraphs": [
        "Retatrutide is not approved for obstructive sleep apnea or for any other use, and the paper does not announce a filing. Several questions sit outside what these trials can answer: whether the breathing improvement persists after treatment stops, how the drug performs in people who are using positive airway pressure therapy at the same time, whether the effect on the index translates into fewer cardiovascular events, and how the safety profile looks over longer periods than 80 weeks. The paper reports a single time point in a population that was, on average, severely affected at entry."
      ]
    },
    {
      "title": "Reading the results against research-grade vials",
      "id": "research-grade-vials",
      "paragraphs": [
        "Vials sold online as retatrutide labelled for research use only are not the product used in these trials. The trial used Lilly's manufactured investigational material, tested and released under a protocol. FDA warning letters issued in August 2026 list \"GLP-3R (retatrutide)\" among the unapproved new drugs offered on seller websites, and the letters state that dosing information, injection instructions and dose calculators on those sites are evidence the products were intended for human use. Nothing in the sleep apnea results tells a reader anything about the identity, purity or safety of a chemical shipped as a research material."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is retatrutide approved for obstructive sleep apnea?",
      "a": "No. Retatrutide remains investigational and is not approved for sleep apnea, obesity or any other condition.",
      "refs": [1, 3]
    },
    {
      "q": "What is the apnea-hypopnea index?",
      "a": "It is the average number of apneas and hypopneas per hour of sleep. An apnea is a pause in breathing; a hypopnea is a shallower than normal breath. Higher values indicate more severe obstructive sleep apnea.",
      "refs": [1]
    },
    {
      "q": "Why does the paper report two different sets of results?",
      "a": "One analysis estimates the effect under continued treatment, using a hybrid strategy for participants whose treatment stopped or failed, and the other counts every randomized participant. Both are pre-specified and they answer different questions.",
      "refs": [1]
    },
    {
      "q": "Can these results be compared with tirzepatide's sleep apnea trial?",
      "a": "Not as a head-to-head comparison. The trials enrolled different populations, used different entry criteria and measured outcomes at different time points. No trial in this paper compares the two drugs.",
      "refs": [1, 4]
    },
    {
      "q": "Does the trial explain how much of the breathing improvement came from weight loss?",
      "a": "No. Weight fell substantially in the same groups, and the design has no arm that separates the two effects.",
      "refs": [1]
    }
  ],
  "related": [
    {
      "url": "/retatrutide-triumph-1-phase-3-results-2026",
      "title": "What the TRIUMPH-1 Phase 3 obesity results showed"
    },
    {
      "url": "/what-does-research-use-only-mean",
      "title": "What research use only means in 2026"
    }
  ],
  "sources": [
    { id: 1, url: "https://www.nejm.org/doi/full/10.1056/NEJMoa2611477", title: "Grunstein et al., Retatrutide Once Weekly for Treatment of Obstructive Sleep Apnea, New England Journal of Medicine, published online October 20, 2026", doi: "10.1056/NEJMoa2611477" },
    { id: 2, url: "https://pubmed.ncbi.nlm.nih.gov/42904878/", title: "PubMed 42904878: abstract record for the TRIUMPH-1-OSA and TRIUMPH-2-OSA publication" },
    { id: 3, url: "https://clinicaltrials.gov/study/NCT05929066", title: "ClinicalTrials.gov NCT05929066: TRIUMPH-1 registration, listing change from baseline in the apnea-hypopnea index at Week 80 as a primary outcome for the sleep subset" },
    { id: 4, url: "https://clinicaltrials.gov/study/NCT05929079", title: "ClinicalTrials.gov NCT05929079: TRIUMPH-2 registration in participants with type 2 diabetes" },
    { id: 5, url: "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/warning-letters/peak-performance-peptides-735127-08242026", title: "FDA warning letter to Peak Performance Peptides, MARCS-CMS 735127 (August 24, 2026)" },
    { id: 6, url: "https://mcdermottlaw.com/insights/federal-regulators-and-state-boards-crack-down-on-ruo-peptides", title: "McDermott Will & Emery client alert: Federal regulators and state boards crack down on RUO peptides" }
  ]
};
