import { globals } from './gobals';

export const services = {
  hero: {
    h1: globals.hero.h1,
    cta: globals.hero.cta,
    tag: 'Services',
    intro:
      'We connect people through open source by enhancing the ecosystem and fostering community engagement. Our services include Open Source Development, Community Management, Developer Relations, and Software Training. Contact us to collaborate and build something great together!',
  },
  services: {
    title: 'Services',
    list: [
      {
        id: 'oss-dev',
        name: 'Open Source Development',
        content:
          'We are dedicated to advancing the open-source ecosystem by creating and maintaining high-quality projects. Our team actively contributes to open-source communities and ensures our projects are accessible on platforms like GitHub. You can hire our team to join your project and deliver high-quality solutions.',
        image: '/images/oss-dev.png',
        imageDescription: 'Attendees of DevTools Bangkok working with HubQL.',
        href: '',
        subContent: {
          name: 'Ready to Collaborate?',
          content: "Let's build something great together. Contact us today!",
        },
      },
      {
        id: 'community-mgmt',
        name: 'Community Management',
        content:
          "Our expertise in community management helps foster a vibrant and engaged developer communities. We organize and facilitate discussions, support forums, and events to promote knowledge sharing and collaboration. With our vast international network, we have solutions to meet all your organization's community needs.",
        image: '/images/community.jpg',
        imageDescription: 'A packed room at a university in Bali.',
        href: '',
        subContent: {
          name: 'Join Our Community',
          content: 'Become part of our global network of developers and experts.',
        },
      },
      {
        id: 'dev-rel',
        name: 'Developer Relations',
        content:
          'Our Developer Relations service helps your organization build and nurture relationships through strategic participation in conferences, workshops, and industry events. By fostering knowledge exchange and learning from peers, we ensure your organization remains at the forefront of industry trends and innovations.',
        image: '/images/dev-rel.jpg',
        imageDescription: 'Our team networking in London.',
        href: '',
        subContent: {
          name: "Let's Connect",
          content: 'We are here to help you build and maintain strong developer relationships.',
        },
      },
      {
        id: 'software-training',
        name: 'Software Training',
        content:
          "We collaborate with your organization to build and deliver tailored training programs that meet your developer's needs. Utilizing the latest technologies, our training sessions ensure your developers stay ahead of industry trends and are equipped with the knowledge to excel.",
        image: '/images/training.jpg',
        imageDescription: 'Teaching our innovative solutions to developers.',
        href: '',
        subContent: {
          name: 'Ready to Learn?',
          content: 'Contact us to discuss your training needs.',
        },
      },
    ],
    cta: { label: 'Get to know more', href: '' },
  },
};
