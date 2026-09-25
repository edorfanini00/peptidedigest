// Editorial image registry. All photos are Unsplash License (free use).
// These are illustrative stock photographs, never photos of the events covered.
// Full credits: reports/design/image-credits.md

export interface EditorialImage {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption: string;
  photographer: string;
  sourceUrl: string;
}

export const images = {
  labBeakers: {
    src: "/images/lab-beakers.jpg",
    width: 1600,
    height: 1067,
    alt: "Clear glass beakers and a flask on a white laboratory bench",
    caption: "Illustrative photo of laboratory glassware.",
    photographer: "Hans Reniers",
    sourceUrl: "https://unsplash.com/photos/lQGJCMY5qcM",
  },
  labFlasks: {
    src: "/images/lab-flasks.jpg",
    width: 1600,
    height: 960,
    alt: "Glass flasks and beakers holding pale green liquid against a mint background",
    caption: "Illustrative photo of laboratory flasks.",
    photographer: "Allison Saeng",
    sourceUrl: "https://unsplash.com/photos/Y_mNCKscZC4",
  },
  courthouse: {
    src: "/images/courthouse-columns.jpg",
    width: 1400,
    height: 875,
    alt: "Stone courthouse facade with tall columns behind trees",
    caption: "Illustrative photo of a courthouse; not the court in this case.",
    photographer: "Danny Greenberg",
    sourceUrl: "https://unsplash.com/photos/DWELZ1vtM6Y",
  },
  federalBuilding: {
    src: "/images/federal-building.jpg",
    width: 1400,
    height: 875,
    alt: "Columned government-style building on a city corner with a US flag",
    caption: "Illustrative photo of a government building; not a location named in this report.",
    photographer: "Joshua Woroniecki",
    sourceUrl: "https://unsplash.com/photos/Skfy8ljB7X4",
  },
  documents: {
    src: "/images/documents-stack.jpg",
    width: 1600,
    height: 1064,
    alt: "Close-up of a thick stack of paper records",
    caption: "Illustrative photo of paper records.",
    photographer: "Camilo Rueda López",
    sourceUrl: "https://unsplash.com/photos/3CLPBgNuX40",
  },
  warehouse: {
    src: "/images/warehouse-aisle.jpg",
    width: 1200,
    height: 750,
    alt: "Warehouse aisle lined with shelving and cardboard boxes",
    caption: "Illustrative photo of a warehouse; not a facility named in this report.",
    photographer: "Russ Murray",
    sourceUrl: "https://unsplash.com/photos/M7G_m5XJ-go",
  },
  shippingBox: {
    src: "/images/shipping-box.jpg",
    width: 1600,
    height: 1067,
    alt: "An open, empty cardboard shipping box on a white surface",
    caption: "Illustrative photo of a shipping box.",
    photographer: "Kelli McClintock",
    sourceUrl: "https://unsplash.com/photos/d21p_xkPoMA",
  },
  gavel: {
    src: "/images/gavel-book.jpg",
    width: 1600,
    height: 820,
    alt: "A wooden gavel resting on a closed book",
    caption: "Illustrative photo of a gavel; not the court in this case.",
    photographer: "Sasun Bughdaryan",
    sourceUrl: "https://unsplash.com/photos/NB1dUts3ROU",
  },
  capitol: {
    src: "/images/capitol-dome.jpg",
    width: 1600,
    height: 1067,
    alt: "The dome of the United States Capitol against a cloudy sky",
    caption: "Illustrative photo of the U.S. Capitol.",
    photographer: "Simon Ray",
    sourceUrl: "https://unsplash.com/photos/0MCrSONaYu8",
  },
  pipette: {
    src: "/images/pipette-tubes.jpg",
    width: 1400,
    height: 875,
    alt: "A pipette dispensing liquid into a rack of laboratory test tubes",
    caption: "Illustrative photo of laboratory work.",
    photographer: "Nathan Rimoux",
    sourceUrl: "https://unsplash.com/photos/iiFfGsMppBA",
  },
  envelopes: {
    src: "/images/opened-envelopes.jpg",
    width: 1400,
    height: 933,
    alt: "A pile of opened paper envelopes",
    caption: "Illustrative photo of opened mail.",
    photographer: "Sue Hughes",
    sourceUrl: "https://unsplash.com/photos/toQNPpuDuwI",
  },
  magnifier: {
    src: "/images/magnifier-paper.jpg",
    width: 1600,
    height: 1067,
    alt: "A magnifying glass resting on a printed document",
    caption: "Illustrative photo of document review.",
    photographer: "Vlad Deep",
    sourceUrl: "https://unsplash.com/photos/mCqi3MljC4E",
  },
  padlock: {
    src: "/images/padlock-door.jpg",
    width: 1400,
    height: 875,
    alt: "A padlock and chain securing a weathered metal door",
    caption: "Illustrative photo of a locked door; not a location named in this report.",
    photographer: "Sara Ghasemi",
    sourceUrl: "https://unsplash.com/photos/FztBgp6LBcY",
  },
  microscope: {
    src: "/images/microscope.jpg",
    width: 1400,
    height: 933,
    alt: "A researcher working at a laboratory microscope",
    caption: "Illustrative photo of a research laboratory.",
    photographer: "National Cancer Institute",
    sourceUrl: "https://unsplash.com/photos/rHfsPolwIgk",
  },
  testTubes: {
    src: "/images/test-tubes.jpg",
    width: 1600,
    height: 1067,
    alt: "A rack of laboratory test tubes",
    caption: "Illustrative photo of laboratory test tubes.",
    photographer: "National Cancer Institute",
    sourceUrl: "https://unsplash.com/photos/RuTQYiOOz0Y",
  },
} satisfies Record<string, EditorialImage>;

export type ImageKey = keyof typeof images;
