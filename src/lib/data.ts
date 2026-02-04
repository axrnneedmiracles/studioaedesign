import type { TeamMember, Service, Project } from './types';
import { Film, Cuboid, Code, Image, Video, Gamepad2 } from 'lucide-react';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Jane Doe',
    role: 'Creative Director',
    imageUrl: 'https://picsum.photos/seed/team1/400/400',
    imageHint: 'woman portrait',
  },
  {
    id: '2',
    name: 'John Smith',
    role: 'Lead Photographer',
    imageUrl: 'https://picsum.photos/seed/team2/400/400',
    imageHint: 'man portrait',
  },
  {
    id: '3',
    name: 'Alex Ray',
    role: 'Videographer & Editor',
    imageUrl: 'https://picsum.photos/seed/team3/400/400',
    imageHint: 'person smiling',
  },
  {
    id: '4',
    name: 'Sarah Jones',
    role: 'Lead Designer',
    imageUrl: 'https://picsum.photos/seed/team4/400/400',
    imageHint: 'woman professional',
  },
];

export const services: Service[] = [
  {
    id: '1',
    title: 'Video Editing',
    description: 'Professional video editing for a polished final product.',
    icon: Film,
  },
  {
    id: '2',
    title: '3D Arts',
    description: 'Creating stunning 3D models, animations, and visualizations.',
    icon: Cuboid,
  },
  {
    id: '3',
    title: 'Web Dev',
    description: 'Building beautiful, responsive websites that perform.',
    icon: Code,
  },
  {
    id: '4',
    title: 'Photo Editing',
    description: 'High-quality photo retouching and enhancement services.',
    icon: Image,
  },
  {
    id: '5',
    title: 'Videography',
    description: 'Cinematic video production for brands and events.',
    icon: Video,
  },
  {
    id: '6',
    title: 'Game Dev',
    description: 'Developing immersive and engaging game experiences.',
    icon: Gamepad2,
  },
];

export const projects: Project[] = [
  {
    id: '1',
    slug: 'urban-echoes',
    title: 'Urban Echoes',
    category: 'Photography',
    description:
      'A compelling black and white photography series capturing the soul of the city after dusk. This project explores the interplay of light and shadow in urban landscapes, revealing hidden narratives within the concrete jungle. Each photograph is a testament to the quiet moments and architectural beauty often overlooked in the hustle of daily life.',
    coverImage: {
      url: 'https://picsum.photos/seed/urban1/600/400',
      hint: 'city street',
    },
    images: [
      { url: 'https://picsum.photos/seed/urban2/800/600', hint: 'urban architecture' },
      { url: 'https://picsum.photos/seed/urban3/800/600', hint: 'city night' },
    ],
    teamIds: ['2'],
  },
  {
    id: '2',
    slug: 'innovate-co-branding',
    title: 'Innovate Co. Branding',
    category: 'Branding',
    description:
      'A complete branding overhaul for a leading tech startup. We developed a new visual identity, including logo, color palette, and typography, to reflect their innovative spirit and market position. The result is a modern, cohesive brand that resonates with their target audience and stands out in a competitive landscape.',
    coverImage: {
      url: 'https://picsum.photos/seed/innovate1/600/400',
      hint: 'minimalist design',
    },
    images: [
      { url: 'https://picsum.photos/seed/innovate2/800/600', hint: 'brand logo' },
      { url: 'https://picsum.photos/seed/innovate3/800/600', hint: 'office branding' },
    ],
    teamIds: ['1', '4'],
  },
  {
    id: '3',
    slug: 'coastal-dreams',
    title: 'Coastal Dreams',
    category: 'Videography',
    description:
      'A cinematic short film showcasing the breathtaking beauty of the coastline. Using drone footage and slow-motion cinematography, we captured the serene and powerful nature of the ocean. This film has been featured in several film festivals and is used by tourism boards to promote the region.',
    coverImage: {
      url: 'https://picsum.photos/seed/coastal1/600/400',
      hint: 'ocean waves',
    },
    images: [
      { url: 'https://picsum.photos/seed/coastal2/800/600', hint: 'beach drone' },
      { url: 'https://picsum.photos/seed/coastal3/800/600', hint: 'sunset coast' },
    ],
    teamIds: ['1', '3'],
  },
  {
    id: '4',
    slug: 'forest-light',
    title: 'Forest Light',
    category: 'Photography',
    description: 'An exploration of light filtering through the canopies of ancient forests. This series captures the ethereal and magical quality of nature, highlighting the delicate balance of the ecosystem.',
    coverImage: {
      url: 'https://picsum.photos/seed/forest1/600/400',
      hint: 'forest sunbeam',
    },
    images: [],
    teamIds: ['2'],
  },
  {
    id: '5',
    slug: 'mountain-majesty',
    title: 'Mountain Majesty',
    category: 'Videography',
    description: 'A time-lapse and drone video project that documents the dramatic weather and changing seasons of a mountain range. The film captures the raw power and majestic presence of these natural giants.',
    coverImage: {
      url: 'https://picsum.photos/seed/mountain1/600/400',
      hint: 'mountain peak',
    },
    images: [],
    teamIds: ['3'],
  },
  {
    id: '6',
    slug: 'abstract-forms',
    title: 'Abstract Forms',
    category: 'Web Design',
    description: 'A minimalist website for an art gallery, designed to let the artwork speak for itself. The clean, grid-based layout and subtle animations provide an elegant and intuitive user experience.',
    coverImage: {
      url: 'https://picsum.photos/seed/abstract1/600/400',
      hint: 'abstract shapes',
    },
    images: [],
    teamIds: ['1', '4'],
  },
];

export const featuredProjects = projects.slice(0, 3);
