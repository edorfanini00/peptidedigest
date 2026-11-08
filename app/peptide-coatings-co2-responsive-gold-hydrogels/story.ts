import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "peptide-coatings-co2-responsive-gold-hydrogels",
  "title": "Peptide coatings turn CO2 into a color signal",
  "description": "Short peptide coatings make gold nanoparticles respond to CO2. A new study carries their color change into hydrogels that can be patterned and reset.",
  "date": "2026-11-08T14:05:22Z",
  "type": "NewsArticle",
  "category": "Materials science",
  "image": "peptideCO2Hydrogel20261108",
  "vials": [
    "mots-c",
    "epithalon"
  ],
  "lead": "Short peptide coatings can make gold nanoparticles gather in response to carbon dioxide, changing a surrounding gel from red to purple. In a study published November 7 in Nature Communications, researchers carried that response into materials that could be patterned with gas and reset in an alkaline solution.[1][2]",
  "notice": "This article covers laboratory materials research. IQON Labs reader offers are separate from the materials and experiments discussed here.",
  "sections": [
    {
      "id": "gold-color",
      "title": "Why tiny gold particles can look red",
      "paragraphs": [
        "Gold nanoparticles interact with light differently from a piece of bulk gold. Incoming light makes their mobile electrons oscillate together. This response, called surface plasmon resonance, depends on the particles' size, shape and surroundings, including how close other particles are.[3]",
        "When neighboring particles gather, their optical responses interact. The light they absorb and scatter changes, so a red suspension can shift toward purple or blue. A spectrometer follows the changing pattern of light extinction, giving researchers a measurement alongside the visible color.[1][3]",
        "The new study uses a peptide coating to control when the particles come together. The coating supplies the responsive chemistry; the gold supplies a visible signal. That division of labor connects a change at the molecular surface to something observable in a larger material.[1]"
      ]
    },
    {
      "id": "sequence-design",
      "title": "A small change in sequence changes the response",
      "paragraphs": [
        "The University of Massachusetts Lowell team, T. Farrokhi, S. V. Ceballos, S. M. Silva and M. B. Ross, made a library of 45 peptides. The chains contained two to seven amino acids and coated gold particles about 13 nanometers across. Cysteine, an amino acid with a sulfur-containing group, anchored the peptides to the gold surface.[1]",
        "The researchers varied which amino acids appeared, their order and the length of the chain. One revealing comparison kept the ingredients especially simple: four glycines and one cysteine. Moving cysteine along that five-residue chain changed the optical response to CO2, even though the set of amino acids stayed the same.[1]",
        "That result makes the attachment point part of the design. A peptide attached near one end presents its remaining groups differently from one attached near the middle. Across the library, the team identified patterns involving terminal positions, local flexibility and interactions between aromatic side groups.[1]",
        "The authors did not directly measure how much of each peptide covered the particles. Their proposed molecular explanations therefore remain design hypotheses alongside the observed sequence-dependent responses. The practical finding is that changing the sequence gives researchers a way to tune the behavior.[1]"
      ]
    },
    {
      "id": "gas-chemistry",
      "title": "CO2 changes the chemistry around the coating",
      "paragraphs": [
        "Carbon dioxide dissolving in water changes its acid-base chemistry. In these samples, the resulting fall in pH changed the charge of the coated particles. Histidine was particularly relevant because its side group can gain a positive charge in the acidity range reached during the experiment.[1]",
        "Several controls helped establish what the response required. Gold particles with their original citrate coating showed little optical change when exposed to CO2. Bubbling nitrogen through selected peptide-coated particles also produced little change. The response depended on the combination of gas and peptide surface.[1]",
        "Adding acid separately could also drive aggregation, but it did not reproduce every detail of the gas response. Stirring changed the behavior too. The evidence points to acidity acting together with mixing and particle encounters, rather than a single change in pH predicting the entire outcome.[1]"
      ]
    },
    {
      "id": "gas-delivery",
      "title": "The way the gas arrives matters",
      "paragraphs": [
        "The team varied gas flow through liquid samples and followed the particles' optical response. Faster delivery generally drove a faster change. Yet samples receiving the same total delivered gas volume could show different responses when that volume arrived at different rates.[1]",
        "Delivered gas and dissolved gas are not the same quantity. The authors' model suggests that slower delivery can transfer CO2 into the liquid more efficiently, while faster delivery changes the timing of particle aggregation. The gas-liquid transfer explanation is plausible rather than a direct measurement of every dissolved molecule.[1]",
        "This matters when interpreting a color signal. In this setup, the color reflects the material and its exposure history, including delivery conditions. Turning that response into a gas measurement would require calibration under the conditions in which the material is meant to operate.[1]"
      ]
    },
    {
      "id": "composite-gel",
      "title": "Moving the response into a water-rich solid",
      "paragraphs": [
        "A hydrogel is a polymer network swollen with water. Its chemical composition and the spacing between network connections affect properties such as stiffness, swelling and the movement of dissolved substances. Independent hydrogel research has shown why the network is an active design choice, with relationships that differ across polymer systems.[4]",
        "For the new material, the researchers embedded peptide-coated gold particles in polyacrylamide hydrogels. CO2 exposure changed the gels from red toward purple. Optical measurements and electron microscopy supported particle assembly within the composite, extending the response beyond a freely flowing suspension.[1]",
        "The polymer network influenced how strongly the gel responded. Less densely crosslinked formulations showed a more pronounced optical shift, while the team chose a formulation that also retained useful mechanical integrity. The peptide coating and the surrounding network therefore offered separate ways to adjust the material.[1][4]",
        "This is a different construction from the [peptide honeycomb fibers described in our self-assembly explainer](/peptide-self-assembly-honeycomb-water-channels). Here, the responsive peptides coat gold particles held inside a synthetic polymer gel. The peptides do not themselves form the entire supporting network.[1]"
      ]
    },
    {
      "id": "pattern-and-reset",
      "title": "Writing and resetting a pattern with gas",
      "paragraphs": [
        "The researchers placed a printed mask over a larger gel and directed CO2 through it. Exposed regions changed color, reproducing the mask's pattern. They demonstrated both a university seal and simpler circular and linear features, turning a local gas response into a visible image.[1]",
        "Resetting required a second chemical environment. After CO2 exposure, the team immersed the gels in an alkaline solution, restoring their original red appearance. The color-and-spectrum experiment covered three cycles; the patterned demonstration was also erased and repeated.[1]",
        "That reset is part of the result. The experiment demonstrates a material that can be switched by gas and restored by an alkaline bath, rather than a passive indicator proven to reset whenever surrounding CO2 falls. It gives the next round of materials design a specific operation to improve.[1]"
      ]
    },
    {
      "id": "material-payoff",
      "title": "A useful route from sequence to visible behavior",
      "paragraphs": [
        "The authors propose gas-responsive devices and air monitors as possible applications. Those uses still need engineering tests, including calibration, behavior in mixed environments and durability over extended cycling. This study establishes the responsive composite and patterning method, not a validated monitor or medical device.[1]",
        "The work received support from the US National Institutes of Health and the Research Corporation for Science Advancement. Farrokhi, Ceballos and Ross are named inventors on a related US provisional patent application, a commercial interest disclosed with the paper.[1][2]",
        "The result gives researchers several connected design choices: which peptide groups face the water, how the particles respond to gas delivery, and how tightly the gel holds the particles. Those choices can now be tested against a visible material response, making the next design more deliberate than simply trying another coating.[1]"
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "id": 1,
      "url": "https://www.nature.com/articles/s41467-026-79006-6_reference.pdf",
      "title": "Farrokhi et al., CO2 responsive nanoscopic and macroscopic materials directed by peptides, accepted manuscript (2026)"
    },
    {
      "id": 2,
      "url": "https://www.nature.com/articles/s41467-026-79006-6",
      "title": "Nature Communications publication record, November 7, 2026"
    },
    {
      "id": 3,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4101904",
      "title": "Yeh, Creran and Rotello, Gold nanoparticles: preparation, properties, and applications in bionanotechnology (2012)"
    },
    {
      "id": 4,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC7880590",
      "title": "Richbourg et al., Precise control of synthetic hydrogel network structure (2021)"
    }
  ],
  "related": [
    {
      "url": "/peptide-self-assembly-honeycomb-water-channels",
      "title": "How peptide fibers build honeycomb water channels"
    },
    {
      "url": "/peptide-aggregation-assay-measurement-pitfalls",
      "title": "What an aggregation assay can reveal and miss"
    }
  ]
};
