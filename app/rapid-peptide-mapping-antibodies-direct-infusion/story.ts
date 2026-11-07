import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "rapid-peptide-mapping-antibodies-direct-infusion",
  "title": "Peptide mapping gets faster by skipping chromatography",
  "description": "A new direct infusion method compared 275 antibody samples in about 12 hours. How faster peptide mapping works and where it fits in research.",
  "date": "2026-11-07T13:13:03Z",
  "type": "NewsArticle",
  "category": "Analytical science",
  "image": "rapidPeptideMapping20261107",
  "vials": [
    "ghk",
    "nad"
  ],
  "lead": "Researchers have developed a faster way to map the peptide fragments of antibodies by sending them directly into a mass spectrometer. In one comparison, the method collected and processed data from 275 antibody samples in about 12 hours, versus nine days for the conventional workflow. The peer-reviewed paper appeared in Communications Chemistry on November 6.[1][2]",
  "notice": "Science reporting on an analytical method for antibody research. The study measures laboratory performance, not treatment outcomes.",
  "sections": [
    {
      "title": "What a peptide map reveals",
      "id": "what-a-map-reveals",
      "paragraphs": [
        "An antibody is a large protein. To examine its amino acid sequence in manageable pieces, researchers cut it into peptides with an enzyme, then identify those fragments and look for chemical changes. A peptide map can show whether a particular part of the protein has oxidized, changed an amide side group through deamidation, or acquired a different pattern of attached sugars.[1][5]",
        "Those details help scientists compare samples made or stored under different conditions. The new method, called RaPiD-mAb-MS, brings sample preparation, direct infusion mass spectrometry and analysis software into one workflow. A preprint was posted on May 16; this week brings the accepted journal publication.[1][2][3]",
        "Many of the comparisons used NISTmAb, a reference antibody supplied by the US National Institute of Standards and Technology. Its purpose is to give laboratories a common material for comparing methods and evaluating instruments. That shared starting point makes it easier to ask whether a new measurement agrees with an established one.[4]"
      ]
    },
    {
      "title": "Removing the separation column",
      "id": "direct-infusion",
      "paragraphs": [
        "In conventional liquid chromatography coupled to mass spectrometry, or LC-MS, a column separates the peptide mixture before the fragments reach the mass spectrometer. The resulting signals arrive across a run. Researchers identify the peaks and compare modified peptides with their unmodified counterparts.[1][5]",
        "The new workflow prepares samples in a plate with 96 wells. An integrated filter plate holds the antibody during cleanup and digestion, removing formulation ingredients before the resulting peptides move to a second plate. A small electrospray source then introduces each sample directly into the instrument, without a chromatography column.[1]",
        "The instrument distinguishes ions by mass-to-charge ratio. Software starts with the supplied antibody sequence, calculates the expected peptide fragments and matches them to the measured masses and isotope patterns. It also compares signals from modified and unmodified versions of the same peptide to estimate the fraction carrying a modification.[1]",
        "There are separate clocks here. The authors describe roughly four hours to prepare samples for infusion. A typical measurement takes about a minute, while changing samples brings the stated sample-to-sample cycle to about two minutes. Those figures describe different parts of the workflow; the one-minute measurement is not the time required to turn an untreated antibody into a finished report.[1]"
      ]
    },
    {
      "title": "A benchmark with 275 samples",
      "id": "benchmark",
      "paragraphs": [
        "The most useful speed comparison involved 275 NISTmAb samples that AbbVie had prepared and measured after deliberately stressing the antibody. Its conventional workflow used a 40-minute LC-MS method and took eight days for acquisition, followed by one day of data searching. The new workflow collected and processed its measurements in about 12 hours.[1]",
        "This was a comparison of laboratory workflows, including different preparation and analysis procedures. The samples spanned several buffers and acidity levels, temperatures from 4 to 50 degrees Celsius, and observation points from the start through 84 days; the longest exposure did not include 50 degrees. The experiment created varied chemical changes against which to compare the measurements.[1]",
        "For oxidation, the methods followed similar trends. Some deamidation measurements differed, particularly at lower modification levels. When the team ran a subset of samples prepared by the new workflow through conventional LC-MS, the deamidation estimates fell. The authors attributed much of the initial difference to changes introduced during the conventional digestion procedure.[1]",
        "Earlier NIST work by Mouchahoir and Schiel showed why digestion conditions matter: preparation must release the intended fragments while limiting chemical changes caused by the preparation itself. Faster acquisition still needs careful sample chemistry.[5]"
      ]
    },
    {
      "title": "A larger test makes the opportunity concrete",
      "id": "larger-test",
      "paragraphs": [
        "The researchers also tested 1,152 samples across four antibodies in a formulation study with Johnson & Johnson. The design compared untreated samples with samples exposed to heat or light, across different buffers and added formulation ingredients.[1]",
        "Data acquisition took 35.5 hours, followed by four hours of analysis. Of the 1,152 samples, 1,077 produced sequence coverage above 96 percent. Nine had little or no starting material, and 66 samples with high iron concentrations had visible iron particles after digestion and lower coverage. Reporting those unsuccessful samples shows where the preparation still needed adjustment.[1]",
        "Sequence coverage describes how much of the amino acid sequence is represented by the detected peptides. It does not mean that the same percentage of every rare impurity was measured. The value of this larger experiment is practical: a laboratory could compare many combinations of conditions while retaining detailed information about the antibody fragments.[1]"
      ]
    },
    {
      "title": "Where the faster method fits",
      "id": "research-use",
      "paragraphs": [
        "The method trades some sensitivity for speed. In a test using eight labeled peptides added to a NISTmAb digest, the average detection limit was about 0.7 percent relative abundance, with individual values from 0.2 to 1.2 percent. The authors position it for screening and characterizing large numbers of samples, rather than replacing LC-MS/MS when extremely small amounts must be detected.[1]",
        "Small chemical differences can also require additional measurements. For [deamidation](/peptide-deamidation-isoaspartate-mass-shift), overlapping isotope signals were addressed by fragmenting selected peptides and measuring those smaller pieces at high resolution. Removing the column therefore changes how the instrument resolves the question; it does not remove the need to resolve it.[1]",
        "Several authors have commercial interests in the technology. Joshua Coon and Lloyd Smith co-founded CeleramAb to distribute the method, and the paper discloses consulting relationships and related intellectual property. Those interests accompany a study with pharmaceutical-company collaborators and direct comparisons against existing methods.[1][2]",
        "The immediate opportunity is to make larger, more systematic antibody experiments easier to run. A faster peptide map can help researchers compare candidate formulations and find which parts of a protein change under stress, while established methods remain available for questions that demand greater sensitivity. The next practical test is how reliably laboratories can obtain that extra information across their own antibodies and formulations.[1]"
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "id": 1,
      "url": "https://www.nature.com/articles/s42004-026-02260-8_reference.pdf",
      "title": "Salome et al., Rapid peptide mapping of monoclonal antibodies with direct infusion mass spectrometry, accepted manuscript (2026)"
    },
    {
      "id": 2,
      "url": "https://www.nature.com/articles/s42004-026-02260-8",
      "title": "Communications Chemistry: publication record, November 6, 2026"
    },
    {
      "id": 3,
      "url": "https://www.biorxiv.org/content/10.64898/2026.05.14.725248v1",
      "title": "Salome et al., original bioRxiv preprint, May 16, 2026"
    },
    {
      "id": 4,
      "url": "https://www.nist.gov/programs-projects/nist-monoclonal-antibody-reference-material-8671",
      "title": "NIST: Monoclonal Antibody Reference Material 8671"
    },
    {
      "id": 5,
      "url": "https://link.springer.com/article/10.1007/s00216-018-0848-6",
      "title": "Mouchahoir and Schiel, Development of an LC-MS/MS peptide mapping protocol for the NISTmAb (2018)"
    }
  ],
  "related": [
    {
      "url": "/peptide-deamidation-isoaspartate-mass-shift",
      "title": "How deamidation changes a peptide and its mass"
    },
    {
      "url": "/methionine-oxidation-peptide-mass-spectrometry-artifacts",
      "title": "Why oxidation can appear during peptide analysis"
    }
  ]
};
