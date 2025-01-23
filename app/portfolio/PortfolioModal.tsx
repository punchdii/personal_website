import { useState, useEffect } from 'react';
import { PortfolioItem } from './portfolio';

interface PortfolioModalProps extends PortfolioItem {
    isOpen: boolean;
    onClose: () => void;
}

export default function PortfolioModal({
    isOpen,
    onClose,
    imageSrc,
    title,
    description
}: PortfolioModalProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setShowModal(true);

        } else {
            // Delay the closing animation for a smooth transition
            const timer = setTimeout(() => setShowModal(false), 300); // Match the animation duration
            return () => clearTimeout(timer); // Cleanup the timeout on component unmount
        }
    }, [isOpen]);

    if (!showModal) return null;

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev === imageSrc.length - 1 ? 0 : prev + 1));
    };

    const previousImage = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? imageSrc.length - 1 : prev - 1));
    };

    return (
        <div
            className={`fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'
                }`}
        >
            <div
                className={`bg-white dark:bg-neutral-900 rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col transform transition-all duration-500 ${isOpen ? 'scale-100' : 'scale-90'
                    }`}
            >
                {/* Modal Header */}
                <div className="p-4 border-b dark:border-neutral-700 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">{title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full"
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
                            <line x1="18" y1="6" x2="6" y2="18" />
                            <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                    </button>
                </div>

                {/* Image Carousel */}
                <div className="relative h-96 bg-neutral-100 dark:bg-neutral-800">
                    <img
                        src={imageSrc[currentImageIndex]}
                        alt={`${title} - Image ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain"
                    />

                    {imageSrc.length > 1 && (
                        <>
                            <button
                                onClick={previousImage}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-black"
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
                                    <polyline points="15 18 9 12 15 6" />
                                </svg>
                            </button>
                            <button
                                onClick={nextImage}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-black/90 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-black"
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
                                    <polyline points="9 18 15 12 9 6" />
                                </svg>
                            </button>
                        </>
                    )}

                    {/* Image Counter */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                        {currentImageIndex + 1} / {imageSrc.length}
                    </div>
                </div>

                {/* Description */}
                <div className="p-4 overflow-y-auto">
                    <p className="text-sm">{description}</p>
                </div>
            </div>
        </div>
    );
}
