import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "leucine-isoleucine-peptide-mass-spectrometry",
  "description": "Leucine and isoleucine have the same exact mass. How specialized peptide fragmentation can distinguish them, and why a mass match leaves sequence ambiguity.",
  "type": "Article",
  "category": "Research explained",
  "image": "leuIleMassSpec20261025",
  "vials": [
    "ss31",
    "ghk"
  ],
  "notice": "An explanation of analytical research methods. The studies discussed here do not establish claims about advertised research reagents.",
  "related": [
    {
      "url": "/peptide-lc-ms-ion-suppression-matrix-effects",
      "title": "Why peptide LC-MS signal can change without a concentration change"
    },
    {
      "url": "/peptide-disulfide-bond-isomers-same-mass",
      "title": "How disulfide connectivity can change a peptide without changing its mass"
    }
  ],
  "title": "Leucine vs isoleucine: what peptide mass spectrometry can resolve",
  "date": "2026-10-25T12:30:28Z",
  "lead": "A peptide can have the expected exact mass while a leucine or isoleucine in its sequence remains unresolved. These amino acids have identical elemental composition, so routine intact-mass measurements and backbone fragment masses alone cannot tell them apart. Specialized fragmentation experiments can recover the missing structural information.[1][2]",
  "sections": [
    {
      "title": "The same mass survives a more precise measurement",
      "id": "the-same-mass-survives-a-more-precise-measurement",
      "paragraphs": [
        "Leucine and isoleucine are structural isomers: they contain the same atoms arranged differently. Each contributes the same exact residue mass, about 113.0841 daltons, when incorporated into a peptide. A residue is an amino acid as part of the chain.[1]",
        "Replacing leucine with isoleucine therefore preserves the peptide's elemental composition and exact mass. Greater resolving power can separate signals whose masses differ slightly. It cannot create a difference between two molecules with the same composition. This is why a very close match between measured and predicted mass can coexist with an unfinished sequence assignment.[1][2]"
      ]
    },
    {
      "title": "How a sequence can look complete before every residue is known",
      "id": "how-a-sequence-can-look-complete-before-every-residue-is-known",
      "paragraphs": [
        "Tandem mass spectrometry first selects a peptide ion, then breaks it into smaller charged fragments. An ion is a molecule or fragment carrying electrical charge; the instrument measures its mass-to-charge ratio, written m/z. Differences between neighboring fragment masses, after accounting for their charges, help reconstruct the amino-acid order. A series of fragments can therefore locate a 113-dalton residue without identifying which of the two amino acids occupies that position.[2]",
        "Database searches add another layer of information. They compare a spectrum with candidate sequences, while de novo sequencing infers a sequence from the fragments themselves. A database can supply a plausible leucine or isoleucine assignment even when the measured mass differences cannot distinguish it. The supporting sequence information and the direct chemical evidence answer different questions.[2]",
        "Notation can preserve that distinction. An unresolved position may be written as Leu/Ile, Xle or J, depending on the reporting convention. A letter in the sequence is not automatically evidence that the instrument distinguished its side-chain structure, the part of the amino acid that branches from the peptide backbone.[1][3]"
      ]
    },
    {
      "title": "One plant peptide needed another round of fragmentation",
      "id": "one-plant-peptide-needed-another-round-of-fragmentation",
      "paragraphs": [
        "The problem appeared during a 2019 study of Atr-AMP1, a peptide isolated from Amaranthus tricolor. After chemically opening its disulfide bond and modifying its cysteines, researchers obtained extensive backbone fragmentation and a close match between the measured and calculated masses. Yet their initial sequence still carried J at the second position.[3]",
        "They then used MS3, an additional fragmentation stage. The peptide first produced a small fragment called an immonium ion, associated with the leucine or isoleucine residue. Breaking that ion again produces different relative fragment abundances for the two structures. In the study's selected Atr-AMP1 form, the resulting pattern supported leucine at position two.[3]",
        "The selected form lacked hydroxyproline, a chemically modified proline residue present in another form of the peptide; the team checked that the underlying sequence was the same before using its stronger signal. That detail matters because an extra fragmentation stage needs enough ions to yield an interpretable spectrum. The assignment came from a targeted comparison of fragmentation behavior, rather than a more precise intact mass.[3]"
      ]
    },
    {
      "title": "Different methods expose different structural clues",
      "id": "different-methods-expose-different-structural-clues",
      "paragraphs": [
        "Side-chain fragmentation offers another route. In a 2016 study, researchers attached chemical groups to the amino end of model peptides, then used high-energy collisions to generate fragments sensitive to leucine and isoleucine structure. The choice of attached group changed how useful those fragments were. A group with high proton affinity, meaning a strong tendency to retain a proton, improved the relevant signals in their experiments.[5]",
        "The study paired that approach with lower-energy fragmentation to reinforce the backbone sequence. One measurement could supply information that another lacked. But success depended on the peptide, the chemical modification and the fragmentation method; a high-energy instrument setting alone is not a universal leucine/isoleucine identification rule.[5]",
        "Enzyme digestion can also contribute supporting evidence. Chymotrypsin can cleave at leucine, but failure to observe a cleavage does not prove isoleucine: a cleavage can be missed or its product can be too scarce to detect. The useful question is which structural possibilities the observed fragments eliminate, rather than whether a single expected peak is absent.[1]"
      ]
    },
    {
      "title": "Even ordinary collisions can help when the comparison is designed for it",
      "id": "even-ordinary-collisions-can-help-when-the-comparison-is-designed-for-it",
      "paragraphs": [
        "A 2024 study showed a more subtle way to localize the difference. Researchers compared model peptides that differed only by leucine or isoleucine at the fourth position, surrounded largely by glycine residues. They fragmented selected backbone fragments again and compared the relative intensities in the resulting MS3 spectra.[4]",
        "Those intensity patterns localized the differing residue even though the side chains were not expected to break through the usual collision pathway. Mixtures of the two peptide standards produced systematic changes in fragment ratios. This was a comparison against known reference peptides with statistical analysis, not a rule that any routine spectrum can reveal an unknown leucine/isoleucine position.[4]",
        "The method worked best when the earlier spectrum supplied strong fragments and useful coverage along the sequence. Sparse fragments or weak signals limited localization. It expands the available evidence while reinforcing the need to report how a particular residue was assigned.[4]",
        "For a sequence reader, the decisive distinction is between a mass match, a backbone assignment and a resolved leucine/isoleucine identity. A report that retains an ambiguous position can be more informative than one that silently converts a plausible sequence into a fully established structure. The assignment becomes stronger when the report identifies the experiment that distinguishes those alternatives.[1][2][4]"
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "id": 1,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7956910/",
      "title": "Orthogonal methods for antimicrobial peptide sequencing, Natural Product Reports (2021)",
      "doi": "10.1039/d0np00046a"
    },
    {
      "id": 2,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3277775/",
      "title": "De Novo Sequencing and Homology Searching, Molecular & Cellular Proteomics (2012)",
      "doi": "10.1074/mcp.O111.014902"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6874829/",
      "title": "PepSAVI-MS Reveals a Proline-rich Antimicrobial Peptide in Amaranthus tricolor (2019)",
      "doi": "10.1021/acs.jnatprod.9b00352"
    },
    {
      "id": 4,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10995990/",
      "title": "Localizing Isomerized Residue Sites in Peptides with Tandem Mass Spectrometry (2024)",
      "doi": "10.1021/jasms.3c00373"
    },
    {
      "id": 5,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5121197/",
      "title": "N-Terminal Derivatization for Discrimination between Leu and Ile Residues (2016)",
      "doi": "10.5702/massspectrometry.A0051"
    }
  ]
};
