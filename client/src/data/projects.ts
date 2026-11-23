import type { ProjectData } from "../components/Project";
import epoxyslabThumbnail from "../assets/freelance-projects/epoxyslab/epoxyslab.webp";
import epoxyslabAdminCategories from "../assets/freelance-projects/epoxyslab/admin-categories.png";
import epoxyslabAdminProducts from "../assets/freelance-projects/epoxyslab/admin-products.png";
import epoxyslabAdminCategory from "../assets/freelance-projects/epoxyslab/admin-category.png";
import portfolioThumbnail from "../assets/personal-projects/portfolio.webp";
import subscribfyThumbnail from "../assets/professional-experience-projects/subscribfy.webp";
import suprevaThumbnail from "../assets/professional-experience-projects/supreva.webp";
import primaCasaThumbnail from "../assets/professional-experience-projects/crmprimacasa.webp";
import sfsTaxPayerThumbnail from "../assets/professional-experience-projects/sfstaxpayer.webp";

type ThumbnailLayout = "store" | "schedule" | "dashboard";
type CategoryColor = "indigo" | "teal" | "amber";

function createThumbnail(accent: string, layout: ThumbnailLayout) {
  const content = {
    store: `
      <rect x="194" y="146" width="116" height="138" rx="8" fill="#f1f5f9"/>
      <rect x="322" y="146" width="116" height="138" rx="8" fill="#f1f5f9"/>
      <rect x="450" y="146" width="116" height="138" rx="8" fill="#f1f5f9"/>
      <rect x="194" y="146" width="116" height="78" rx="8" fill="${accent}" opacity=".18"/>
      <rect x="322" y="146" width="116" height="78" rx="8" fill="${accent}" opacity=".28"/>
      <rect x="450" y="146" width="116" height="78" rx="8" fill="${accent}" opacity=".4"/>
      <rect x="194" y="238" width="74" height="8" rx="4" fill="#cbd5e1"/>
      <rect x="194" y="256" width="48" height="7" rx="3" fill="${accent}"/>
      <rect x="322" y="238" width="74" height="8" rx="4" fill="#cbd5e1"/>
      <rect x="322" y="256" width="48" height="7" rx="3" fill="${accent}"/>
      <rect x="450" y="238" width="74" height="8" rx="4" fill="#cbd5e1"/>
      <rect x="450" y="256" width="48" height="7" rx="3" fill="${accent}"/>
    `,
    schedule: `
      <rect x="194" y="146" width="372" height="36" rx="6" fill="${accent}" opacity=".12"/>
      <rect x="208" y="158" width="88" height="10" rx="5" fill="${accent}"/>
      <rect x="194" y="196" width="372" height="1" fill="#e2e8f0"/>
      <rect x="194" y="212" width="58" height="56" rx="6" fill="${accent}" opacity=".2"/>
      <rect x="264" y="212" width="102" height="56" rx="6" fill="#f1f5f9"/>
      <rect x="378" y="212" width="74" height="56" rx="6" fill="${accent}" opacity=".32"/>
      <rect x="464" y="212" width="102" height="56" rx="6" fill="#f1f5f9"/>
      <rect x="194" y="282" width="94" height="30" rx="6" fill="#f1f5f9"/>
      <rect x="300" y="282" width="122" height="30" rx="6" fill="${accent}" opacity=".2"/>
      <rect x="434" y="282" width="132" height="30" rx="6" fill="#f1f5f9"/>
    `,
    dashboard: `
      <rect x="194" y="146" width="112" height="58" rx="7" fill="${accent}" opacity=".14"/>
      <rect x="320" y="146" width="112" height="58" rx="7" fill="#f1f5f9"/>
      <rect x="446" y="146" width="120" height="58" rx="7" fill="#f1f5f9"/>
      <rect x="208" y="160" width="48" height="7" rx="3" fill="#94a3b8"/>
      <rect x="208" y="176" width="72" height="13" rx="5" fill="${accent}"/>
      <rect x="334" y="160" width="48" height="7" rx="3" fill="#94a3b8"/>
      <rect x="334" y="176" width="72" height="13" rx="5" fill="#64748b"/>
      <rect x="460" y="160" width="48" height="7" rx="3" fill="#94a3b8"/>
      <rect x="460" y="176" width="72" height="13" rx="5" fill="#64748b"/>
      <rect x="194" y="220" width="372" height="92" rx="7" fill="#f8fafc"/>
      <path d="M210 286 L252 266 L290 276 L330 244 L370 260 L412 234 L452 250 L490 230 L550 240" fill="none" stroke="${accent}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    `,
  }[layout];

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="640" height="400" viewBox="0 0 640 400">
      <rect width="640" height="400" fill="#eef2f7"/>
      <rect x="28" y="28" width="584" height="344" rx="14" fill="#fff" stroke="#dbe2ea"/>
      <path d="M42 28h556a14 14 0 0 1 14 14v28H28V42a14 14 0 0 1 14-14Z" fill="#f8fafc"/>
      <circle cx="50" cy="49" r="5" fill="#fca5a5"/>
      <circle cx="68" cy="49" r="5" fill="#fcd34d"/>
      <circle cx="86" cy="49" r="5" fill="#86efac"/>
      <rect x="198" y="42" width="244" height="14" rx="7" fill="#e2e8f0"/>
      <rect x="50" y="88" width="112" height="12" rx="6" fill="${accent}" opacity=".85"/>
      <rect x="50" y="122" width="112" height="8" rx="4" fill="#e2e8f0"/>
      <rect x="50" y="146" width="92" height="8" rx="4" fill="#e2e8f0"/>
      <rect x="50" y="170" width="104" height="8" rx="4" fill="#e2e8f0"/>
      <rect x="50" y="194" width="82" height="8" rx="4" fill="#e2e8f0"/>
      <text x="194" y="116" fill="#1e293b" font-family="Arial, sans-serif" font-size="17" font-weight="700">Project overview</text>
      ${content}
    </svg>
  `;

  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const projectCategories: {
  title: string;
  label: string;
  description?: string;
  color: CategoryColor;
  projects: ProjectData[];
}[] = [
  {
    title: "Freelance Projects",
    label: "Real client work",
    description: "Projects I developed for clients, either from scratch or by extending existing platforms",
    color: "indigo",
    projects: [
      {
        name: "EpoxySlab",
        description: "An online furniture catalog built from scratch to showcase custom-made epoxy resin furniture, including tables, chairs, beds, and wardrobes. The platform includes a customer-facing catalog and an administration panel for managing products, categories, and orders.",
        href: "/project/epoxyslab",
        slug: "epoxyslab",
        websiteHref: "https://dev.epoxyslab.md/",
        thumbnail: epoxyslabThumbnail,
        thumbnailAlt: "EpoxySlab furniture catalog website",
        technologies: ["Laravel", "Inertia.js", "React", "TypeScript", "MySQL"],
        contributions: [
          "Built the application from scratch.",
          "Developed the frontend and backend.",
          "Implemented product and category management.",
          "Developed product detail pages.",
          "Developed cart page.",
          "Implemented order management.",
          "Created an administration panel for managing catalog content.",
        ],
        screenshots: [
          {
            src: epoxyslabAdminCategories,
            alt: "EpoxySlab admin panel categories screen",
            caption: "Category management",
          },
          {
            src: epoxyslabAdminProducts,
            alt: "EpoxySlab admin panel products screen",
            caption: "Product management",
          },
          {
            src: epoxyslabAdminCategory,
            alt: "EpoxySlab admin panel category form",
            caption: "Category details",
          },
        ],
      },
    ],
  },
  {
    title: "Personal Projects",
    label: "Public code",
    description: "Projects I independently build from scratch",
    color: "teal",
    projects: [
      {
        name: "Serghei Muntean | Portfolio",
        description: "A personal portfolio website showcasing my projects, technical skills, and professional experience.",
        thumbnail: portfolioThumbnail,
        thumbnailAlt: "Illustrated developer portfolio project thumbnail",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
      },
      // Later:
      // {
      //   name: "LinguaReady",
      //   description: "A platform for learning languages through interactive exercises, games, and AI-powered practice.",
      //   href: "#",
      //   websiteHref: "https://example.com",
      //   thumbnail: createThumbnail("#ca8a04", "store"),
      //   thumbnailAlt: "Illustrated recipe planner project thumbnail",
      //   technologies: ["Next.js", "TypeScript", "Prisma"],
      // },

      // Status: Abandoned
      // {
      //   name: "JobReady",
      //   description: "",
      //   href: "#",
      //   thumbnail: createThumbnail("#0891b2", "dashboard"),
      //   thumbnailAlt: "Illustrated habit tracker project thumbnail",
      //   technologies: ["React", "Node.js", "PostgreSQL"],
      // },
    ],
  },
  {
    title: "Professional Experience Projects",
    label: "Commercial experience",
    color: "amber",
    projects: [
      {
        name: "Karpaten — Tourism ERP Back Office",
        description: "A back-office ERP platform developed for Karpaten, supporting tourism operations, booking management, customer services, and integrations with external travel providers.",
        href: "#",
        websiteHref: "https://karpaten.ro",
        company: { name: "Filip NET SRL", experienceId: "experience-filip-net-srl" },
        thumbnail: createThumbnail("#2563eb", "store"),
        thumbnailAlt: "Karpaten tourism ERP back-office dashboard interface",
        technologies: ["PHP", "MySQL", "JavaScript", "React"],
        contributions: [
          "Developed and maintained a large-scale ERP platform for the tourism industry, supporting booking management, customer operations, and integrations with external travel services.",
          "Implemented Two-Factor Authentication (2FA) to improve account security.",
          "Implemented integration with Moldova's e-Factura system for electronic invoice processing.",
        ],
      },
      {
        name: "Subscribfy — Shopify App",
        description: "A Shopify application built with Laravel that enables merchants to manage customer discounts and store credits.",
        href: "#",
        websiteHref: "https://apps.shopify.com/subscribfy",
        company: { name: "Subscribfy", experienceId: "experience-subscribfy" },
        thumbnail: subscribfyThumbnail,
        thumbnailAlt: "Illustrated thumbnail representing a Shopify application for managing customer discounts and store credits",
        technologies: ["Laravel", "MySQL", "JavaScript", "React"],
        contributions: [
          "Developed and maintained a Shopify application built with Laravel, enabling merchants to manage customer discounts and store credits.",
          "Integrated a storefront widget into Shopify themes to display VIP membership benefits.",
          "Implemented interactive charts and data tables using Polaris Viz.",
          "Developed CSV export functionality using Laravel Excel.",
        ],
      },
      {
        name: "Supreva.com",
        description: "A B2B multi-vendor eCommerce marketplace connecting suppliers, manufacturers, distributors, and business buyers through an online wholesale platform.",
        href: "#",
        websiteHref: "https://supreva.com",
        company: { name: "OCEANO MERCADO SRL", experienceId: "experience-oceano-mercado-srl" },
        thumbnail: suprevaThumbnail,
        thumbnailAlt: "Illustrated integration hub project thumbnail",
        technologies: ["PHP", "MySQL", "JavaScript"],
        contributions: [
          "Contributed to the development and modernization of supreva.com, a multi-vendor eCommerce marketplace built with CS-Cart, PHP 7.4, and Smarty.",
          "Participated in the gradual frontend migration from Smarty to React.",
          "Delivered frontend enhancements, bug fixes, and UI improvements throughout the migration.",
          "Developed a feature to merge uploaded PDF documents.",
          "Implemented an approval and rejection workflow for buyer-vendor messages, enabling administrator moderation.",
        ],
      },
      {
        name: "Prima Casa",
        description: "A government platform for managing mortgage guarantee applications, streamlining application processing, eligibility verification, and approval workflows under the Prima Casă program.",
        href: "#",
        websiteHref: "https://crm.primacasa.gov.md/login",
        company: { name: "CTIF", experienceId: "experience-ctif" },
        thumbnail: primaCasaThumbnail,
        thumbnailAlt: "Illustrated integration hub project thumbnail",
        technologies: ["Laravel", "MySQL", "JavaScript"],
        contributions: [
          "Developed and maintained government web applications.",
          "Implemented backend functionality using Laravel and frontend interfaces using Vue.js.",
          "Integrated external services using SOAP APIs.",
          "Implemented role-based access control and business workflows.",
        ],
      },
      {
        name: "Taxpayer Personal Account",
        description: "An online government portal for taxpayers to access tax services and manage their tax-related information",
        href: "#",
        websiteHref: "https://sfs.md/ro/cabinetul-contribuabilului/login",
        company: { name: "CTIF", experienceId: "experience-ctif" },
        thumbnail: sfsTaxPayerThumbnail,
        thumbnailAlt: "Illustrated integration hub project thumbnail",
        technologies: ["Laravel", "MySQL", "Vue.js 2"],
        contributions: [
          "Developed and maintained government web applications.",
          "Implemented backend functionality using Laravel and frontend interfaces using Vue.js.",
          "Integrated external services using SOAP APIs.",
          "Implemented role-based access control and business workflows.",
        ],
      },
    ],
  },
];
