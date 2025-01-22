// app/components/VisitorLocation.tsx
'use client';

import { useState, useEffect } from 'react';

interface LocationData {
    city?: string;
    country_name?: string;
    error?: string;
}

export function VisitorLocation() {
    const [location, setLocation] = useState<LocationData | null>(null);

    useEffect(() => {
        const fetchLocation = async () => {

            try {
                const response = await fetch('/api/location');
                const data = await response.json();
                console.log("data");

                setLocation(data);
                console.log(data);
                console.log("yes again");
            } catch (err) {
                setLocation({ error: 'Could not fetch location' });
                console.log("why");
            }
        };

        fetchLocation();
    }, []);

    if (!location || location.error) return null;

    return (
        <p className="text-sm text-gray-600">
            {`Hello! To who ever is visiting from  ${location.city}!`}
        </p>
    );
}