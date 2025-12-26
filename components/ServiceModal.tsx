"use client";

import { allServices } from "@/data/services";

type Props = {
    slug: string;
    onClose: () => void;
};

export default function ServiceModal({ slug, onClose }: Props) {
    const service = allServices.find((s) => s.slug === slug);
    if (!service) return null;

    return (
        <div style={overlay} onClick={onClose}>
            <div style={modal} onClick={(e) => e.stopPropagation()}>
                {/* HEADER */}
                <div style={header}>
                    <h2 style={title}>{service.title}</h2>

                    <div style={headerRight}>
                        <img
                            src="/logo-modal.png"
                            alt="Insights Group"
                            style={logo}
                        />
                        <button style={closeBtn} onClick={onClose}>×</button>
                    </div>
                </div>

                {/* BODY */}
                <div style={body}>
                    {/* LEFT COLUMN */}
                    <div>
                        <TextBlock title="The problem" text={service.problem} />
                        <Divider />
                        <TextBlock title="Why it fails" text={service.whyItFails} />
                        <Divider />
                        <TextBlock title="How it helps" text={service.solution} />
                    </div>

                    {/* RIGHT COLUMN */}
                    <div>
                        {service.image && (
                            <img
                                src={service.image}
                                alt={service.title}
                                style={serviceImage}
                            />
                        )}

                        <TextBlock
                            title="What Insights Group does"
                            text={service.whatWeDo}
                        />

                        {Array.isArray(service.businessValue) && (
                            <>
                                <Divider />
                                <h4 style={sectionTitle}>Business value</h4>
                                <ul style={list}>
                                    {service.businessValue.map((v) => (
                                        <li key={v}>{v}</li>
                                    ))}
                                </ul>
                            </>
                        )}

                        <button style={cta}>Talk to an Expert</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

/* =========================
   REUSABLE BLOCKS
   ========================= */

function TextBlock({ title, text }: { title: string; text?: string }) {
    if (!text) return null;
    return (
        <div style={{ marginBottom: 24 }}>
            <h4 style={sectionTitle}>{title}</h4>
            <p style={paragraph}>{text}</p>
        </div>
    );
}

function Divider() {
    return <div style={divider} />;
}

/* =========================
   STYLES — McKinsey-like
   ========================= */

const overlay: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.55)",
    zIndex: 3000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const modal: React.CSSProperties = {
    background: "#ffffff",
    width: 1040,
    maxWidth: "94vw",
    maxHeight: "90vh",
    overflowY: "auto",
    borderRadius: 6, // sharp edges = corporate
    boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
};

const header: React.CSSProperties = {
    padding: "24px 32px",
    borderBottom: "1px solid #e5e7eb",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const headerRight: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 16,
};

const logo: React.CSSProperties = {
    height: 38,
    opacity: 0.65,           // subtle, not dominant
};

const title: React.CSSProperties = {
    fontSize: 26,
    fontWeight: 600,
    color: "#0f172a",
};

const body: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "1.3fr 1fr",
    gap: 48,
    padding: "32px",
};

const sectionTitle: React.CSSProperties = {
    fontSize: 13,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#0f172a",
    marginBottom: 8,
};

const paragraph: React.CSSProperties = {
    fontSize: 15,
    lineHeight: 1.6,
    color: "#1f2937",
};

const list: React.CSSProperties = {
    paddingLeft: 16,
    lineHeight: 1.6,
    color: "#1f2937",
    fontSize: 15,
};

const divider: React.CSSProperties = {
    height: 1,
    background: "#e5e7eb",
    margin: "20px 0",
};

const closeBtn: React.CSSProperties = {
    fontSize: 26,
    background: "none",
    border: "none",
    cursor: "pointer",
    lineHeight: 1,
};

const serviceImage: React.CSSProperties = {
    width: "100%",
    borderRadius: 4,
    marginBottom: 24,
};

const cta: React.CSSProperties = {
    marginTop: 28,
    background: "#0f172a",
    color: "#fff",
    border: "none",
    padding: "12px 22px",
    fontSize: 14,
    fontWeight: 500,
    cursor: "pointer",
};
