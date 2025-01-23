export interface PortfolioItem {
    imageSrc: string[];
    title: string;
    description: string;
}

export interface PortfolioItemProps extends PortfolioItem {
    onExpandClick?: () => void;
}