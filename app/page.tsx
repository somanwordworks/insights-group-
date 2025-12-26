"use client";

import dynamic from "next/dynamic";

const GlobalPresenceGlobe = dynamic(
    () => import("../components/GlobalPresenceGlobe"),
    { ssr: false }
);

export default function Home() {
    return (
        <main>
            {/* HERO — FULL BACKGROUND VIDEO */}
            <section
                className="section"
                style={{
                    position: "relative",
                    overflow: "hidden",
                    minHeight: "85vh",
                    display: "flex",
                    alignItems: "center",
                }}
            >
                {/* BACKGROUND VIDEO */}
                <video
                    src="/hero.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        zIndex: 0,
                    }}
                />

                {/* DARK OVERLAY */}
                <div
                    style={{
                        position: "absolute",
                        inset: 0,
                        background:
                            "linear-gradient(90deg, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.85) 55%, rgba(255,255,255,0.65) 100%)",
                        zIndex: 1,
                    }}
                />

                {/* CONTENT */}
                <div className="container" style={{ position: "relative", zIndex: 2 }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1.2fr 0.8fr",
                            gap: 80,
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <h1
                                style={{
                                    maxWidth: 560,
                                    lineHeight: 1.2,
                                }}
                            >
                                Engineering clarity for complex technology decisions
                            </h1>

                            <p
                                style={{
                                    fontSize: 18,
                                    marginTop: 24,
                                    maxWidth: 520,
                                    color: "#475569",
                                }}
                            >
                                Architecture, data, platforms, and applied AI — grounded thinking
                                for systems that must scale, last, and deliver real outcomes.
                            </p>

                            <div style={{ marginTop: 40 }}>
                                <a href="/#contact" className="btn-primary">
                                    Start a Conversation
                                </a>
                            </div>
                        </div>

                        {/* EMPTY RIGHT COLUMN (INTENTIONAL) */}
                        <div />
                    </div>
                </div>
            </section>



            {/* ABOUT US */}
            <section
                id="about-us"
                className="section"
                style={{ background: "#F8FAFC" }}
            >
                <div className="container">
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1.2fr 0.8fr",
                            gap: 80,
                            alignItems: "flex-start",
                        }}
                    >
                        <div>
                            <h2>About Insights Group</h2>

                            <p style={{ marginTop: 24, maxWidth: 560 }}>
                                Insights Group is a consulting firm built for complex enterprise
                                environments where technology decisions have long-term consequences.
                            </p>

                            <p style={{ marginTop: 16, maxWidth: 560 }}>
                                We work across data engineering, analytics, enterprise platforms,
                                cloud systems, and applied AI — helping organizations design and
                                deliver systems that are scalable, governed, and aligned with real
                                business needs.
                            </p>

                            <p style={{ marginTop: 16, maxWidth: 560 }}>
                                Our work is architecture-led. We focus on understanding the problem
                                first, designing the right system next, and executing with discipline
                                and clarity.
                            </p>
                        </div>

                        {/* WHY US */}
                        <div
                            style={{
                                background: "#FFFFFF",
                                border: "1px solid #E5E7EB",
                                borderRadius: 16,
                                padding: 32,
                                boxShadow: "0 12px 36px rgba(0,0,0,0.06)",
                            }}
                        >
                            <h3 style={{ marginBottom: 20 }}>Why Insights Group</h3>

                            <ul
                                style={{
                                    paddingLeft: 18,
                                    lineHeight: 1.8,
                                    margin: 0,
                                }}
                            >
                                <li>Architecture before tools or trends</li>
                                <li>Strong grounding in data and enterprise systems</li>
                                <li>Balanced approach to innovation and governance</li>
                                <li>Designed for scale and long-term ownership</li>
                                <li>Focused on measurable business outcomes</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES — INTERACTIVE DECISION PIPELINE */}
            <section className="section">
                <div className="container">
                    {/* SECTION INTRO */}
                    <div style={{ marginBottom: 56 }}>
                        <h2>How We Help Organizations</h2>
                        <p
                            style={{
                                marginTop: 12,
                                maxWidth: 560,
                                color: "#475569",
                            }}
                        >
                            We partner with teams navigating high-impact technology decisions,
                            guiding them from intent to execution through a structured,
                            architecture-led approach.
                        </p>
                    </div>

                    {/* PIPELINE WRAPPER */}
                    <div
                        style={{
                            position: "relative",
                            paddingTop: 60,
                            paddingBottom: 40,
                        }}
                    >
                        {/* MAIN PIPELINE */}
                        <div
                            className="pipeline-line"
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: 0,
                                right: 0,
                                height: 2,
                                background:
                                    "linear-gradient(90deg, #CBD5E1, #CBD5E1)",
                                opacity: 0.6,
                                transition: "all 0.4s ease",
                            }}
                        />

                        {/* CARDS */}
                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(3, 1fr)",
                                gap: 36,
                                position: "relative",
                                zIndex: 1,
                            }}
                        >
                            {/* FOUNDATION */}
                            <div
                                className="pipeline-card glow-execution"
                                style={{
                                    background: "#FFFFFF",
                                    borderRadius: 18,
                                    padding: 36,
                                    border: "1px solid #94A3B8",
                                    boxShadow: "0 18px 48px rgba(0,0,0,0.08)",
                                    transition: "all 0.35s ease",
                                    position: "relative",
                                }}
                            >

                                <div
                                    className="pipe-drop"
                                    style={{
                                        width: 2,
                                        height: 28,
                                        background: "#CBD5E1",
                                        margin: "0 auto 16px",
                                        transition: "all 0.35s ease",
                                    }}
                                />

                                <div
                                    style={{
                                        fontSize: 12,
                                        letterSpacing: "0.12em",
                                        color: "#64748B",
                                        marginBottom: 8,
                                    }}
                                >
                                    FOUNDATION
                                </div>

                                <h3>Architecture Advisory</h3>

                                <p>
                                    Structured, vendor-neutral guidance for designing scalable,
                                    resilient enterprise systems.
                                </p>
                            </div>

                            {/* STRUCTURE */}
                            <div
                                className="pipeline-card"
                                style={{
                                    background: "#FFFFFF",
                                    borderRadius: 18,
                                    padding: 36,
                                    border: "1px solid #CBD5E1",
                                    boxShadow: "0 14px 36px rgba(0,0,0,0.06)",
                                    transition: "all 0.35s ease",
                                    position: "relative",
                                }}
                            >
                                <div
                                    className="pipe-drop"
                                    style={{
                                        width: 2,
                                        height: 28,
                                        background: "#94A3B8",
                                        margin: "0 auto 16px",
                                        transition: "all 0.35s ease",
                                    }}
                                />

                                <div
                                    style={{
                                        fontSize: 12,
                                        letterSpacing: "0.12em",
                                        color: "#64748B",
                                        marginBottom: 8,
                                    }}
                                >
                                    STRUCTURE
                                </div>

                                <h3>Data & Database Strategy</h3>

                                <p>
                                    Long-term data and platform decisions built for growth,
                                    governance, and real-world usage.
                                </p>
                            </div>

                            {/* EXECUTION — GLOW ENABLED */}
                            <div
                                className="pipeline-card glow-execution"
                                style={{
                                    background: "#FFFFFF",
                                    borderRadius: 18,
                                    padding: 36,
                                    border: "1px solid #94A3B8",
                                    boxShadow: "0 18px 48px rgba(0,0,0,0.08)",
                                    transition: "all 0.35s ease",
                                    position: "relative",
                                    overflow: "hidden",
                                }}
                            >
                                {/* PIPE DROP */}
                                <div
                                    className="pipe-drop"
                                    style={{
                                        width: 2,
                                        height: 28,
                                        background: "#64748B",
                                        margin: "0 auto 16px",
                                        transition: "all 0.35s ease",
                                    }}
                                />

                                {/* STAGE LABEL */}
                                <div
                                    style={{
                                        fontSize: 12,
                                        letterSpacing: "0.12em",
                                        color: "#64748B",
                                        marginBottom: 8,
                                    }}
                                >
                                    EXECUTION
                                </div>

                                {/* TITLE */}
                                <h3>Cloud & Platform Guidance</h3>

                                {/* DESCRIPTION */}
                                <p>
                                    Thoughtful cloud adoption that avoids costly mistakes and
                                    supports sustainable operations.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>

                {/* PIPELINE + GLOW STYLES */}
                <style jsx>{`
        .pipeline-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 24px 60px rgba(0, 0, 0, 0.12);
            border-color: #2563eb;
        }

        .pipeline-card:hover .pipe-drop {
            background: linear-gradient(to bottom, #2563eb, #60a5fa);
            box-shadow: 0 0 12px rgba(37, 99, 235, 0.6);
        }

        /* EXECUTION GLOW */
        .glow-execution::before {
            content: "";
            position: absolute;
            inset: -3px;
            border-radius: 20px;
            background: conic-gradient(
                from 0deg,
                transparent,
                rgba(37, 99, 235, 0.8),
                transparent 35%
            );
            filter: blur(10px);
            opacity: 0;
            transition: opacity 0.3s ease;
            animation: spinGlow 10s linear infinite;
            z-index: 0;
        }

        .glow-execution::after {
            content: "";
            position: absolute;
            inset: 2px;
            background: #ffffff;
            border-radius: 16px;
            z-index: 1;
        }

        .glow-execution:hover::before {
            opacity: 0.6;
        }

        .glow-execution > * {
            position: relative;
            z-index: 2;
        }

        @keyframes spinGlow {
            to {
                transform: rotate(360deg);
            }
        }
    `}</style>
            </section>



            {/* GLOBAL PRESENCE */}
            <section className="section">
                <div className="container">
                    <div style={{ textAlign: "center", marginBottom: 48 }}>
                        <h2>Global Presence</h2>
                        <p style={{ marginTop: 12, color: "#475569" }}>
                            Supporting organizations across key global markets
                        </p>
                    </div>

                    {/* GLOBE */}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            marginBottom: 32,
                        }}
                    >
                        <div
                            style={{
                                width: 420,
                                height: 420,
                                borderRadius: "50%",
                                overflow: "hidden",
                                position: "relative",
                                background: "#0B2C3D",
                                boxShadow: "0 40px 80px rgba(0,0,0,0.25)",
                                transition: "transform 0.4s ease, box-shadow 0.4s ease",
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = "scale(1.06)";
                                e.currentTarget.style.boxShadow =
                                    "0 55px 120px rgba(0,0,0,0.35)";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = "scale(1)";
                                e.currentTarget.style.boxShadow =
                                    "0 40px 80px rgba(0,0,0,0.25)";
                            }}
                        >
                            <img
                                src="/global-presence-map.png"
                                alt="Insights Group Global Presence"
                                style={{
                                    width: "140%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transform: "translateX(-15%)",
                                    opacity: 0.95,
                                }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "50%",
                                    background:
                                        "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.18), transparent 60%)",
                                }}
                            />

                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    borderRadius: "50%",
                                    boxShadow:
                                        "inset -20px -30px 60px rgba(0,0,0,0.45)",
                                }}
                            />
                        </div>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            gap: 36,
                            fontWeight: 500,
                        }}
                    >
                        <span>🇺🇸 United States</span>
                        <span>🇮🇳 India</span>
                        <span>🇦🇪 UAE</span>
                        <span>🇹🇭 Thailand</span>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section
                id="contact"
                className="section"
                style={{ background: "#F1F5F9" }}
            >
                <div className="container">
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "1.2fr 0.8fr",
                            gap: 80,
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <h2>Start a Conversation</h2>

                            <p style={{ marginTop: 20, maxWidth: 520 }}>
                                We work with organizations navigating complex technology
                                decisions — from architecture and platforms to data and AI.
                            </p>

                            <p style={{ marginTop: 28 }}>
                                <strong>USA</strong><br />
                                Rainflower, Katy, Texas 77494, Houston
                            </p>

                            <p style={{ marginTop: 16 }}>
                                <strong>India</strong><br />
                                iSprout Orbit, Plot No 30/C, Sy No 83/1,
                                Hyderabad Knowledge City, Raidurg Panmaktha,
                                Serilingampally Mandal, Hyderabad, Telangana 500019
                            </p>

                            <p style={{ marginTop: 16 }}>
                                <strong>Email</strong><br />
                                <a
                                    href="mailto:hr@insightsgroup.io"
                                    style={{
                                        color: "#0B2C3D",
                                        textDecoration: "underline",
                                    }}
                                >
                                    hr@insightsgroup.io
                                </a>
                            </p>
                        </div>

                        <div
                            style={{
                                background: "#FFFFFF",
                                border: "1px solid #E5E7EB",
                                borderRadius: 16,
                                padding: 36,
                                boxShadow: "0 12px 36px rgba(0,0,0,0.06)",
                            }}
                        >
                            <h3 style={{ marginBottom: 16 }}>
                                Let’s Talk
                            </h3>

                            <p style={{ marginBottom: 24 }}>
                                Reach out to explore advisory, architecture,
                                or consulting support.
                            </p>

                            <a
                                href="mailto:hr@insightsgroup.io"
                                className="btn-primary"
                            >
                                Email Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
