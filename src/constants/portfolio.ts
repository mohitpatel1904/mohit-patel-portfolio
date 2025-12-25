// Portfolio constants - All portfolio data in one place

export interface Author {
  _id: string;
  name: string;
  initials: string;
  avatar?: {
    asset?: {
      url?: string;
    };
  };
  description?: any[];
  summary?: any[];
  location?: string;
  skills?: string[];
  social?: {
    github?: string;
    linkedin?: string;
    twitter?: string;
    youtube?: string;
    email?: string;
  };
}

export interface WorkExperience {
  _id: string;
  company: string;
  title: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  location?: string;
  startDate: string;
  endDate?: string;
  description?: any[];
  url?: string;
}

export interface Education {
  _id: string;
  school: string;
  degree: string;
  logo?: {
    asset?: {
      url?: string;
    };
  };
  startDate: string;
  endDate: string;
  url?: string;
}

export interface Project {
  _id: string;
  title: string;
  description: any[];
  startDate?: string;
  endDate?: string;
  technologies?: string[];
  image?: {
    asset?: {
      url?: string;
    };
  };
  video?: string;
  links?: {
    title: string | null;
    url: string | null;
    type: string | null;
  }[];
}

// Portfolio data
export const AUTHOR: Author = {
  _id: "author-1",
  name: "Mohit Patel",
  initials: "MP",
  avatar: {
    asset: {
      url: "https://avatars.githubusercontent.com/u/mohitpatel1904",
    },
  },
  description: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "I automate the web and extract its data.",
        },
      ],
    },
  ],
  summary: [
    {
      _type: "block",
      children: [
        {
          _type: "span",
          text: "Selenium Automation & Data Scraping Engineer with hands-on experience building scalable web crawlers for articles, images, and structured datasets. Specialized in dynamic website handling, infinite scrolling, XPath navigation, and clean CSV dataset generation using Python automation pipelines.",
        },
      ],
    },
  ],
  location: "India",
  skills: [
    "Python",
    "Selenium",
    "BeautifulSoup",
    "Requests",
    "Web Scraping",
    "Data Extraction",
    "CSV/Dataset Structuring",
    "XPath & DOM Navigation",
    "Dynamic Scrolling",
    "Duplicate Filtering",
    "Image Dataset Collection",
  ],
  social: {
    github: "https://github.com/mohitpatel1904",
    linkedin: "https://www.linkedin.com/in/mohit-patel",
    email: "mp1942458@gmail.com",
  },
};

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    _id: "work-1",
    company: "Large-Scale Article Scraping Automation",
    title: "Selenium Automation Engineer",
    location: "Remote",
    startDate: "2025",
    endDate: "Present",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Designed and implemented multiple Selenium-based automation pipelines for large-scale article extraction from dynamic news and blog platforms including swentr.site, sputniknews.in, en.sputniknews.africa, kisses-for-breakfast.com, and healthychildren.org.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key achievements: Dynamic scrolling & pagination handling, load-more button automation, XPath-based navigation, duplicate article filtering, and clean CSV export of article links & metadata.",
          },
        ],
      },
    ],
    url: "https://github.com/mohitpatel1904/Selenium-Experience/tree/main/Article_link",
  },
  {
    _id: "work-2",
    company: "Spot the Difference Image & Article Scraper",
    title: "Data Scraping Specialist",
    location: "Remote",
    startDate: "2025",
    endDate: "2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Built a comprehensive scraper to collect and compare datasets from multiple visual content platforms to identify content differences and duplicates. Target platforms include Freepik, Pinterest, and iStockphoto.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key achievements: Multi-site scraping logic, structured dataset creation, duplicate and similarity-based filtering, and automated link collection for visual content analysis.",
          },
        ],
      },
    ],
    url: "https://github.com/mohitpatel1904/Selenium-Experience/tree/main/Article_link",
  },
  {
    _id: "work-3",
    company: "Illustration Image Scraper (Unsplash)",
    title: "Image Dataset Engineer",
    location: "Remote",
    startDate: "2025",
    endDate: "2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developed an automation pipeline to extract high-quality illustration-style images from Unsplash based on client-defined categories including animal, person, and object illustrations.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key achievements: Category-based image scraping, metadata extraction (URLs, dimensions), and CSV-formatted dataset generation for machine learning and analytics purposes.",
          },
        ],
      },
    ],
    url: "https://github.com/mohitpatel1904/unsplash_illustration_img_scraper",
  },
  {
    _id: "work-4",
    company: "Illustration Image Scraper (Vecteezy)",
    title: "Image Dataset Engineer",
    location: "Remote",
    startDate: "2025",
    endDate: "2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Extended the illustration scraping concept to Vecteezy with scalable automation logic. Built optimized Selenium flows for efficient data collection.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key achievements: Category-based scraping with pagination handling, clean image dataset generation, and optimized browser automation for high-volume extraction.",
          },
        ],
      },
    ],
    url: "https://github.com/mohitpatel1904/vecteezy_img_scraper",
  },
  {
    _id: "work-5",
    company: "Pinterest Illustration Image Scraper",
    title: "Image Dataset Engineer",
    location: "Remote",
    startDate: "2025",
    endDate: "2025",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Developed a specialized automation pipeline to extract high-quality illustration images from Pinterest across multiple categories including animal, human, and object illustrations for AI/ML training datasets.",
          },
        ],
      },
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Key achievements: Category-based image scraping with infinite scroll handling, intelligent duplicate detection using perceptual hashing, metadata extraction (URLs, dimensions, categories), and structured CSV dataset generation optimized for machine learning workflows.",
          },
        ],
      },
    ],
    url: "https://github.com/mohitpatel1904/Pinterest_Illustration-_img",
  },
];

