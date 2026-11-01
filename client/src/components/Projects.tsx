import Project, { type ProjectData } from "./Project";

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

const projectCategories: {
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
        description: "A furniture catalog website showcasing a variety of products, including tables, chairs, beds, wardrobes, and more.",
        href: "#",
        websiteHref: "https://example.com",
        thumbnail: createThumbnail("#4f46e5", "store"),
        thumbnailAlt: "Illustrated storefront project thumbnail",
        technologies: ["Laravel", "Inertia.js", "React", "TypeScript", "MySQL"],
      },
      {
        name: "Appointment Booking",
        description: "A booking portal concept for browsing services and managing appointments online.",
        href: "#",
        thumbnail: createThumbnail("#0f766e", "schedule"),
        thumbnailAlt: "Illustrated appointment booking project thumbnail",
        technologies: ["Laravel", "PHP", "MySQL"],
      },
      {
        name: "Business Dashboard",
        description: "A dashboard concept for bringing business activity and performance metrics together.",
        href: "#",
        websiteHref: "https://example.com",
        thumbnail: createThumbnail("#c2410c", "dashboard"),
        thumbnailAlt: "Illustrated business dashboard project thumbnail",
        technologies: ["PHP", "JavaScript", "Chart.js"],
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
        name: "Developer Portfolio",
        description: "A personal portfolio concept for presenting projects, skills, and professional experience.",
        href: "#",
        websiteHref: "https://example.com",
        thumbnail: createThumbnail("#7c3aed", "dashboard"),
        thumbnailAlt: "Illustrated developer portfolio project thumbnail",
        technologies: ["React", "TypeScript", "Tailwind CSS"],
      },
      {
        name: "Habit Tracker",
        description: "A simple habit tracking concept for building routines and reviewing progress over time.",
        href: "#",
        thumbnail: createThumbnail("#0891b2", "dashboard"),
        thumbnailAlt: "Illustrated habit tracker project thumbnail",
        technologies: ["React", "Node.js", "PostgreSQL"],
      },
      {
        name: "Recipe Planner",
        description: "A meal planning concept for organizing recipes and preparing a weekly menu.",
        href: "#",
        websiteHref: "https://example.com",
        thumbnail: createThumbnail("#ca8a04", "store"),
        thumbnailAlt: "Illustrated recipe planner project thumbnail",
        technologies: ["Next.js", "TypeScript", "Prisma"],
      },
    ],
  },
  {
    title: "Professional Experience Projects",
    label: "Commercial experience",
    color: "amber",
    projects: [
      {
        name: "E-commerce Platform",
        description: "A commerce platform concept for managing product catalogs, customer orders, and fulfillment.",
        href: "#",
        websiteHref: "https://example.com",
        thumbnail: createThumbnail("#2563eb", "store"),
        thumbnailAlt: "Illustrated e-commerce platform project thumbnail",
        technologies: ["PHP", "Laravel", "MySQL"],
      },
      {
        name: "Order Management System",
        description: "An operations workspace concept for tracking orders and coordinating business workflows.",
        href: "#",
        thumbnail: createThumbnail("#be123c", "dashboard"),
        thumbnailAlt: "Illustrated order management system project thumbnail",
        technologies: ["Laravel", "JavaScript", "REST API"],
      },
      {
        name: "Integration Hub",
        description: "An integration service concept for connecting business tools and synchronizing information.",
        href: "#",
        websiteHref: "https://example.com",
        thumbnail: createThumbnail("#15803d", "schedule"),
        thumbnailAlt: "Illustrated integration hub project thumbnail",
        technologies: ["PHP", "REST APIs", "MySQL"],
      },
    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="projects-heading">
          <div>
            <p className="text-sm font-semibold text-indigo-600">Projects I've Worked On</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">Projects</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-gray-600">
              Explore projects across freelance work, personal experiments, and professional experience.
            </p>
          </div>
        </div>

        <div className="projects-categories">
          {projectCategories.map((category) => (
            <section className={`projects-category projects-category--${category.color}`} key={category.title}>
              <div className="projects-category-header">
                <h3 className="projects-category-heading">{category.title}</h3>
                <span className="projects-category-label">{category.label}</span>
              </div>
              {category.description && (
                <p className="projects-category-description">{category.description}</p>
              )}
              <div className="projects-grid">
                {category.projects.map((project) => (
                  <Project key={project.name} project={project} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}