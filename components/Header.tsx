"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ServicesMegaMenu from "./ServicesMegaMenu";
import ServiceModal from "./ServiceModal";

export default function Header() {
    const [servicesOpen, setServicesOpen] = useState(false);

    // store SERVICE SLUG (not label)
    const [activeSlug, setActiveSlug] = useState<string | null>(null);

    const pathname = usePathname();
    const isProductsPage = pathname === "/products";

    return (
        <>
            <header style={headerOuter}>
                <div style={headerInner}>
                    {/* LOGO — acts as HOME only on Products page */}
                    {isProductsPage ? (
                        <a href="/" style={{ display: "inline-block" }}>
                            <img
                                src="/logo.png"
                                alt="Insights Group"
                                style={{ ...logo, cursor: "pointer" }}
                            />
                        </a>
                    ) : (
                        <img
                            src="/logo.png"
                            alt="Insights Group"
                            style={logo}
                        />
                    )}

                    <nav style={nav}>
                        {/* About Us */}
                        <NavItem label="About Us" href="/#about-us" />

                        {/* SERVICES – ONE CONTINUOUS HOVER ZONE */}
                        <div
                            style={servicesHoverZone}
                            onMouseEnter={() => setServicesOpen(true)}
                            onMouseLeave={() => setServicesOpen(false)}
                        >
                            <span style={navLink}>Services</span>

                            {/* invisible hover bridge */}
                            <div style={hoverBridge} />

                            {servicesOpen && (
                                <div style={megaMenu}>
                                    <ServicesMegaMenu
                                        onSelectService={(slug: string) => {
                                            setActiveSlug(slug);
                                        }}
                                    />
                                </div>
                            )}
                        </div>

                        <NavItem label="Products" href="/products" />
                        <NavItem label="Contact" href="/#contact" outlined />
                    </nav>
                </div>
            </header>

            {/* Modal rendered ONLY when slug exists */}
            {activeSlug && (
                <ServiceModal
                    slug={activeSlug}
                    onClose={() => setActiveSlug(null)}
                />
            )}
        </>
    );
}

/* ---------- NAV ITEM ---------- */

function NavItem({
    label,
    href,
    outlined,
}: {
    label: string;
    href: string;
    outlined?: boolean;
}) {
    return (
        <a
            href={href}
            style={{
                ...navLink,
                ...(outlined ? contactBtn : {}),
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.background = "#E6F0F4";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
            }}
        >
            {label}
        </a>
    );
}

/* ---------- STYLES (UNCHANGED) ---------- */

const headerOuter: React.CSSProperties = {
    background: "#F7F8F6",
    borderBottom: "1px solid #E5E7EB",
    position: "relative",
    zIndex: 200,
};

const headerInner: React.CSSProperties = {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "20px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
};

const logo: React.CSSProperties = {
    height: 34,
};

const nav: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 32,
};

const navLink: React.CSSProperties = {
    fontSize: 15,
    fontWeight: 500,
    color: "#0B2C3D",
    padding: "6px 10px",
    borderRadius: 6,
    cursor: "pointer",
    textDecoration: "none",
};

const contactBtn: React.CSSProperties = {
    border: "1px solid #0B2C3D",
};

const servicesHoverZone: React.CSSProperties = {
    position: "relative",
    display: "flex",
    alignItems: "center",
};

const hoverBridge: React.CSSProperties = {
    position: "absolute",
    top: "100%",
    left: 0,
    right: 0,
    height: 16,
};

const megaMenu: React.CSSProperties = {
    position: "absolute",
    top: "calc(100% + 16px)",
    right: 0,
    width: 860,
    background: "#F8FAF9",
    padding: 32,
    borderRadius: 14,
    border: "1px solid #E5E7EB",
    boxShadow: "0 30px 60px rgba(0,0,0,0.12)",
};
