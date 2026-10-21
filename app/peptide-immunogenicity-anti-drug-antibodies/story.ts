import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story = {
  "slug": "peptide-immunogenicity-anti-drug-antibodies",
  "description": "Anti-drug antibodies can bind a peptide without proving treatment failure. Learn how neutralization tests, drug exposure and clinical outcomes fit together.",
  "type": "Article",
  "category": "Research explained",
  "vials": [
    "ss31",
    "mots-c"
  ],
  "notice": "This is an explanation of research findings, not individual medical advice. IQON Labs’ separate catalog is for research use only.",
  "related": [
    {
      "url": "/ic50-ec50-kd-peptide-potency-binding-affinity",
      "title": "Why peptide binding and biological activity are different measurements"
    },
    {
      "url": "/albumin-binding-peptide-half-life",
      "title": "How albumin binding can change peptide exposure"
    }
  ],
  "title": "Peptide immunogenicity: what anti-drug antibodies can tell us",
  "date": "2026-10-21T12:45:56Z",
  "lead": "Anti-drug antibodies recognize a medicine. Whether they block its action, change its time in the bloodstream or affect the patient takes further investigation. A positive antibody result alone does not establish treatment failure.[1]",
  "sections": [
    {
      "title": "Recognition comes before an explanation",
      "id": "recognition-comes-before-an-explanation",
      "paragraphs": [
        "Immunogenicity means the ability of a substance to provoke an immune response. Antibodies are proteins made by immune cells called B cells. When a therapeutic peptide becomes their target, researchers call them anti-drug antibodies, or ADAs. Their presence describes immune recognition. Their effects can vary.[5][1]",
        "Testing usually begins with a sensitive screening assay, a laboratory test designed to detect possible binding. A confirmatory test then checks whether the signal is specific to the medicine. Researchers may also measure antibody titer, an indication of the strength of the detectable response, and follow whether it persists across samples.[2]",
        "Confirmation establishes drug-specific binding, but not when the response began. Some antibodies may already be present before treatment. Comparing baseline and later samples helps distinguish a newly detected response from a rise in preexisting antibodies. Clinical meaning then depends on the medicine’s behavior and the patient’s health.[2][4][1]"
      ]
    },
    {
      "title": "Testing whether the drug’s action is blocked",
      "id": "testing-whether-the-drug-s-action-is-blocked",
      "paragraphs": [
        "Neutralizing antibodies are the subset that interfere with a medicine’s biological activity. A neutralization assay asks whether that interference occurs under the conditions of the test. Depending on how the medicine works, researchers can use cells that respond to it or a test that measures a relevant molecular interaction without cells.[3]",
        "The test must suit the mechanism. Detecting binding to a peptide does not by itself show that the antibody prevents the peptide from activating its target. Conversely, a functional assay needs enough sensitivity to detect the response of interest. Assay design therefore affects what a negative result can exclude.[3]",
        "Antibodies can matter without directly neutralizing the drug. They may change how quickly it leaves the bloodstream, shortening or extending exposure. Some immune responses can also cause adverse reactions. This is why investigators compare antibody findings with drug concentrations, clinical response and safety observations, rather than treating neutralization as the only consequential outcome.[1]"
      ]
    },
    {
      "title": "What the tirzepatide studies show",
      "id": "what-the-tirzepatide-studies-show",
      "paragraphs": [
        "A pooled analysis of seven phase 3 tirzepatide studies included 5,025 antibody-evaluable adults with type 2 diabetes. Responses that appeared or increased during treatment were common, while neutralizing responses were much less frequent. The analysis found no apparent association between antibody status and reduced glucose-lowering response at the trials’ primary endpoints of 40 or 52 weeks.[4]",
        "Safety gave a different view. During the studies’ planned treatment periods, hypersensitivity reactions, such as rash, and injection-site reactions were more frequent among participants whose antibody responses appeared or increased during treatment. Most were mild to moderate. The study durations differed, and antibody follow-up in one trial extended to 104 weeks. The pooled findings do not describe one uniform observation window.[4]",
        "The comparison between participants with and without those treatment-emergent responses was observational within the trials. Participants were not randomly assigned to develop antibodies, so differences between those groups may have other explanations. Lilly funded the analysis, and its authors were company employees and shareholders.[4]",
        "The example shows why preserved efficacy and immune-related safety findings need to be considered together. It does not establish that another peptide, or every individual taking the same medicine, will have the same experience.[4]"
      ]
    },
    {
      "title": "Why two antibody percentages may not be comparable",
      "id": "why-two-antibody-percentages-may-not-be-comparable",
      "paragraphs": [
        "An antibody rate depends partly on how researchers look. Tests differ in sensitivity, and medicine still present in a blood sample can interfere with antibody detection. An assay’s “drug tolerance” is its ability to detect antibodies despite that interference. This describes test performance, not a patient’s tolerance of the medicine.[2]",
        "Sampling times, handling, other medicines and disease can also affect the observed rate. Differences in testing or follow-up can produce a higher percentage, so unrelated drug programs cannot simply be ranked by their antibody rates.[2]",
        "The result becomes more useful when a report connects persistent, active antibodies to changes in drug exposure, patient response or adverse events. Those connections determine what an antibody finding means for the medicine being studied.[1][2]"
      ]
    }
  ],
  "faqs": [],
  "sources": [
    {
      "id": 1,
      "url": "https://www.fda.gov/media/85017/download",
      "title": "FDA: Immunogenicity Assessment for Therapeutic Protein Products (2014)"
    },
    {
      "id": 2,
      "url": "https://www.fda.gov/media/119788/download",
      "title": "FDA: Developing and Validating Assays for Anti-Drug Antibody Detection (2019)"
    },
    {
      "id": 3,
      "url": "https://www.accessdata.fda.gov/scripts/publications/search_result_record.cfm?id=55627",
      "title": "Wu et al.: Strategies to determine neutralizing antibody assay format (2016), abstract",
      "doi": "10.1208/s12248-016-9954-6"
    },
    {
      "id": 4,
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10795913/",
      "title": "Mullins et al.: Tirzepatide immunogenicity across phase 3 studies",
      "doi": "10.1210/clinem/dgad532"
    },
    {
      "id": 5,
      "url": "https://www.fda.gov/vaccines-blood-biologics/science-research-biologics/immunogenicity-protein-based-therapeutics",
      "title": "FDA: Immunogenicity of Protein-based Therapeutics"
    }
  ],
  "image": "peptideImmunogenicity20261021"
} satisfies NewsroomStory;
