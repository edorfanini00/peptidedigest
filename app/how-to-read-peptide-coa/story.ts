import type { NewsroomStory } from "@/components/NewsroomArticle";

export const story: NewsroomStory = {
  "slug": "how-to-read-peptide-coa",
  "title": "How to read a peptide COA: purity, identity and amount",
  "description": "Read a peptide certificate of analysis without confusing purity with quantity. Understand sample and lot numbers, HPLC, mass spectrometry and lab verification.",
  "date": "2026-09-25T12:00:00.000Z",
  "dateModified": "2026-11-17T18:57:08Z",
  "type": "Article",
  "category": "Guide",
  "image": "hplc",
  "lead": "A peptide certificate of analysis, or COA, reports test results for an identified sample or batch. Start by matching its sample and lot details, then separate three questions: which molecule was detected, what the purity test measured and how much peptide was present. A high HPLC purity percentage is not an answer to all three.[1][2]",
  "notice": "This guide explains laboratory reports, not medical suitability. The example below is hypothetical, not an IQON Labs certificate or a real test result.",
  "sections": [
    {
      "title": "First, find out what the report describes",
      "id": "sample-and-lot",
      "paragraphs": [
        "The compound name tells you what was submitted for testing. The sample identifier tells you which submission the laboratory analyzed. The lot or batch number connects that submission to a production batch. They may be different identifiers, so look for the link between them rather than expecting one number to do every job.",
        "Suppose a material is labeled lot B, but its linked COA says lot A. The report may be authentic and the analysis excellent. It still describes A. A seller needs a documented connection between the material and the tested sample before that result can answer a question about B.",
        "FDA's Q7 guidance gives a useful model for the information a certificate should carry: the material name, batch number, release date, tests, acceptance limits and actual results, with dated authorization. It also addresses tracing a repacker's certificate to the laboratory and original batch certificate. Q7 concerns active pharmaceutical ingredients and their intermediates; it does not make an ordinary research seller's PDF an FDA-approved document.[1]"
      ]
    },
    {
      "title": "A simple example: read the result, not just the heading",
      "id": "example",
      "paragraphs": [
        "For a reading exercise, take a hypothetical report for Sample X, linked to lot A. Its purity specification says at least 98%, its result says 99% by HPLC area, and its identity entry says the observed mass is consistent with the expected mass. There is no quantitative amount result. These invented entries are a reading exercise, not measurements from a real laboratory or product.",
        "The specification is the threshold used to judge that particular test. The result is what the laboratory measured. In this example, the HPLC result clears the stated purity threshold. The mass result supports the proposed identity. Neither entry tells you the number of milligrams in the sample. That would require a suitable quantitative measurement.[1][2]",
        "This distinction also explains why a row marked pass is less informative than a numerical result beside its method and acceptance limit. You want to know what passed, not merely that someone checked a box.[1]"
      ]
    },
    {
      "title": "What does HPLC purity mean?",
      "id": "hplc-purity",
      "paragraphs": [
        "High-performance liquid chromatography, shortened to HPLC, separates components as they travel through a column. A detector records a trace called a chromatogram. The peaks show components reaching that detector at different times. HPLC is widely used to separate and analyze peptides.[3]",
        "A common purity calculation compares the area of the main peak with the total area of the peaks included in the analysis. Bachem describes its UV-based HPLC purity as the requested peptide's share of material absorbing at the stated wavelength. The detector, separation method and choice of integrated peaks therefore belong with the percentage.[2]",
        "In the hypothetical 99% example, read the number as a share of the measured chromatographic signal, not as 99% of everything inside a vial. Water and counterions, the ions associated with the peptide, can contribute to a sample's weight without contributing equivalent signal to that calculation. A chromatogram helps explain where the percentage came from; the large peak alone does not identify the molecule.[2]"
      ]
    },
    {
      "title": "How mass spectrometry helps with identity",
      "id": "mass-spectrometry",
      "paragraphs": [
        "Mass spectrometry provides a different kind of evidence: a measurement used to compare the analyzed molecule's mass with the expected mass. Read the expected value and the observed result together, and check that the named chemical form matches the report. Bachem lists molecular mass from mass spectrometry separately from HPLC purity on its analytical data sheets.[2]",
        "A matching mass supports identity, but it is not a complete description of molecular structure. Peptide synthesis can produce closely related impurities, including molecules that differ in the spatial arrangement of an amino acid. Depending on the question, additional separation or structural tests may be necessary. That is why an identity result and a purity result are complementary rather than interchangeable.[4]"
      ]
    },
    {
      "title": "Purity, peptide content and amount are different measurements",
      "id": "quantity",
      "paragraphs": [
        "The gross weight is everything weighed in the sample. Net peptide content is the fraction made up of peptide material rather than associated counterions and water. That peptide material can include peptide impurities as well as the intended sequence. HPLC purity then addresses a different distinction within the material detected by its method.[2]",
        "An amount result needs a method that can quantify the intended analyte, the substance being measured, and a clearly stated unit and basis. Milligrams per submitted container, concentration in a submitted solution and percentage net peptide content are not the same result. Do not read a purity percentage as a measurement of vial fill.",
        "Even the word assay needs context. In Bachem's explanation, assay can refer to nitrogen content used to establish net peptide content. Another report may use assay for a quantitative result against a reference standard. Read the definition and method on that report instead of assuming the heading always means milligrams of the desired peptide.[2]",
        "Our [guide to peptide content versus purity](/peptide-content-vs-purity-measurement) develops this measurement distinction in more detail. It is especially useful when two reports display similar purity figures but report different kinds of quantity data."
      ]
    },
    {
      "title": "Dates and sampling explain how far a result reaches",
      "id": "dates-and-sampling",
      "paragraphs": [
        "A sample-receipt date, analysis date and report-issue date describe different steps. A later PDF issue date does not necessarily mean a new test occurred. If a certificate gives an expiry or retest date, read it as a separate entry rather than calculating one from the report's age. Q7 treats the release date separately from expiry or retest information.[1]",
        "Authentication also leaves a sampling question: who selected the sample, from which lot, and how was it connected to the containers being described? Testing one submitted sample does not by itself establish that every container has the same contents or has been stored in the same conditions.",
        "Peptides can undergo chemical changes, including oxidation and other degradation reactions. A report records the material as tested under its stated methods; it cannot independently reconstruct everything that happened during later storage or handling.[4]"
      ]
    },
    {
      "title": "Verify the document with the issuing lab",
      "id": "verify-with-lab",
      "paragraphs": [
        "Find the issuing laboratory's own website independently of the seller's PDF. Use the issuer's report-verification service or published contact channel, and compare the returned record with the supplied report, including its identifier, sample description, dates and results. A QR code that opens a seller's page is not the same as confirmation from the issuer.",
        "If Janoshik is the named issuer, start with its [report-verification help page](https://help.janoshik.com/article/50-how-can-reports-be-verified). Other laboratories may use a different process. A confirmation that the lab issued a report answers the document-authenticity question; it does not independently prove how the submitted sample was selected or which later shipment it represents.",
        "If the issuer cannot confirm a report, leave it unverified while seeking clarification. Missing information or a delayed response is not, by itself, proof of forgery. A logo on the page is not an alternative to checking the report with its issuer."
      ]
    },
    {
      "title": "Read the blank spaces as carefully as the results",
      "id": "report-limits",
      "paragraphs": [
        "A report listing identity and HPLC purity has answered those analytical questions. Unless separate results are provided, it has not answered questions about microbial contamination, sterility or endotoxins. These are different tests, as explained in our [endotoxin versus sterility guide](/endotoxin-vs-sterility-peptide-research). No purity threshold turns a research material into a medicine.",
        "A useful reading of a COA ends with a precise sentence: this identified sample produced these results using these methods on this date. If the lot connection, quantity measurement or issuer confirmation is missing, name that gap. A large percentage should never have to stand in for the information the report does not contain."
      ]
    }
  ],
  "faqs": [],
  "related": [
    {
      "url": "/peptide-content-vs-purity-measurement",
      "title": "Peptide content versus purity: what each measurement means"
    },
    {
      "url": "/endotoxin-vs-sterility-peptide-research",
      "title": "Why endotoxin and sterility are separate tests"
    },
    {
      "url": "/compliant-research-peptide-supplier",
      "title": "Research peptide supplier documentation"
    },
    {
      "url": "/what-are-peptides",
      "title": "What are peptides? Structure and laboratory testing"
    },
    {
      "url": "/peptide-calculator",
      "title": "Peptide calculator: concentration and portion math"
    }
  ],
  "sources": [
    {
      "id": 1,
      "url": "https://www.fda.gov/media/71518/download",
      "title": "FDA Q7: Good Manufacturing Practice Guidance for Active Pharmaceutical Ingredients, section 11.4"
    },
    {
      "id": 2,
      "url": "https://www.bachem.com/knowledge-center/faq-frequently-asked-questions/",
      "title": "Bachem: peptide analytical data, HPLC purity and net peptide content"
    },
    {
      "id": 3,
      "url": "https://pubmed.ncbi.nlm.nih.gov/18604941/",
      "title": "Mant et al. HPLC analysis and purification of peptides (2007)"
    },
    {
      "id": 4,
      "url": "https://pubmed.ncbi.nlm.nih.gov/25044089/",
      "title": "D’Hondt et al. Related impurities in peptide medicines (2014)"
    }
  ]
};
