const experience = [
  {
    id: "experience-filip-net-srl",
    role: "Full-Stack Developer (PHP)",
    company: "Filip NET SRL",
    period: "Feb 2025 – Apr 2026",
    location: "Remote",
    highlights: [
      "Developed and maintained a large-scale ERP platform for the tourism industry (karpaten.ro), supporting booking management, customer operations, and integrations with external travel services.",
      "Implemented Two-Factor Authentication (2FA) to improve account security",
      "Implemented integration with Moldova's e-Factura system for electronic invoice processing."
    ],
  },
  {
    id: "experience-subscribfy",
    role: "Full-Stack Developer (Laravel, Shopify)",
    company: "Subscribfy",
    period: "Apr 2024 – Dec 2024",
    location: "Timișoara",
    highlights: [
      "Developed and maintained a Shopify application built with Laravel, enabling merchants to manage customer discounts and store credits.",
      "Integrated a storefront widget into Shopify themes to display VIP membership benefits.",
      "Implemented interactive charts and data tables using Polaris Viz.",
      "Developed CSV export functionality using Laravel Excel."
    ],
  },
  {
    id: "experience-oceano-mercado-srl",
    role: "Full-Stack Developer (PHP, React)",
    company: "OCEANO MERCADO SRL",
    period: "Feb 2023 – Mar 2024",
    location: "Remote",
    highlights: [
      "Contributed to the development and modernization of supreva.com, a multi-vendor eCommerce marketplace built with CS-Cart, PHP 7.4, and Smarty.",
      "Participated in the gradual frontend migration from Smarty to React.",
      "Delivered frontend enhancements, bug fixes, and UI improvements throughout the migration.",
      "Developed a feature to merge uploaded PDF documents.",
      "Implemented an approval and rejection workflow for buyer-vendor messages, enabling administrator moderation.",
    ],
  },
  {
    id: "experience-ctif",
    role: "Full-Stack Developer (Laravel, Vue.js)",
    company: "Center of Information Technologies in Finance (CTIF)",
    period: "Oct 2018 – Feb 2023",
    location: "Chișinău",
    highlights: [
      "Developed and maintained government web applications.",
      "Implemented backend functionality using Laravel and frontend interfaces using Vue.js.",
      "Integrated external services using SOAP APIs.",
      "Implemented role-based access control and business workflows.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="experience-section scroll-mt-16" aria-labelledby="experience-title">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="experience-heading">
          <div>
            <p className="experience-eyebrow">Career</p>
            <h2 id="experience-title" className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Experience
            </h2>
          </div>
          <p className="experience-intro">
            Eight years building and maintaining web applications across e-commerce,
            enterprise, and public-sector platforms.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((entry) => (
            <article className="experience-entry" id={entry.id} key={entry.company}>
              <div className="experience-detail">
                <div className="experience-entry-heading">
                  <div>
                    <h3>{entry.company}</h3>
                    <p className="experience-company">{entry.role}</p>
                  </div>
                  <div className="experience-meta">
                    <p className="experience-period">{entry.period}</p>
                    <p className="experience-location">{entry.location}</p>
                  </div>
                </div>
                <ul>
                  {entry.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}