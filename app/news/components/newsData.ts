export interface NewsArticle {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  author?: string;
  date: string;
  tags: string[];
  image: string;
  excerpt: string;
  content: string;
  featured?: boolean;
}

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    slug: "commentary-americans-deserve-accurate-information-about-pvc-pipe-drinking-water",
    title:
      "Commentary: Americans Deserve Accurate Information about PVC Pipe for Drinking Water",
    author: "By Anne Austin, environmental lawyer and former EPA administrator",
    date: "01/06/2025",
    tags: ["Article", "Certa-Lok®", "Aqua (CIOD)"],
    image: "/news/pvc-pipes-desert.jpg",
    excerpt:
      "Polyvinyl chloride (PVC) plays a critical role in modern infrastructure and everyday life.",
    content: `Polyvinyl chloride (PVC) plays a critical role in modern infrastructure and everyday life. Used safely for nearly a century, PVC provides essential benefits in applications ranging from water and sewer systems to medical devices, flooring and even automotive components, where it helps reduce fuel consumption and emissions.

For drinking water systems in particular, PVC pipe has proven to be a safe, durable, and cost-effective choice, making it a cornerstone of modern water infrastructure. In fact, there are an estimated 2.5 million miles of PVC water and sewer pipelines in the United States and Canada.`,
    featured: true,
  },
  {
    id: "2",
    slug: "westlake-pipe-fittings-brownsville-selected-tennessee-governors-award-excellence",
    title:
      "Westlake Pipe & Fittings - Brownsville is Selected For the Tennessee Governor's Award of Excellence",
    date: "06/14/2024",
    tags: ["Industry Award"],
    image: "/news/blue-pipes-closeup.jpg",
    excerpt:
      "Westlake Pipe & Fittings - Brownsville, Tennessee, has been chosen as the recipient of the prestigious Tennessee Governor's Award of Excellence for Workplace Safety and Health.",
    content: `Westlake Pipe & Fittings - Brownsville, Tennessee, has been chosen as the recipient of the prestigious Tennessee Governor's Award of Excellence for Workplace Safety and Health. This accolade recognizes the remarkable dedication and commitment of both the employers and employees at the Brownsville manufacturing facility, who have collectively logged an impressive number of work hours without encountering a single lost workday or restricted duty case. This outstanding achievement underscores their unwavering commitment to maintaining a safe and healthy work environment. Congratulations to the entire team at Westlake Pipe & Fittings-Brownsville for this well-deserved recognition!`,
  },
  {
    id: "3",
    slug: "westlake-pipe-fittings-announces-investment-manufacture-pvco-pipe",
    title:
      "Westlake Pipe & Fittings Announces Investment to Manufacture PVCO Pipe",
    subtitle:
      "Company reinforces its commitment to innovation with a substantial investment in state-of-the-art PVCO manufacturing.",
    date: "06/23/2024",
    tags: ["Press Release"],
    image: "/news/tennessee-conference.jpg",
    excerpt:
      "Company reinforces its commitment to innovation with a substantial investment in state-of-the-art PVCO manufacturing.",
    content: `HOUSTON, May 23, 2024 – Westlake Pipe & Fittings, a division of Westlake Corporation (NYSE: WLK), has announced plans to build a new molecular-oriented polyvinyl chloride (PVCO) pipe plant at its manufacturing site in Wichita Falls, Texas. The facility expansion marks a significant milestone in Westlake's commitment to growth, innovation, and job creation in the region.

The expansion plan includes the addition of a 190,000 square-foot facility to the existing site situated at 3348 Industrial Drive, leveraging the region's strategic geographic location in the heart of the United States.

This investment will enhance Westlake Pipe & Fittings' product portfolio with the expansion of PVCO pipe manufacturing, an advanced molecular-oriented PVC pipe the business introduced in 2021, in Canada. Using cutting-edge technology, Westlake Pipe & Fittings PVCO pipe sets the standard in the industry by offering superior strength, durability, and potable water conveyance. The innovative material streamlines the assembly process, delivers exceptional performance, and a reduced environmental footprint.

"This strategic expansion reflects our commitment to pioneering advancements in processing technology, delivering sustainable products, and providing customer-centric solutions," said Andre Battistini, vice president, Westlake Pipe & Fittings. "The introduction of PVCO pipe manufacturing in the region reaffirms our dedication to offering customers an unparalleled selection of PVC pipe and fittings."

Westlake Pipe & Fittings expects the expansion to create new jobs for skilled professionals, and the company has worked closely with local government officials to secure their support for incentives related to the expansion. Construction is currently slated to begin by the end of 2024.`,
  },
  {
    id: "4",
    slug: "westlake-pipe-fittings-expands-operations-new-distribution-center-florida",
    title:
      "Westlake Pipe & Fittings Expands Operations with New Distribution Center in Florida",
    date: "06/15/2024",
    tags: ["Article"],
    image: "/news/distribution-center.jpg",
    excerpt:
      "The new distribution center offers enhanced delivery services of pipe and fittings systems, strengthening the commitment to customer satisfaction.",
    content: `The new distribution center offers enhanced delivery services of pipe and fittings systems, strengthening the commitment to customer satisfaction. This expansion marks a significant milestone in our continued growth strategy across the southeastern United States.

The state-of-the-art facility will enable faster delivery times and improved inventory management for our customers in Florida and surrounding regions.`,
  },
  {
    id: "5",
    slug: "pvc-benefits-pipeline-replacements-rehabilitation-projects",
    title:
      "PVC Benefits: Pipeline Replacements and Rehabilitation Projects Essential Knowledge Guide",
    date: "02/16/2024",
    tags: ["Article", "Certa-Lok®"],
    image: "/news/blue-pipes-closeup.jpg",
    excerpt:
      "This concise, practical guide (prepared by AWWA in partnership with Westlake Pipe & Fittings) covers the key properties, uses, and advantages of PVC water pipe.",
    content: `This concise, practical guide (prepared by AWWA in partnership with Westlake Pipe & Fittings) covers the key properties, uses, and advantages of PVC water pipe. It provides essential information for water utility professionals, engineers, and contractors working on pipeline replacement and rehabilitation projects.`,
  },
  {
    id: "6",
    slug: "view-awwa-webinar-pvc-pipe-safety-sustainability",
    title:
      "View the AWWA webinar focused on PVC Pipe: Safety and Sustainability",
    date: "10/10/2023",
    tags: ["Article"],
    image: "/news/pvc-fittings.jpg",
    excerpt:
      "Learn about our science-based insights, rigorous testing outcomes, and perspectives shared by prominent sustainability and toxicology experts.",
    content: `Learn about our science-based insights, rigorous testing outcomes, and perspectives shared by prominent sustainability and toxicology experts. This comprehensive webinar covers the latest research on PVC pipe safety and environmental impact.`,
  },
  {
    id: "7",
    slug: "infrastructure-rehabilitation-replacement-topping-list-water-sector-issues",
    title:
      "Infrastructure Rehabilitation and Replacement Topping List of Water Sector Issues",
    date: "08/11/2023",
    tags: ["Article"],
    image: "/news/pvc-pipes-desert.jpg",
    excerpt: "AWWA STATE OF THE WATER INDUSTRY 2023 REPORT",
    content: `AWWA STATE OF THE WATER INDUSTRY 2023 REPORT highlights infrastructure rehabilitation and replacement as a top priority for water utilities across the nation.`,
  },
  {
    id: "8",
    slug: "westlake-pipe-fittings-municipal-trade-show-booth-wins-showstopper-award-uct",
    title:
      "Westlake Pipe & Fittings' Municipal Trade Show Booth Wins Showstopper Award at UCT",
    date: "02/16/2023",
    tags: ["Article"],
    image: "/news/ribbon-cutting.jpg",
    excerpt:
      "Municipal Sales tradeshow booth takes home the gold at the Underground Construction Technology Conference (UCT), Orlando, Florida, February 7-9, 2023.",
    content: `Municipal Sales tradeshow booth takes home the gold at the Underground Construction Technology Conference (UCT), Orlando, Florida, February 7-9, 2023. The innovative booth design showcased our latest products and solutions for municipal water infrastructure.`,
  },
  {
    id: "9",
    slug: "national-ground-water-association-awards-excellence-honors-westlake",
    title:
      "National Ground Water Association - Awards of Excellence Honors Westlake Pipe & Fittings",
    date: "08/07/2022",
    tags: ["Article"],
    image: "/news/tennessee-conference.jpg",
    excerpt:
      "Certa-Lok® CLIC™, revolutionizing the Water Well industry with leading edge engineering.",
    content: `Certa-Lok® CLIC™, revolutionizing the Water Well industry with leading edge engineering. This prestigious award recognizes Westlake Pipe & Fittings for innovation and excellence in water well products.`,
  },
  {
    id: "10",
    slug: "welcoming-new-faces-building-talent-janesville-wisconsin",
    title: "Welcoming New Faces and Building Talent in Janesville, Wisconsin",
    date: "06/27/2022",
    tags: ["Article"],
    image: "/news/ribbon-cutting.jpg",
    excerpt: "Maintenance Apprenticeship Signing Day.",
    content: `Maintenance Apprenticeship Signing Day marks an important milestone in our commitment to developing the next generation of skilled workers in Janesville, Wisconsin.`,
  },
  {
    id: "11",
    slug: "napco-now-westlake-pipe-fittings",
    title: "NAPCO Now Westlake Pipe & Fittings",
    date: "05/02/2022",
    tags: ["Press Release"],
    image: "/news/distribution-center.jpg",
    excerpt: "Announcing the rebranding of NAPCO to Westlake Pipe & Fittings.",
    content: `Announcing the rebranding of NAPCO to Westlake Pipe & Fittings. This change reflects our continued growth and integration into the Westlake family of companies.`,
  },
  {
    id: "12",
    slug: "napcos-shelby-township-woodbridge-pipe-plants-come-together",
    title:
      "NAPCO's Shelby Township and Woodbridge Pipe Plants Come Together for Pipe and Fittings Help",
    date: "01/19/2022",
    tags: ["Article"],
    image: "/news/tennessee-conference.jpg",
    excerpt: "Westlake Values the Communities in Which We Work and Live",
    content: `Westlake Values the Communities in Which We Work and Live. Our team members from Shelby Township and Woodbridge came together to support local community initiatives.`,
  },
  {
    id: "13",
    slug: "westlakes-napco-pipe-fittings-introduces-high-performance-pvc-c909-pipe",
    title:
      "Westlake's NAPCO Pipe & Fittings Introduces High-Performance Molecular Oriented PVC C909 Pipe",
    date: "12/06/2021",
    tags: ["Press Release"],
    image: "/news/blue-pipes-closeup.jpg",
    excerpt:
      "New PVC Pipe Features Higher Performance and a Lower Carbon Footprint Than Past Products",
    content: `New PVC Pipe Features Higher Performance and a Lower Carbon Footprint Than Past Products. This innovative pipe solution represents a significant advancement in PVC technology.`,
  },
  {
    id: "14",
    slug: "napco-pipe-fittings-welcomed-lasco-fittings-team-westlake-family",
    title:
      "NAPCO Pipe & Fittings Welcomed LASCO Fittings and Its Team to Westlake Family of Companies",
    date: "09/01/2021",
    tags: ["Press Release"],
    image: "/news/ribbon-cutting.jpg",
    excerpt: "Welcoming LASCO Fittings to the Westlake family.",
    content: `Welcoming LASCO Fittings to the Westlake family. This acquisition strengthens our position in the pipe and fittings market.`,
  },
  {
    id: "15",
    slug: "napco-pipe-fittings-announces-completion-acquisition-lasco-fittings",
    title:
      "NAPCO Pipe & Fittings Announces Completion of Acquisition of LASCO Fittings",
    date: "08/16/2021",
    tags: ["Press Release"],
    image: "/news/pvc-pipes-desert.jpg",
    excerpt: "Acquisition completed, expanding our product portfolio.",
    content: `Acquisition completed, expanding our product portfolio. LASCO Fittings brings decades of expertise and a comprehensive range of products to the Westlake family.`,
  },
  {
    id: "16",
    slug: "napco-pipe-fittings-announces-acquisition-lasco-fittings-inc",
    title: "NAPCO Pipe & Fittings Announces Acquisition of LASCO Fittings Inc.",
    date: "07/06/2021",
    tags: ["Press Release"],
    image: "/news/distribution-center.jpg",
    excerpt: "Strategic acquisition announcement.",
    content: `Strategic acquisition announcement. NAPCO Pipe & Fittings to acquire LASCO Fittings Inc., expanding our market presence and product offerings.`,
  },
];

export const getArticleBySlug = (slug: string): NewsArticle | undefined => {
  return newsArticles.find((article) => article.slug === slug);
};

export const getFeaturedArticle = (): NewsArticle | undefined => {
  return newsArticles.find((article) => article.featured);
};

export const getRecentArticles = (excludeId?: string): NewsArticle[] => {
  return newsArticles.filter(
    (article) => article.id !== excludeId && !article.featured
  );
};

export const getPaginatedArticles = (
  page: number,
  perPage: number = 9,
  excludeFeatured: boolean = true
): { articles: NewsArticle[]; totalPages: number; totalArticles: number } => {
  const filtered = excludeFeatured
    ? newsArticles.filter((article) => !article.featured)
    : newsArticles;

  const totalArticles = filtered.length;
  const totalPages = Math.ceil(totalArticles / perPage);
  const startIndex = (page - 1) * perPage;
  const articles = filtered.slice(startIndex, startIndex + perPage);

  return { articles, totalPages, totalArticles };
};
