import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story = {
  "slug": "peptide-cell-uptake-cytosolic-delivery-endosomal-escape",
  "title": "Peptide cell uptake is not cytosolic delivery: why glowing cells can mislead",
  "description": "A fluorescent cell can hold peptides in endosomes without delivering them to intracellular targets. What CAPA and SLEEQ experiments actually measure.",
  "type": "Article",
  "category": "Research explained",
  "image": "cytosolicDelivery20261022",
  "vials": [
    "ghk",
    "ss31"
  ],
  "lead": "A cell can glow with a labeled peptide while little of that peptide reaches the cytosol, the fluid compartment where many intracellular targets sit. Material may cling to the surface or collect inside membrane-bound endosomes. Endosomal uptake can therefore increase a cell’s signal without delivering intact cargo to a cytosolic target.[1][2]",
  "notice": "The laboratory methods discussed here do not establish clinical benefits for IQON Labs’ research use only products.",
  "sections": [
    {
      "title": "Inside the cell’s outline can still mean inside a vesicle",
      "id": "uptake-versus-delivery",
      "paragraphs": [
        "Cells can take up material by wrapping it in a pocket of membrane. That pocket becomes an endosome. Its contents are inside the cell’s outer boundary, yet a membrane still separates them from the cytosol. Reaching a cytosolic target then requires another crossing, called endosomal escape.[3]",
        "Bright dots in a microscope image can reveal material concentrated in those compartments. A much weaker, diffuse cytosolic signal may be harder to see beside them. Imaging is useful for locating material, but brightness across the whole cell cannot by itself tell a researcher how much intact cargo reached the cytosol.[2]",
        "The measurement problem has a long history. In a 2003 study of cationic cell-penetrating peptides, Jean-Philippe Richard and colleagues found that fixing cells could produce an artificial uptake pattern. Live, unfixed cells showed a vesicular distribution. They also found that peptide stuck to the cell membrane could distort flow-cytometry measurements of uptake.[4]",
        "Those observations make “the cells took it up” an incomplete explanation when the intended target lies beyond the vesicle membrane."
      ]
    },
    {
      "title": "Put the detector in the compartment that matters",
      "id": "capa-cytosolic-detector",
      "paragraphs": [
        "The chloroalkane penetration assay, or CAPA, gives a more specific answer. In Leila Peraro and colleagues’ 2018 study, engineered HeLa cells carried a detector protein called HaloTag on the outer mitochondrial membrane, facing the cytosol. Cargo trapped inside an endosome could not reach it.[1]",
        "The test molecule carried a small chemical tag that reacted with HaloTag if it reached that location. A fluorescent dye then labeled the detector sites left unoccupied. More cytosolic access by the test molecule meant less dye signal afterward. In this experiment, a dimmer readout was evidence of greater access.",
        "That reversal is a useful lesson when reading an assay figure: the meaning of light depends on how the experiment produces it. CAPA measures access to its reporter, rather than simply collecting every fluorescent signal associated with a cell. Its concentration-response measurement also is not the percentage of the applied dose that entered the cytosol.[1][3]",
        "The distinction extends the question in our article on [cyclic peptides and cell permeability](/cyclic-peptides-stability-cell-permeability). Molecular structure can influence entry, but a delivery claim still needs a measurement that distinguishes the relevant compartment."
      ]
    },
    {
      "title": "More cargo can arrive without more efficient escape",
      "id": "sleeq-denominator",
      "paragraphs": [
        "Serena Teo and colleagues approached the problem with two parts of a light-producing enzyme. One part was retained in the cytosol; the other traveled with a model green fluorescent protein cargo. When the parts met, they produced a measurable signal. The assay, called SLEEQ, separated cytosolic arrival from total association with the cells.[2]",
        "The 2021 study tested eight peptide fusions in engineered HEK293 and HeLa cells. Some positively charged fusions delivered more model protein to the cytosol than the protein alone. But none improved the ratio of cytosolic signal to total cellular association. That denominator included material on the surface as well as material inside the cells.",
        "Both findings can be true at once. More cargo can reach the cytosol because much more cargo associates with the cell, even when the fraction reaching the cytosol does not improve. Calling the first result “better delivery” can be reasonable; calling it “better escape efficiency” requires the second measurement.",
        "The result concerns the tested peptide-protein fusions and assay conditions. It does not establish that every cell-penetrating peptide fails to promote escape, or predict how a different cargo would behave.[2]"
      ]
    },
    {
      "title": "The tag must still represent the cargo",
      "id": "tags-and-intact-cargo",
      "paragraphs": [
        "A compartment-specific detector solves one problem but introduces controls of its own. Attaching a tag can change a molecule’s physical properties and its behavior in cells. In their detailed CAPA methods chapter, Kirsten Deprey and Joshua Kritzer describe cases where tagging changed biological activity, and recommend comparisons with untagged material.[3]",
        "Degradation creates another possibility: a detached tag or tagged fragment might reach the reporter while the intact molecule does not. The authors discuss stability measurements and independent activity assays as ways to examine that concern. A signal is stronger evidence when the experiment also establishes what molecular species generated it.",
        "A delivery figure becomes easier to interpret once those controls establish whether its signal still represents the intended molecule."
      ]
    },
    {
      "title": "Arrival is one step toward target activity",
      "id": "target-activity",
      "paragraphs": [
        "Cytosolic access and biological activity remain separate measurements. The CAPA investigators used localization data alongside cellular activity experiments to examine why changes to peptide sequences altered their effects. Access helped interpret the result; it did not replace the functional experiment.[1]",
        "Our guide to [peptide potency and binding affinity](/ic50-ec50-kd-peptide-potency-binding-affinity) takes up that next question. A molecule can bind a purified target yet behave differently in a cell. A delivery assay helps identify one possible reason, while a target or functional assay tests what happens after arrival.",
        "The next time a figure shows glowing cells, start with the location of the signal. Then look for evidence that intact cargo reached the intended compartment and acted there. Those measurements turn an attractive image into an explanation of what the peptide actually did."
      ]
    }
  ],
  "faqs": [],
  "related": [
    {
      "url": "/cyclic-peptides-stability-cell-permeability",
      "title": "Cyclic peptides: why a ring can improve stability but not guarantee cell entry"
    },
    {
      "url": "/ic50-ec50-kd-peptide-potency-binding-affinity",
      "title": "IC50 vs EC50: why peptide potency is not binding affinity"
    }
  ],
  "date": "2026-10-22T12:26:11Z",
  "sources": [
    {
      "id": 1,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6205923",
      "title": "Peraro et al. Cell Penetration Profiling Using the Chloroalkane Penetration Assay (2018)",
      "doi": "10.1021/jacs.8b06144"
    },
    {
      "id": 2,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8211857",
      "title": "Teo et al. Unravelling cytosolic delivery of cell penetrating peptides with a quantitative endosomal escape assay (2021)",
      "doi": "10.1038/s41467-021-23997-x"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7872221",
      "title": "Deprey and Kritzer. Quantitative measurement of cytosolic penetration using the chloroalkane penetration assay (2020)",
      "doi": "10.1016/bs.mie.2020.03.003"
    },
    {
      "id": 4,
      "url": "https://pubmed.ncbi.nlm.nih.gov/12411431",
      "title": "Richard et al. Cell-penetrating peptides: a reevaluation of the mechanism of cellular uptake (2003)",
      "doi": "10.1074/jbc.M209548200"
    }
  ]
} satisfies NewsroomStory;
