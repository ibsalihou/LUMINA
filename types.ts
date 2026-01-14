
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface PortfolioItem {
  id: string;
  category: string;
  title: string;
  imageUrl: string;
}

export interface BrandSuggestion {
  mood: string;
  colorPalette: string[];
  typographyStyle: string;
  rationale: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  avatarUrl: string;
}
