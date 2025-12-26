

import { services } from "@/data/services";

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const service = services
        .flatMap((group) => group.items)
        .find((item) => item.slug === slug);

    if (!service) {
        return <div style={{ padding: 80 }}>Service not found</div>;
    }

    return (
        <main style={{ padding: "80px 0" }}>
            <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
                <h1>{service.title}</h1>

                <p style={{ marginTop: 16 }}>
                    Detailed information about{" "}
                    <strong>{service.title}</strong> will go here.
                </p>
            </div>
        </main>
    );
}
