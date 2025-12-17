'use client';
import '../style/global.css';
function VyomaLabs() {
  return (
    <div className="has-background-black-ter has-text-white">

      {/* HERO */}
      <section className="hero is-medium is-dark">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-1 has-text-white">
              Vyoma Labs
            </h1>
            <h2 className="subtitle has-text-grey-light">
              Research Wing of{" "}
              <a
                href="https://vyoma.co"
                target="_blank"
                rel="noopener noreferrer"
                className="has-text-link"
              >
                Vyoma.co
              </a>
            </h2>
            <p className="mt-4">
              A place to research, experiment, and invent new frameworks,
              languages, and systems.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="section">
        <div className="container">
          <h2 className="title has-text-white">About Vyoma Labs</h2>
          <p className="content has-text-grey-light">
            Vyoma Labs is the research and experimentation wing of{" "}
            <a
              href="https://vyoma.co"
              target="_blank"
              rel="noopener noreferrer"
              className="has-text-link"
            >
              Vyoma.co
            </a>.
            It focuses on foundational research in programming languages,
            frameworks, developer tooling, and browser-native systems.
          </p>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="section has-background-dark">
        <div className="container">
          <h2 className="title has-text-white">Research Areas</h2>

          <div className="columns is-multiline mt-4">

            <div className="column is-4">
              <div className="box has-background-black-ter">
                <h3 className="title is-5 has-text-white">
                  Meta-Languages & Compilers
                </h3>
                <p className="has-text-grey-light">
                  Browser-Native Languages (BNL), interpreters,
                  experimental syntax, and language design.
                </p>
              </div>
            </div>

            <div className="column is-4">
              <div className="box has-background-black-ter">
                <h3 className="title is-5 has-text-white">
                  Frameworks & UI Systems
                </h3>
                <p className="has-text-grey-light">
                  Lightweight UI kits, component libraries,
                  and developer-first frameworks.
                </p>
              </div>
            </div>

            <div className="column is-4">
              <div className="box has-background-black-ter">
                <h3 className="title is-5 has-text-white">
                  Browser & Web Systems
                </h3>
                <p className="has-text-grey-light">
                  JavaScript runtimes, browser-native execution,
                  and future web architectures.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PROJECTS / PUBLICATIONS */}
      <section className="section">
        <div className="container">
          <h2 className="title has-text-white">Publications & Projects</h2>

          <div className="content has-text-grey-light">
            <ul>
              <li>
                <strong>BNL: Browser-Native Meta-Language Framework</strong><br />
                <a
                  href="https://zenodo.org/records/17952448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="has-text-link"
                >
                  View publication on Zenodo (DOI)
                </a>
              </li>

              <li className="mt-3">
                <strong>Hinglish Programming Language</strong><br />
                <a
                  href="https://github.com/Pjdeveloper896/Hinglish-language"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="has-text-link"
                >
                  GitHub Repository
                </a>
              </li>

              <li className="mt-3">
                <strong>YourUIKit</strong><br />
                <a
                  href="https://www.npmjs.com/package/youruikit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="has-text-link"
                >
                  NPM Package
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="section has-background-dark">
        <div className="container has-text-centered">
          <h2 className="title has-text-white">Philosophy</h2>
          <p className="has-text-grey-light">
            “I never think about success.  
            I think about creating something meaningful.”
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer has-background-black-ter">
        <div className="content has-text-centered has-text-grey-light">
          <p>
            © {new Date().getFullYear()}{" "}
            <a
              href="https://vyoma.co"
              target="_blank"
              rel="noopener noreferrer"
              className="has-text-link"
            >
              Vyoma Labs
            </a>{" "}
            · Research Wing of Vyoma.co
          </p>
        </div>
      </footer>

    </div>
  );
}

export default VyomaLabs;
