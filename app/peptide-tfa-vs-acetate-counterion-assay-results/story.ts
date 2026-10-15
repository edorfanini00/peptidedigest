import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "peptide-tfa-vs-acetate-counterion-assay-results",
  "title": "TFA vs acetate peptide salts: why assay results can change",
  "description": "The same peptide sequence can behave differently as a TFA, acetate or chloride salt. Three primary studies show why the assay determines the comparison.",
  "date": "2026-10-15T12:43:16+00:00",
  "type": "Article",
  "category": "Science",
  "image": "peptideCounterionAnalysis",
  "vials": [
    "glutathione",
    "semax"
  ],
  "lead": "Changing a peptide from a trifluoroacetate, or TFA, salt to an acetate salt can change an assay result without changing the peptide’s amino acid sequence.[1] The direction is not predictable from the salt name: in one direct comparison, pexiganan acetate caused more red blood cell lysis than its TFA form, yet looked less toxic in a separate skin cell assay. The counterion matters, but the readout determines what the difference means.[1]",
  "notice": "Science explainer. These are laboratory comparisons, not evidence of safety or benefit in people. IQON Labs offers a separate research use only catalog; the studies do not evaluate its products.",
  "sections": [
    {
      "title": "What accompanies the peptide chain",
      "id": "counterion",
      "paragraphs": [
        "A counterion is an ion with the opposite charge to the molecule it accompanies.[1][2] A peptide with positively charged groups can associate with negatively charged trifluoroacetate, acetate or chloride ions. Changing that partner changes the salt form while leaving the amino acid sequence intact.[1][2]",
        "Trifluoroacetic acid is widely used during peptide synthesis and chromatographic purification.[1][2] After purification and drying, a synthetic peptide can therefore be present as a TFA salt. The sample may also contain TFA beyond the amount expected to balance the peptide’s charges.[1][2]",
        "That companion can affect how the peptide interacts with its surroundings.[1][2] Counterion studies examine changes in membrane behavior and other physical properties as well as biological readouts. The sample’s mass is another part of the comparison: a milligram of peptide salt includes material other than the peptide chain.[1][2]",
        "The [peptide content versus purity explainer](/peptide-content-vs-purity-measurement) covers that mass distinction.[1] Functional assays add a separate problem: the same salt change can look favorable in one test and unfavorable in another.[1]"
      ]
    },
    {
      "title": "One peptide, opposite impressions from two assays",
      "id": "pexiganan-comparison",
      "paragraphs": [
        "In a 2018 study, Sikora and colleagues compared five antimicrobial peptides as TFA, acetate and chloride salts.[1] They measured the counterions with ion chromatography, then tested bacterial growth, red blood cell lysis and activity in cultured human keratinocytes, a skin cell model. The assays asked different questions about the same preparations.[1]",
        "The red blood cell result was particularly clear for pexiganan.[1] At the reported concentration of 256 micrograms per milliliter of peptide salt, the acetate form produced 30.75% hemolysis, compared with 7.04% for TFA and 8.51% for chloride. The experiment used a 4% suspension of human red blood cells in phosphate buffered saline for 60 minutes at 37 °C, with measurements in triplicate.[1]",
        "Hemolysis means red blood cells breaking open.[1] These percentages describe hemoglobin release relative to laboratory controls: cells in buffer defined the zero point and detergent treated cells defined complete lysis. They are not percentages of people harmed, and the experiment did not administer a peptide to volunteers.[1]",
        "The preparations also differed in measured peptide content.[1] The researchers assessed those differences and considered them insufficient to account for the biological pattern. Even so, the comparison was not strictly equal amounts of peptide molecules; it should not be described as an equimolar test that isolated the counterion alone.[1]",
        "In the skin cell experiment, the apparent ordering changed.[1] Pexiganan acetate had the lowest cytotoxicity among its three salts in the MTT assay, which measures cellular metabolic activity. That test exposed HaCaT keratinocytes for 24 hours at 37 °C in serum supplemented DMEM culture medium and 5% carbon dioxide. It used six wells per concentration and was repeated at least twice.[1]",
        "The difference is useful precisely because the endpoints are different.[1] Red cell membrane disruption and a metabolic signal in cultured skin cells do not measure a single property called safety. Calling acetate the better salt without naming the experiment would erase the main finding.[1]"
      ]
    },
    {
      "title": "Bacterial growth adds a third comparison",
      "id": "bacterial-growth",
      "paragraphs": [
        "The same study measured the minimum inhibitory concentration, or MIC: the lowest tested concentration at which bacterial growth was not observed.[1] Across the tested Staphylococcus aureus strains, acetate and chloride forms generally required lower concentrations than TFA forms. The ordering also varied with the peptide and bacterial strain.[1]",
        "A lower MIC indicates stronger growth inhibition in that assay.[1] It does not resolve the red cell or skin cell findings. For pexiganan, the investigators could see promising bacterial selectivity alongside the larger acetate hemolysis signal at the high concentration used in the red cell comparison.[1]",
        "Bacterial growth, red cell lysis and keratinocyte metabolism measure different biological responses.[1] A salt form that performs well on one of those measures can perform poorly on another. The peptide and the readout together determine how the comparison should be interpreted.[1]"
      ]
    },
    {
      "title": "A membrane model offers a possible explanation",
      "id": "membrane-model",
      "paragraphs": [
        "Erckes and colleagues approached counterions from another direction in a 2025 study.[2] They compared TFA and chloride forms of several peptides using lipid vesicles, small enclosed compartments surrounded by a membrane. A fluorescent indicator inside the vesicles reported changes in internal acidity.[2]",
        "For the peptide pVEC, the TFA form produced a measurable fluorescence change while the chloride form did not.[2] AntP and Pep 1 each produced measurable kinetics with both salts. The authors interpreted the signals as evidence about passive passage through the model membrane.[2]",
        "The proposed explanation involves ion pairing.[2] A counterion may shield positively charged parts of a peptide, allowing a neutral peptide and counterion complex to interact differently with the membrane. Dissociation inside a vesicle could then change its acidity. The authors present this as a mechanistic interpretation, with the precise interaction still requiring further study.[2]",
        "The fluorescence response shows how a counterion can matter in a model membrane.[2] The vesicles contain no living human cells, and the comparison used chloride rather than acetate. Predicting how an acetate sample would behave would require testing that salt in the same system.[2]"
      ]
    },
    {
      "title": "A system where the salts looked similar",
      "id": "negative-comparison",
      "paragraphs": [
        "A second 2025 paper, by Moore and colleagues, examined a different system: a synthetic peptide chemically attached to the antiviral drug cabotegravir and designed to form a gel that holds water.[3] The investigators compared its TFA and hydrochloride forms. For their cell tests, they used the material in dissolved form rather than exposing cells to a complete gel.[3]",
        "In NCTC 929 mouse fibroblasts exposed to the dissolved conjugate, Live/Dead fluorescence staining showed similar patterns of viable cells for the two salts.[3] Metabolic activity measurements varied across the observations: some earlier comparisons differed between salts, while others did not.[3]",
        "The two assays supplied separate readouts of the cell response.[3] MTS metabolic activity sometimes rose above the readings from cells exposed to culture medium alone. That stronger signal does not necessarily mean a proportionate increase in living cells; Live/Dead staining assessed viability through fluorescence imaging.[3]",
        "The counterion change did not produce a uniform shift across this study’s cell readouts.[3] That mixed pattern belongs to this dissolved peptide and drug conjugate in this model. It does not establish equivalence between peptide salts, and acetate was not tested.[3]"
      ]
    },
    {
      "title": "What makes a salt comparison interpretable",
      "id": "interpreting-the-result",
      "paragraphs": [
        "The most informative comparison names the peptide and measures what accompanies it.[1][2] Sikora’s team quantified counterions by ion chromatography. Erckes’s team compared analytical methods for detecting TFA and followed both its removal and the replacement chloride. A salt label alone cannot supply that composition evidence.[1][2]",
        "The biological readout then determines the conclusion.[1][2][3] A bacterial growth threshold, hemoglobin release, a vesicle fluorescence curve and cell metabolism each describe a different interaction. Reporting the model and conditions lets readers identify which question an experiment actually answered.[1][2][3]",
        "For the same sequence, a changed salt can be a plausible explanation for changed results.[1][2][3] Establishing that explanation requires attention to peptide amount and sample composition as well as the assay. The evidence supports a comparison tied to those details, not a universal ranking of TFA, acetate and chloride.[1][2][3]"
      ]
    }
  ],
  "faqs": [],
  "related": [
    {
      "url": "/peptide-content-vs-purity-measurement",
      "title": "Peptide content and purity measure different things"
    },
    {
      "url": "/peptide-aggregation-assay-measurement-pitfalls",
      "title": "How aggregation changes an assay’s interpretation"
    }
  ],
  "sources": [
    {
      "id": 1,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5917001",
      "title": "Sikora et al. Counter-ion effect on antistaphylococcal activity and cytotoxicity (2018)"
    },
    {
      "id": 2,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12389442",
      "title": "Erckes et al. Counterion analysis and membrane permeation (2025)"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12076187",
      "title": "Moore et al. Counterions in a peptide hydrogel system (2025)"
    }
  ]
};
