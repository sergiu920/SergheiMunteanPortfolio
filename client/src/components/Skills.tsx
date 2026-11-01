export default function Skills() {
  const skillGroups = [
    {
      title: "Backend Development",
      skills: ["PHP", "Laravel", "SQL", "MySQL"],
    },
    {
      title: "APIs & Integrations",
      skills: ["REST APIs", "SOAP", "Third-party Integrations"],
    },
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React"],
    },
    // Later:
    // {
    //   title: "Testing & Quality",
    //   skills: ["PHPUnit"],
    // },
    {
      title: "Node.js Ecosystem - Beginner",
      skills: ["Node.js", "Express.js", "PostgreSQL"],
    },
    // Later:
    // {
    //   title: ".NET Ecosystem",
    //   skills: ["C#", ".NET"],
    // },
    {
      title: "E-commerce & CMS",
      skills: ["Shopify", "WordPress", "CS-Cart"],
    },
    // Later:
    // {
    //   title: "Payment Integration",
    //   skills: ["Stripe"],
    // },
    {
      title: "Architecture & Concepts",
      skills: ["OOP", "MVC"],
    },
    {
      title: "Tools",
      //Later: "CI/CD", Kubernetes, Redis
      skills: ["Git", "Docker"],
    },
    {
      title: "AI-Assisted Development",
      // Later: Claude Code
      skills: ["GitHub Copilot"],
    },
    {
      title: "Currently Learning",
      skills: ["Python", "Data Structures & Algorithms"],
    },
  ];

  return (
    <section id="skills" className="skills-section scroll-mt-16">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <div className="skills-heading">
          <div>
            <p className="skills-eyebrow">Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 md:text-4xl">
              Technical Skills & Technologies
            </h2>
          </div>
          <p className="skills-intro">
            Technologies and technical skills I use to develop web applications, backend systems, and modern user interfaces.
          </p>
        </div>

        <div className="skills-groups">
          {skillGroups.map((group, index) => (
            <section className="skill-group" key={group.title} aria-labelledby={`skill-group-${index}`}>
              <h3 id={`skill-group-${index}`}>{group.title}</h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}