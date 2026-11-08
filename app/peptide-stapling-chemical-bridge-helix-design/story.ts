import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "peptide-stapling-chemical-bridge-helix-design",
  "title": "Peptide stapling: how a chemical bridge helps hold a helix",
  "description": "Peptide stapling joins selected positions with a chemical bridge. Learn how placement, linker length and the target-facing surface shape a useful peptide helix.",
  "date": "2026-11-08T14:05:22Z",
  "type": "Article",
  "category": "Peptide chemistry",
  "image": "peptideStapling20261108",
  "vials": [
    "semax",
    "nad"
  ],
  "lead": "Peptide stapling joins selected positions in an amino acid chain with a chemical bridge. In a helical peptide, that bridge can favor the coiled shape used to recognize a protein, provided it fits the shape rather than pulling it out of alignment. Choosing where the bridge goes is as important as adding it.[5][6]",
  "notice": "This explainer covers molecular design and laboratory studies. IQON Labs reader offers are separate from the experimental molecules discussed here.",
  "sections": [
    {
      "id": "helix-positions",
      "title": "What the staple connects",
      "paragraphs": [
        "An alpha helix is a coiled arrangement of the peptide backbone. Its amino acid side chains project outward, creating a surface that can contact another molecule. A short segment removed from a larger protein may no longer hold that arrangement reliably on its own.[5]",
        "A common staple connects two side chains on the same face of the helix. Researchers often describe the positions as i and i+4, or i and i+7. The letter i means the starting residue; the second number counts forward along the chain. For example, i and i+4 could mean residues 2 and 6, with three residues between them.[5]",
        "Those positions bring the attachment groups near one another in a helix. The bridge restricts how far they can separate, favoring some conformations over others. Its length and the geometry of its attachment points must suit the intended structure.[5][6]",
        "The usual chain ends can remain open even though the bridge creates a ring through part of the molecule. Stapled peptides are therefore part of the wider [cyclic-peptide family](/cyclic-peptides-stability-cell-permeability), but the word stapling draws attention to a particular structural constraint.[5]"
      ]
    },
    {
      "id": "bridge-chemistry",
      "title": "The bridge is a chemical connection",
      "paragraphs": [
        "In hydrocarbon stapling, selected amino acids carry side chains that can be chemically joined into a carbon-based bridge. A reaction called ring-closing metathesis forms that connection. The staple becomes part of the molecule, rather than a separate object holding it from outside.[5]",
        "Hydrocarbon bridges are one option. Other strategies use bonds such as lactams, which contain an amide connection, or link two positions through an additional molecular linker. The chemistry determines how far the bridge can reach and how readily it bends. It also changes the molecule's exposed surface.[5]",
        "This is an extra design decision alongside choosing the amino acid sequence. [Solid phase peptide synthesis](/solid-phase-peptide-synthesis-chain-building) builds the chain; stapling adds a connection between selected positions. A successfully made bridge still has to be tested for its effect on the resulting shape.[5]"
      ]
    },
    {
      "id": "target-face",
      "title": "Preserving the surface that recognizes a target",
      "paragraphs": [
        "Many proteins recognize a helical segment on another protein. A peptide designed to mimic that segment needs to display the relevant side groups in a compatible arrangement. Stabilizing the helix can reduce the rearrangement needed before binding, but the intended contact surface must remain available.[5]",
        "That is why researchers map the binding interface before choosing staple positions when structural information is available. Replacing an amino acid that makes an important contact, or placing a bulky bridge across that contact, can work against the design even if the peptide becomes more helical.[5]",
        "The bridge can also contribute to recognition. Published structures include examples in which the staple itself touches the target protein. It is therefore part of the binding surface to examine, not merely a passive support behind it.[5]"
      ]
    },
    {
      "id": "folded-and-unfolded",
      "title": "A staple changes the competition between shapes",
      "paragraphs": [
        "A peptide in solution samples a collection of conformations. A favorable staple can reduce the range available when the molecule is unfolded, making the folded arrangement comparatively easier to maintain. Researchers call this an unfolded-state constraint.[6]",
        "There is a second requirement: the bridge must fit the folded molecule. If it cannot span the chosen attachment points without distorting them, it can introduce strain into the structure the researchers wanted to preserve. This is folded-state compatibility.[6]",
        "These two effects explain why making a molecule more constrained is not a complete design goal. The useful question is which shapes the new connection removes from reach and whether it leaves the desired shape comfortable.[6]"
      ]
    },
    {
      "id": "coiled-coil-model",
      "title": "A controlled experiment makes placement matter",
      "paragraphs": [
        "A 2026 study by Samantha Hatfield and colleagues at Brigham Young University tested those ideas in a coiled-coil model: two helical chains that associate with each other. The chains already had a disulfide tether near one end. The new staples connected positions across the two helices, unlike the common staple placed within a single helix.[6]",
        "The researchers compared stapled variants with their corresponding unstapled versions using temperature-dependent circular dichroism, a spectroscopic method sensitive to protein structure. The unfolding experiments used a phosphate-buffered solution containing a chemical denaturant. Molecular simulations supplied a separate view of how the chains moved.[6]",
        "Staples farther from the existing disulfide tether generally gave more stabilization in this model. The simulations showed why: a bridge near the other end prevented parts of the unfolded chains from separating as freely. Adding a bridge near the existing tether constrained less additional movement.[6]",
        "The team also tested sites where the linker was too short for the folded spacing. Some of those staples destabilized the structure, and simulations showed the helices being compressed into a distorted arrangement. Matching the bridge to the folded geometry mattered as much as restricting the unfolded chains.[6]",
        "The simulations captured important trends but did not reproduce all measured differences between sites. The detailed rules come from this particular model and linker family. Their broader value is the pair of questions they make testable: does a bridge fit the folded structure, and how much extra movement does it prevent?[6]"
      ]
    },
    {
      "id": "separate-measurements",
      "title": "Structure, binding and cell access need different measurements",
      "paragraphs": [
        "A stable helix gives a researcher a better-defined molecular shape to work with. Binding experiments then test how well it recognizes the intended protein. Neither measurement alone shows that the molecule reaches that protein inside an intact cell.[5][7]",
        "A separate Nature Communications study published in 2024 examined a library of stapled peptides aimed at two regulatory proteins, Mdm2 and MdmX. The researchers measured target binding and cell activity separately. They also checked permeability and membrane disruption. Their results showed why optimizing one property, such as affinity for oily environments, can create another problem, such as poor solubility.[7]",
        "The study also used a method that detects access to the cell interior without requiring binding to Mdm2. That helped separate delivery from recognition. Membrane-leakage tests and control cells provided additional checks against interpreting nonspecific damage as the desired biological action.[7]",
        "The 2026 structural study declared no conflicts of interest and reported NIH support. The biological study included researchers affiliated with MSD and Merck and declared no competing interests.[6][7]"
      ]
    },
    {
      "id": "design-payoff",
      "title": "How to judge what a staple has achieved",
      "paragraphs": [
        "A convincing design links the connection to an observed improvement: a shape that persists under the tested conditions, a preserved target-binding surface, or activity supported by the right biological controls. Comparing the stapled molecule with its matched unstapled version helps identify what the new connection actually contributes.[5][6][7]",
        "The most useful advance is a clearer way to choose the bridge. Researchers can examine the distance between attachment points in the folded structure, consider the movement lost on unfolding, and then measure the result. A staple turns that geometric choice into a molecule whose behavior can be tested.[6]"
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "id": 5,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6396041",
      "title": "Ali et al., Stapled peptides inhibitors: a new window for target drug discovery (2019)"
    },
    {
      "id": 6,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC12980645",
      "title": "Hatfield et al., Folded-state compatibility and unfolded-state constraint govern staple-based stabilization (2026)"
    },
    {
      "id": 7,
      "url": "https://www.nature.com/articles/s41467-023-43346-4",
      "title": "Chandramohan et al., Design rules for stapled peptides with in vivo activity and their application to Mdm2/X antagonists (2024)"
    }
  ],
  "related": [
    {
      "url": "/cyclic-peptides-stability-cell-permeability",
      "title": "How cyclic peptide stability differs from cell permeability"
    },
    {
      "url": "/solid-phase-peptide-synthesis-chain-building",
      "title": "How solid phase synthesis builds an amino acid chain"
    },
    {
      "url": "/peptide-cell-uptake-cytosolic-delivery-endosomal-escape",
      "title": "Why cell uptake and delivery to the cell interior differ"
    }
  ]
};
