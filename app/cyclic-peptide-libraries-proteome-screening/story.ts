import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story = {
  "slug": "cyclic-peptide-libraries-proteome-screening",
  "title": "Cyclic peptide libraries: how protein fragments become binding candidates",
  "description": "How researchers build and decode cyclic peptide libraries, what a 15,217-member proteome study found, and why a binding hit still needs validation.",
  "type": "Article",
  "category": "Science",
  "image": "cyclicLibrary20261024",
  "vials": [
    "ghk",
    "mots-c"
  ],
  "lead": "Researchers turned fragments of human cell proteins into 15,217 identifiable cyclic peptides, then searched the collection for a molecule that bound an antibody protein. A cyclic peptide library makes this kind of search possible: it brings many ring-shaped peptides together so promising members can be selected and tested individually.[1]",
  "notice": "Laboratory research explained. IQON Labs reader offers are separate from the studies discussed here.",
  "sections": [
    {
      "title": "Start with the proteins already in a cell",
      "id": "protein-fragments",
      "paragraphs": [
        "Ying Wei and colleagues at Tsinghua University and its Yangtze Delta Region Institute began with proteins from HEK-293T cells, a human cell line grown in the laboratory. They cut those proteins into shorter peptides and enriched fragments containing cysteine, an amino acid whose sulfur-containing group could participate in ring closure.[1]",
        "The collection of proteins expressed by a cell is its proteome. Using that material gave the researchers a starting set of biological sequences without first designing and synthesizing every member. The rings themselves were made by a laboratory chemical reaction; they were not a collection of naturally occurring cyclic peptides extracted intact from the cells.[1]",
        "The team used ortho-phthalaldehyde, abbreviated OPA, to connect cysteine to an amine group elsewhere in the same peptide. One possible connection involved the beginning of the chain. Another involved the side chain of lysine, a different amino acid. Those alternatives created different ring arrangements from the available fragments.[1]",
        "The paper appeared online in iScience on September 22, 2026, before its October 16 issue date. Its contribution is a way to construct and identify a library from protein digests, a separate question from [whether a cyclic peptide resists enzymes or enters cells](/cyclic-peptides-stability-cell-permeability).[1]"
      ]
    },
    {
      "title": "The ring has to be readable",
      "id": "reading-the-ring",
      "paragraphs": [
        "Making a mixture of rings is only useful for discovery if a promising member can later be identified. The researchers coupled liquid chromatography, which separates a mixture, to tandem mass spectrometry, which breaks peptide ions into fragments and measures them. The fragment pattern helps assign the sequence and the position of the chemical bridge.[1]",
        "OPA changed the way those fragments appeared. The team established characteristic signals for a ring connected to the chain's beginning and for one connected through lysine. They incorporated those rules into the search software instead of treating the products as ordinary linear peptides.[1]",
        "The analysis identified 15,217 cyclic peptides after filtering matches at a false discovery rate threshold below 5%, an estimate of the proportion of incorrect assignments among accepted matches under the analysis model. Those were library identifications, rather than 15,217 peptides individually tested for useful binding. The chemistry also linked some separate molecules together; the authors analyzed those products apart from rings formed within single peptides.[1]"
      ]
    },
    {
      "title": "From a mixture to one antibody-binding candidate",
      "id": "selecting-a-binder",
      "paragraphs": [
        "The target was human immunoglobulin G, or IgG, a class of antibody protein. The researchers attached IgG to a resin, exposed it to the library and washed away material that did not remain bound. Mass spectrometry then identified peptides recovered from the retained material.[1]",
        "This step changed the question from what the library contained to which members stayed with that target under the selection conditions. One candidate, IgG-P1-loop, moved forward for individual testing. The researchers synthesized its open-chain precursor and made the ring again, allowing them to compare the two forms outside the original mixture.[1]",
        "The cyclic version gave a stronger IgG-binding signal than the linear precursor in a surface plasmon resonance assay, which detects binding at a sensor surface. It also recovered more IgG in a separate experiment using diluted human serum. Those comparisons made ring closure relevant to the observed binding rather than merely a feature of the library's construction.[1]"
      ]
    },
    {
      "title": "Different libraries search different chemical possibilities",
      "id": "comparing-libraries",
      "paragraphs": [
        "Protein fragments offer one starting point among several. In a 2024 Chemical Science study, Hua Xiang and colleagues used OPA to close peptides displayed on bacteriophages, viruses that infect bacteria. Their library contained about a billion members and retained a genetic link to each displayed sequence. Screening identified binders for three different protein targets. Here, the genetic information helped researchers recover a selected peptide's identity.[2]",
        "A different 2024 study by Manuel Merz and colleagues built 8,448 cyclic peptides through combinatorial chemical synthesis. The researchers varied peptide building blocks and linkers, then screened the products in wells for inhibition of thrombin, an enzyme involved in blood clotting. Further rounds of chemical changes and testing explored additional properties of the selected candidates.[3]",
        "These approaches differ in what can be varied and what can be measured during selection. The phage platform links a displayed peptide to genetic information. The synthetic platform makes chemical variants in defined wells and can test an enzyme's activity. The proteome method starts with existing protein sequences and uses mass spectrometry to identify products from a mixed sample. The largest headline number alone cannot decide which library fits a research question.[1][2][3]"
      ]
    },
    {
      "title": "A useful binder needs a harder test",
      "id": "validation-next",
      "paragraphs": [
        "The IgG candidate remains preliminary. Its surface-binding measurements had low signals and rapid association and dissociation, and the authors lacked a conclusive negative control for judging target selectivity. They also did not run independent replicate concentration series for the apparent affinity estimate. Repeating the measurement and challenging the peptide with unrelated proteins would help establish whether the interaction is reliable and selective.[1]",
        "The starting material imposes another boundary: this OPA workflow selects cysteine-containing fragments, so it samples only part of the possible peptide sequence space. Its authors describe it as complementary to existing libraries. Three authors also disclosed a patent application covering the method and its applications.[1]",
        "Extending selection to other targets would test how broadly the method works. The library already connects protein fragments to identifiable rings that researchers can make again. That connection is what allows a hit from a complex mixture to become an individual molecule whose behavior can be tested.[1]"
      ]
    }
  ],
  "faqs": [],
  "related": [
    {
      "url": "/cyclic-peptides-stability-cell-permeability",
      "title": "Why ring closure changes stability and cell entry differently"
    },
    {
      "url": "/ic50-ec50-kd-peptide-potency-binding-affinity",
      "title": "How binding affinity differs from measured potency"
    }
  ],
  "date": "2026-10-24T12:16:01Z",
  "sources": [
    {
      "id": 1,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC13632188",
      "title": "Wei et al. Development of proteome-derived cyclic peptide libraries via ortho-phthalaldehyde-assisted cyclization (2026)",
      "doi": "10.1016/j.isci.2026.117598"
    },
    {
      "id": 2,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11290325",
      "title": "Xiang et al. A facile strategy for the construction of a phage display cyclic peptide library (2024)",
      "doi": "10.1039/d4sc03207a"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11062899",
      "title": "Merz et al. De novo development of small cyclic peptides that are orally bioavailable (2024)",
      "doi": "10.1038/s41589-023-01496-y"
    }
  ]
} satisfies NewsroomStory;
