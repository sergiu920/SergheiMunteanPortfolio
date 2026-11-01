export default function About() {
  return (
    <section id="about" className="about-section scroll-mt-16">
      <div className="about-inner mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div>
          <p className="about-eyebrow">About</p>
          <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight text-white md:text-5xl">
            I build useful things for the web.
          </h2>
          <p className="about-intro">
            I enjoy turning ideas and business requirements into practical software. My work involves understanding how different parts of an application fit together, identifying problems, and developing solutions that are reliable and easy to maintain.
          </p>
          
          <p className="about-intro">
            Throughout my career, I've worked on projects ranging from business management systems and e-commerce platforms to API integrations and custom web applications.
          </p>

          <p className="about-intro">
            I value clean architecture, maintainable code, and continuous learning. I believe good software isn't just about making things work — it's about building solutions that make people's work easier.
          </p>
        </div>

        <div>
          <p className="about-focus-label">Areas of focus</p>
          <ul className="about-focus-list">
            <li className="about-focus-item">
              <span className="about-focus-number">01</span>
              <div>
                <h3>Backend Development</h3>
                <p>Developing backend functionality, REST APIs, database operations, and third-party integrations using PHP and Laravel.</p>
              </div>
            </li>
            <li className="about-focus-item">
              <span className="about-focus-number">02</span>
              <div>
                <h3>Frontend Development</h3>
                <p>Creating responsive, user-friendly interfaces with JavaScript, React, and modern web technologies.</p>
              </div>
            </li>
            <li className="about-focus-item">
              <span className="about-focus-number">03</span>
              <div>
                <h3>E-commerce Solutions</h3>
                <p>Developing and maintaining e-commerce platforms, custom features, and integrations that support online businesses.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}