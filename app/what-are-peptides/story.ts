import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  slug: "what-are-peptides",
  title: "What are peptides? Structure, synthesis and laboratory testing",
  description: "Peptides are amino acid chains joined by peptide bonds. Learn how they differ from proteins, how laboratories make them, and what testing can establish.",
  date: "2026-11-04T03:30:32Z",
  type: "Article",
  category: "Explainer",
  image: "peptideBasicsSynthesizer",
  vials: ["nad", "glutathione"],
  lead: "Peptides are chains of amino acids joined by peptide bonds. The word usually describes shorter chains, while longer chains are commonly called proteins. There is no single size boundary that works in every context: around 50 amino acids is a common textbook convention, rather than a change in the chemistry of the bond.[1][3]",
  notice: "An introduction to peptide chemistry and laboratory evidence. Research materials are not approved medicines.",
  sections: [
    {
      title: "Key facts", id: "key-facts", paragraphs: [
        "- A peptide bond joins the amino group of one amino acid to the carboxyl group of another.[1]",
        "- Amino acid order matters. Two chains with the same ingredients can have different sequences and properties.[1]",
        "- Peptides occur naturally and can also be made by chemical synthesis or recombinant production.[2]",
        "- Identity, chromatographic purity and peptide content are separate analytical questions.[3]",
        "- FDA's formal research-use-only labeling guidance concerns in-vitro diagnostic products. It is not a general approval category for peptide materials.[4]",
      ],
    },
    {
      title: "What holds a peptide chain together?", id: "peptide-bonds", paragraphs: [
        "The link is an amide bond, called a peptide bond when it connects amino acids. In the basic chemical description, an amino group reacts with a carboxyl group and water is released. Repeating that connection creates a chain. A chain of two amino acids is a dipeptide; three make a tripeptide.[1]",
        "A sequence records the order of those amino acids. By convention, it is written from the amino end, called the N-terminus, toward the carboxyl end, called the C-terminus. Reading the same list backward describes a different sequence.[1]",
        "That order is part of the molecule's identity, not merely a way to label a bottle. The same amino acid composition can produce different behavior when the sequence changes. Our explainer on [scrambled peptide controls](/scrambled-peptide-controls-not-inactive) follows that problem into laboratory experiments.[1]",
      ],
    },
    {
      title: "How are peptides different from proteins?", id: "peptides-and-proteins", paragraphs: [
        "Size is the usual shorthand, but the terminology overlaps. The LibreTexts chemistry text uses about 50 amino acids as the point at which chains are usually called proteins or polypeptides. It also notes that a protein can contain more than one polypeptide chain.[1]",
        "Regulatory definitions can draw a different line. A USP paper describes FDA's distinction using 40 amino acids or fewer for peptides. That is a particular classification rule, not a universal definition for every chemistry textbook or research paper.[3]",
        "When a size cutoff matters, check which definition the author is using. The sequence and structure still need to be specified; the word peptide alone does not identify a particular substance.[1][3]",
      ],
    },
    {
      title: "Are peptides natural or synthetic?", id: "natural-and-synthetic", paragraphs: [
        "Both. Peptides occur in biological systems, and researchers can produce peptides in the laboratory. Chemical synthesis builds a chain through chemical reactions. Recombinant production uses engineered biological systems to make the material. Wang and colleagues describe both routes in their review of peptide development.[2]",
        "A synthetic peptide can reproduce a natural sequence or contain deliberate changes. Researchers may alter the sequence, attach a chemical group or make a cyclic structure. The word synthetic tells you about production, but it does not by itself tell you which molecular changes were made.[2]",
        "Manufacturing history matters when looking for impurities. USP notes that peptides can be considered the same regardless of the production route, while their impurity profiles can differ. That is why origin cannot replace analytical characterization.[3]",
      ],
    },
    {
      title: "How does solid-phase peptide synthesis work?", id: "solid-phase-synthesis", paragraphs: [
        "Solid-phase peptide synthesis, usually shortened to SPPS, builds a peptide while the growing chain is attached to a solid resin. The method alternates amino acid coupling with removal of a temporary protecting group so that the next amino acid can be added. The finished chain is then released from the resin.[2]",
        "Protecting groups keep reactive parts of the amino acids from reacting at the wrong stage. The repeated coupling and deprotection cycle can take place in one reactor, which makes automation possible. The photograph above shows an automated peptide synthesizer of this kind.[2]",
        "Synthesis does not automatically yield only the intended product. Incomplete reactions and side reactions can leave related impurities, so the crude material needs purification and testing. A machine following a sequence is the start of a manufacturing process, not the final evidence of identity or purity.[2][3]",
      ],
    },
    {
      title: "How do researchers identify and characterize a peptide?", id: "laboratory-testing", paragraphs: [
        "Researchers combine methods because each measurement answers a different question. High-performance liquid chromatography, or HPLC, separates sample components and records their detector responses. The resulting peaks can reveal related impurities and, with a suitable reference standard, support an amount measurement.[3]",
        "Mass spectrometry measures ions by their mass-to-charge ratio. In the USP study, liquid chromatography with tandem mass spectrometry checked peptide mass and amino acid sequence. Fragment measurements provide information beyond the intact molecular mass.[3]",
        "A matching mass is not always enough. Some amino acids share the same mass, and molecules can differ in their three-dimensional arrangement. USP describes additional methods, including nuclear magnetic resonance, amino acid analysis and chirality testing, for resolving such questions.[3]",
        "For a report you are trying to interpret, start by asking which property was measured and how the sample was identified. Our guide to [reading a peptide certificate of analysis](/how-to-read-peptide-coa) explains the report itself, including its sample and lot identifiers.",
      ],
    },
    {
      title: "Why are purity and peptide content different?", id: "purity-and-content", paragraphs: [
        "A chromatographic purity percentage describes the relative signal assigned to the target peptide within that analysis. Peptide content assigns an amount of the peptide to the material or container. Water, counterions and residual solvents can contribute to a powder's mass without appearing as equivalent peptide peaks.[3]",
        "USP's reference-standard procedure first characterizes bulk material using a mass balance. That characterized material then becomes the standard for measuring peptide in individual vials. The amount does not come from treating a headline purity percentage as a complete inventory of the powder.[3]",
        "The distinction carries into solution calculations. Entering total powder mass where a calculation requires peptide mass can give the wrong concentration. Read [peptide content versus purity](/peptide-content-vs-purity-measurement) for the measurement details, or use our [peptide calculator](/peptide-calculator) to check laboratory arithmetic once the inputs are known.[3]",
      ],
    },
    {
      title: "What does research use only mean?", id: "research-use-only", paragraphs: [
        "Research use only, or RUO, is a statement about intended use, not a test result. FDA's 2013 guidance specifically addresses in-vitro diagnostic products in the laboratory research phase. It should not be read as a blanket regulatory category covering everything sold to laboratories.[4]",
        "The guidance also says that placing an RUO label on a diagnostic product does not, by itself, remove otherwise applicable requirements. FDA considers the circumstances of distribution and intended use, not just the words on the label.[4]",
        "Keep the labeling question separate from the chemistry question. A research label does not supply a sequence confirmation or a peptide-content measurement. Our [RUO explainer](/what-does-research-use-only-mean) discusses the scope of the terminology in more detail.[3][4]",
      ],
    },
    {
      title: "Are there approved peptide medicines?", id: "approved-medicines", paragraphs: [
        "Yes. Insulin and medicines in the GLP-1 receptor agonist class are established examples in the history of peptide drug development. Wang and colleagues' review discusses insulin and lists approved GLP-1 medicines. Those examples explain why the word peptide appears in pharmaceutical research as well as basic chemistry.[2]",
        "A recognized drug class and a research material are not interchangeable categories. Knowing that an approved medicine is a peptide tells you nothing about the approval status of another peptide product. Nor does a research label establish that a material is an approved medicine.[2][4]",
        "For a laboratory reader, the useful questions remain specific: what sequence is present, what evidence confirms it, and how much of that peptide was measured? A chain's name, its production route and a purity percentage each describe only part of the material.[1][3]",
      ],
    },
  ],
  faqs: [
    { q: "Is every short amino acid chain a protein?", a: "Peptide and protein terminology overlaps. About 50 amino acids is a common textbook boundary, while some regulatory definitions use a different cutoff. The context matters more than treating one number as a universal chemical rule.", refs: [1, 3] },
    { q: "Can a synthetic peptide have the same sequence as a natural one?", a: "Yes. Chemical synthesis can reproduce a natural sequence or introduce deliberate modifications. The production route and the molecular structure are separate descriptions, and testing is still needed to characterize the material.", refs: [2, 3] },
    { q: "Does an HPLC purity percentage tell me the amount in a vial?", a: "Not by itself. Relative chromatographic purity and peptide content answer different questions. An amount measurement needs an appropriate analytical method and reference, with other constituents such as water and counterions accounted for where relevant.", refs: [3] },
    { q: "Is research use only a quality certification?", a: "No. RUO describes intended use, not an analytical certification. FDA's cited guidance concerns in-vitro diagnostic products and does not make the label a general approval for peptide materials.", refs: [3, 4] },
  ],
  sources: [
    { id: 1, url: "https://chem.libretexts.org/Bookshelves/Introductory_Chemistry/The_Basics_of_General_Organic_and_Biological_Chemistry_(Ball_et_al.)/18:_Amino_Acids_Proteins_and_Enzymes/18.03:_Peptides", title: "LibreTexts: Peptides" },
    { id: 2, url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8844085", title: "Wang et al.: Therapeutic peptides (2022)", doi: "10.1038/s41392-022-00904-4" },
    { id: 3, url: "https://www.usp.org/sites/default/files/usp/document/our-work/biologics/reference_standards_to_support_quality_of_synthetic_peptide_therapeutics.pdf", title: "McCarthy et al.: Reference standards for synthetic peptides (2023)", doi: "10.1007/s11095-023-03493-1" },
    { id: 4, url: "https://www.fda.gov/media/87374/download", title: "FDA: Research use only diagnostic products (2013)" },
  ],
  related: [
    { url: "/peptide-calculator", title: "Peptide calculator: concentration and aliquot math" },
    { url: "/peptide-content-vs-purity-measurement", title: "Peptide content versus purity" },
    { url: "/how-to-read-peptide-coa", title: "How to read a peptide certificate of analysis" },
    { url: "/what-does-research-use-only-mean", title: "What research use only means" },
  ],
};
