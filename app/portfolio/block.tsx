'use client';

import { useState } from 'react';
import { PortfolioItemProps } from './portfolio';
import PortfolioModal from './PortfolioModal';

export default function PortfolioItem({ imageSrc, title, description }: PortfolioItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coverImage = imageSrc[0];

  return (
    <>
      <div className="portfolio-item dark:bg-neutral-900 dark:text-white text-black flex flex-col items-start bg-white rounded-lg shadow-md p-4">
        <div className="relative w-full">
          <img src={coverImage} alt={title} className="w-full h-auto rounded-lg" />
          <button
            onClick={() => setIsModalOpen(true)}
            className="absolute top-2 right-2 bg-white/90 dark:bg-black/90 p-2 rounded-full shadow-md   hover:bg-white dark:hover:bg-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
            </svg>
          </button>
        </div>
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

      <PortfolioModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        imageSrc={imageSrc}
        title={title}
        description={description}
      />
    </>
  );
}