export const EDUCATION: Education[] = [
  // Education section intentionally left empty per user request
];

export const PROJECTS: Project[] = [
  {
    _id: "project-1",
    title: "Large-Scale Article Scraping Automation",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Selenium-based automation pipelines for large-scale article extraction from dynamic news platforms. Features dynamic scrolling, pagination handling, XPath navigation, duplicate filtering, and CSV export.",
          },
        ],
      },
    ],
    technologies: ["Python", "Selenium", "XPath", "CSV", "BeautifulSoup"],
    image: {
      asset: {
        url: "/projects/project-1.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/mohitpatel1904/Selenium-Experience/tree/main/Article_link",
        type: "code",
      },
    ],
  },
  {
    _id: "project-2",
    title: "Spot the Difference Image Scraper",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Multi-platform scraper for visual content comparison and duplicate detection across Freepik, Pinterest, and iStockphoto. Includes structured dataset creation and similarity-based filtering.",
          },
        ],
      },
    ],
    technologies: ["Python", "Selenium", "Multi-Site Logic", "Dataset Structuring"],
    image: {
      asset: {
        url: "/projects/project-2.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/mohitpatel1904/Selenium-Experience/tree/main/Article_link",
        type: "code",
      },
    ],
  },
  {
    _id: "project-3",
    title: "Unsplash Illustration Scraper",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Automation pipeline to extract high-quality illustration images from Unsplash. Supports category-based scraping (animals, persons, objects) with metadata extraction and CSV-formatted output.",
          },
        ],
      },
    ],
    technologies: ["Python", "Selenium", "API Integration", "CSV", "Metadata Extraction"],
    image: {
      asset: {
        url: "/projects/project-3.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/mohitpatel1904/unsplash_illustration_img_scraper",
        type: "code",
      },
    ],
  },
  {
    _id: "project-4",
    title: "Vecteezy Illustration Scraper",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Scalable illustration scraper for Vecteezy with optimized Selenium flows. Features category-based scraping, pagination handling, and high-volume image dataset generation.",
          },
        ],
      },
    ],
    technologies: ["Python", "Selenium", "Pagination", "Image Processing", "CSV"],
    image: {
      asset: {
        url: "/projects/project-4.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/mohitpatel1904/vecteezy_img_scraper",
        type: "code",
      },
    ],
  },
  {
    _id: "project-5",
    title: "Pinterest Illustration Scraper",
    description: [
      {
        _type: "block",
        children: [
          {
            _type: "span",
            text: "Advanced Pinterest scraper for collecting illustration images across animal, human, and object categories. Features infinite scroll automation, perceptual hashing for duplicate detection, and ML-ready dataset generation.",
          },
        ],
      },
    ],
    technologies: ["Python", "Selenium", "Perceptual Hashing", "Infinite Scroll", "CSV"],
    image: {
      asset: {
        url: "/projects/project-5.webp",
      },
    },
    links: [
      {
        title: "Source Code",
        url: "https://github.com/mohitpatel1904/Pinterest_Illustration-_img",
        type: "code",
      },
    ],
  },
];
