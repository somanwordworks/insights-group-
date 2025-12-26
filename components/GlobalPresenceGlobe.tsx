"use client";

import { useEffect, useRef } from "react";
import mapboxgl from "mapbox-gl";

export default function GlobalPresenceGlobe() {
    const mapContainer = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (!mapContainer.current) return;

        // ✅ MUST SET TOKEN EXPLICITLY
        mapboxgl.accessToken =
            process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string;

        if (!mapboxgl.accessToken) {
            console.error("Mapbox token missing");
            return;
        }

        const map = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/dark-v11",
            projection: { name: "globe" },
            zoom: 1.2,
            center: [0, 20],
        });

        map.on("style.load", () => {
            map.setFog({
                color: "rgb(15, 23, 42)",
                "high-color": "rgb(2, 6, 23)",
                "space-color": "rgb(2, 6, 23)",
                "horizon-blend": 0.08,
            });

            // 📍 USA
            new mapboxgl.Marker({ color: "#38BDF8" })
                .setLngLat([-95.7129, 37.0902])
                .addTo(map);

            // 📍 India
            new mapboxgl.Marker({ color: "#22C55E" })
                .setLngLat([78.9629, 20.5937])
                .addTo(map);

            // 📍 UAE
            new mapboxgl.Marker({ color: "#F59E0B" })
                .setLngLat([53.8478, 23.4241])
                .addTo(map);
        });

        return () => map.remove();
    }, []);

    return (
        <div
            ref={mapContainer}
            style={{
                width: "100%",
                height: 420,              // ✅ FIXED HEIGHT (CRITICAL)
                borderRadius: 18,
                overflow: "hidden",
            }}
        />
    );
}
