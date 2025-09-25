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
    bio: 'Dan is the Founder and CTO at Rocket Connect, specializing in open source AI developer tooling, community building, and API/SDK development.',
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
  'jason-koo': {
    id: 'jason-koo',
    name: 'Jason Koo',
    role: 'Developer Advocate',
    bio: 'Jason is a Developer Advocate at Neo4j with many years of experience building developer communities and driving adoption of graph databases. He specializes in creating educational content, delivering conference talks, and empowering developers to build with cutting-edge technologies.',
    avatar: '/images/authors/jason.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/jason-koo-usa/',
      twitter: 'https://x.com/jalakoo',
      github: 'https://github.com/jalakoo',
      website: 'https://neo4j.com',
    },
    expertise: [
      'Graph Databases',
      'Developer Advocacy',
      'Community Building',
      'Computer Vision',
      'Educational Content Creation',
    ],
  },
  'tobias-meixner': {
    id: 'tobias-meixner',
    name: 'Tobias Meixner',
    role: 'Co-Founder',
    bio: "Tobias is the Co-Founder of HubQL and former Co-Founder & CTO of Brikl. He's passionate about organizing developer tool events and building communities, including organizing the Supabase Bangkok Meetup.",
    avatar: '/images/authors/tobias.jpeg',
    social: {
      linkedin: 'https://www.linkedin.com/in/meixnertobias/',
      twitter: 'https://x.com/meixnertobias',
      github: 'https://github.com/meixnertobias',
      website: 'https://hubql.com',
    },
    expertise: [
      'Developer Tools',
      'Community Building',
      'Event Organization',
      'Startup Leadership',
      'CTO Experience',
      'Bangkok Tech Scene',
      'Supabase',
      'Developer Communities',
    ],
  },
};

export function getAuthor(authorId: string): Author | null {
  return authors[authorId] || null;
}

export function getAuthors(authorIds: string | string[]): Author[] {
  if (typeof authorIds === 'string') {
    authorIds = [authorIds];
  }

  return authorIds
    .map((id) => authors[id])
    .filter((author): author is Author => author !== undefined);
}
