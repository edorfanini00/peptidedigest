import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "peptide-content-vs-purity-measurement",
  "title": "Peptide content vs purity: why the numbers answer different questions",
  "description": "Peptide purity and content measure different things. How mass balance, calibrated HPLC, amino acid analysis and NMR assign an amount.",
  "date": "2026-10-02T08:28:09-04:00",
  "type": "Article",
  "category": "Science",
  "image": "analyticalContent",
  "vials": [
    "glutathione",
    "nad"
  ],
  "lead": "A peptide purity percentage and a peptide amount are different measurements.[6] An HPLC area percentage compares detected peaks, while a content measurement assigns an amount of peptide to the material or vial.[6] In one international laboratory comparison, water and a counterion accounted for much more sample mass than the related peptide impurities did.[2]",
  "notice": "An explanation of published laboratory measurements and their limits.",
  "sections": [
    {
      "title": "A percentage needs a denominator",
      "id": "a-percentage-needs-a-denominator",
      "paragraphs": [
        "A laboratory needs to know how much of the intended molecule is entering an experiment. Weighing a powder, identifying a molecule and measuring its amount solve different parts of the problem.[6] Even a sophisticated instrument can leave the answer incomplete if the wrong signal is counted.[2][6]",
        "High performance liquid chromatography, or HPLC, separates components before a detector records their signals.[5] A chromatographic area percentage expresses one peak's share of the integrated signal.[6] It is a comparison within that measurement, rather than an inventory of everything that contributed to the powder's weight.[6]",
        "The mass fraction of the target peptide expresses how much of the material's mass belongs to that molecule.[2] Water, counterions and residual solvents enter that accounting alongside other peptides.[6] An absolute content result then expresses an amount, such as milligrams of the target peptide per vial.[6]",
        "The label \"net peptide content\" needs a definition and a unit. A mass fraction and an amount per container describe different quantities.[2][6] The calculation also depends on whether the result refers to material as received or after a correction for water.[6]",
        "The United States Pharmacopeia, or USP, makes the separation explicit in its methods: chromatographic impurities can be reported as a percentage of total detected area, while counterions and other constituents are measured by weight.[6] Treating those percentages as interchangeable mixes different denominators.[6]"
      ]
    },
    {
      "title": "What one gram of peptide material contained",
      "id": "what-one-gram-of-peptide-material-contained",
      "paragraphs": [
        "An international comparison coordinated through the Bureau International des Poids et Mesures, the international organization for measurement standards, put this problem into numbers.[2] Eleven laboratories reported results for a synthetic peptide with six amino acids, identified by the sequence VHLTPE.[2] The comparison used commercially sourced material to test laboratories' ability to assign its composition.[2] The weighing protocol corrected sample mass to a basis of 50% relative humidity.[2]",
        "The final report assigned 613 milligrams of target peptide per gram of material.[2] Its expanded uncertainty was 20 milligrams per gram at a coverage factor of two, corresponding to about 95% confidence.[2]",
        "The mass balance also included 286.7 milligrams of trifluoroacetic acid, or TFA, 47.5 milligrams of water and 53.0 milligrams of related peptide impurities per gram of material.[2] Table 8 gives their respective standard uncertainties as 2.3, 4.1 and 8.6 milligrams per gram.[2] These are the inputs to the final reference value, not one laboratory’s individual results.[2]",
        "TFA was counted separately from the target peptide.[2] It can be present as a counterion, the accompanying ionic component of a peptide salt, rather than as another peptide sequence.[6] The amount of TFA in this particular material was far larger than the amount of related peptide impurities.[2][6]",
        "The researchers did not obtain that accounting from a single chromatogram. Their characterization included liquid chromatography with mass spectrometry for peptide impurities, Karl Fischer titration for water, and nuclear magnetic resonance and ion chromatography to investigate other constituents.[2]",
        "These measurements describe one comparison material. They do not establish a typical composition for commercial research peptides.[2]"
      ]
    },
    {
      "title": "Why a matching mass was not enough",
      "id": "why-a-matching-mass-was-not-enough",
      "paragraphs": [
        "The same comparison exposed a harder problem than water or salt: a molecule that had the same mass as the intended peptide but a different arrangement of bonds.[2]",
        "One peptide bond had rearranged into an ester linkage.[2] The resulting structure, called a depsipeptide, remained similar enough to the target to complicate the analysis.[2] Canada's National Research Council initially stood alone in clearly identifying and quantifying that impurity, using proton nuclear magnetic resonance, or NMR.[2]",
        "Some other laboratories had seen a broad chromatographic peak before the main peptide peak.[2] Its mass matched the target, but its behavior was inconsistent.[2] During later investigation, researchers connected that inconsistency to the impurity's instability and sensitivity to pH.[2] Reanalysis of NMR and mass spectrometry data confirmed that the signal had been wrongly overlooked or interpreted.[2]",
        "The broad peak had been detected, then dismissed as an artifact because its abundance varied.[2] This is why identity testing can involve molecular mass, fragments that reveal sequence, NMR structural information and other complementary measurements.[2][6]",
        "A content measurement depends on that identification work. Counting a related structure as the intended peptide changes the assigned amount even when the sample's total weight stays the same.[2]"
      ]
    },
    {
      "title": "How HPLC becomes an amount measurement",
      "id": "how-hplc-becomes-an-amount-measurement",
      "paragraphs": [
        "HPLC can measure peptide content.[5][6] The difference is what the laboratory compares the sample with.[5][6]",
        "For a relative purity figure, it compares peaks within the chromatogram.[6] For a quantitative assay, it compares the sample's response with a reference material whose peptide amount has already been assigned.[5][6] The reference supplies the link between detector signal and amount.[5][6]",
        "USP describes a process with two stages.[6] First, laboratories characterize a bulk peptide material, accounting for peptide impurities, counterions, water, residual solvents and inorganic residues.[6] They then use that characterized material as the standard for an HPLC assay of the peptide in individual vials.[6]",
        "In a separate collaborative study of oxytocin reference material, one laboratory's HPLC results were excluded because it could not obtain stable water measurements for the standard.[5] The authors linked that problem to insufficient humidity control during preparation.[5]",
        "That study involved 14 laboratories in 10 countries, although different subsets performed each method.[5] It compared calibrated HPLC, quantitative NMR and amino acid analysis.[5] The HPLC results showed the lowest variability between laboratories in that comparison.[5]",
        "The comparison also had a consequential limit: its variability calculation did not include uncertainty in the standard's purity assignment.[5] Several laboratories agreeing closely with one another is useful, but the shared reference still contributes uncertainty to the amount they report.[5]"
      ]
    },
    {
      "title": "Two other ways to count peptide",
      "id": "two-other-ways-to-count-peptide",
      "paragraphs": [
        "Amino acid analysis breaks a peptide down and measures stable constituent amino acids.[5] If the peptide's composition is known, those measurements can be used to calculate its amount.[2][5] The difficulty is that related peptide impurities can release the same amino acids, so their contribution must be accounted for.[2][5]",
        "Quantitative NMR measures selected nuclear signals against a standard without first breaking the peptide apart.[5] That avoids the hydrolysis step, but signals from related impurities can overlap the signals selected for measurement.[5]",
        "In the oxytocin study, the NMR and amino acid results were not corrected for related peptide impurities, a potential source of bias acknowledged by the authors.[5] The HPLC procedure was an established compendial method, while the NMR and amino acid procedures used in that study were not validated compendial methods.[5] The results cannot settle which platform is best for every peptide.[5]",
        "USP funded the 2023 reference standard paper.[6] Its authors are USP employees or collaborators, and USP develops and sells reference standards.[6]"
      ]
    },
    {
      "title": "The useful result is an amount with a defined basis",
      "id": "the-useful-result-is-an-amount-with-a-defined-basis",
      "paragraphs": [
        "For laboratory work, the informative answer identifies the molecule, assigns its amount, states the unit and explains the measurement basis and uncertainty. A chromatographic purity percentage can contribute to that answer, but it cannot supply all of it.[2][6]",
        "Our guide to [reading a peptide certificate of analysis](/how-to-read-peptide-coa) covers the separate task of matching a report to its sample and checking its identifiers. The analytical question comes before any comparison of headline percentages: what, exactly, did the laboratory measure?",
        "In the international comparison, water and counterions changed the mass accounting, while a rearranged peptide changed which molecules belonged in the answer.[2] A reliable content value required both problems to be resolved.[2]"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Why can limited sample material affect the choice of measurement method?",
      "a": "A full mass balance requires enough material for separate tests of its constituents. In the hexapeptide comparison, most participants used amino acid analysis with corrections for peptide impurities because the available material was insufficient for a full mass balance. The coordinating laboratories had more material available.",
      "refs": [
        2
      ]
    }
  ],
  "sources": [
    {
      "id": 2,
      "url": "https://www.bipm.org/documents/20126/44695441/CCQM-K115.2018.pdf/0d0cdf03-8515-cd66-4eb7-9ee89145a48d?t=1660719095638",
      "title": "BIPM: CCQM K115.2018 hexapeptide purity comparison, full final report"
    },
    {
      "id": 5,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6507411",
      "title": "Collaborative study: peptide quantification methods and oxytocin reproducibility",
      "doi": "10.1016/j.jpba.2018.12.028"
    },
    {
      "id": 6,
      "url": "https://www.usp.org/sites/default/files/usp/document/our-work/biologics/reference_standards_to_support_quality_of_synthetic_peptide_therapeutics.pdf",
      "title": "McCarthy and colleagues: Reference standards to support quality of synthetic peptide therapeutics (2023)",
      "doi": "10.1007/s11095-023-03493-1"
    }
  ],
  "related": [
    {
      "url": "/how-to-read-peptide-coa",
      "title": "How to read a research peptide certificate of analysis"
    },
    {
      "url": "/peptide-adsorption-glass-plastic-lab-results",
      "title": "How container surfaces can change peptide recovery"
    }
  ]
};
