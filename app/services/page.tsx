export default function ServicesPage() {
  return (
    <main style={{ padding: "80px 0" }}>
      <div style={container}>
        <h1 style={{ marginBottom: 48 }}>Services</h1>

        <div style={grid}>
          {/* AI & ML */}
          <ServiceBlock
            title="AI & ML"
            items={[
              "Agentic AI",
              "Generative AI",
              "Statistical Analysis",
            ]}
          />

          {/* Advanced Analytics */}
          <ServiceBlock
            title="Advanced Analytics"
            items={[
              "Complex Event Processing",
              "Deep Learning",
              "Graph Analysis",
            ]}
          />

          {/* Strategy & Consulting */}
          <ServiceBlock
            title="Strategy & Consulting"
            items={[
              "Data Strategy",
              "AI Strategy",
              "Application Development",
            ]}
          />

          {/* Data Engineering */}
          <ServiceBlock
            title="Data Engineering"
            items={[
              "Data Pipelines",
              "Data Transformations",
              "Data Cleansing",
            ]}
          />

          {/* Data Management */}
          <ServiceBlock
            title="Data Management"
            items={[
              "Data Architecture Management",
              "Data Development",
              "Data Governance",
            ]}
          />

          {/* User Experience */}
          <ServiceBlock
            title="User Experience"
            items={[
              "Design Thinking",
              "User Research",
              "Interaction Design",
            ]}
          />

          {/* Cloud Services */}
          <ServiceBlock
            title="Cloud Services"
            items={[
              "Cloud Advisory Services",
              "Cloud Migration Services",
              "Cloud Integration",
            ]}
          />

          {/* Quality Assurance */}
          <ServiceBlock
            title="Quality Assurance"
            items={[
              "Functional Testing",
              "Compatibility Testing",
              "Performance Testing",
            ]}
          />

          {/* BPO Services */}
          <ServiceBlock
            title="BPO Services"
            items={[
              "Customer Support Services",
              "Back-Office Support",
              "IT Support & Development",
            ]}
          />
        </div>

        {/* VIEW ALL */}
        <div style={{ marginTop: 64 }}>
          <a href="/services" style={viewAll}>
            View All Services →
          </a>
        </div>
      </div>
    </main>
  );
}

/* =========================
   REUSABLE BLOCK
   ========================= */

function ServiceBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div style={card}>
      <h3 style={{ marginBottom: 12 }}>{title}</h3>

      <ul style={list}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <a href="#" style={seeMore}>
        See more &gt;
      </a>
    </div>
  );
}

/* =========================
   STYLES
   ========================= */

const container: React.CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "0 24px",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 32,
};

const card: React.CSSProperties = {
  background: "#ffffff",
  border: "1px solid var(--ig-border)",
  borderRadius: 12,
  padding: 24,
};

const list: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: "12px 0 16px",
  lineHeight: 1.8,
};

const seeMore: React.CSSProperties = {
  color: "var(--ig-coral)",
  fontWeight: 500,
  textDecoration: "none",
};

const viewAll: React.CSSProperties = {
  fontWeight: 600,
  color: "var(--ig-navy)",
  textDecoration: "none",
};
