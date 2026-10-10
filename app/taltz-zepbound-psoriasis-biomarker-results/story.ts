import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  slug: "taltz-zepbound-psoriasis-biomarker-results",
  title: "Taltz and Zepbound: what the new psoriasis biomarker results add",
  description: "Lilly's TOGETHER-PsO biomarker results offer clues to Taltz and Zepbound's psoriasis response. How the blood findings compare with the clinical trial.",
  date: "2026-10-10T08:30:15-04:00",
  type: "NewsArticle",
  category: "Clinical research",
  image: "togetherPsoBiomarkers",
  vials: ["ghk", "glutathione"],
  lead: "Combining Taltz and Zepbound changed a wider range of blood proteins and gene activity than Taltz alone in an exploratory analysis of adults with psoriasis and obesity or overweight, Lilly reported on October 9. The TOGETHER-PsO biomarker results offer clues to an earlier skin response, rather than a new measure of how many people improved.[1][8]",
  notice: "Clinical research reporting, not treatment advice. IQON Labs reader offers are separate from the studies discussed here.",
  sections: [
    {
      title: "Two treatments, different starting points",
      id: "two-treatments-different-starting-points",
      paragraphs: [
        "The question behind the analysis is why treating a metabolic condition might also change the response of inflamed skin. TOGETHER-PsO compared ixekizumab, sold as Taltz, with ixekizumab plus tirzepatide, sold as Zepbound.[1][5]",
        "Ixekizumab blocks interleukin 17A, usually shortened to IL-17A, a signaling protein involved in psoriasis inflammation. Tirzepatide activates receptors for GIP and GLP-1, two hormones involved in regulating metabolism. The treatments therefore act on different biological signals; the new analysis asks how those effects might meet in people who have both psoriasis and excess weight.[1][5][8]",
      ],
    },
    {
      title: "What changed in the blood?",
      id: "what-changed-in-the-blood",
      paragraphs: [
        "The combination produced a broader pattern of molecular changes in the analysis presented at the Fall Clinical Dermatology Conference. At week 36, Lilly reported 482 differentially expressed proteins with the combination versus 140 with ixekizumab alone. It also reported 467 differentially expressed genes versus 16. Broader responses appeared as early as week 12.[1]",
        "Those numbers count measured molecular features, not participants or percentages of skin cleared. Gene expression describes gene activity, not a rewriting of the participants' genetic code. Researchers collected samples before treatment and at weeks 12, 24 and 36, measuring serum proteins with Olink proteomics and blood gene activity with bulk RNA sequencing.[1][8]",
        "The researchers used a model for repeated measurements to compare changes over time. They also grouped molecular changes into biological pathways using Reactome, a database of biological processes, with an adjusted q value below 0.1 as the threshold for that exploratory pathway screen.[8]",
        "Among the changes were signals associated with neutrophils, immune cells involved in inflammation. Statistical mediation analysis linked changes in some neutrophil markers to part of the additional improvement in the Psoriasis Area and Severity Index, or PASI. This modeling asks whether a marker change might help explain the relationship between treatment and the skin response.[1][8]",
      ],
    },
    {
      title: "The skin comparison came first",
      id: "the-skin-comparison-came-first",
      paragraphs: [
        "The earlier clinical results provide the reason to investigate those blood changes. Published online in JAMA Dermatology in May, the phase 3b trial enrolled US adults with moderate to severe plaque psoriasis and obesity, or overweight plus a qualifying condition such as hypertension or type 2 diabetes. Average body mass index was 39.2, and participants had lived with psoriasis for about 15 years on average.[5]",
        "There were 281 randomized participants. Seven were excluded from the main analysis because they did not meet the qualifying comorbidity definition, leaving 138 assigned to both medicines and 136 assigned to ixekizumab alone. Both groups received diet and exercise counseling.[5]",
        "In those analysis groups, estimated complete skin clearance rates at week 36 were 40.6% with the combination and 29.0% with ixekizumab alone. PASI 100 means a 100% improvement from the starting PASI score. The estimated difference was 11.6 percentage points, with a 95% confidence interval from 0.3 to 22.9 percentage points.[2][5]",
        "The trial's primary endpoint asked for more: participants had to achieve both PASI 100 and at least a 10% weight reduction. Estimated response rates were 27.1% versus 5.8%. The adjusted difference was 21.2 percentage points, with a 95% confidence interval from 12.8 to 29.7 percentage points.[5]",
        "That combined endpoint measures success on two conditions at once. It should not be read as the percentage who achieved complete skin clearance alone. The confidence intervals describe uncertainty in the differences between groups, not the range of improvement a particular person could expect.[5]",
        "These are modeled response rates. The analysis estimated outcomes under a hypothetical scenario in which participants continued their assigned treatment without prohibited medication, using imputation to handle missing values. It did not simply divide observed responders by the number originally assigned to each group.[5]",
      ],
    },
    {
      title: "Does this show a direct effect of tirzepatide on psoriasis?",
      id: "does-this-show-a-direct-effect-of-tirzepatide-on-psoriasis",
      paragraphs: [
        "Not by itself. TOGETHER-PsO had no group taking tirzepatide alone, so it tested the addition of tirzepatide to ixekizumab rather than whether tirzepatide could replace a psoriasis medicine. The clinical paper also left open how much of the extra skin response followed weight change and how much reflected other effects.[5]",
        "The neutrophil findings give researchers a more specific explanation to investigate. A marker that changes alongside an improving skin score could be part of the mechanism or another consequence of treatment. Statistical mediation cannot, on its own, settle that distinction. More altered proteins is not automatically more clinical benefit.[1][8]",
        "The trial's design also matters. Participants knew their treatment assignments, although masked assessors evaluated psoriasis. The authors acknowledged that visible weight change might reveal which treatment a participant received. More missing data required imputation in the ixekizumab alone group.[5]",
      ],
    },
    {
      title: "The clinical tradeoff and the next unanswered question",
      id: "the-clinical-tradeoff-and-the-next-unanswered-question",
      paragraphs: [
        "Gastrointestinal adverse events were more frequent with the combination in the published analysis. Its safety population consisted of 138 people receiving the combination and 134 receiving ixekizumab alone. Safety observation included treatment and safety follow up through the analysis cutoff; it was not simply the skin assessment performed at week 36.[5]",
        "Lilly sponsored the trial and participated in its design and data analysis. The company also helped prepare the clinical paper and markets both medicines. The earlier clinical comparison has undergone peer review; the new biomarker evidence is an exploratory conference presentation, also sponsored by Lilly, with company employees among its authors.[1][5][8]",
        "ClinicalTrials.gov lists the trial as completed, with a completion date of June 1, 2026. The October announcement is a later analysis, not the beginning of a new trial.[1][2]",
        "The blood findings give researchers a possible connection to pursue between metabolic treatment and skin inflammation. The next useful account would report the participant count and missing samples for each biomarker analysis, alongside a full validation of the mediation model and how it handles accompanying weight change. Those details would help establish how much explanatory weight the neutrophil signal can carry.[5][8]",
      ],
    },
  ],
  faqs: [
    {
      q: "Were the healthy volunteers a third treatment group?",
      a: "No. The biomarker presentation used healthy people for comparisons before treatment: one group matched by age and sex, and another with obesity matched by age, sex and body mass index. They provided reference measurements, not a randomized third treatment arm.",
      refs: [8],
    },
    {
      q: "Why analyze biological pathways rather than individual markers alone?",
      a: "A pathway analysis asks whether changed molecules cluster in known biological processes. It can help interpret a long list of proteins or genes, but its answer depends on the database and statistical threshold. The poster used Reactome with an adjusted q value below 0.1 for its exploratory pathway screen; that threshold is not a probability that a treatment will work for an individual.",
      refs: [8],
    },
  ],
  sources: [
    { id: 1, url: "https://investor.lilly.com/node/55066/pdf", title: "Lilly: TOGETHER-PsO exploratory biomarker results, October 9, 2026" },
    { id: 2, url: "https://clinicaltrials.gov/study/NCT06588283", title: "ClinicalTrials.gov: TOGETHER-PsO, NCT06588283" },
    { id: 5, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC13179568", title: "Lebwohl et al.: Ixekizumab with or without tirzepatide in adults with psoriasis and overweight or obesity, JAMA Dermatology (2026)", doi: "10.1001/jamadermatol.2026.1753" },
    { id: 8, url: "https://assets.ctfassets.net/mpejy6umgthp/4BcgZYZvtIScKKWX6snzHX/98054ee7824890321499caa722133f8c/Krueger_Fall_CDC_2026_DV-041068.pdf", title: "Krueger et al.: Biomarker insights from TOGETHER-PsO, Fall Clinical Dermatology Conference (2026)" },
  ],
  related: [
    { title: "Icotrokinra psoriasis results: a different trial and a longer follow up", url: "/icotrokinra-psoriasis-two-year-iconic-total-results" },
    { title: "What is amylin? How amylin analogs differ from GLP-1 drugs", url: "/what-is-amylin-amylin-analogs-vs-glp-1" },
  ],
};
