import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "solid-phase-peptide-synthesis-chain-building",
  "title": "How solid phase peptide synthesis builds a chain, one bond at a time",
  "description": "Solid phase peptide synthesis builds chains on a resin. Follow the coupling cycle, understand missing residues, and see why purification comes afterward.",
  "date": "2026-11-07T13:13:03Z",
  "type": "Article",
  "category": "Peptide chemistry",
  "image": "solidPhaseSynthesis20261107",
  "vials": [
    "glutathione",
    "ss31"
  ],
  "lead": "Solid phase peptide synthesis builds a peptide while one end stays attached to a solid support. A repeating cycle exposes the growing end, adds the next amino acid and washes away soluble leftovers. Keeping the chain in place makes the chemistry repeatable and allows a machine to carry out many successive additions.[7]",
  "notice": "An explanation of peptide chemistry and laboratory research, not a synthesis protocol or guidance for human use.",
  "sections": [
    {
      "title": "Why attach a peptide to a bead?",
      "id": "solid-support",
      "paragraphs": [
        "The main advantage is separation. After a reaction in solution, a chemist may need to isolate the product before starting the next step. In solid phase peptide synthesis, usually shortened to SPPS, the growing peptide remains attached to insoluble resin particles while soluble reagents and byproducts can be washed away.[7]",
        "The attachment is reversible. A chemical linker connects the first amino acid to the support, holding its carboxyl end, or C-terminus, while the chain grows from the amino end, or N-terminus. In the usual SPPS approach, assembly proceeds from the C-terminus toward the N-terminus.[7]",
        "The linker also helps determine what the released peptide looks like at its C-terminus, for example whether it ends as an acid or an [amide](/peptide-n-terminal-acetylation-c-terminal-amidation). Choosing a support is therefore part of designing the final molecule, as well as choosing a convenient place to build it.[7]"
      ]
    },
    {
      "title": "The cycle that adds one amino acid",
      "id": "coupling-cycle",
      "paragraphs": [
        "Amino acids have more than one reactive group, so an unrestricted mixture would not reliably produce the intended sequence. Protecting groups temporarily block reactions at selected sites. The common Fmoc approach uses one removable group at the growing amino end and other protection on reactive side chains.[7][8]",
        "First, the temporary Fmoc group is removed to expose an amino group on the attached chain. The incoming amino acid has its own amino end protected, while a coupling reagent activates its carboxyl group. That activated end can form a peptide bond with the exposed amino group on the resin-bound chain.[7]",
        "After coupling, soluble excess material is washed away. The newly added amino acid still carries its Fmoc group, so the chain is ready for another round of deprotection and coupling. Repeating this sequence extends the peptide one residue at a time.[7]",
        "The protections must come off at different stages. Fmoc is removed under basic conditions, while the usual side-chain protections and resin linkage are removed under acidic conditions at the end. Chemists call this orthogonality: one operation can expose the next reaction site while leaving other protected sites intact.[7]"
      ]
    },
    {
      "title": "The resin is part of the chemistry",
      "id": "resin-access",
      "paragraphs": [
        "Reagents need access to the growing chains. Much of the synthesis occurs inside the resin matrix, so swelling in a suitable solvent opens that interior to the dissolved reagents. A bead can stay insoluble while absorbing solvent; those are different properties.[7]",
        "Access can become harder as the peptide grows. Chains may associate with one another through hydrogen bonding, and bulky groups can hinder the next reaction. The result can be a difficult sequence even when the machine has delivered the intended reagents.[7][8]",
        "Chemists can address these problems through the support, the linker and the peptide building blocks. For example, temporary protection along the peptide backbone can interrupt the hydrogen bonding that promotes aggregation. Such choices aim to keep the chain accessible during assembly, then remove the temporary modification when its job is done.[8]"
      ]
    },
    {
      "title": "How a chain can miss an amino acid",
      "id": "missing-residues",
      "paragraphs": [
        "The resin carries a population of growing chains, and a coupling step may succeed on some while failing on others. If an uncoupled chain remains able to react during a later cycle, it can resume growing after missing an intended residue. The resulting deletion sequence is shorter than the target but can retain the rest of its order.[7][9]",
        "Permanent chain termination is a different outcome: the growing end can no longer accept later additions. Behrendt and colleagues describe how acetic acid contamination in amino acid building blocks can cap that end and stop assembly. An omitted residue and a stopped chain therefore point to different histories during synthesis.[8]",
        "A 2025 proof-of-concept study by Nkwanyana and colleagues makes the missed-residue problem visible. The researchers built a five-residue model peptide on a non-swelling silica support using Fmoc chemistry in dimethylformamide at room temperature. They identified products missing phenylalanine or tyrosine. Extending the coupling time from one hour to two hours reduced those impurities in that particular experiment.[9]",
        "Longer coupling helped this model peptide because the comparison changed that stage of assembly. Other sequences can present different access or side-reaction problems, so the useful question is which step limits the particular synthesis.[7][9]"
      ]
    },
    {
      "title": "Why small losses accumulate",
      "id": "repeated-reactions",
      "paragraphs": [
        "Even efficient additions accumulate losses when repeated many times. Consider a deliberately simplified example: start with a correctly attached first residue, then make 29 additions to build a 30-residue chain. Assume each addition succeeds on 99 percent of the otherwise correct chains, independently, with no other losses.",
        "Under those assumptions, the fraction completing every addition is 0.99 multiplied by itself 29 times, about 75 percent. Raising the assumed success at each addition to 99.5 percent gives about 86 percent. These are arithmetic illustrations, not measurements of a particular peptide, a normal laboratory yield or a purity prediction.",
        "The calculation explains why a small improvement repeated across a synthesis can matter. Real chemistry adds sequence-specific problems, side reactions and losses during release and purification, so the final amount must be measured rather than read from the programmed sequence.[7][8]"
      ]
    },
    {
      "title": "Washing, release and purification do different jobs",
      "id": "release-and-purification",
      "paragraphs": [
        "Washing removes soluble material while the growing chains remain attached. It cannot separate a correctly assembled chain from a deletion sequence that is also still attached to the resin. At the end, cleavage releases the peptide and the appropriate protecting groups are removed, leaving a crude mixture for purification.[7][9]",
        "Chromatography then separates components of that released mixture. Mass spectrometry helps identify the products, so several peaks after synthesis become questions about which molecules formed. A peak alone does not explain whether a residue was omitted, a chain stopped, or a side reaction changed the product.[7][9]",
        "This is why synthesis, purification and characterization remain distinct operations. Completing the programmed cycle establishes that the operations ran; analysis establishes what came out of them. The stages work together to turn an intended sequence into a characterized research material.[7]"
      ]
    },
    {
      "title": "Better synthesis starts with the limiting step",
      "id": "improving-the-process",
      "paragraphs": [
        "Automation makes repeated operations easier to control, and chemistry can provide a useful signal along the way. Removing an Fmoc group releases material with strong ultraviolet absorption, which can help monitor the synthesis. Such monitoring gives researchers information during assembly instead of leaving every question until the final product.[8]",
        "The silica-support experiment explored a different improvement: reducing solvent use by avoiding a support that swells. The authors reported using half as much solvent for washing as with conventional resins. They also observed incomplete recovery of the support and peptide, leaving further work before that approach could deliver its full practical benefit.[9]",
        "Some authors worked for SiliCycle, which developed and can sell the silica resin. Their study is a specific materials experiment, and its solvent finding belongs alongside its recovery problem. Saving solvent and recovering the finished chain both matter to whether a new support is useful.[9]",
        "SPPS gives researchers a repeatable way to choose and connect amino acids. Its continuing improvements come from understanding what each stage needs: access to the growing chain, selective reactions and a reliable way to recover the product. Once those roles are clear, a synthesis record becomes an explanation of how a molecule was built.[7][8][9]"
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "id": 7,
      "url": "https://www.beilstein-journals.org/bjoc/articles/10/118",
      "title": "Mäde, Els-Heindl and Beck-Sickinger, Automated solid-phase peptide synthesis to obtain therapeutic peptides (2014)"
    },
    {
      "id": 8,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4745034/",
      "title": "Behrendt, White and Offer, Advances in Fmoc solid-phase peptide synthesis (2016)"
    },
    {
      "id": 9,
      "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC12357219/fullTextXML",
      "title": "Nkwanyana et al., Silica-Assisted Solid-Phase Peptide Synthesis (2025), full text"
    }
  ],
  "related": [
    {
      "url": "/what-are-peptides",
      "title": "What are peptides? Structure and laboratory testing"
    },
    {
      "url": "/peptide-n-terminal-acetylation-c-terminal-amidation",
      "title": "How changes at peptide ends alter the molecule"
    }
  ]
};
