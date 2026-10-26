import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "elicio-eli-002-amplify-7p-esmo-results",
  "title": "ELI-002 at ESMO: what AMPLIFY-7P shows after missing its main endpoint",
  "description": "ELI-002 7P missed its primary pancreatic cancer trial endpoint. The ESMO analysis explains the ctDNA subgroup signal, immune responses and Phase 3 questions.",
  "type": "NewsArticle",
  "category": "Clinical research",
  "image": "elicioImmuneAssay20261026",
  "vials": [
    "nad",
    "ss31"
  ],
  "lead": "Elicio's peptide cancer vaccine camupepimut, also called ELI-002 7P, did not significantly improve disease-free survival in the full randomized AMPLIFY-7P trial. Results presented at ESMO and published in Nature Medicine on October 23 add evidence about which patients might respond, while leaving the central question of clinical benefit unresolved.[1][2]",
  "notice": "Reporting on an investigational cancer vaccine. The research reagents advertised on this page are separate from the clinical program discussed here.",
  "sections": [
    {
      "title": "A fuller account of a trial that reported its setback in June",
      "id": "what-changed",
      "paragraphs": [
        "The primary endpoint failure was first announced on June 15. Friday's presentation at the European Society for Medical Oncology congress in Madrid brought additional analyses and a peer-reviewed account of the study. It was a new examination of the same trial, rather than a second randomized test.[1][2][4]",
        "The study, registered as NCT05726864, enrolled 144 people with pancreatic ductal adenocarcinoma, a form of pancreatic cancer, carrying mutations in KRAS. They had completed standard treatment, including surgery and chemotherapy, and had no recurrence visible on imaging. Researchers randomly assigned 96 to camupepimut and 48 to observation. The trial was open label: participants and investigators knew the assignment. Elicio sponsored and designed the study with the academic investigators.[1]",
        "This setting matters. The vaccine was being tested after treatment of the known cancer, with the aim of delaying recurrence. Results from this population cannot answer how the vaccine would perform against an untreated tumor or widespread metastatic disease.[1][3]"
      ]
    },
    {
      "title": "What the main comparison found",
      "id": "primary-result",
      "paragraphs": [
        "Disease-free survival, or DFS, measures time from randomization until cancer recurs or a participant dies. At the April 20, 2026 data cutoff, median follow-up was 19.4 months. Median DFS was 23.8 months with camupepimut and 21.2 months with observation; the hazard ratio was 0.85, with P=0.5329. The prespecified primary endpoint was not met.[1]",
        "A hazard ratio compares how quickly events occur in the two groups over follow-up. A value below one points toward fewer events in the vaccine arm, but the estimate alone does not establish a treatment effect. Here, the statistical test did not support the trial's planned claim of improvement. The difference between the two medians is not a promise of extra recurrence-free time for an individual patient.[1][5]"
      ]
    },
    {
      "title": "Why tumor DNA in blood changes the interpretation",
      "id": "ctdna-subgroups",
      "paragraphs": [
        "Circulating tumor DNA, or ctDNA, consists of tumor-derived DNA detected in blood. It can reveal residual disease even when imaging shows no recurrence. Detectable ctDNA was more common at baseline in the vaccine arm: 20 of 96 participants, compared with 6 of 48 under observation. Elicio argues that this imbalance put the vaccine group at a disadvantage.[1][2]",
        "Among participants with undetectable baseline ctDNA, there were 62 vaccine recipients and 31 observation patients. By the analysis cutoff, recurrence or death had occurred in 17 of 62 and 15 of 31, respectively. The subgroup hazard ratio was 0.51, with a nominal P value of 0.0280. These are results from 93 participants, not the full trial.[1][2]",
        "The subgroup was prespecified, but the comparisons were not adjusted for testing multiple hypotheses. That makes the result useful for designing another study, without turning it into a replacement primary endpoint. A separate statistical model that adjusted for baseline risk factors was post hoc, meaning it was an exploratory analysis rather than the original test of success.[1][5]",
        "A future trial could balance ctDNA status when assigning treatment, rather than relying on a statistical adjustment afterward. That would test the proposed explanation prospectively. Elicio lists baseline risk factors and patient selection among the questions it plans to discuss with regulators.[2]"
      ]
    },
    {
      "title": "An immune response is a different outcome from preventing recurrence",
      "id": "immune-response",
      "paragraphs": [
        "Camupepimut contains peptide antigens representing seven mutant KRAS variants, together with an immune-stimulating component. Its amphiphile design is intended to direct those components to lymph nodes, where immune responses develop. The goal is to train T cells to recognize cancer-associated targets.[2][3]",
        "The paper found mutant KRAS-specific T cell responses in 89 of 90 evaluable vaccine recipients. Six of the 96 treated participants lacked the paired blood samples needed for that assessment. Stronger measured responses were associated with longer DFS within the treated group.[1]",
        "The immune measurements show that the vaccine activated the response it was designed to provoke. The association with DFS asks whether the strength of that response relates to later outcomes. It does not recreate the randomized comparison. Sorting treated participants by a response measured after vaccination creates groups with potentially different underlying characteristics; it cannot establish how much of the difference in recurrence the vaccine caused.[1][5]",
        "This is also a different use of the term immunogenicity from [anti-drug antibodies](/peptide-immunogenicity-anti-drug-antibodies). A cancer vaccine deliberately seeks an immune response against selected tumor targets. An antibody response against a therapeutic drug raises a separate set of questions about exposure and drug function."
      ]
    },
    {
      "title": "What participants experienced",
      "id": "safety-observation",
      "paragraphs": [
        "Vaccine-related reactions reported in AMPLIFY-7P included dizziness and influenza-like illness. Serious adverse events occurred in both groups, in a population that had recently undergone pancreatic surgery and chemotherapy.[1]",
        "The safety analysis grouped participants by the treatment they actually received. Adverse events were collected from the first treatment visit through 30 days after the treatment period; the definition of treatment-emergent events excluded new events more than 30 days after the last treatment. This safety window differs from the median 19.4 months of recurrence follow-up. Overall-survival results were still immature.[1][5]"
      ]
    },
    {
      "title": "The next trial needs to test the explanation",
      "id": "next-trial",
      "paragraphs": [
        "Elicio says it intends to discuss a potential Phase 3 study with the FDA. The options include changes to patient stratification, treatment duration and combination approaches. The company describes these as development plans subject to further discussion, not an agreed final trial design.[2]",
        "The October findings give that planning a more specific question: can a vaccine that reliably provokes mutant KRAS-directed immunity also delay recurrence in a prospectively defined population? Answering it requires another controlled test with a clear primary endpoint. AMPLIFY-7P has supplied a rationale for that test, alongside the unsuccessful overall result it must address.[1][2]"
      ]
    }
  ],
  "faqs": [],
  "related": [
    {
      "url": "/peptide-immunogenicity-anti-drug-antibodies",
      "title": "Peptide immunogenicity and anti-drug antibodies"
    },
    {
      "url": "/ryz101-action-1-phase-3-interim-results",
      "title": "How another peptide cancer program defines its trial endpoint"
    }
  ],
  "sources": [
    {
      "id": 1,
      "url": "https://www.nature.com/articles/s41591-026-04734-7",
      "title": "Lymph node-targeted, mKRAS-specific amphiphile vaccine in pancreatic cancer: the randomized phase 2 AMPLIFY-7P trial | Nature Medicine"
    },
    {
      "id": 2,
      "url": "https://elicio.com/press_releases/elicio-therapeutics-presents-late-breaking-phase-2-amplify-7p-results-at-esmo-congress-2026-and-announces-simultaneous-publication-in-nature-medicine/",
      "title": "Elicio Therapeutics Presents Late-Breaking Phase 2 AMPLIFY-7P Results at ESMO Congress 2026 and Announces Simultaneous Publication in Nature Medicine"
    },
    {
      "id": 3,
      "url": "https://clinicaltrials.gov/api/v2/studies/NCT05726864",
      "title": "ClinicalTrials.gov NCT05726864"
    },
    {
      "id": 4,
      "url": "https://elicio.com/press_releases/elicio-therapeutics-reports-results-from-phase-2-amplify-7p-study-and-outlines-refined-phase-3-development-strategy-for-eli-002-7p-in-adjuvant-pancreatic-cancer/",
      "title": "Elicio Therapeutics Reports Results from Phase 2 AMPLIFY-7P Study and Outlines Refined Phase 3 Development Strategy for ELI-002 7P in Adjuvant Pancreatic Cancer"
    },
    {
      "id": 5,
      "url": "https://media.springernature.com/original/springer-static/esm/art%3A10.1038%2Fs41591-026-04734-7/MediaObjects/41591_2026_4734_MOESM1_ESM.pdf",
      "title": "AMPLIFY-7P protocol and statistical analysis plan"
    }
  ],
  "date": "2026-10-26T12:19:53+00:00"
};
