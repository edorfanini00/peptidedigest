import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "elastin-hydration-water-entropic-elasticity",
  "description": "A new elastin simulation separates water and protein entropy. Why hydration helps explain recoil, and how the fragment model builds on experiments.",
  "type": "NewsArticle",
  "category": "Materials science",
  "image": "elastinHydration20261110",
  "vials": [
    "ghk",
    "kpv"
  ],
  "notice": "This report covers a computational materials study. IQON Labs reader offers are separate from the research described here.",
  "related": [
    {
      "url": "/peptide-self-assembly-honeycomb-water-channels",
      "title": "How peptide honeycomb fibers organize water channels"
    },
    {
      "url": "/what-are-peptides",
      "title": "How peptides relate to proteins"
    }
  ],
  "title": "Why water helps elastin spring back",
  "date": "2026-11-10T08:18:59-05:00",
  "lead": "Water surrounding elastin helps explain how this protein springs back after stretching. A new computer study finds that stretching a representative fragment of tropoelastin, elastin’s building block, draws more water into a constrained layer along its surface. The resulting loss of water entropy contributes more to the modeled entropic resistance to stretching than the protein’s own loss of flexibility.[1]",
  "sections": [
    {
      "title": "A spring with water in it",
      "id": "a-spring-with-water-in-it",
      "paragraphs": [
        "Elastin gives tissues such as arteries and lungs the ability to stretch and recover. Its dependence on water has long made it an unusual spring: hydrated elastin is elastic, while dry elastin is brittle. Understanding that difference matters to scientists studying resilient biological materials and trying to reproduce their mechanical behavior.[1][3]",
        "Metehan Çam and Anna Tarakanova at the University of Connecticut examined that puzzle in Nature Communications on November 9. Their study separates contributions that are difficult to disentangle in a physical piece of elastin: changes in the protein’s movement, changes in surrounding water, and changes in the interactions between them.[1][2]",
        "The advance is a more detailed account of a mechanism with a long history. An earlier study of purified elastin fibers had already connected stretching to water ordering. The new simulations ask how much of the entropy change belongs to the water and how much belongs to the protein.[1][3]"
      ]
    },
    {
      "title": "What entropy means for a stretched chain",
      "id": "what-entropy-means-for-a-stretched-chain",
      "paragraphs": [
        "Entropy describes the range of microscopic arrangements and motions available to a system. A flexible protein chain can explore many shapes. Stretching can remove some of those possibilities, creating an entropic contribution that favors a return toward the relaxed state. This is the basis of the familiar comparison between elastin and a rubber band.[1][2]",
        "Water has its own possibilities for movement and orientation. Molecules close to a protein surface encounter a different environment from molecules farther away in the surrounding liquid, called bulk water. The protein and those water molecules together determine the thermodynamic cost of stretching.[1]",
        "That distinction changes the question. Counting only the shapes available to the protein misses a second population whose freedom also changes. Çam and Tarakanova calculated both parts, then examined the interaction energies that can reinforce or offset them.[1]"
      ]
    },
    {
      "title": "What the researchers actually modeled",
      "id": "what-the-researchers-actually-modeled",
      "paragraphs": [
        "The simulations followed a 225 amino acid fragment from the central region of human tropoelastin. This smaller model retains alternating regions with different structural roles, while making detailed calculations more manageable than a simulation of the entire protein. It is one building block, without the network of connected chains found in mature elastin.[1]",
        "The team compared a freely moving, relaxed fragment with a fully extended reference state. That extended state represents an upper bound for examining molecular change. The authors explicitly distinguish it from the deformation of elastin in living tissue, where neighboring chains and the surrounding matrix constrain movement.[1]",
        "The relaxed protein was not a single fixed shape. Some parts were persistently ordered, others more flexible. When an ordered section unraveled, it could gain possible conformations even as more flexible sections lost them. Those different local responses help explain why the net change in protein entropy was relatively modest.[1]"
      ]
    },
    {
      "title": "More water joins the surface layer",
      "id": "more-water-joins-the-surface-layer",
      "paragraphs": [
        "Stretching exposes surface that was less accessible in the compact fragment. Additional water molecules move from the surrounding liquid into the first hydration layer, the region immediately next to the protein. Water in that layer has lower entropy than bulk water in both the relaxed and extended models.[1]",
        "A subtle result makes the mechanism clearer. An individual water molecule in the extended fragment’s hydration layer was, on average, slightly less constrained than one in the relaxed fragment’s layer. The total water entropy still fell because many more molecules occupied that comparatively restrictive environment.[1]",
        "The distinction is between the effect per molecule and the effect across the whole population. A small easing of restrictions for each surface water molecule did not outweigh the recruitment of additional molecules from freer surroundings. The model therefore supports water’s dominant entropic contribution without requiring every molecule to become more ordered as the chain stretches.[1]"
      ]
    },
    {
      "title": "Why water entropy is only part of the balance",
      "id": "why-water-entropy-is-only-part-of-the-balance",
      "paragraphs": [
        "The same extension also changes molecular interactions. Contacts within the protein are disrupted, while interactions between the newly exposed protein surface and water become more favorable. The researchers describe these energetic contributions through enthalpy, the thermodynamic quantity that accounts for energy changes alongside entropy.[1]",
        "The enthalpic changes partly offset one another and largely compensate for the entropic cost of stretching. The remaining change in free energy, which combines the energetic and entropic contributions, is much smaller than those opposing terms. Calling water the dominant entropic contributor therefore does not mean water entropy alone determines elasticity.[1]",
        "A useful material can be compliant even when its molecular components undergo substantial changes. In this account of elastin, the mechanical response emerges from the balance among those changes, rather than from the protein chain’s flexibility considered in isolation.[1][3]"
      ]
    },
    {
      "title": "How the finding builds on experiments",
      "id": "how-the-finding-builds-on-experiments",
      "paragraphs": [
        "In a 2024 PNAS study, Nour Jamhawi, Ronald Koder and Richard Wittebort combined mechanical measurements with nuclear magnetic resonance, or NMR, measurements of purified bovine elastin. They found that stretching increased the fraction of ordered water and observed thermodynamic behavior consistent with a major contribution from hydration.[3]",
        "Those experiments measured an actual fibrous material. Their thermodynamic quantities described the hydrated system as a whole, however, so they could not assign a separate entropy value to every protein and water contribution. The 2026 simulations supply a molecular decomposition that complements that evidence.[1][3]",
        "The two studies also concern different systems. Purified fibers contain a connected material network, whereas the new model isolates a fragment in water. Their agreement supports further work on hydration, while the fragment calculation still needs testing in models that include connected chains and more realistic tissue environments.[1][3]"
      ]
    },
    {
      "title": "A different question from peptide self assembly",
      "id": "a-different-question-from-peptide-self-assembly",
      "paragraphs": [
        "Our report on [peptide honeycomb fibers and water channels](/peptide-self-assembly-honeycomb-water-channels) followed the formation of organized structures. This elastin study starts with a different problem: what changes when a flexible protein building block is stretched? Its main contribution is the accounting of water and protein entropy during that change.[1]",
        "For materials research, the finding makes hydration part of the mechanical explanation. A model that predicts only protein shape can miss a substantial contribution from the liquid at its surface. The authors identify connected elastin networks and interactions with the surrounding tissue matrix as important next steps, and note that the numerical water entropy estimates depend on the water model used.[1]",
        "The university team plans to extend its calculations to multiple chains and interconnected fibers. That would bring the molecular explanation closer to the structures that make elastin useful: materials that repeatedly stretch and return, with their surrounding water participating in the motion.[1][2]"
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "id": 1,
      "url": "https://www.nature.com/articles/s41467-026-78799-w",
      "title": "Çam and Tarakanova, Hydration water drives elastin’s entropic elasticity, Nature Communications (2026)",
      "doi": "10.1038/s41467-026-78799-w"
    },
    {
      "id": 2,
      "url": "https://today.uconn.edu/2026/11/uconn-researchers-uncover-waters-critical-role-in-human-tissue-elasticity",
      "title": "University of Connecticut, Water’s role in human tissue elasticity, November 9, 2026"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10945822",
      "title": "Jamhawi, Koder and Wittebort, Elastin recoil is driven by the hydrophobic effect, PNAS (2024)",
      "doi": "10.1073/pnas.2304009121"
    }
  ]
};
