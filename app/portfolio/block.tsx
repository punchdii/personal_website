'use client'; // Enables client-side functionality

import { useState } from 'react';

export default function PortfolioItem({ imageSrc, title, description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="portfolio-item flex flex-col items-start bg-white rounded-lg shadow-md p-4">
      <img src={imageSrc} alt={title} className="w-full h-auto rounded-lg" />
      <h2 className="text-xl h-auto font-bold mt-4">{title}</h2>

      <p className={`text-sm ${isExpanded ? 'line-clamp-none' : 'line-clamp-4'}`}>
        {description}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-blue-500 hover:underline"
      >
        {isExpanded ? 'Show Less' : 'Read More'}
      </button>
    </div>
  );
}
