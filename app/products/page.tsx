export default function ProductsPage() {
    return (
        <main>
            {/* HERO */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: 760 }}>
                        <h1>Products Shaped by Enterprise Thinking</h1>

                        <p
                            style={{
                                marginTop: 20,
                                fontSize: 18,
                                color: "#475569",
                                maxWidth: 680,
                            }}
                        >
                            Insights Group collaborates with technology partners to bring
                            architecture-led, enterprise-ready products to market — grounded
                            in real operational needs and long-term governance.
                        </p>
                    </div>
                </div>
            </section>

            {/* PRODUCT OVERVIEW */}
            <section className="section" style={{ background: "#F8FAFC" }}>
                <div className="container">
                    <div style={{ maxWidth: 780 }}>
                        <h2>An Enterprise Visitor Management Platform</h2>

                        <p style={{ marginTop: 20 }}>
                            Insights Group is partnering with an India-based technology company
                            to develop a modern visitor management platform designed for
                            organizations that operate at scale.
                        </p>

                        <p style={{ marginTop: 16 }}>
                            The product addresses a commonly overlooked but critical enterprise
                            requirement — managing visitor access in a way that is secure,
                            auditable, and operationally simple across offices, campuses,
                            and facilities.
                        </p>

                        <p style={{ marginTop: 16 }}>
                            This initiative reflects our belief that strong systems are built
                            through architectural discipline, not feature accumulation.
                        </p>
                    </div>
                </div>
            </section>

            {/* WHY THIS PRODUCT */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: 780 }}>
                        <h2>Built from Real Enterprise Gaps</h2>

                        <p style={{ marginTop: 20 }}>
                            Across industries, visitor management is often handled through
                            fragmented tools, manual processes, or systems that fail to scale
                            across locations.
                        </p>

                        <p style={{ marginTop: 16 }}>
                            Through our consulting engagements, we repeatedly encountered
                            challenges around inconsistent tracking, limited audit visibility,
                            operational friction at entry points, and security controls that
                            are difficult to govern centrally.
                        </p>

                        <p style={{ marginTop: 16 }}>
                            This product exists to address these gaps using the same rigor
                            we apply to enterprise architecture, data platforms, and
                            governance-driven system design.
                        </p>
                    </div>
                </div>
            </section>

            {/* DESIGN PHILOSOPHY */}
            <section className="section" style={{ background: "#F1F5F9" }}>
                <div className="container">
                    <div style={{ maxWidth: 780 }}>
                        <h2>Designed for Enterprise Reality</h2>

                        <ul
                            style={{
                                marginTop: 24,
                                paddingLeft: 20,
                                lineHeight: 1.8,
                            }}
                        >
                            <li>Security and compliance as foundational principles</li>
                            <li>Simplicity for frontline and operational teams</li>
                            <li>Scalability across multiple offices and facilities</li>
                            <li>Designed for governance, auditability, and long-term ownership</li>
                        </ul>

                        <p style={{ marginTop: 20 }}>
                            This is not a consumer-facing application.
                            It is designed for organizations that value control,
                            clarity, and trust over short-term convenience.
                        </p>
                    </div>
                </div>
            </section>

            {/* STATUS & PARTNERSHIP */}
            <section className="section">
                <div className="container">
                    <div style={{ maxWidth: 780 }}>
                        <h2>Current Status</h2>

                        <p style={{ marginTop: 20 }}>
                            The platform is currently under active development in collaboration
                            with an India-based technology partner.
                        </p>

                        <p style={{ marginTop: 16 }}>
                            Initial rollouts are planned within select enterprise environments,
                            with broader availability expected in phases aligned to security,
                            compliance, and operational readiness.
                        </p>

                        <p style={{ marginTop: 16 }}>
                            Insights Group remains closely involved in shaping the product’s
                            architecture, governance model, and enterprise alignment.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ background: "#F8FAFC" }}>
                <div className="container">
                    <div
                        style={{
                            maxWidth: 680,
                            background: "#FFFFFF",
                            border: "1px solid #E5E7EB",
                            borderRadius: 16,
                            padding: 40,
                            boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                        }}
                    >
                        <h3>Interested in learning more?</h3>

                        <p style={{ marginTop: 12 }}>
                            Organizations looking to explore alignment, early discussions,
                            or enterprise use cases can reach out for a conversation.
                        </p>

                        <div style={{ marginTop: 24 }}>
                            <a href="/#contact" className="btn-primary">
                                Start a Conversation
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
