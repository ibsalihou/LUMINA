
import { ServiceItem, PortfolioItem, Testimonial } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'logo-design',
    title: 'Design de Logo',
    description: 'Des logos distinctifs et intemporels qui capturent l\'essence de votre marque. Conçus pour durer.',
    icon: '✨'
  },
  {
    id: 'branding',
    title: 'Branding Complet',
    description: 'Un langage visuel cohérent incluant palettes de couleurs, typographies et guides de style pour définir votre voix.',
    icon: '🎨'
  },
  {
    id: 'business-cards',
    title: 'Cartes de Visite',
    description: 'Un design de papeterie premium qui laisse une impression mémorable dès le premier contact physique.',
    icon: '📇'
  }
];

export const PORTFOLIO: PortfolioItem[] = [
  {
    id: '1',
    category: 'Design de Logo',
    title: 'Aura Skincare',
    imageUrl: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    category: 'Identité de Marque',
    title: 'Vertex Tech',
    imageUrl: 'https://images.unsplash.com/photo-1634942537034-2531766767d7?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    category: 'Cartes de Visite',
    title: 'Minimal Stationery',
    imageUrl: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    category: 'Branding',
    title: 'Lunar Coffee Co.',
    imageUrl: 'https://images.unsplash.com/photo-1521475007441-151480afdf4c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    category: 'Design de Logo',
    title: 'Elysian Jewelry',
    imageUrl: 'https://images.unsplash.com/photo-1533154683836-84ea7a0bc310?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    category: 'Cartes de Visite',
    title: 'Architect Portfolio',
    imageUrl: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sophie Martin',
    role: 'Fondatrice, Aura Skincare',
    quote: "Lumina a su transformer notre vision confuse en une identité de marque d'une élégance rare. Notre logo est devenu notre plus grand atout.",
    avatarUrl: 'https://i.pravatar.cc/150?u=sophie'
  },
  {
    id: '2',
    name: 'Thomas Bernard',
    role: 'CEO, Vertex Tech',
    quote: "Une expertise technique alliée à un sens esthétique pointu. Les retours sur nos nouvelles cartes de visite sont unanimes : c'est du grand art.",
    avatarUrl: 'https://i.pravatar.cc/150?u=thomas'
  },
  {
    id: '3',
    name: 'Julie Lefebvre',
    role: 'Architecte d\'intérieur',
    quote: "Collaborer avec ce studio a été une révélation. Mon branding reflète enfin la qualité et la rigueur de mon propre travail.",
    avatarUrl: 'https://i.pravatar.cc/150?u=julie'
  }
];
