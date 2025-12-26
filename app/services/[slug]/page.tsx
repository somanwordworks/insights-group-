import { allServices } from "@/data/services";

export default async function ServicePage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    const service = allServices.find(
        (item) => item.slug === slug
    );

    if (!service) {
        return <div style={{ padding: 80 }}>Service not found</div>;
    }

    return (
        <main style={{ padding: "80px 0" }}>
            <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 24px" }}>
                <h1>{service.title}</h1>

                <p style={{ marginTop: 16 }}>
                    {service.problem}
                </p>

                <p style={{ marginTop: 16 }}>
                    {service.solution}
                </p>

                <ul style={{ marginTop: 24 }}>
                    {service.businessValue.map((value, i) => (
                        <li key={i}>{value}</li>
                    ))}
                </ul>
            </div>
        </main>
    );
}
