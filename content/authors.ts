// content/authors.ts
export interface Author {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  social: {
    linkedin?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
  expertise: string[];
}

export const authors: Record<string, Author> = {
  'dan-starns': {
    id: 'dan-starns',
    name: 'Dan Starns',
    role: 'Founder & CTO',
    bio: 'Dan is the Founder and CTO at Rocket Connect, specializing in open source AI developer tooling, community building, and API/SDK development.\n\nHe has worked on several major projects, consults for developer tooling companies, and builds open source AI solutions. Dan actively builds and consults communities while maintaining deep connections throughout the devtools ecosystem.',
    avatar: '/images/authors/dan.jpg',
    social: {
      linkedin: 'https://www.linkedin.com/in/danielstarns/',
      twitter: 'https://twitter.com/dan_starns',
      github: 'https://github.com/danstarns',
      website: 'https://rconnect.tech',
    },
    expertise: [
      'Open Source AI Tooling',
      'Developer Communities',
      'API & SDK Development',
      'GraphQL',
      'Neo4j',
      'Developer Relations',
      'Community Building',
      'DevTools Ecosystem',
    ],
  },
  'team-rconnect': {
    id: 'team-rconnect',
    name: 'Rocket Connect Team',
    role: 'Engineering Team',
    bio: 'The Rocket Connect engineering team consists of passionate developers and community builders working on cutting-edge AI development tools and open source solutions.',
    avatar: '/images/authors/rconnect.svg',
    social: {
      linkedin: 'https://www.linkedin.com/company/rocketconnect/',
      twitter: 'https://x.com/rconnect_tech',
      github: 'https://github.com/rocket-connect',
      website: 'https://rconnect.tech',
    },
    expertise: ['AI Tools', 'API Development', 'Community Management', 'Open Source'],
  },
};

export function getAuthor(authorId: string): Author | null {
  return authors[authorId] || null;
}
