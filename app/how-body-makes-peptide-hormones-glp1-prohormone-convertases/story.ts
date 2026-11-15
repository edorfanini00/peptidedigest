import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "how-body-makes-peptide-hormones-glp1-prohormone-convertases",
  "title": "How the body makes peptide hormones: the cuts that release GLP-1",
  "description": "The body cuts GLP-1 from proglucagon using processing enzymes. How PC1/3 and PC2 shape hormone production, and how that logic led to the preclinical BRP discovery.",
  "date": "2026-11-15T07:50:00-05:00",
  "type": "Article",
  "category": "Peptide biology",
  "image": "peptideHormones20261115",
  "vials": [
    "mots-c",
    "semax"
  ],
  "notice": "This explainer covers hormone biology and preclinical research, not supplement or treatment advice. IQON Labs reader offers are separate from the scientific work discussed here.",
  "faqs": [],
  "related": [
    {
      "url": "/what-are-peptides",
      "title": "What peptides are: amino acids, bonds and biological signals"
    }
  ],
  "lead": "The body makes GLP-1 by cutting it from a larger protein called proglucagon. In intestinal L cells, an enzyme called prohormone convertase 1/3 helps perform that processing. Different cuts in the pancreas favor glucagon, showing how the same starting protein can produce different hormonal messages. Researchers have used this cutting logic to search for other active peptides, including the experimental appetite-regulating candidate BRP.[1][3]",
  "sections": [
    {
      "title": "A precursor contains more than one possible message",
      "id": "precursors-and-processing-enzymes",
      "paragraphs": [
        "A peptide hormone need not be made as a finished, free-standing molecule. Many begin within a larger precursor protein, or prohormone. After the cell produces that chain, enzymes cut particular sites to release smaller fragments. Some of those fragments become biological signals.[1][3]",
        "Proglucagon is a useful example because its sequence contains the material for several related peptides. GLP-1 and glucagon are different products of that precursor, alongside GLP-2 and other fragments. The names describe a family relationship, not interchangeable molecules.[1]",
        "A prohormone convertase is part of the processing machinery, not the hormone it releases. PC1/3 is the shortened name of one such enzyme; the slash does not mean a ratio. PC2 is another. Which enzymes a cell expresses helps determine which pieces of a precursor emerge.[1][3]"
      ]
    },
    {
      "title": "Same precursor, different hormones",
      "id": "same-precursor-different-hormones",
      "paragraphs": [
        "In intestinal L cells, PC1/3 processes proglucagon into GLP-1, GLP-2 and other peptides. Pancreatic alpha cells mainly use PC2, producing glucagon along with a different set of fragments. Some brainstem neurons also use PC1/3 to process proglucagon, so GLP-1 production is not confined to the gut.[1]",
        "The distinction changes the biological message. GLP-1 helps promote insulin secretion, while glucagon can raise circulating glucose. Sharing a precursor does not require two finished hormones to have the same effect. Their different sequences interact with different receptors, the proteins through which cells detect hormonal signals.[1]",
        "The tissue rule is not absolute. A 2025 study used a mass-spectrometry assay to detect biologically active GLP-1 in both mouse and isolated human pancreatic islets. That finding adds an important qualification to the familiar gut-GLP-1, pancreas-glucagon diagram: cells can produce more than the dominant product usually assigned to their tissue.[2]"
      ]
    },
    {
      "title": "Cutting patterns become a search tool",
      "id": "peptide-predictor-search",
      "paragraphs": [
        "The same processing logic suggested a way to look for peptides that scientists had not characterized. In work published in Nature on March 5, 2025, Stanford researchers built Peptide Predictor to scan secreted human protein sequences for patterns associated with convertase cutting sites.[3]",
        "The core search used sequence-matching rules. Certain pairs of amino acids, including lysine and arginine, can mark candidate cleavage sites. The program looked for suitable patterns within a reviewed set of secreted proteins, then applied filters to identify possible precursor proteins and their fragments. Other computational tools helped prioritize potential activity.[3]",
        "Starting from 2,082 secreted proteins, the analysis identified 373 candidate precursors and 2,683 predicted peptide fragments. Those are predictions, not a census of newly proven hormones. A sequence can look like a useful fragment without showing that a cell makes it, releases it or responds to it.[3]",
        "Those predictions narrowed the experimental search. Researchers could select plausible fragments for synthesis and ask which ones changed a cellular readout.[3]"
      ]
    },
    {
      "title": "How BRP moved from prediction to experiment",
      "id": "brp-from-prediction-to-experiment",
      "paragraphs": [
        "The team made a synthetic library of 100 selected peptides and screened them in a neuronal cell line and an insulin-producing cell line. The readout was expression of Fos, a gene whose response can indicate cellular activation. It was an activity screen, not a direct measurement of appetite or a clinical comparison with semaglutide.[3]",
        "BRP, short for BRINP2-related peptide, stood out. It is a 12-amino-acid fragment of BRINP2, a different precursor from proglucagon. The experiments used synthesized peptides with a terminal chemical modification called amidation. The discovery therefore combined a naturally encoded sequence with laboratory preparation and testing.[3]",
        "The researchers also detected BRP in human cerebrospinal fluid, the fluid around the brain and spinal cord. Finding a peptide in a human sample helps support its biological existence. It does not show that giving it to people produces weight loss or is safe; the treatment experiments in this report were preclinical.[3]"
      ]
    },
    {
      "title": "What the animal experiments found",
      "id": "brp-preclinical-findings",
      "paragraphs": [
        "BRP reduced food intake in mouse experiments and in short-term feeding experiments in minipigs. In male mice with diet-induced obesity, treatment also reduced body weight and fat. The minipig result concerned feeding, not demonstrated sustained weight loss in that species.[3]",
        "The appetite effect persisted in mice when GLP-1 receptor signaling was blocked. That supports a different route of action from GLP-1, although the study did not identify BRP's own receptor. Sharing an appetite-related outcome does not make BRP a natural version of an existing GLP-1 medicine.[3]",
        "Animal behavioral tests also explored aversion and nausea-related responses. These are useful early screens, but they cannot settle human tolerability. The study offers a candidate for further investigation, not evidence of a side-effect-free treatment or a safer replacement for semaglutide.[3]"
      ]
    },
    {
      "title": "What a promising discovery still needs",
      "id": "from-discovery-to-understanding",
      "paragraphs": [
        "BRP's normal physiological role remains unresolved, including how its production changes with nutritional state. Identifying the receptor and the cells that release the peptide would help connect its observed pharmacological effects with the body's own signaling system.[3]",
        "The paper discloses that Katrin J. Svensson and Laetitia Coassolo are named inventors on patents concerning BRP peptides for metabolic disorders. Svensson is also a co-founder of Merrifield Therapeutics. The work received public and philanthropic support, including NIH grants and Stanford's SPARK program.[3]",
        "Proglucagon makes the broader lesson concrete: knowing a precursor's sequence is only the start of understanding its messages. The enzymes present in a tissue help determine which fragments are produced, and experiments reveal what those fragments do. BRP shows how those two lines of work can meet, turning a prediction about where a protein is cut into a testable biological lead.[1][3]"
      ]
    }
  ],
  "sources": [
    {
      "id": 1,
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC8171296/fullTextXML",
      "title": "Lafferty and colleagues, Proglucagon-Derived Peptides as Therapeutics (2021)"
    },
    {
      "id": 2,
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12448133/fullTextXML",
      "title": "Cui and colleagues, alpha cells use both PC1/3 and PC2 to process proglucagon peptides (2025)"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12043402",
      "title": "Coassolo and colleagues, Prohormone cleavage prediction uncovers a non-incretin anti-obesity peptide, Nature (2025)"
    }
  ]
};
