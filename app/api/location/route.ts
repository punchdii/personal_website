import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        // Get the IP from request headers
        const forwardedFor = request.headers.get('x-forwarded-for');
        const clientIp = forwardedFor ? forwardedFor.split(',')[0] : '70.49.43.6';

        // Call IP geolocation API from the server (no CORS issue)
        const response = await fetch(`http://ip-api.com/json/${clientIp}`);

        const data = await response.json();
        console.log(data);

        // Return the data to the frontend
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch location data' }, { status: 500 });
    }
}
