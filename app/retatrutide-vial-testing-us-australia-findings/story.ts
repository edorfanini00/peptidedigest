import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "retatrutide-vial-testing-us-australia-findings",
  "title": "What US and Australian tests found in vials labelled retatrutide",
  "description": "Reported retatrutide vial tests found an apparent identity mismatch, bacteria and label-amount discrepancies. Each finding answers a different question.",
  "date": "2026-11-04T13:16:00Z",
  "type": "NewsArticle",
  "category": "Regulation and safety",
  "image": "retatrutideTesting20261104",
  "vials": [
    "nad",
    "glutathione"
  ],
  "lead": "A $90 vial sold as retatrutide at a Brooklyn bodega did not appear to contain a peptide, and further testing found 13 bacterial colonies.[1] In Australia, Leeder Analytical found retatrutide-labelled samples with amounts both above and below their labels.[2]",
  "notice": "Reported analysis published November 4, 2026, of testing reported on October 21 and August 28. The Peptide Digest did not conduct these tests. These reports do not describe IQON Labs products.",
  "sections": [
    {
      "id": "brooklyn-sample",
      "title": "The Brooklyn sample raised two separate alarms",
      "paragraphs": [
        "The Brooklyn vial carried a research-use-only warning.[1] For the CBS News investigation published October 21, University of Iowa scientist Jason Galpin identified phenylacetic acid, which he described as a filler.[1] Further testing by Iowa’s Carl Ross found the bacterial colonies and prompted an infection warning.[1]",
        "Two samples bought online were consistent with a basic retatrutide standard Galpin had created.[1] CBS distinguished that standard from Lilly’s clinical-trial drug.[1]"
      ]
    },
    {
      "id": "australian-samples",
      "title": "In Australia, label amounts went both ways",
      "paragraphs": [
        "Testing reported by ABC on August 28 involved three vials examined by Leeder Analytical at the request of ABC and the University of Queensland.[2] UQ’s School of Public Health and PED Test Australia paid for and arranged the work.[2] One vial contained less than its label indicated; two contained much higher concentrations.[2]",
        "The same laboratory also supplied its broader 2026 summary: 18 retatrutide-labelled samples, only one matching its label claim.[2] About 30% were above the stated concentration and about 30% below; one contained none of the peptide.[2] The published breakdown leaves some samples unaccounted for.[2] It also does not establish that the three-vial project is separate from the 18-sample total.[2] These small, selected samples cannot establish how often label discrepancies occur across the market.[2]"
      ]
    },
    {
      "id": "different-measurements",
      "title": "Identity, purity and amount answer different questions",
      "paragraphs": [
        "The distinction is built into laboratory methods.[3] A 2023 paper by USP researchers separates peptide identity, purity and strength as quality attributes.[3] Identity testing asks what molecule is present: the paper describes mass spectrometry and nuclear magnetic resonance among the methods used to examine sequence or structural features.[3]",
        "Chromatographic purity addresses the material separated and measured by a particular method.[3] Strength, or assay, addresses the quantity of the intended peptide.[3] The USP paper lists separate tests for peptide impurities, residual solvents and other components.[3] A percentage from one method therefore needs its definition and scope before it can be interpreted as a statement about a vial’s contents.[3] The [content-versus-purity explainer](/peptide-content-vs-purity-measurement) develops that distinction.",
        "The investigations illustrate why the categories matter. The US sample raised an identity question, then a separate bacterial concern.[1] The Australian label comparisons concerned amounts.[2] An answer to one question cannot supply the others. The same distinction applies when interpreting a [certificate of analysis](/how-to-read-peptide-coa): the listed test methods define what has been examined.[3]"
      ]
    },
    {
      "id": "microbiology",
      "title": "A bacterial finding is different from an endotoxin result",
      "paragraphs": [
        "Microbiology adds another distinction. Endotoxins are components of the outer membrane of certain bacteria; they are not living bacteria. FDA’s technical guide explains that lowering microbial contamination does not necessarily produce a corresponding reduction in endotoxin.[4] That is why the reported bacterial colonies and a hypothetical endotoxin result would answer different questions. The CBS report did not present an endotoxin measurement for the Brooklyn sample.[1]",
        "A clean result on a chemical assay cannot stand in for every microbiological test. The methods examine different properties, and a result remains bounded by what was measured.[3][4] Our [endotoxin and sterility explainer](/endotoxin-vs-sterility-peptide-research) covers the distinction in more detail."
      ]
    },
    {
      "id": "reported-harms",
      "title": "Hospitalization and death reports are not confirmed causes",
      "paragraphs": [
        "Public Citizen’s June 16 release described at least 14 reported hospitalizations connected to retatrutide as of June 2026, citing FDA’s adverse-event system.[5] CBS separately described two death reports submitted to FDA in July and September in coverage updated October 13. It could not independently verify the reports, and FDA declined to say whether it had verified their information.[6]",
        "These are reports of suspected harm, not verified counts of injuries caused by a chemically confirmed product. FDA says submissions may be incomplete or duplicated, are not necessarily medically verified, and cannot establish causation or incidence.[7] Neither report establishes that the tested samples caused those reported hospitalizations or deaths.[5][6]"
      ]
    },
    {
      "id": "policy-boundary",
      "title": "The HHS policy does not cover retatrutide",
      "paragraphs": [
        "The six-substance HHS compounding policy does not include retatrutide in Appendix A. Its conditional enforcement discretion therefore does not provide a route for these retatrutide-labelled products, nor does a research-use-only label bring them within its scope.[8] Retatrutide remains an investigational drug in the testing reports, distinct from the products sold under its name.[1][2]",
        "Identifying a molecule does not demonstrate that products consistently contain the labelled amount or meet microbiological requirements.[3][4] The reported findings make that distinction concrete: chemical identification, quantity and bacterial contamination produced separate results in the tested samples.[1][2] Evidence of safety in people requires more than any one of those results.[3][8]"
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "url": "https://www.cbsnews.com/news/tested-experimental-weight-loss-drug-results/",
      "title": "CBS News: US vial testing, October 21, 2026",
      "id": 1
    },
    {
      "url": "https://www.abc.net.au/news/2026-08-28/black-market-peptides-dangerous-doses/107059092",
      "title": "ABC News: Australian vial testing, August 28, 2026",
      "id": 2
    },
    {
      "url": "https://www.usp.org/sites/default/files/usp/document/our-work/biologics/reference_standards_to_support_quality_of_synthetic_peptide_therapeutics.pdf",
      "title": "USP researchers: Reference Standards to Support Quality of Synthetic Peptide Therapeutics (2023)",
      "id": 3
    },
    {
      "url": "https://www.fda.gov/inspections-compliance-enforcement-and-criminal-investigations/inspection-technical-guides/bacterial-endotoxinspyrogens",
      "title": "FDA: Bacterial Endotoxins/Pyrogens",
      "id": 4
    },
    {
      "url": "https://www.citizen.org/news/hospitalizations-enforcement-gaps-influencers-tied-to-unapproved-retatrutide-products/",
      "title": "Public Citizen: reported hospitalizations, June 16, 2026",
      "id": 5
    },
    {
      "url": "https://www.cbsnews.com/news/deaths-reported-fda-bootleg-reta-weight-loss-drug/",
      "title": "CBS News: death reports submitted to FDA, updated October 13, 2026",
      "id": 6
    },
    {
      "url": "https://www.fda.gov/drugs/fda-adverse-event-monitoring-system-aems/fda-adverse-event-monitoring-system-aems-public-dashboard",
      "title": "FDA: adverse-event dashboard limitations",
      "id": 7
    },
    {
      "url": "https://www.hhs.gov/sites/default/files/hhs-503a-peptide-enforcement-discretion-policy-appendix-b.pdf",
      "title": "HHS interim enforcement policy and appendices",
      "id": 8
    }
  ],
  "related": [
    {
      "url": "/peptide-content-vs-purity-measurement",
      "title": "Peptide content versus purity"
    },
    {
      "url": "/endotoxin-vs-sterility-peptide-research",
      "title": "Endotoxin and sterility answer different questions"
    },
    {
      "url": "/hhs-peptide-compounding-policy-2026",
      "title": "The scope of the HHS compounding policy"
    }
  ]
};
