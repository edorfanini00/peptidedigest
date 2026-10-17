import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "methionine-oxidation-peptide-mass-spectrometry-artifacts",
  "title": "Methionine oxidation: when peptide analysis changes the sample",
  "description": "An oxidized peptide peak can arise during mass spectrometry. Three studies explain the methionine mass shift, instrument artifacts and ways to trace the change.",
  "type": "Article",
  "category": "Science",
  "image": "peptideOxidationSource",
  "vials": [
    "kpv",
    "nad"
  ],
  "lead": "Methionine oxidation detected in a peptide can arise during the analysis itself.[4] In one experiment with amyloid-beta peptide, a deteriorating electrospray emitter increased the oxidized signal.[4] The chemical change was real, but much of it occurred as the sample was being measured, complicating any claim about its original condition.[4]",
  "notice": "Science explainer about analytical experiments, not a laboratory protocol or a statement about any supplier’s products.",
  "sections": [
    {
      "id": "mass-and-timing",
      "title": "A mass shift identifies a change, not its timing",
      "paragraphs": [
        "Methionine is a sulfur-containing amino acid.[6] Adding oxygen to its side chain produces methionine sulfoxide and increases the peptide's molecular mass by about 16 daltons.[4] That change can arise in biological systems or during preparation and measurement of a laboratory sample.[5][6]",
        "Mass spectrometry measures ions, electrically charged molecules, by their mass relative to charge.[4] The 16-dalton molecular change is therefore not necessarily a shift of 16 units on an instrument's mass-to-charge axis.[4] Nor does an intact mass increase alone locate the changed amino acid.[4] Fragments of the peptide can supply the site information.[4]",
        "Even after the site is identified, the spectrum does not carry a timestamp for the reaction.[5][6] Oxidation that was present in a cell and oxidation added after the sample left that cell can produce the same methionine sulfoxide.[5][6] A method that aims to measure the original state needs a way to distinguish those histories.[5][6]"
      ]
    },
    {
      "id": "emitter-experiment",
      "title": "When the electrospray source became part of the reaction",
      "paragraphs": [
        "In a 2007 study, Maolian Chen and Kelsey Cook examined synthetic amyloid-beta 1-40, a peptide also written Aβ(1-40).[4] Alongside the expected peptide, they detected a heavier form.[4] Analysis of fragments localized the added mass to methionine at position 35.[4]",
        "The amount of oxidized signal changed with the instrument setup.[4] A configuration that mixed streams at the emitter tip produced more oxidation and a higher, less stable current than an alternative configuration.[4] Chromatography, performed separately, showed much less oxidation already present in the sample.[4] The difference pointed to a change introduced during electrospray analysis.[4]",
        "Electrospray uses an electric field to generate charged droplets from a liquid sample.[4] The researchers found that corrosion left irregularities on the stainless-steel emitter surface, promoting electrical discharge.[4] A new emitter reduced the oxidized signal; smoothing an eroded tip also reduced it.[4] These controls tied the signal to the condition of the source, rather than simply to the peptide's time in storage.[4]",
        "An isotope experiment then traced the added oxygen.[4] With water containing the heavier oxygen-18 isotope in the analytical stream, the oxidized peptide acquired the corresponding label.[4] Water supplied the inserted oxygen under those conditions.[4] The experiment did not resolve whether the final reaction occurred in liquid or through gas-phase radicals, but it did connect the chemical change to the analytical process.[4]"
      ]
    },
    {
      "id": "signal-and-fraction",
      "title": "Why the oxidized peak is not automatically an oxidation percentage",
      "paragraphs": [
        "An oxidized and an unoxidized peptide can behave differently during both chromatography and ionization.[5] They may emerge from the column at different times or generate different signal strengths for the same amount of material.[5] Directly comparing their peak intensities can therefore misrepresent the fraction that was oxidized.[5]",
        "The emitter experiment adds another complication: one starting population can become distributed across several signals during measurement.[4] A smaller unoxidized peak can reflect conversion inside the source as well as a difference in the original sample.[4] Identifying the product and quantifying its starting abundance are separate tasks.[4][5]",
        "Researchers have addressed this by marking methionine before later analytical steps.[5][6] The marker records which sites were still unoxidized when the labeling reaction took place.[5][6] Subsequent measurements can then use that marked population as a reference for the earlier state.[5][6]"
      ]
    },
    {
      "id": "isotope-blocking",
      "title": "A heavier oxygen label marks the unoxidized sites",
      "paragraphs": [
        "A 2020 study by John Bettinger and colleagues used extracts from unstressed MJT human epidermal fibroblasts grown in culture.[5] Soon after breaking open the cells, the team deliberately oxidized the remaining unoxidized methionines with oxygen-18-labeled hydrogen peroxide.[5] Methionines already oxidized with ordinary oxygen-16 retained that lighter form.[5]",
        "This approach turns an unwanted reaction into a marker.[5] Both populations are now oxidized, but the oxygen isotopes make them distinguishable by mass.[5] Filling the previously unoxidized sites also reduces the opportunity for later handling to add ordinary oxygen and obscure their earlier state.[5]",
        "The team tested the measurement using mixtures with known proportions of light- and heavy-labeled material.[5] Measured ratios tracked the mixtures.[5] They also used peptides without methionine as a check on background signals that might otherwise be mistaken for the lighter partner.[5]",
        "The labeling reagent introduced a limit of its own.[5] It contained some ordinary oxygen, and separate reagent batches contributed uncertainty to differences between biological replicates.[5] The study could identify sites with reproducibly high oxidation, but small shifts could not simply be assigned to cell biology.[5] Its human-cell model was a cultured cell line, not a study of patients.[5]"
      ]
    },
    {
      "id": "alkylation-blocking",
      "title": "A chemical tag offers a different reference",
      "paragraphs": [
        "In 2024, Margaret Hoare and colleagues from the same Rochester research group tested an alternative called Methionine Oxidation by Blocking with Alkylation, or MObBa.[6] It attaches a chemical group to unoxidized methionine.[6] Methionine sulfoxide does not acquire the same tag, allowing the tagged material to represent the population that was unoxidized before blocking.[6]",
        "The proof of concept used the synthetic peptide MASLIKKLAVDR and peptide mixtures prepared from E. coli proteins.[6] The researchers combined fully oxidized and reduced material in known proportions, then compared tagged signals with a fully reduced control.[6] The measurements followed the expected differences across the mixtures.[6]",
        "The tag created additional analytical work.[6] Tagged methionine could lose part of its side chain during mass spectrometry, producing another signal that had to be counted.[6] Blocking was also slow enough to leave room for changes before completion.[6] Unlike the isotope method's comparison within a sample, MObBa depended on comparisons across runs, which can add measurement error.[6]",
        "Those experiments tested whether the method could recover deliberately constructed mixtures.[6] Measuring native oxidation levels in unreduced cell extracts remained a future application in that paper.[6] Recovering a known mixture establishes the measurement principle; applying it to an unaltered biological sample is the next test.[6]"
      ]
    },
    {
      "id": "interpreting-measurement",
      "title": "What an oxidation result needs to explain",
      "paragraphs": [
        "The three studies address different parts of the same problem.[4][5][6] Fragment analysis identified the changed site in the amyloid-beta experiment.[4] Instrument controls traced a source of new oxidation.[4] The later blocking studies tested ways to preserve information about the earlier state and quantify it against a reference.[5][6]",
        "Other peptide measurements have their own identity problems. [Deamidation can change a peptide's backbone](/peptide-deamidation-isoaspartate-mass-shift), while [different disulfide pairings can share an intact mass](/peptide-disulfide-bond-isomers-same-mass). Methionine oxidation adds a timing problem: a correctly identified product may still have formed after the original sample was collected.[4][5]",
        "A useful oxidation result therefore explains which site changed, how preparation and ion-source effects were assessed, and what reference supports the reported amount.[4][5][6] Once those questions are answered, researchers can investigate the biological meaning of the change.[4][5][6] A heavier peak alone cannot distinguish native oxidation from a reaction introduced by the test.[4][5][6]"
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "id": 4,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC2597585",
      "title": "Chen and Cook, electrospray oxidation artifacts, 2007",
      "doi": "10.1021/ac061743r"
    },
    {
      "id": 5,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7077757",
      "title": "Bettinger et al., methionine oxidation isotope blocking, 2020",
      "doi": "10.1021/acs.jproteome.9b00505"
    },
    {
      "id": 6,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10921467",
      "title": "Hoare et al., methionine oxidation blocking with alkylation, 2024",
      "doi": "10.1021/jasms.3c00337"
    }
  ],
  "related": [
    {
      "url": "/peptide-deamidation-isoaspartate-mass-shift",
      "title": "Peptide deamidation and changes to the backbone"
    },
    {
      "url": "/peptide-disulfide-bond-isomers-same-mass",
      "title": "Same mass, different disulfide bonds"
    }
  ],
  "date": "2026-10-17T12:27:45+00:00"
};
