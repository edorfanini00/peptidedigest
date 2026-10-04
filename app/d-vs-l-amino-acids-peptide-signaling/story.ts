import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "d-vs-l-amino-acids-peptide-signaling",
  "title": "D vs L amino acids: how one flip changes a peptide signal",
  "description": "D and L amino acids can give a peptide different receptor preferences without changing its mass. What animal peptide experiments reveal about chirality.",
  "date": "2026-10-04T16:28:34Z",
  "type": "Article",
  "category": "Science",
  "image": "aplysiaSeaHare",
  "vials": [
    "ghk",
    "ss31"
  ],
  "lead": "Changing one amino acid from its L form to its D form can alter which receptor a peptide activates most readily, without changing its mass.[1] Researchers found this in a signaling peptide from Aplysia californica, a marine mollusk known as a sea hare.[1][5] The difference affected one amino acid in a chain of 14, but the two versions preferred different receptors.[1]",
  "notice": "IQON Labs' research use only catalog is separate from the scientific studies discussed here.",
  "sections": [
    {
      "title": "A different arrangement of the same atoms",
      "id": "a-different-arrangement-of-the-same-atoms",
      "paragraphs": [
        "L and D describe amino acid stereochemistry: the spatial arrangement of attached groups.[4] For an amino acid such as phenylalanine, the two forms are mirror images that cannot be placed exactly on top of each other.[4]",
        "The Aplysia peptide is called allatotropin related peptide, or ATRP. Its two natural versions differ at the second amino acid, phenylalanine. One contains the L form there and the other the D form.[1] The D label applies to that one position, not the whole peptide.[1]",
        "Researchers call this pair epimers.[2] The amino acids remain in the same order, while the geometry at one position changes.[1][2] That distinction matters because a peptide's interactions with receptors depend on structure as well as sequence.[1]"
      ]
    },
    {
      "title": "The first evidence was two peaks",
      "id": "the-first-evidence-was-two-peaks",
      "paragraphs": [
        "In 2018, researchers found two major peaks when separating ATRP extracted from Aplysia nerve tissue.[2] The peaks had the same expected mass to charge value, and breaking the molecules into fragments produced very similar spectra.[2]",
        "The team compared the tissue extract with synthetic versions containing isotope labels. The naturally occurring peaks matched the versions with L phenylalanine and D phenylalanine at position two.[2] A control introduced the labeled L form before extraction. It showed no significant conversion to the D form during sample preparation, supporting the finding that the D form was already present in the tissue.[2]",
        "Mass spectrometry had helped identify the peptide, but mass alone could not identify this change. Separation by liquid chromatography and comparison with known structures supplied the distinction.[2]"
      ]
    },
    {
      "title": "A second receptor changed the picture",
      "id": "a-second-receptor-changed-the-picture",
      "paragraphs": [
        "The 2018 study found a receptor that both versions could activate.[2] In 2023, researchers identified another receptor with a different preference.[1]",
        "They made laboratory grown mammalian cells produce each Aplysia receptor on their surfaces, then measured a substance that accumulated inside the cells when the receptor's signaling pathway was activated.[1] That readout, called IP1, let them compare how readily each peptide triggered the pathway.[1]",
        "For the second receptor, the D2 form had an EC50 of 2 nanomolar, compared with 400 nanomolar for the all L form.[1] EC50 is the concentration producing half of the maximum response in an assay.[6] The lower value means less peptide was needed to reach that response, rather than a larger maximum effect.[1][6]",
        "The first receptor preferred the all L form.[1] Changing the residue to D did not simply make a peptide stronger. Its effect depended on the receptor being tested.[1]",
        "The IP1 results came from at least three independent experiments, after approximately one to two hours of peptide exposure. The authors rounded the linear EC50 values to one significant figure.[1] These experiments isolated receptor activation in cultured cells; how the two receptors divide signaling tasks in the animal remains a further question.[1]"
      ]
    },
    {
      "title": "Receptor activity and enzyme resistance are different",
      "id": "receptor-activity-and-enzyme-resistance-are-different",
      "paragraphs": [
        "The 2018 study also compared how the two forms broke down in plasma isolated from Aplysia's circulating fluid.[2] The labeled all L analog had a calculated half-life of 29 minutes under the assay conditions. The form with D phenylalanine at position two retained more than half, on average, after 45 hours.[2]",
        "That room temperature experiment used two biological replicates.[2] The result depended on the enzymes in the sample. Both peptide forms were readily degraded in the soluble portion of homogenized neural tissue, which can contain enzymes they would not normally encounter outside cells.[2]",
        "A D residue near the beginning of this peptide can protect against aminopeptidases, enzymes that break down a chain from that end. It does not protect every distant site from other enzymes.[2] Resistance to one set of enzymes and potency at one receptor are separate properties.[1][2]"
      ]
    },
    {
      "title": "The change can happen after a peptide is made",
      "id": "the-change-can-happen-after-a-peptide-is-made",
      "paragraphs": [
        "An animal can generate a D residue by modifying an existing peptide after its synthesis.[1][3] In 2024, researchers found peptide isomerase activity in Aplysia neural tissue extracts: enzymes in the extracts could change the geometry of residues in test peptides.[3]",
        "The team incubated several short test peptides with enriched extracts and detected products matching D containing standards. Heating the enzyme fraction to inactivate it prevented the conversion in the controls.[3] The work measured activity in extracts rather than identifying the individual enzymes responsible.[3]",
        "The three primary studies acknowledged National Institutes of Health support and declared no competing interests. They also share researchers across papers, so they are connected investigations rather than independent replications of one result.[1][2][3]",
        "The Aplysia findings give D and L a more specific meaning than weaker or stronger. One changed position affected which receptor responded most readily; the surrounding enzymes determined whether it also helped the signal survive.[1][2] Understanding a peptide's function means asking which molecular interaction its geometry changes."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Does glycine have D and L forms?",
      "a": "No. Glycine lacks the chiral center needed for the D and L forms described here. That makes it an exception to this distinction among the usual amino acid building blocks.",
      "refs": [
        4
      ]
    }
  ],
  "sources": [
    {
      "id": 1,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10089201",
      "title": "Yussif, Blasing and Checco (2023): Endogenous L to D isomerization and neuropeptide receptor selectivity"
    },
    {
      "id": 2,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6204918",
      "title": "Checco and colleagues (2018): Aplysia peptide epimers, receptor activation and plasma stability"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11277431",
      "title": "Andersen and colleagues (2024): A novel series of metazoan L/D peptide isomerases"
    },
    {
      "id": 4,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8615943",
      "title": "D-Amino Acids and D-Amino Acid-Containing Peptides (2021 review)"
    },
    {
      "id": 5,
      "url": "https://aplysia.earth.miami.edu/biology-of-aplysia/biological-description/index.html",
      "title": "University of Miami: Aplysia biological description"
    },
    {
      "id": 6,
      "url": "https://goldbook.iupac.org/terms/view/12651/plain",
      "title": "IUPAC Gold Book: effective concentration"
    }
  ],
  "related": [
    {
      "url": "/peptide-content-vs-purity-measurement",
      "title": "Peptide content vs purity: what the measurements count"
    },
    {
      "url": "/peptide-adsorption-glass-plastic-lab-results",
      "title": "How laboratory containers can change peptide measurements"
    }
  ]
};
