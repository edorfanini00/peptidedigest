import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story = {
  "slug": "peptide-receptor-desensitization-internalization",
  "title": "Receptor desensitization: why a peptide's signal can fade after binding",
  "description": "Binding affinity cannot explain how a cell responds over time. GLP-1 receptor experiments separate desensitization, internalization and recycling.",
  "type": "Article",
  "category": "Science",
  "image": "receptorTrafficking20261024",
  "vials": [
    "nad",
    "ss31"
  ],
  "lead": "Receptor desensitization is a loss of response after earlier stimulation. A peptide can still bind its receptor while the cell becomes less able to respond, because binding is only the start of signaling. Experiments with the GLP-1 receptor show that a receptor's location, its signaling partners and its return to the cell surface can change the response over time.[1][2][3]",
  "notice": "Cellular mechanisms explained, not guidance for changing treatment or using research products. IQON Labs reader offers are separate from the studies discussed here.",
  "sections": [
    {
      "title": "Binding begins the response",
      "id": "binding-and-response",
      "paragraphs": [
        "A receptor is a protein that recognizes a signal and helps the cell respond. The GLP-1 receptor belongs to the G protein-coupled receptor family: when an activating molecule binds, the receptor can engage G proteins on the inside of the cell. One resulting signal is cyclic AMP, usually shortened to cAMP, an internal messenger that researchers can measure.[1][3]",
        "Binding affinity describes the interaction between a molecule and its target. The response to repeated stimulation also depends on how many receptors remain available and which signaling machinery is connected to them. A measurement made near the start of an experiment can miss changes that become apparent later.[2]",
        "This is the time dimension missing from a simple ranking by [Kd, IC50 or EC50](/ic50-ec50-kd-peptide-potency-binding-affinity). Those numbers answer specific binding or response questions under the conditions of an assay. Desensitization asks how previous exposure changes the next response.[1][2]"
      ]
    },
    {
      "title": "Moving a receptor is not the same as silencing it",
      "id": "internalization-and-desensitization",
      "paragraphs": [
        "Internalization means a receptor moves from the cell surface into the cell. It can enter membrane-bound compartments called endosomes, then return to the surface through recycling or move toward degradation. Desensitization describes a change in responsiveness. These processes can interact, but they are different measurements.[2][3]",
        "A receptor may lose access to a signaling partner while remaining at the surface. Equally, a receptor that has moved inside can continue to signal. Counting surface receptors and measuring cAMP therefore reveal different parts of the same experiment.[1][3]",
        "Downregulation adds a longer-lasting change in receptor availability. It can follow loss of receptors through degradation, while recycling replenishes the surface pool. A single image showing receptors inside a cell cannot reveal which fate they will follow.[2]"
      ]
    },
    {
      "title": "The signal that survived a wash",
      "id": "persistent-signal",
      "paragraphs": [
        "Ghina Shaaban and colleagues compared GLP-1 receptor movement with loss of responsiveness in a study published online in December 2016. They used HEK-293 cells engineered to express a tagged receptor, so they could measure its presence at the surface as well as cAMP produced inside the cells.[1]",
        "After an initial exposure to GLP-1, the cells responded less to a second stimulation. Yet washing the cells after the first exposure did not return cAMP to its starting level. A residual signal remained, complicating the apparent size of the second response.[1]",
        "The researchers therefore analyzed the response both with and without subtracting that residual signal. The corrected loss of responsiveness tracked receptor internalization more closely. They interpreted the persistent cAMP as consistent with signaling from internalized receptors, while calling for further experiments to establish the mechanism.[1]",
        "The result matters when reading an assay: total signal after a second stimulus includes whatever activity survived the first one. A receptor can become less available for a fresh response while an earlier response continues elsewhere in the cell. This study used one engineered cell model and one stimulation concentration, so it did not establish a universal rate of desensitization.[1]"
      ]
    },
    {
      "title": "When letting go helps a receptor return",
      "id": "recycling-and-binding-time",
      "paragraphs": [
        "Ben Jones and colleagues took a different approach in 2018. They changed individual amino acids in exendin-4, a peptide that activates the GLP-1 receptor, and compared receptor movement with signaling and insulin release in laboratory cell systems.[2]",
        "One variant, exendin-phe1, dissociated from the receptor faster and promoted faster receptor recycling than the comparison peptides. It produced less receptor internalization and preserved more receptor at the surface during prolonged exposure. In rat and mouse pancreatic beta cell lines, compounds with reduced internalization could sustain greater insulin release even though their short cAMP assays had suggested lower potency.[2]",
        "The early potency measurement missed the later difference in insulin release. Residence time, the time a molecule remains bound to its receptor, can affect what happens after the receptor moves inside. In these experiments, faster release accompanied recycling that helped maintain a responsive surface pool.[2]",
        "The authors could not fully separate the contribution of slower internalization from faster recycling. Nor did their findings make blocking internalization a general design rule: internalization can also contribute to recovery and continued signaling. The useful outcome depends on the receptor, the activating molecule and the biological system.[2]"
      ]
    },
    {
      "title": "An experiment that separated movement from desensitization",
      "id": "arrestin-experiment",
      "paragraphs": [
        "A later study by Ee Von Moo and colleagues, published in the April 2025 issue of The FEBS Journal, tested the machinery more directly. In HEK293-derived cells, the team removed arrestins, proteins that can regulate receptor signaling and movement, and compared the altered cells with controls.[3]",
        "The GLP-1 receptor still internalized without arrestins. However, the cells lacking arrestins no longer showed the same loss of cAMP responsiveness after prior stimulation. Receptor recycling also continued. The experiment separated movement into the cell from the arrestin-dependent desensitization observed in that model.[3]",
        "Removing arrestins did not improve every readout. Some downstream responses fell even as the direct G protein response increased. Arrestins have several roles, so a change that preserves one signaling pathway can alter another. The authors emphasized the need to test these findings in more physiologically representative systems.[3]"
      ]
    },
    {
      "title": "Read the next response as carefully as the first",
      "id": "reading-the-evidence",
      "paragraphs": [
        "To understand a fading response, researchers can measure what happens on repeat stimulation, track the surface receptor pool and follow receptor recycling. They also need to account for any signal that persists after the first stimulus. Together, those measurements explain more of the response over time than an affinity number alone.[1][2][3]",
        "These are cellular experiments, not evidence for a treatment break or a schedule for using a research peptide. A person's changing response cannot be assigned to receptor desensitization from these assays alone. All three papers declared no competing interests, but their shared practical limit is the distance between a controlled cell experiment and an individual clinical outcome.[1][2][3]",
        "For peptide discovery, the useful question is whether a candidate preserves the required response in the relevant cells over the period that matters. Following the receptor after binding can explain why two molecules with encouraging initial results later diverge.[2][3]"
      ]
    }
  ],
  "faqs": [],
  "related": [
    {
      "url": "/ic50-ec50-kd-peptide-potency-binding-affinity",
      "title": "What IC50, EC50 and Kd measure in peptide research"
    },
    {
      "url": "/peptide-cell-uptake-cytosolic-delivery-endosomal-escape",
      "title": "Why cell uptake does not establish cytosolic delivery"
    }
  ],
  "date": "2026-10-24T12:16:01Z",
  "sources": [
    {
      "id": 1,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC6155907",
      "title": "Shaaban et al. Rate of homologous desensitization and internalization of the GLP-1 receptor (2016 online; 2017 issue)",
      "doi": "10.3390/molecules22010022"
    },
    {
      "id": 2,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5913239",
      "title": "Jones et al. Targeting GLP-1 receptor trafficking to improve agonist efficacy (2018)",
      "doi": "10.1038/s41467-018-03941-2"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC11970717",
      "title": "Moo et al. Arrestin-independent internalization of the GLP-1 receptor (2025 issue)",
      "doi": "10.1111/febs.17338"
    }
  ]
} satisfies NewsroomStory;
