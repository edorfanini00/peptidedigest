import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  slug: "cyclic-peptides-stability-cell-permeability",
  title: "Cyclic peptides: why a ring can improve stability but not guarantee cell entry",
  description: "Why peptide cyclization can resist enzymes without guaranteeing cell entry. Bench studies show how ring chemistry, shape and membrane damage change the answer.",
  date: "2026-10-10T08:30:15-04:00",
  type: "Article",
  category: "Science",
  image: "cyclicPeptidePermeability",
  vials: ["epithalon", "semax"],
  lead: "Closing a peptide into a ring can make it harder for enzymes to cut, but it does not automatically make the molecule able to enter a cell. Ring closure changes a peptide's shape and exposed chemical groups, so stability and permeability have to be measured separately.[6][7]",
  notice: "Laboratory research explained. IQON Labs reader offers are separate from the studies discussed here.",
  sections: [
    {
      title: "What makes a peptide cyclic?",
      id: "what-makes-a-peptide-cyclic",
      paragraphs: [
        "A cyclic peptide contains a chemical connection that creates a ring. The connection can join the beginning of the amino acid chain to its end, or link chemical groups on different amino acids. A bridge between side chains can leave a tail outside the ring.[7]",
        "A peptide staple is one form of bridge. Researchers place a chemical link between selected positions to restrict the shapes a peptide adopts, sometimes favoring a helix. Its position matters because a more constrained shape still has to fit the intended target.[6]",
        "The word cyclic therefore covers quite different structures. A chain whose ends have been joined is not identical to a chain held by a bridge halfway along its length. Those differences help explain why cyclic peptides do not all behave alike.[6][7]",
      ],
    },
    {
      title: "Why a ring can slow enzyme attack",
      id: "why-a-ring-can-slow-enzyme-attack",
      paragraphs: [
        "Proteases are enzymes that cut the bonds connecting amino acids. Some attack an exposed end; others recognize a region inside the chain. Joining the two ends removes the usual starting points for the first group. Restricting shape can make the molecule a worse fit for the second.[7]",
        "The protection does not require every bond to become chemically stronger. An enzyme needs access and a suitable molecular arrangement to cut efficiently. A ring can make that arrangement harder to achieve, while leaving other sites accessible. Bonds outside a staple may remain vulnerable.[6][7]",
        "The result is resistance under particular conditions, rather than immunity to degradation. Experiments with several versions of the same peptide show how much the choice of ring can matter.[3][7]",
      ],
    },
    {
      title: "Different rings survived differently",
      id: "different-rings-survived-differently",
      paragraphs: [
        "A 2023 study tested native oxytocin alongside 11 related peptides. Some had different ring chemistries; others had changes in amino acid geometry. The stability model used pooled fecal material from three healthy human donors to approximate the environment in the colon.[3]",
        "Researchers followed the molecules for 90 minutes using chromatography, which separated and quantified recoverable peptide. Each peptide had three replicate incubations in the pooled material, not three independent donor specific results.[3]",
        "The ordinary linear analog was fully degraded within the first 30 minutes. Native oxytocin, which contains a disulfide ring, resisted the early loss better but was mostly gone by 90 minutes. The comparison also changed the sequence: two cysteine residues in the native peptide had been replaced with alanines in the linear analog.[3]",
        "The cyclic versions offered the more revealing contrast. A thioether linked analog was fully degraded in less than an hour. Another analog, built with a chloroacetyl ring, retained 34.4% of its starting concentration at 90 minutes, with a reported standard deviation of 0.61 percentage points across the replicate incubations.[3]",
        "Both were cyclic. The chemistry and geometry of the ring, together with the rest of the sequence, determined how much protection it provided in that experiment. The study tests a family of oxytocin related molecules, not a universal hierarchy in which every ring outlasts every open chain.[3]",
      ],
    },
    {
      title: "Crossing a membrane is a separate problem",
      id: "crossing-a-membrane-is-a-separate-problem",
      paragraphs: [
        "A membrane presents a different challenge from an enzyme. Peptide groups that interact strongly with water must move into a less polar environment to pass through the membrane's interior. Some cyclic designs can organize internal hydrogen bonds, reducing the energetic cost of that transition.[6]",
        "Ring closure can help arrange those interactions, but it does not automatically hide every water interacting group. Nor does a favorable shape for membrane passage guarantee the right shape for binding a protein after entry.[6][7]",
        "A peptide remaining intact in plasma answers a question about persistence in that sample. A response involving a target inside a living cell asks whether the molecule can act beyond the membrane. Those tests can give quite different answers.[6]",
      ],
    },
    {
      title: "The stable peptide that still failed the cell test",
      id: "the-stable-peptide-that-still-failed-the-cell-test",
      paragraphs: [
        "In a 2020 study, researchers started with an all D peptide, built from amino acids with a particular molecular handedness, that bound the protein Mdm2. They then made six versions with single staples in different positions. Mdm2 regulates p53, a protein involved in cellular responses to stress.[6] [Molecular handedness is a separate design variable from ring closure](/d-vs-l-amino-acids-peptide-signaling).",
        "The starting peptide and the stapled versions all remained more than 90% detectable after four hours in human plasma and in a cell homogenate. Strong resistance to breakdown was already present before stapling.[6]",
        "The next comparison used HCT116 laboratory cells carrying a reporter for p53 activity. After 16 hours, three of the six single staple variants produced a response; the linear peptide did not. A stable molecule with target binding outside a cell had still failed to produce that cellular effect.[6]",
        "Then the researchers checked for membrane leakage. Two responding variants also disrupted membranes under the assay conditions. That made it difficult to distinguish useful intracellular action from a response associated with damage. Another variant produced activity without the same leakage signal, and a control reporter helped support action on the intended pathway.[6]",
        "The leakage test changed what the cellular response meant. Activity was more persuasive when the membrane remained intact and an unrelated reporter did not respond in the same way.[6]",
      ],
    },
    {
      title: "What a useful ring has to preserve",
      id: "what-a-useful-ring-has-to-preserve",
      paragraphs: [
        "The oxytocin work also examined passage across excised rat colon tissue. It treated stability and tissue permeability as separate experiments and left receptor binding for further investigation. Tissue from rats and cells grown in a dish offer useful tests, but neither experiment measures absorption after a person swallows a medicine.[3][6]",
        "These studies also sit within commercial drug discovery. The oxytocin paper lists funding from Intract Pharma and Orbit Discovery alongside the UK's Engineering and Physical Sciences Research Council, and declares no conflicts. The stapled peptide work reports support from MSD and A*STAR; two authors disclosed that they were founder directors of SiNOPSEE Therapeutics.[3][6]",
        "For a peptide aimed at a target inside a cell, the design has to preserve target binding while improving survival and access. The next persuasive result is therefore a set of measurements on the same candidate: resistance to breakdown, activity in intact cells, and controls that separate the intended effect from membrane damage. A ring is a way to pursue those properties, not evidence that they have all been achieved.[3][6][7]",
      ],
    },
  ],
  faqs: [
    {
      q: "Does every peptide need to enter a cell to work?",
      a: "No. Some peptides act on targets outside cells or at the cell surface. Cell entry becomes a design requirement when the intended target is inside the cell. The relevant permeability test therefore depends on where the target is, rather than whether the peptide is cyclic.",
      refs: [6, 7],
    },
    {
      q: "Can ring closure and amino acid substitutions be used together?",
      a: "Yes. They change different aspects of a molecule and can be combined. The oxytocin study tested cyclic designs that also contained D amino acid substitutions and found that the combination could improve resistance to breakdown in its colon model. That result still required separate tests of permeability and target binding.",
      refs: [3],
    },
  ],
  sources: [
    { id: 3, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC10384666", title: "Impact of peptide structure on colonic stability and tissue permeability, Pharmaceutics (2023)", doi: "10.3390/pharmaceutics15071956" },
    { id: 6, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7441689", title: "Macrocyclization of an all D linear alpha helical peptide imparts cellular permeability, Chemical Science (2020)", doi: "10.1039/C9SC06383H" },
    { id: 7, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8708026", title: "Protease resistant peptides for targeting and intracellular delivery of therapeutics, Pharmaceutics (2021)", doi: "10.3390/pharmaceutics13122065" },
  ],
  related: [
    { title: "D vs L amino acids: how one flip changes a peptide signal", url: "/d-vs-l-amino-acids-peptide-signaling" },
    { title: "Peptide adsorption: why glass and plastic can change laboratory recovery", url: "/peptide-adsorption-glass-plastic-lab-results" },
  ],
};
