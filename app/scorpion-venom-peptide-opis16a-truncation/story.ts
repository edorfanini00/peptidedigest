import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "scorpion-venom-peptide-opis16a-truncation",
  "title": "A scorpion peptide cut to 16 amino acids kills resistant bacteria. Cut to 8, it stops working",
  "description": "Researchers screened 116 antimicrobial peptides from African wildlife and shortened a scorpion venom peptide to 16 residues. New work explains how it breaks Gram-negative membranes and why the 8-residue version failed.",
  "date": "2026-10-30T11:45:00Z",
  "type": "Article",
  "category": "Research explained",
  "image": "scorpionOpis16a20261030",
  "vials": [
    "mots-c",
    "nad"
  ],
  "lead": "A 16-amino-acid fragment of a southern African scorpion's venom peptide kills multidrug-resistant Gram-negative bacteria in the laboratory, while an 8-amino-acid version of the same fragment does nothing. The difference comes down to the positive charge and hydrophobic surface a peptide needs before it can bind bacterial membranes and break them. In wax-moth larvae infected with a drug-resistant wound pathogen, the 16-residue peptide protected survival at rates close to polymyxin B. No human has been treated with it.",
  "notice": "IQON Labs supplies research use only materials for laboratory work. The peptide described here is an experimental molecule with no approved human use, and a research catalog is not a route to treatment.",
  "sections": [
    {
      "title": "The peptide and where it came from",
      "id": "where-it-came-from",
      "paragraphs": [
        "Opistoporin 1 was isolated more than two decades ago from the venom of Opistophthalmus carinatus, a southern African scorpion, and shown to act against bacteria and fungi [5]. It is 44 amino acids long, and the later work says its progress was held back by toxicity, length and the cost of synthesis [6].",
        "In 2024 a University of Pretoria group screened 116 antimicrobial peptides reported from African wildlife, including scorpions, frogs, ticks and primates, drawing on published studies and sequence-based prediction. They set aside peptides that had already been studied thoroughly and looked for short sequences that would be cheaper to manufacture. Forty-six candidates remained [2][4].",
        "Opis16a is the N-terminal 16 residues of opistoporin 1. The design kept every tryptophan in that stretch for hydrophobicity, four of the original lysines for positive charge, and an amidated C-terminus to hold net charge at +4 [6]."
      ]
    },
    {
      "title": "Why 16 residues work and 8 do not",
      "id": "why-length-matters",
      "paragraphs": [
        "A cationic antimicrobial peptide has to do two things at once. It has to stick to a bacterial surface that is more negatively charged than a human cell membrane, and then insert into the lipid bilayer it has reached. Positive charge drives the first step. Hydrophobic residues, arranged on one face of the structure, drive the second.",
        "Cut the same sequence back to eight residues and both jobs get harder: less charge to hold it at the membrane, less hydrophobic surface to push into it. In the 2024 screen, Opis8a showed no detectable activity against any of the 12 bacterial strains tested. Opis16a inhibited all 12 [2].",
        "\"Shortening a peptide too much can remove important features needed for it to interact with and damage bacterial membranes,\" Mandelie van der Walt, the University of Pretoria researcher who led the work, said [2]. Length on its own was never the advantage. What mattered was which residues survived the cut and how they sat relative to one another."
      ]
    },
    {
      "title": "How it kills: two membranes, in minutes",
      "id": "how-it-kills",
      "paragraphs": [
        "Gram-negative bacteria carry an outer membrane studded with lipopolysaccharide, then a thin cell wall, then an inner membrane. Opis16a binds lipopolysaccharide, destabilises the outer membrane, and then depolarises and permeabilises the inner membrane. In Escherichia coli and in a multidrug-resistant clinical isolate of Acinetobacter baumannii, bacterial killing followed within minutes [1].",
        "The paper reports a minimum inhibitory concentration of 8 micrograms per millilitre of Opis16a against a multidrug-resistant clinical isolate of Acinetobacter baumannii, the lowest concentration that stops visible growth, and activity against Escherichia coli [1]. The group’s earlier work tested the peptide against a wider panel that also covered Klebsiella pneumoniae and Enterobacter cloacae [3].",
        "Selectivity is the part that decides whether a membrane-active peptide can become a drug. Opis16a produced no detectable haemolysis of human red blood cells at the concentrations tested, with a half-maximal haemolytic concentration above 256 micrograms per millilitre, and low toxicity against HaCaT keratinocytes and HepG2 liver cells [3][6]. Venom peptides such as melittin are potent antibacterial molecules that fail on exactly this point."
      ]
    },
    {
      "title": "A membrane mechanism is not a free pass",
      "id": "resistance-and-toxicity",
      "paragraphs": [
        "Because the target is the membrane rather than one enzyme, bacteria have fewer obvious routes to resistance than they do against an antibiotic that inhibits a single protein. That is the case for the class. It is not immunity. Bacteria can alter the charge of their surface, change the lipid composition of their outer membrane, or deploy proteases and efflux systems. Van der Walt names the first two as plausible ways activity could erode [2].",
        "The other side of membrane activity is toxicity, because a molecule that disrupts lipid bilayers can disrupt the wrong ones. The selectivity measured here is a laboratory result against two cell lines and human red cells. It is a starting point for a safety programme, not a safety programme."
      ]
    },
    {
      "title": "What the wax-moth result does and does not show",
      "id": "insect-model",
      "paragraphs": [
        "Galleria mellonella larvae are a standard early infection model in antibacterial research: cheap, ethically simple, and able to show whether a compound reaches bacteria inside a living animal. At a dose of 10 milligrams per kilogram, 87% of infected larvae treated with Opis16a survived, against 83% treated with polymyxin B at the same dose [2].",
        "An insect model cannot show mammalian pharmacokinetics, tissue repair, immune interactions or human safety. Wax-moth larvae lack the adaptive immune system that shapes how a wound infection behaves in a patient, and the dose that protects a larva says nothing about a dose that would be safe in a person."
      ]
    },
    {
      "title": "The stability problem that decides the outcome",
      "id": "stability",
      "paragraphs": [
        "Opis16a kept its activity in 20% fetal calf serum, a rough proxy for the protein-rich fluid it would meet in a wound. It lost activity after treatment with trypsin, a protease that cleaves peptide bonds [1][2].",
        "Wound fluid contains proteases. A peptide those enzymes destroy within minutes needs a protected formulation, a modified backbone, or an exposure window short enough that degradation does not matter. Topical use is the route the authors propose, and the route where those constraints are survivable, because the drug does not have to survive a trip through the bloodstream."
      ]
    },
    {
      "title": "The chemistry that followed",
      "id": "next-round-of-chemistry",
      "paragraphs": [
        "A second paper took the same peptide and changed single residues: aspartate at position 5 to lysine, and lysine to arginine at the N-terminus, at the C-terminus, or throughout the sequence. Arginine carries a guanidinium group with more hydrogen-bond donors than lysine's amine. Molecular dynamics simulations showed the analogues forming more hydrogen bonds with model bacterial membranes and holding a more rigid shape once bound [3].",
        "Activity improved by up to 16-fold against the panel. One analogue, Opis16aCterKR, also improved selectivity for bacteria over human keratinocytes, and in a burn-wound model infected with Enterobacter cloacae a 5 milligram per kilogram topical dose protected larvae better than the parent peptide [3].",
        "The result is a design rule rather than a product. Adding positive charge at the right positions bought potency, and the positions mattered more than the total."
      ]
    },
    {
      "title": "What would have to be true before a clinic",
      "id": "path-to-clinic",
      "paragraphs": [
        "Mammalian infection models with proper pharmacokinetics, a toxicology package, a synthesis route that produces a pure peptide at a price a health system will pay, and then clinical trials. Peptide synthesis cost falls with length, which is why the 44-residue parent was deprioritised and why a 16-residue lead is interesting to a developer at all.",
        "None of that exists yet. The useful translation of this paper is narrower and more practical: when shortening an antimicrobial peptide, keep the cationic and hydrophobic residues that do the work, and test the shortened molecule instead of assuming the truncation preserved what the parent did.",
        "For readers who encounter venom-derived peptides in research catalogs, the boundary is worth stating plainly. A laboratory result in bacterial cultures and moth larvae describes a molecule under investigation, not a treatment, and research materials are not manufactured or released for human use."
      ]
    }
  ],
  "faqs": [
    {
      "q": "Is Opis16a available as a treatment?",
      "a": "No. It has been tested in bacterial culture and in wax-moth larvae. There are no human trials, no approved product and no established safe dose. Research peptides sold online are not this molecule and are not a therapy.",
      "refs": [1, 2]
    },
    {
      "q": "What does MIC mean?",
      "a": "The minimum inhibitory concentration is the lowest concentration of an antibacterial agent that stops visible growth of a bacterial strain under defined laboratory conditions. It is a laboratory measure of potency, not a dose, and it depends on the medium, the strain and the assay.",
      "refs": [1]
    },
    {
      "q": "Why do so many antimicrobial peptides fail in development?",
      "a": "Common reasons are toxicity to human cells, destruction by proteases in blood and wound fluid, binding to serum proteins that reduces free peptide, and manufacturing cost. Opis16a has laboratory data on the first and partial data on the second, and it lost activity when treated with trypsin.",
      "refs": [1, 2]
    },
    {
      "q": "Could bacteria become resistant to a membrane-disrupting peptide?",
      "a": "Yes. Membrane attack makes resistance less straightforward than against a single-enzyme antibiotic, but bacteria can change surface charge and outer-membrane lipid composition, and the authors name both as plausible resistance routes.",
      "refs": [1, 2]
    }
  ],
  "related": [
    {
      "url": "/peptide-cell-uptake-cytosolic-delivery-endosomal-escape",
      "title": "How peptides cross membranes, and why most do not"
    },
    {
      "url": "/endotoxin-vs-sterility-peptide-research",
      "title": "Endotoxin and sterility: two different peptide lab problems"
    },
    {
      "url": "/cyclic-peptides-stability-cell-permeability",
      "title": "Why cyclising a peptide changes its stability and permeability"
    },
    {
      "url": "/peptide-content-vs-purity-measurement",
      "title": "Peptide content and purity are not the same measurement"
    }
  ],
  "sources": [
    { id: 1, url: "https://www.nature.com/articles/s44259-026-00266-9", title: "van der Walt M, Oosthuizen CB, Mason AJ et al. Scorpion venom-derived Opis16a shows potent membrane-destabilising Gram-negative activity and promising in vivo topical efficacy. npj Antimicrobials and Resistance (2026)", doi: "10.1038/s44259-026-00266-9" },
    { id: 2, url: "https://www.nature.com/articles/d44148-026-00345-z", title: "Nature: Can a scorpion-venom peptide tackle drug-resistant wound infections? (October 29, 2026)", doi: "10.1038/d44148-026-00345-z" },
    { id: 3, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC12169475", title: "van der Walt M et al. Enhanced Gram-Negative Membrane Disruption and In Vivo Efficacy via Lysine-Arginine Enrichment of Opis16a. ACS Medicinal Chemistry Letters (2025)" },
    { id: 4, url: "https://doi.org/10.1021/acsomega.4c01277", title: "van der Walt M et al. QSAR Reveals Decreased Lipophilicity of Polar Residues Determines the Selectivity of Antimicrobial Peptide Activity. ACS Omega 9, 26030-26049 (2024)", doi: "10.1021/acsomega.4c01277" },
    { id: 5, url: "https://doi.org/10.1046/j.1432-1033.2002.03177.x", title: "Moerman L et al. Antibacterial and antifungal properties of alpha-helical, cationic peptides in the venom of scorpions from southern Africa. European Journal of Biochemistry 269, 4799-4810 (2002)", doi: "10.1046/j.1432-1033.2002.03177.x" },
    { id: 6, url: "https://www.nature.com/articles/s44259-026-00266-9_reference.pdf", title: "van der Walt M et al. accepted manuscript PDF of the npj Antimicrobials and Resistance paper, including the peptide design table and the limitations discussion (2026)", doi: "10.1038/s44259-026-00266-9" }
  ]
};
