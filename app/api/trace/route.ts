import { NextRequest, NextResponse } from "next/server";

import dbConnect from "../lib/db";
import Visit from "../models/Visit";

export async function GET() {
    try {
        await dbConnect();
        const visits = await Visit.find().sort({ timestamp: -1 }).limit(100);
        const totalViews = await Visit.countDocuments();

        return NextResponse.json({ visits, totalViews });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal Server Error";
        console.error("Trace GET Error:", error);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}

export async function POST(req: NextRequest) {
    try {
        await dbConnect();

        // 1. Get Client IP
        const forwarded = req.headers.get("x-forwarded-for");
        let ip = forwarded ? forwarded.split(',')[0].trim() : "127.0.0.1";

        // Normalize IPv6-mapped IPv4 addresses (e.g. ::ffff:127.0.0.1 -> 127.0.0.1)
        if (ip.includes("::ffff:")) {
            ip = ip.split(":").pop() || ip;
        }

        // For local development, use a fallback IP to test geolocation
        if (ip === "127.0.0.1" || ip === "::1" || ip === "localhost" || ip === "0.0.0.0") {
            ip = "8.8.8.8"; // User's IP provided for testing
        }

        // 2. Fetch Geolocation from server side
        const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
        const geoData = await geoRes.json();

        if (geoData.status === "fail") {
            throw new Error(`Geolocation failed for IP ${ip}: ${geoData.message}`);
        }

        // 3. Save to MongoDB
        const newVisit = await Visit.create({
            ip: ip,
            city: geoData.city,
            region: geoData.regionName,
            country: geoData.country,
            loc: `${geoData.lat},${geoData.lon}`,
            isp: geoData.isp,
            userAgent: req.headers.get("user-agent") || "unknown",
        });

        const totalViews = await Visit.countDocuments();

        return NextResponse.json({
            success: true,
            visit: newVisit,
            totalViews,
            currentVisitor: {
                ip,
                city: geoData.city,
                country: geoData.country,
                isp: geoData.isp,
                loc: `${geoData.lat},${geoData.lon}`
            }
        });
    } catch (error: unknown) {
        const message = error instanceof Error ? error.message : "Internal Server Error";
        console.error("Trace POST Error:", error);
        return NextResponse.json({ error: message }, { status: 500 });
    }
}
