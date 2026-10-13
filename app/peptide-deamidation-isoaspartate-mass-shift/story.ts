import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story = {
  "slug": "peptide-deamidation-isoaspartate-mass-shift",
  "title": "Peptide deamidation: how a small mass change can alter the backbone",
  "description": "Peptide deamidation adds about 0.984 daltons but can also form isoaspartate. Model experiments explain the chemistry and why mass alone can miss it.",
  "date": "2026-10-13T12:22:12+00:00",
  "type": "Article",
  "category": "Science",
  "image": "peptideDeamidationAnalysis",
  "vials": [
    "ss31",
    "ghk"
  ],
  "lead": "Peptide deamidation converts an amide group into a carboxylic acid, adding about 0.984 daltons, a unit of molecular mass. One reaction route can also rearrange the peptide backbone to form isoaspartate. The peptide can remain a connected chain while becoming a different chemical structure, and measuring its mass alone cannot identify every resulting form.[1][2]",
  "notice": "This explainer concerns laboratory chemistry and analytical evidence. The IQON Labs catalog placement is separate from the experiments.",
  "sections": [
    {
      "title": "What changes when a peptide deamidates?",
      "id": "deamidation-chemistry",
      "paragraphs": [
        "Asparagine, abbreviated Asn, is an amino acid whose side chain ends in an amide group. Deamidation replaces that group with a carboxylic acid, which carries a negative charge at physiological pH. Through direct hydrolysis, a reaction involving water, asparagine becomes aspartate while the backbone keeps its usual connection.[1]",
        "Another route changes the connection itself. A nitrogen atom in the next amino acid’s backbone bond reacts with the asparagine side chain, forming a temporary five-membered ring called succinimide. Water can then open the ring at either of two positions. One produces ordinary aspartate. The other produces isoaspartate, abbreviated isoAsp, with a different linkage that adds an existing side-chain carbon to the path of the backbone.[1]",
        "No extra amino acid has been inserted, and the reaction need not cut the peptide into shorter chains. Instead, the same atoms can be connected differently. Aspartate and isoaspartate are isomers: molecules with the same elemental composition but different arrangements. This is why a small mass increase can conceal a more substantial structural change.[1][2]",
        "The amino acid following asparagine and the chain’s local flexibility influence how easily the ring forms. A change at one site therefore cannot supply a single deamidation rate for an entire class of peptides. Glutamine side chains and an amide at the end of a peptide can also undergo deamidation, with different reaction behavior.[1]"
      ]
    },
    {
      "title": "Three different structures can arrive in one peak",
      "id": "same-mass-different-structures",
      "paragraphs": [
        "A study from ETH Zurich made the measurement problem concrete. Researchers synthesized a short model peptide and related variants, then compared them using liquid chromatography and tandem mass spectrometry. Chromatography separates sample components as they pass through a column; mass spectrometry detects their ions by mass relative to charge.[1]",
        "Three variants remained together under the chosen separation conditions. One had lost the amide at the peptide’s end, another had converted its asparagine side chain to ordinary aspartate, and the third contained isoaspartate. All three also shared the same precursor mass. A precursor ion is the intact charged molecule selected for further analysis. Looking only at that signal could not tell which variant contributed to the peak.[1]",
        "The team gained that information by breaking the selected ions into fragments. Electron transfer dissociation, a method that uses electron transfer to trigger fragmentation, produced signals that helped identify isoaspartate and the changed peptide end. Comparisons with synthesized reference compounds allowed the researchers to estimate the components within the overlapping peak.[1]",
        "The authors describe the method as semiquantitative: it estimates the mixture’s composition with limited precision. Its useful fragment signals were established for these particular sequences and would need evaluation for others. The result explains why an apparently simple trace can contain several molecular forms, rather than proving every routine instrument method will distinguish them.[1]"
      ]
    },
    {
      "title": "A seven-day experiment separated two chemical routes",
      "id": "seven-day-model-experiment",
      "paragraphs": [
        "The ETH study first appeared on December 29, 2025, in RSC Medicinal Chemistry’s 2026 volume. Its main stability comparison followed one seven-residue model peptide, containing both asparagine and an amidated end, for seven days at 40°C. Samples taken through that period were analyzed in triplicate. Those repeated instrument analyses describe the tested samples; they are not three independent peptide populations or a human study.[1]",
        "In water, the tested water-and-organic-solvent mixtures and dilute sodium chloride, the model peptide remained unchanged on the study’s measurements over those seven days. In phosphate-buffered saline at pH 7.4, the isoaspartate form accumulated. In the tested dilute aqueous acids, the main product instead came from direct hydrolysis of the terminal amide, with no detectable isoaspartate.[1]",
        "That last detail is easy to miss. The starting molecule had two potential amide sites, and the most prominent change in those acidic conditions occurred at its end. Calling every new signal “asparagine deamidation” would assign the wrong location. Experiments on variants containing only one of the two amide groups supported the greater susceptibility of the terminal amide under the tested acidic conditions.[1]",
        "Temperature and acid composition also affected the outcome, and some harsher conditions produced additional species the authors could not fully identify. These are observations about a defined model and measurement window. They explain why a buffer can change both the rate and the kind of product formed, but do not establish a storage lifetime for an unrelated peptide.[1]"
      ]
    },
    {
      "title": "Why aspartate can mean four different products",
      "id": "four-products",
      "paragraphs": [
        "The temporary ring can also change configuration before it opens. In a 2017 study, Dylan Riggs and colleagues examined four synthetic six-residue peptides that differed at the amino acid immediately after asparagine. Their analysis distinguished ordinary L-aspartate, D-aspartate, L-isoaspartate and D-isoaspartate.[2]",
        "L and D describe different spatial arrangements around the relevant carbon atom. These arrangements add another distinction to the ordinary-versus-isoaspartate linkage. Our [D and L amino acid explainer](/d-vs-l-amino-acids-peptide-signaling) develops that difference. A peptide containing a D residue is not necessarily the mirror image of the entire original peptide.[2]",
        "The researchers incubated the model peptides until most of the sample had deamidated, with timing dependent on the sequence and conditions. For the model with serine immediately after asparagine, one illustrated separation followed six months at 37°C in 50 mM Tris buffer at pH 7.8. It produced only two obvious chromatographic peaks, yet comparisons of their fragment patterns revealed four isomers. A peak count alone would have understated the structural variety.[2]",
        "Across the four sequences under the study’s reference conditions, L-isoaspartate was the predominant product. Bicarbonate buffer and higher temperature shifted the distribution toward more D forms. The observation adds a second question to “how much changed”: which structures now make up the changed material? The answer depended on the experimental conditions.[2]"
      ]
    },
    {
      "title": "A detected change can begin during sample preparation",
      "id": "sample-preparation-artifacts",
      "paragraphs": [
        "Deamidation can occur while a sample is being prepared for measurement. In a 2008 experiment, Xiaojuan Li and colleagues examined peptides released from three proteins: calmodulin, ribonuclease A and lysozyme. They used trypsin, an enzyme that cuts proteins into smaller peptides, and followed the digestion over time.[3]",
        "The team performed parallel experiments in ordinary water and water containing the heavier oxygen isotope oxygen-18. A deamidation formed during digestion could incorporate that oxygen, producing an approximately three-dalton change at the affected site. A preexisting deamidation had the usual approximately one-dalton change. Other oxygen labels could also enter the peptide end, so the researchers had to separate those contributions when interpreting the mass patterns.[3]",
        "For the monitored calmodulin peptide, digestion at 37°C in 0.1 M ammonium bicarbonate buffer at pH 8.3 showed no additional detectable deamidation at about four hours, whereas a 24-hour digestion revealed a change introduced during preparation. The investigators also followed susceptible peptides from ribonuclease A and lysozyme, whose patterns developed differently. The work demonstrates a way to distinguish a preexisting modification from an analytical artifact, not a universally safe digestion time.[3]",
        "This is a different problem from losing material to a container wall or forming aggregates. Our explainers on [peptide adsorption](/peptide-adsorption-glass-plastic-lab-results) and [aggregation measurements](/peptide-aggregation-assay-measurement-pitfalls) cover those processes. Here, preparation can change the chemical identity of the molecules that reach the detector.[3]"
      ]
    },
    {
      "title": "What the extra measurements reveal",
      "id": "molecular-identity-and-function",
      "paragraphs": [
        "The ETH team reported no conflicts of interest and acknowledged ETH Zurich’s support for open-access publication. The Riggs study acknowledged NIH funding and declared no competing financial interest. The isotope-labeling study acknowledged NIH support alongside MSD SCIEX and the American Chemical Society Petroleum Research Fund. These were analytical investigations, not trials of a marketed peptide’s clinical effects.[1][2][3]",
        "Deamidation adds about 0.984 daltons, but ordinary aspartate and isoaspartate have the same mass. Fragmentation and reference compounds can reveal the altered linkage; isotope labeling can help determine when the change arose. Together, these measurements give a more precise account of molecular identity than a mass increase alone.[1][2][3]",
        "That precision makes a functional experiment interpretable. Once the original peptide and its changed form have been identified, a relevant activity assay can test whether they behave differently. The chemistry specifies what to compare. It does not predetermine whether a particular peptide will lose, retain or change its activity.[1][2]"
      ]
    }
  ],
  "faqs": [
    {
      "q": "Can isoaspartate form without a new one-dalton mass increase?",
      "a": "Yes. An existing aspartate residue can also pass through the succinimide pathway and become isoaspartate. That is isomerization: it changes the arrangement without changing the elemental composition. The approximately 0.984-dalton increase describes deamidation of asparagine, not every route to isoaspartate.",
      "refs": [
        1,
        2
      ]
    },
    {
      "q": "Does an amidated peptide end mean the same thing as an asparagine side chain?",
      "a": "No. An amidated end is a modification at the peptide’s C-terminus, while asparagine carries an amide on its side chain. Either site can undergo direct hydrolysis. The ETH model contained both sites, and its reference variants helped the researchers distinguish which one had changed.",
      "refs": [
        1
      ]
    }
  ],
  "sources": [
    {
      "id": 1,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12801052",
      "title": "Erckes et al.: Revealing deamidation and isoaspartate formation during peptide analysis, purification and storage",
      "doi": "10.1039/d5md01025j"
    },
    {
      "id": 2,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5696650",
      "title": "Riggs et al.: Sequence and solution effects on D isomer production during deamidation",
      "doi": "10.1021/acschembio.7b00686"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3105245",
      "title": "Li et al.: Use of oxygen-18 labels to monitor deamidation during protein and peptide sample processing",
      "doi": "10.1016/j.jasms.2008.02.011"
    }
  ],
  "related": [
    {
      "url": "/d-vs-l-amino-acids-peptide-signaling",
      "title": "D and L amino acids: why configuration matters"
    },
    {
      "url": "/peptide-aggregation-assay-measurement-pitfalls",
      "title": "What peptide aggregation measurements can miss"
    },
    {
      "url": "/peptide-freeze-thaw-stability-lab-evidence",
      "title": "What experiments show about freezing and thawing peptides"
    }
  ]
} satisfies NewsroomStory;
