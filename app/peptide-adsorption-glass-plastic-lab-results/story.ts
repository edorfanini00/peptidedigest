import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story = {
  "slug": "peptide-adsorption-glass-plastic-lab-results",
  "title": "Why a peptide can disappear from a tube without breaking down",
  "description": "Peptide adsorption to glass and plastic can lower recovery and distort LC-MS results. Four laboratory studies explain why a weak signal need not mean degradation.",
  "date": "2026-09-27T12:24:43+00:00",
  "type": "Article",
  "category": "Science",
  "image": "peptideAdsorption",
  "vials": [
    "glutathione",
    "bac-water"
  ],
  "lead": "A peptide can be present when a lab fills a tube and scarce in the liquid an hour later.[1] In a high-performance liquid chromatography (HPLC) experiment with three model peptides at 1 micromolar, only 10 to 20 percent remained recoverable from ordinary glass or polypropylene containers after one hour.[1] The study attributed most of that shortfall to molecules binding to the container wall. A low reading, in that situation, is not the same thing as a broken molecule.[1]",
  "sections": [
    {
      "title": "The wall takes a share of the sample",
      "id": "the-wall-takes-a-share-of-the-sample",
      "paragraphs": [
        "The laboratory term is adsorption: molecules accumulate on a surface.[1] A detector measures what reaches it, not what the researcher originally put in the vessel.[2] That gap can matter before a sample ever enters an instrument.[1]",
        "In the 2015 study, the researchers compared borosilicate glass, ordinary polypropylene and a low-binding plastic using mastoparan X, melittin and magainin 2.[1] These are positively charged, membrane-active research peptides, not a representative test of every peptide sequence. They held 220-microliter solutions in the vessels for one hour, then quantified the peptide still in the liquid by analytical HPLC.[1] At 1 micromolar, the ordinary glass and polypropylene containers yielded just 10 to 20 percent of the expected peptide.[1] Low-binding tubes performed better for those molecules. Each plotted condition came from two separate experiments, and the researchers checked whether the transfer pipette tip could explain the apparent loss.[1]",
        "The amount recovered also depended on how much peptide the solution initially contained.[1] In the ordinary containers, a larger fraction remained in the liquid at higher concentrations, consistent with a finite number of surface sites becoming occupied.[1] The experiment did not show that the peptide molecule itself became more stable as concentration rose. It showed how the same contact surface could take a much larger proportion of a dilute sample.[1]",
        "Fresh surfaces compounded the effect.[1] When the team moved solutions through four ordinary glass or polypropylene vessels, with one hour in each, recovery of the tested peptides approached zero.[1] The low-binding tubes reduced, but did not erase, that pattern.[1] The exact percentages belong to these three sequences and this experiment; the broader lesson is that each new contact surface can change what remains available to measure.[1]"
      ]
    },
    {
      "title": "A calibration curve can conceal the loss",
      "id": "a-calibration-curve-can-conceal-the-loss",
      "paragraphs": [
        "In mass spectrometry, more peptide should ordinarily produce more signal in a predictable relationship.[3] If the wall captures a different fraction at each concentration, that relationship bends. Two nominally proportionate samples can deliver disproportionately different amounts to the detector.[3]",
        "A separate team tested this with a digest of six proteins.[3] It selected 18 detectable peptides, followed three measured signals per peptide across a dilution series, and ran samples in triplicate.[3] With formic acid in water as the sample solvent, 35% of the peptides had a weak concentration-to-signal fit by the study's cutoff of R² at or below 0.95.[3] Adding 5% acetonitrile to that solvent reduced that share to zero; the share with a very strong fit, R² above 0.99, rose from 35% to 83%.[3]",
        "R² measures how closely points follow a fitted line. Those figures describe linearity, not a measured percentage of missing peptide recovered.[3] The authors interpreted the solvent response and the tendency of more hydrophobic peptides to behave worse as evidence for concentration-dependent adsorption.[3] Their setup included a vial and a flow path into the instrument, so the experiment alone cannot assign each molecule lost to a particular wall.[3]"
      ]
    },
    {
      "title": "Same target amount, different response",
      "id": "same-target-amount-different-response",
      "paragraphs": [
        "A 2025 study posed a different test.[2] The researchers prepared a protein digest from HeLa cells, a standard human laboratory cell line, at concentrations from 1.1 to 20 nanograms per microliter, while holding the solution volume in polypropylene vials at 20 microliters.[2] They adjusted how much liquid entered the liquid chromatography and mass spectrometry system (LC-MS) to target the same 10 nanograms of digest each time.[2] If every prepared solution retained its full nominal concentration, the delivered signal would be much more alike.[2]",
        "It was not.[2] As the prepared mixture became more dilute, signal from peptides emerging late in the separation fell about fivefold between the concentration extremes.[2] The middle portion fell about threefold; the earliest portion changed little.[2] Later elution often tracks more hydrophobic chemistry in this separation, making the uneven loss important: a single total-signal correction might not restore every peptide in the mixture equally.[2] The paper reports three replicate analyses and fits a surface-binding model to the concentration effect.[2]",
        "Vial material complicated the picture further.[2] In a separate, much more dilute digest comparison from the same paper, a treated commercial polypropylene vial delivered higher total peptide intensity than a custom vial molded from a more polar plastic.[2] Ordinary commercial polypropylene was lowest among the compared commercial vessels, with a commercial glass vial above it.[2] A material name, then, is a poor substitute for an actual recovery comparison in the intended analytical method. These results are about signal under the team's LC-MS conditions, not a universal ranking of container products.[2]",
        "The qualification matters beyond plastic. Another group examined an intact 27-residue research peptide using four combinations of ordinary and low-binding preparation tubes and autosampler vials.[4] At 10 picograms per microliter, the peptide gave no detectable peak from ordinary autosampler vials under that setup; the strongest peak came when both stages used low-binding labware.[4] Yet the same study found that low-binding vessels did not by themselves solve weak low-concentration response for a larger intact protein.[4] One measured peptide charge state remained nonlinear even in the better vessels, which the researchers thought could be an instrument-source effect.[4]"
      ]
    },
    {
      "title": "What a weak peak can and cannot say",
      "id": "what-a-weak-peak-can-and-cannot-say",
      "paragraphs": [
        "Adsorption is a serious candidate when a peptide signal falls after container contact, especially if dilution changes the response.[1][3] It is not the only candidate. Solubility, sample preparation and the analytical instrument can also affect a reading, and the intact-peptide experiment shows that a better vessel may leave other response problems untouched.[3][4]",
        "The useful comparison is between what was expected in the liquid and what an assay actually recovers after each relevant contact, with the analytical conditions held comparable.[1][2] A low peak by itself cannot settle that question. These experiments show why measured recovery and curve behavior deserve attention before anyone interprets a weak signal as proof that a peptide chemically degraded.[1][3]"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can an internal standard automatically fix a curved calibration response?",
      "a": "No. The 2013 study specifically cautioned that an internal standard cannot by itself correct a nonlinear relationship between peptide amount and signal. A reference signal does not establish that the analyte responds proportionately throughout the concentration range.",
      "refs": [
        3
      ]
    },
    {
      "q": "Does a larger liquid volume rule out adsorption?",
      "a": "No. In the 2015 study, 2 milliliter samples generally had better recovery from ordinary glass and polypropylene than the smaller samples at the compared concentration, but substantial surface loss still occurred in some conditions. Volume changed the result without eliminating the surface effect.",
      "refs": [
        1
      ]
    }
  ],
  "sources": [
    {
      "id": 1,
      "url": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0122419",
      "title": "Kristensen et al. (2015), PLOS ONE"
    },
    {
      "id": 2,
      "url": "https://orbi.uliege.be/bitstream/2268/338911/1/Kune%20et%20al_2025_significant-impact-of-consumable-material-and-buffer-composition-for-low-cell-number-proteomic-sample-preparation.pdf",
      "title": "Kune et al. (2025), Analytical Chemistry"
    },
    {
      "id": 3,
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC3694305/fullTextXML",
      "title": "Warwood et al. (2013), Journal of Proteomics, DOI 10.1016/j.jprot.2013.04.034"
    },
    {
      "id": 4,
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC10989528/fullTextXML",
      "title": "Murphy et al. (2021), intact peptide LC-MS, full-text XML"
    }
  ],
  "notice": "The concentrations and conditions below describe laboratory studies, not instructions for use in people. The IQON catalog placement is separate from these experiments.",
  "related": [
    {
      "url": "/peptide-freeze-thaw-stability-lab-evidence",
      "title": "How freezing and thawing affect peptide stability"
    },
    {
      "url": "/how-to-read-peptide-coa",
      "title": "What a certificate of analysis can and cannot establish"
    }
  ]
} satisfies NewsroomStory;
