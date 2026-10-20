import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story = {
  "slug": "ic50-ec50-kd-peptide-potency-binding-affinity",
  "title": "IC50 vs EC50: why peptide potency is not binding affinity",
  "description": "Learn what IC50, EC50, Kd and Ki measure, why peptide binding can diverge from cellular activity, and what to check before comparing assay numbers.",
  "date": "2026-10-20T12:12:02Z",
  "type": "Article",
  "category": "Research explained",
  "image": "peptideAssay20261020",
  "vials": [
    "kpv",
    "nad"
  ],
  "lead": "IC50 and EC50 describe concentrations at the midpoint of an experimental response. They do not automatically measure how tightly a peptide binds its target. EC50 usually describes activation; IC50 usually describes inhibition. Binding affinity and the size of the resulting response answer different questions, so a smaller number is useful only after you know what was measured.[1][2]",
  "notice": "This is an explanation of laboratory measurements, not dosing or treatment guidance. IQON Labs’ separate catalog is for research use only.",
  "sections": [
    {
      "id": "half-of-what",
      "title": "Half of what? Start with the response curve",
      "paragraphs": [
        "An EC50 is the concentration that produces a response halfway between the curve’s baseline and maximum. If the baseline is above zero, that midpoint need not be 50 on the graph’s vertical axis. A curve running from 20 to 100 has its midpoint at 60.[1]",
        "The letters identify the measurement, too. “C” means concentration. An ED50 refers to dose, which is a different quantity when the concentration reaching the system is unknown. IC50 commonly labels a descending inhibition curve, while EC50 commonly labels an ascending activation curve.[5]",
        "For an inhibitory assay, the endpoint might be loss of a tracer’s binding, reduced enzyme activity or another measured response. The Assay Guidance Manual also distinguishes an absolute midpoint relative to the assay’s control range from a relative midpoint within the tested compound’s own curve. A paper needs to say which definition it uses.[4]"
      ]
    },
    {
      "id": "affinity",
      "title": "Kd and Ki describe binding under defined conditions",
      "paragraphs": [
        "Kd is an equilibrium dissociation constant: it describes binding once the amounts bound and unbound have stabilized under the assay conditions. Free ligand means the unbound binding molecule, such as the peptide being tested.[2]",
        "In a simple binding model with one class of independent sites, a free ligand concentration equal to Kd gives half occupancy. Lower Kd means tighter binding within that model. Occupancy counts bound sites; a functional assay measures what the system does after binding.[2]",
        "Competition experiments introduce another molecule: a labeled tracer already competing for the target. The test peptide’s IC50 then depends partly on the tracer concentration and its affinity. A Cheng-Prusoff calculation can convert that IC50 to Ki, an affinity estimate for the competing compound, when the experiment satisfies the model’s assumptions.[2]",
        "The conversion assumes competitive binding to a single class of sites, equilibrium and negligible depletion of ligand, among other conditions. Negligible depletion means binding has not appreciably reduced the amount of ligand free in solution. The conversion is not a universal correction for every IC50. For a complex or poorly defined binding mechanism, the assay manual advises reporting the measured IC50 rather than forcing an affinity interpretation.[2][4]"
      ]
    },
    {
      "id": "peptide-example",
      "title": "A peptide example where the rankings separate",
      "paragraphs": [
        "Glucagon-like peptide-1 (GLP-1) is a natural signaling peptide that activates the GLP-1 receptor. Brian Cary and colleagues compared modified GLP-1 and exendin-4 peptides in HEK293 cells, a laboratory cell line engineered here to produce that receptor.[3]",
        "A GLP-1 variant containing D-alanine retained similar potency for producing cyclic AMP, an intracellular signal, despite substantially weaker competition binding. Its weaker binding did not translate into correspondingly weaker cellular potency.[3]",
        "The assays asked different questions under different conditions. Signaling used luminescence readings at 10 to 20 minutes in phosphate-buffered saline with luciferin after equilibration at room temperature. Binding used a tagged receptor and fluorescent competitor, incubated at 4°C for 16 to 24 hours in buffered saline containing albumin and sodium azide. Signaling comparisons used three independent experiments; the GLP-1 binding comparisons used four.[3]",
        "These were cellular experiments, with natural peptides as comparators, not a human efficacy or safety study. Funding included NIH and Australian research grants. The authors disclosed a peptide-biotechnology company cofounder and a researcher receiving industry funding, while stating that this study was independent of industry collaborations. The experiment supports separating binding from activation; it cannot rank clinical benefits.[3]"
      ]
    },
    {
      "id": "maximum-response",
      "title": "Potency also leaves out the maximum response",
      "paragraphs": [
        "A low EC50 locates a curve along the concentration axis. It does not tell you how high that curve rises. Relative efficacy describes a compound’s maximum activity against a reference agonist, an activating compound used as the comparison standard. That means two compounds can have similar midpoint concentrations and different maximum responses.[4]",
        "Before interpreting a potency ranking, ask for the reference compound and the response ceiling. Half of a compound’s own small maximum need not equal half of the reference compound’s response.[4]",
        "GraphPad’s definition also depends on knowing both ends of the curve. If the experiment has not established the baseline and maximum, the apparent precision of a fitted midpoint should not replace that missing information.[1]"
      ]
    },
    {
      "id": "comparison-checklist",
      "title": "Before comparing two peptide numbers",
      "paragraphs": [
        "- Check the label and endpoint. Binding displacement, enzyme inhibition and cellular activation should not be pooled into one potency ranking.[2][4]",
        "- Check the units. Concentration-based IC50 and EC50 values cannot be treated as administered doses.[5]",
        "- Check the assay conditions and reference. Tracer concentration, equilibrium and the way responses were normalized can affect the interpretation.[2][4]",
        "- Read the maximum response alongside the midpoint. A lower EC50 alone does not establish a larger achievable effect.[1][4]"
      ]
    },
    {
      "id": "what-a-number-can-answer",
      "title": "Keep the conclusion attached to the experiment",
      "paragraphs": [
        "When two papers give different peptide potency rankings, start with their endpoints and assay conditions. Use IC50 or EC50 to compare matched responses, and Kd or a justified Ki to compare binding. Then read the maximum response. Those steps tell you whether the numbers answer the same question at all.[1][2][4]"
      ]
    }
  ],
  "faqs": [],
  "related": [
    {
      "url": "/peptide-content-vs-purity-measurement",
      "title": "Why peptide content and purity answer different questions"
    },
    {
      "url": "/peptide-aggregation-assay-measurement-pitfalls",
      "title": "What peptide aggregation assays can miss"
    }
  ],
  "sources": [
    {
      "id": 1,
      "url": "https://www.graphpad.com/guides/prism/latest/curve-fitting/reg_the_ec50.htm",
      "title": "GraphPad: interpreting EC50 and curve normalization"
    },
    {
      "id": 2,
      "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK91992/?report=reader",
      "title": "Assay Guidance Manual: receptor binding assays"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC8950777/",
      "title": "Cary and colleagues: Structural and Functional Diversity among Agonist-Bound States of the GLP-1 Receptor",
      "doi": "10.1038/s41589-021-00945-w"
    },
    {
      "id": 4,
      "url": "https://www.ncbi.nlm.nih.gov/sites/books/NBK91993/",
      "title": "Assay Guidance Manual: data standardization for results management"
    },
    {
      "id": 5,
      "url": "https://www.graphpad.com/support/faq/what-is-the-difference-between-an-ic50-and-an-ec50-and-an-ed50/",
      "title": "GraphPad: IC50, EC50 and ED50 terminology"
    }
  ]
} satisfies NewsroomStory;
