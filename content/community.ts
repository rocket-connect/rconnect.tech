import { globals } from './gobals';

export const community = {
  hero: {
    h1: globals.hero.h1,
    cta: globals.hero.cta,
    tag: 'Community',
    intro:
      'Join us in connecting people through open source! Our mission is to enhance the open-source ecosystem and foster community engagement, grounded in our values. Partner with us to access our extensive network and expertise. Together, we can build something great, amplify your brand, and make a meaningful impact.',
  },

  // NEW: Upcoming Events Section with MCP Luma iframes
  upcomingEvents: {
    title: 'Upcoming Events',
    subtitle:
      'Join our latest MCP (Model Context Protocol) meetups and connect with the AI developer community',
    events: [
      {
        id: 'mcp-bangkok',
        title: 'MCP Bangkok: Graph Databases Meet AI with MCP Integration',
        date: 'Thursday, 16th October 2025',
        time: '6:00 PM - 9:00 PM',
        location: 'True Digital Park, Bangkok',
        description:
          'Join us for an exciting evening exploring the cutting-edge intersection of graph databases and AI tooling! This Bangkok meetup brings together Neo4j experts and the local developer community.',
        lumaEmbed: 'https://luma.com/embed/event/evt-bH2cC7pHKvBp40t/simple',
        blogLink: '/blog/mcp-bangkok',
      },
      {
        id: 'mcp-singapore',
        title: 'MCP Singapore: Graph Databases Meet AI with MCP Integration',
        date: 'Thursday, 23rd October 2025',
        time: '6:00 PM - 9:00 PM GMT+8',
        location: 'Lifelong Learning Institute, Singapore',
        description:
          'Explore the cutting-edge intersection of graph databases and AI tooling with Neo4j experts and the Singapore developer community.',
        lumaEmbed: 'https://luma.com/embed/event/evt-oq71JJUvFYqWWsR/simple',
        blogLink: '/blog/mcp-singapore',
      },
    ],
  },

  activity: {
    title: 'Our Activities',
    info: 'Our team and network extend across the globe, reaching experts and resources from every corner of the world. We offer community management and foster deeper relationships, ensuring your company connects with the right people and benefits from unparalleled support and engagement. Explore our activities below to see what our team is up to.',
    offering:
      "We offer our expertise in helping your organization reach your target audience and promote your brand. By leveraging our extensive network and in-person team, you can gain significant exposure and connect with key industry players. Hire our team to represent your company, speak on your behalf, or utilize our network to amplify your message. Additionally, you can sponsor our activities to benefit from increased visibility and engagement with your target audience. Partner with us to enhance your brand's reach and impact.",
    locations: [
      {
        eventName: 'GraphQL London',
        city: 'London',
        lattitude: 51.5074,
        longitude: -0.1278,
        href: 'https://guild.host/events/september-meetup-lxmkv4',
        color: '#ec4899',
      },
      {
        eventName: 'Graph Databases Bangalore',
        city: 'Bangalore',
        lattitude: 12.9716,
        longitude: 77.5946,
        href: '/blog/graph-db-bangalore',
        color: '#ec4899',
      },
      {
        eventName: 'GraphQL Bangkok',
        city: 'Bangkok',
        lattitude: 13.756331,
        longitude: 100.501762,
        href: '/blog/graphql-bangkok',
        color: '#ec4899',
      },
      // Add MCP events to the map
      {
        eventName: 'MCP Bangkok',
        city: 'Bangkok',
        lattitude: 13.756331,
        longitude: 100.501762,
        href: '/blog/mcp-bangkok',
        color: '#6366f1', // Purple for MCP events
      },
      {
        eventName: 'MCP Singapore',
        city: 'Singapore',
        lattitude: 1.352083,
        longitude: 103.819839,
        href: '/blog/mcp-singapore',
        color: '#6366f1', // Purple for MCP events
      },
      {
        eventName: 'Dev Tools Bali',
        city: 'Bali',
        lattitude: -8.340539,
        longitude: 115.091949,
        href: '/blog/devtools-bali',
        color: '#dc2626',
      },
      {
        eventName: 'Dev Tools Bangkok',
        city: 'Bangkok',
        lattitude: 13.756331,
        longitude: 100.501762,
        href: '/blog/devtools-bangkok',
        color: '#dc2626',
      },
      {
        eventName: 'Dev Tools Singapore',
        city: 'Singapore',
        lattitude: 1.352083,
        longitude: 103.819839,
        href: 'https://www.meetup.com/graphql-sg/events/298902024/',
        color: '#dc2626',
      },
      {
        eventName: 'Dev Tools Taipei',
        city: 'Taipei',
        lattitude: 25.033,
        longitude: 121.5654,
        href: 'https://guild.host/events/devtools-taipei-kbcq0e',
        color: '#dc2626',
      },
      {
        eventName: 'DevTools LA',
        city: 'Los Angeles',
        lattitude: 34.052235,
        longitude: -118.243683,
        href: '/blog/devtools-la',
        color: '#ec4899',
      },
    ],
  },
  directory: {
    title: 'Communities',
    info: 'We start, foster, sponsor, and facilitate several communities in tech across the globe. You can leverage our existing communities for your efforts, connecting with vibrant tech groups and gaining access to a diverse and engaged audience. Collaborate with us to elevate your brand and make a meaningful impact in the tech world.',
    events: [
      {
        eventName: 'MCP Bangkok',
        href: '/blog/mcp-bangkok',
        image: '/images/directory/devtools-bkk.jpg',
        logo: '/images/event-logos/mcp-bangkok-logo.svg',
      },
      {
        eventName: 'MCP Singapore',
        href: '/blog/mcp-singapore',
        image: '/images/directory/devtools-singapore.jpg',
        logo: '/images/event-logos/mcp-singapore-logo.svg',
      },
      {
        eventName: 'Dev Tools LA',
        href: '/blog/devtools-la',
        image: '/images/directory/devtools-la.jpg',
        logo: '/images/event-logos/devtools-la.svg',
      },
      {
        eventName: 'Dev Tools Bali',
        href: '/blog/devtools-bali',
        image: '/images/directory/devtools-bali.jpg',
        logo: '/images/event-logos/devtools-bali-logo.svg',
      },
      {
        eventName: 'Dev Tools Bangkok',
        href: '/blog/devtools-bangkok',
        image: '/images/directory/devtools-bkk.jpg',
        logo: '/images/event-logos/devtools-bkk-logo.svg',
      },
      {
        eventName: 'Dev Tools Singapore',
        href: 'https://www.meetup.com/graphql-sg/events/298902024/',
        image: '/images/directory/devtools-singapore.jpg',
        logo: '/images/event-logos/devtools-singapore-logo.svg',
      },
      {
        eventName: 'GraphQL Bangkok',
        href: '/blog/graphql-bangkok',
        image: '/images/directory/graphql-bkk.jpg',
        logo: '/images/event-logos/graphql-bkk-logo.svg',
      },
      {
        eventName: 'GraphQL Taipei',
        href: 'https://guild.host/graphql-taipei',
        image: '/images/directory/graphql-taipei.jpg',
        logo: '/images/event-logos/graphql-taipei-logo.svg',
      },
      {
        eventName: 'GraphQL Singapore',
        href: 'https://www.meetup.com/graphql-sg/events/296809027/',
        image: '/images/directory/graphql-singapore.jpg',
        logo: '/images/event-logos/graphql-singapore-logo.svg',
      },
    ],
  },
  featuredVideos: {
    title: 'Featured Videos',
    featured: {
      title: 'Dan Starns: Working with Graphs and GraphQL',
      desc: 'Uncover the transformative potential of graphs in the realm of query languages. From optimizing data retrieval to enhancing analytical capabilities, this talk explores the synergy between graphs and query languages, shedding light on innovative approaches to data management.',
      embed: 'https://www.youtube-nocookie.com/embed/aXq9OdW5kh0?si=Ev6RmNdyb9SAOWLS',
    },
    videos: [
      {
        title: 'DevTools Bali 001 with Google Developer Group Bali',
        href: 'https://youtu.be/EmccUzvB-t8',
        image: 'https://img.youtube.com/vi/EmccUzvB-t8/maxresdefault.jpg',
        desc: 'DevTools Bali #001 hosted by Google Developer Group Bali.',
      },
      {
        title: 'Panel Discussion on The Future of Software Collaboration',
        href: 'https://youtu.be/1Qfi1qpzR9w',
        image: 'https://img.youtube.com/vi/1Qfi1qpzR9w/sddefault.jpg',
        desc: 'With a panel discussion on "The future of software development" from industry experts and a hands-on workshop, you can help your team adopt the next powerful tools, Generative AI and Hubql, to accelerate your workflow.',
      },
      {
        title: 'Pichyapa Khanapattanawong: Understand your Graphql schema with visualization',
        href: 'https://youtu.be/dZIieN4xQl8',
        image: 'https://img.youtube.com/vi/dZIieN4xQl8/sddefault.jpg',
        desc: 'See why and how Hubql visualization can help you and your team understand your GraphQL schema better',
      },
      {
        title: 'Ankit Upadhyay: Generative AI with Knowledge Graphs',
        href: 'https://youtu.be/oGqpJyoEvtg',
        image: 'https://img.youtube.com/vi/oGqpJyoEvtg/sddefault.jpg',
        desc: "Tech enthusiast with a degree and dreams—probably more of the latter. Juggling between coding and binge-watching, I believe in leaving a mark through witty code and perfectly timed punchlines. On a mission to redefine tech norms, because why be serious when you can code with a side of laughter? Let's break the binary together!",
      },
    ],
  },
};
