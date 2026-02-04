import type { ComponentType } from 'react';

export type TeamMember = {
  id: string;
  name: string;
  role: string;
  imageUrl: string;
  imageHint: string;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  slug: string;
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  description: string;
  coverImage: {
    url: string;
    hint: string;
  };
  images: {
    url: string;
    hint: string;
  }[];
  teamIds: string[];
};
