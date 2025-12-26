"use client";

type Props = {
    onSelectService: (slug: string) => void;
};

export default function ServicesMegaMenu({ onSelectService }: Props) {
    return (
        <div style={grid}>
            {services.map((service) => (
                <div
                    key={service.slug}
                    style={serviceItem}
                    onClick={() => onSelectService(service.slug)} // ✅ SEND SLUG
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "#E6F0F4";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                    }}
                >
                    {service.label}
                </div>
            ))}
        </div>
    );
}

/* =========================
   DATA (LABEL + SLUG)
========================= */

const services = [
    { label: "Agentic AI", slug: "agentic-ai" },
    { label: "Generative AI", slug: "generative-ai" },
    { label: "Data Engineering", slug: "data-engineering" },
    { label: "Advanced Analytics", slug: "advanced-analytics" },
    { label: "Cloud Services", slug: "cloud-services" },
    { label: "Strategy & Consulting", slug: "strategy-consulting" },
    { label: "Quality Assurance", slug: "quality-assurance" },
    { label: "User Experience", slug: "user-experience" },
    { label: "BPO Services", slug: "bpo-services" },
];

/* =========================
   STYLES (UNCHANGED)
========================= */

const grid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 16,
};

const serviceItem: React.CSSProperties = {
    padding: "10px 12px",
    borderRadius: 6,
    fontSize: 14,
    color: "#0B2C3D",
    cursor: "pointer",
};
