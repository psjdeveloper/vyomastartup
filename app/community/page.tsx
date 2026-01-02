"use client";

export default function Community() {
  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "4rem 1.5rem",
        backgroundColor: "#0b0f14",
        color: "#eaeaea",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      {/* HERO */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>
          TechCircle by Vyoma
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.85 }}>
          A quiet, focused community for developers who want to learn, build,
          and grow — without noise.
        </p>
      </section>

      {/* DIVIDER */}
      <hr
        style={{
          margin: "3rem auto",
          maxWidth: "600px",
          borderColor: "#222",
        }}
      />

      {/* WHAT WE DO */}
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2>What happens inside TechCircle?</h2>
        <ul style={{ lineHeight: "2", marginTop: "1rem" }}>
          <li>💻 Tech & product discussions</li>
          <li>🧠 Real-world code problem solving</li>
          <li>📝 Text-based conferences (TextConf)</li>
          <li>🔐 Security awareness through VSAP</li>
          <li>🚀 Building and shipping in public</li>
        </ul>
      </section>

      {/* TEXTCONF */}
      <section
        style={{
          maxWidth: "900px",
          margin: "3rem auto",
          padding: "2rem",
          backgroundColor: "#121822",
          borderRadius: "12px",
        }}
      >
        <h2>TextConf — Text-based Conferences</h2>
        <p style={{ opacity: 0.85 }}>
          Not everyone likes voice calls. TextConf is our calm, focused format
          where ideas matter more than microphones.
        </p>
        <ul style={{ lineHeight: "2", marginTop: "1rem" }}>
          <li>30–45 minute text-only sessions</li>
          <li>One topic at a time</li>
          <li>Open Q&A and discussion</li>
          <li>Beginner-friendly, pressure-free</li>
        </ul>
      </section>

      {/* VSAP */}
      <section style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h2>VSAP — Vyoma Security Awareness Program</h2>
        <p style={{ opacity: 0.85 }}>
          We use ethical OSINT insights to understand how public data is misused
          and teach people how to stay secure online.
        </p>
        <p style={{ marginTop: "0.5rem", opacity: 0.75 }}>
          No fear-mongering. No exploitation. Awareness over panic.
        </p>
      </section>

      {/* WHO IS THIS FOR */}
      <section
        style={{
          maxWidth: "900px",
          margin: "3rem auto",
          padding: "2rem",
          backgroundColor: "#121822",
          borderRadius: "12px",
        }}
      >
        <h2>Who is this for?</h2>
        <ul style={{ lineHeight: "2", marginTop: "1rem" }}>
          <li>👨‍🎓 Student developers</li>
          <li>🧑‍💻 Indie builders & solo founders</li>
          <li>📦 Open-source contributors</li>
          <li>🧠 Curious learners who value signal over noise</li>
        </ul>
      </section>

      {/* CTA */}
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2>Join the Circle</h2>
        <p style={{ opacity: 0.85, marginBottom: "1.5rem" }}>
          TechCircle is intentionally small and quality-focused.
          If you’re building something and want thoughtful discussions,
          you’re welcome here.
        </p>

        <a
          href="https://vyomaco.vercel.app"
          style={{
            display: "inline-block",
            padding: "0.75rem 1.5rem",
            backgroundColor: "#4f8cff",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
            fontWeight: 600,
          }}
        >
          Explore Vyoma →
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          marginTop: "4rem",
          textAlign: "center",
          opacity: 0.6,
          fontSize: "0.9rem",
        }}
      >
        Built with intention under <strong>Vyoma</strong> · © 2026
      </footer>
    </main>
  );
}
