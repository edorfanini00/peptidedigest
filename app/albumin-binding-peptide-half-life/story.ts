import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "albumin-binding-peptide-half-life",
  "title": "How albumin binding extends peptide half-life, and what it can cost",
  "description": "Albumin can extend peptide circulation through binding and cellular recycling. Three studies explain the measurements, mechanisms and tradeoffs in target activity.",
  "date": "2026-10-19T12:33:00+00:00",
  "type": "Article",
  "category": "Science",
  "image": "albuminBindingDialysis",
  "vials": [
    "glutathione",
    "epithalon"
  ],
  "lead": "Albumin binding can extend a peptide’s half-life by associating it with a large blood protein, reducing rapid kidney clearance and sometimes protecting it from breakdown. Albumin also has a cellular recycling route that can prolong the circulation of peptides attached to it. But staying in blood longer and reaching a biological target are different properties. Experiments with albumin-binding tags show why improving one can weaken the other. [3] [12] [15]",
  "notice": "Science reporting by The Peptide Digest. Laboratory and animal findings below do not establish benefits of research-use-only products in people.",
  "sections": [
    {
      "title": "Two ways a peptide can disappear",
      "id": "clearance",
      "paragraphs": [
        "A peptide can be cut apart by enzymes, or it can leave the circulation through the kidneys while still chemically intact. Those processes create different design problems. Making a peptide resist enzymatic breakdown does not automatically make it too large to filter out of the blood. Albumin offers a way to change that second problem: it is a large circulating protein that naturally carries molecules including fatty acids. [3] [12] [15]",
        "The attachment can take different forms. Liraglutide carries a fatty-acid side chain that associates reversibly with albumin. An albumin fusion instead joins a peptide to the albumin protein itself. In the first case, binding and release are part of the relationship; in the second, the researchers have built a larger molecule. Both can prolong circulation, but they should not be treated as interchangeable designs. [3] [12]"
      ]
    },
    {
      "title": "Before trusting a binding number, check the membrane",
      "id": "measuring-binding",
      "paragraphs": [
        "To estimate protein binding, researchers often use equilibrium dialysis. A membrane separates a protein-containing compartment from a buffer compartment. Small, unbound molecules can cross; the large proteins are retained. Once the distribution settles, comparing the compartments helps estimate how much of the test molecule remains associated with protein. [3]",
        "For liraglutide, the measuring device became part of the problem. A 2013 study reported that conventional filtration and dialysis were hindered because the lipid-bearing peptide stuck to the membrane. A molecule missing from the buffer could have attached to blood protein, or it could have been lost onto the apparatus. Those are very different explanations for the same apparently empty compartment. [3]",
        "The investigators developed a modified, stepwise dialysis method to address that adsorption. Their experiments used plasma from four healthy human donors, with repeated laboratory measurements. They found extensive plasma-protein binding, including binding in separate experiments with albumin and with another protein, alpha-1-acid glycoprotein. Those experiments showed that liraglutide can associate with more than one plasma protein. [3]",
        "This is why a binding percentage needs a method attached to it. The membrane, sample composition and recovery of the peptide influence what the experiment can tell us. The same underlying problem appears in [peptide losses to glass and plastic](/peptide-adsorption-glass-plastic-lab-results): a low measured concentration may reflect where the molecule went inside the experiment. [3]"
      ]
    },
    {
      "title": "Albumin survives through cellular recycling",
      "id": "recycling",
      "paragraphs": [
        "Size explains only part of albumin’s persistence. After cells take it up, albumin can bind the neonatal Fc receptor, abbreviated FcRn, in acidic intracellular compartments called endosomes. This interaction helps divert albumin away from enzymes that would break it down inside the cell. When the protein returns to the near-neutral environment of the blood, the interaction weakens and albumin is released. [12]",
        "There are two binding relationships to keep separate. A peptide’s association with albumin affects how it travels in blood. Albumin’s association with FcRn affects whether a cell recycles the carrier or destroys it. A design that improves one relationship may still need to preserve the other. [3] [12]"
      ]
    },
    {
      "title": "Changing the carrier changed circulation in mice",
      "id": "engineered-albumin",
      "paragraphs": [
        "A 2025 study tested this second relationship by engineering human albumin. The researchers made a variant called QMP and fused modified sequences of glucagon-like peptide 1 (GLP-1) to it. They compared that construct with a GLP-1 fusion using ordinary, or wild-type, albumin. The engineered carrier bound FcRn more strongly under acidic conditions and showed enhanced recycling in the cellular experiments. [12]",
        "In mice engineered to express human FcRn, the QMP fusion had a reported terminal half-life of 2.7 days, compared with 1.3 days for the wild-type fusion. That comparison used five mice per variant, intravenous exposure and sampling over 12 days. The figure presents one representative experiment from two runs. It is a fitted terminal-phase estimate in that mouse model, not a human half-life or a treatment interval. [12]",
        "Terminal half-life describes how long concentration takes to fall by half during the later elimination phase. The receptor model matters because human albumin interacts poorly with mouse FcRn. Giving the mice human FcRn allowed the researchers to examine the carrier and its recycling receptor together. The result connects a molecular change in albumin to longer circulation of this particular GLP-1 fusion. [12]"
      ]
    },
    {
      "title": "The target still has to be accessible",
      "id": "target-activity",
      "paragraphs": [
        "A separate 2017 study exposes the tradeoff at the peptide end. Researchers built a tag combining a short peptide with a fatty acid and a fluorescent label, then attached it to two enzyme-inhibiting peptides: UK18, which targets urokinase, and PK128, which targets plasma kallikrein. The tag promoted albumin binding in both designs, but the effects on enzyme inhibition differed. [15]",
        "Tagging UK18 largely preserved its inhibitory potency in the assay without albumin. Tagging PK128 weakened inhibition even before albumin was added, and albumin weakened it further. The authors proposed that the tag and the bulky carrier could physically obstruct the peptide’s interaction with its target. The proposed obstruction was not directly imaged in the study. [15]",
        "The comparison is useful precisely because the two peptides did not behave alike. It argues against a universal rule that stronger binding is always better, or that albumin necessarily blocks every attached peptide. As with [cyclic peptide stability and permeability](/cyclic-peptides-stability-cell-permeability), a structural change can improve one measured property while leaving another unchanged or making it worse. [15]"
      ]
    },
    {
      "title": "What a longer half-life needs to earn",
      "id": "payoff",
      "paragraphs": [
        "The liraglutide binding paper’s authors were Novo Nordisk employees. Two authors of the engineered-albumin paper disclosed patents on albumin variants. The tagging study disclosed that author Christian Heinis was a founder of Bicycle Therapeutics. [3] [12] [15]",
        "A convincing long-circulating peptide needs evidence that the molecule remains present, that the relevant structure remains intact, and that it can still act on its target. Dialysis addresses binding; concentration-time measurements address persistence; functional assays address activity. None can substitute for all the others. The value of albumin is therefore not captured by the longest half-life on a chart. It lies in keeping enough functional peptide available to its target for longer, a balance that must be measured for each design. [3] [12] [15]"
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3838623/",
      "title": "Plum et al. In vitro protein binding of liraglutide in human plasma determined by reiterated stepwise equilibrium dialysis",
      "doi": "10.1002/jps.23648"
    },
    {
      "id": 12,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12106674/",
      "title": "Engineered albumin with enhanced FcRn binding, recycling and GLP-1 fusion pharmacokinetics (2025)",
      "doi": "10.1038/s42003-025-08249-8"
    },
    {
      "id": 15,
      "url": "https://www.nature.com/articles/ncomms16092",
      "title": "Zorzi et al. Acylated heptapeptide binds albumin with high affinity and application as tag furnishes long-acting peptides",
      "doi": "10.1038/ncomms16092"
    }
  ],
  "related": [
    {
      "url": "/peptide-adsorption-glass-plastic-lab-results",
      "title": "Why peptides disappear onto laboratory surfaces"
    },
    {
      "url": "/cyclic-peptides-stability-cell-permeability",
      "title": "Cyclic peptides: stability and cell permeability are separate properties"
    }
  ]
};
