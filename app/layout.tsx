import "mapbox-gl/dist/mapbox-gl.css"; // ✅ REQUIRED FOR MAPBOX
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
    title: "Insights Group",
    description: "Enterprise insights for modern technology decisions",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                {/* HEADER */}
                <Header />

                {/* PAGE CONTENT */}
                {children}

                {/* FOOTER */}
                <footer style={footerStyle}>
                    © 2025 Insights Group
                </footer>
            </body>
        </html>
    );
}

/* =========================
   FOOTER STYLE (unchanged)
   ========================= */

const footerStyle: React.CSSProperties = {
    background: "var(--ig-navy)",
    color: "rgba(255,255,255,0.8)",
    padding: "32px 10%",
    marginTop: 80,
};
