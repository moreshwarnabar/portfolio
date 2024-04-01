import { meta, shopify, starbucks, tesla } from '../assets/images';
import {
  car,
  contact,
  css,
  estate,
  git,
  github,
  html,
  java,
  javascript,
  linkedin,
  mongodb,
  nextjs,
  nodejs,
  postgres,
  prisma,
  pricewise,
  react,
  spring,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  three,
  typescript,
  verifone,
} from '../assets/icons';

export const skills = [
  {
    imageUrl: html,
    name: 'HTML',
    type: 'Frontend',
  },
  {
    imageUrl: javascript,
    name: 'JavaScript',
    type: 'Frontend',
  },
  {
    imageUrl: typescript,
    name: 'TypeScript',
    type: 'Frontend',
  },
  {
    imageUrl: react,
    name: 'React',
    type: 'Frontend',
  },
  {
    imageUrl: nextjs,
    name: 'Next.js',
    type: 'Frontend',
  },
  {
    imageUrl: three,
    name: 'Three.js',
    type: 'Animation',
  },
  {
    imageUrl: css,
    name: 'CSS',
    type: 'Frontend',
  },
  {
    imageUrl: tailwindcss,
    name: 'Tailwind CSS',
    type: 'Frontend',
  },
  {
    imageUrl: nodejs,
    name: 'Node.js',
    type: 'Backend',
  },
  {
    imageUrl: java,
    name: 'Java',
    type: 'Backend',
  },
  {
    imageUrl: spring,
    name: 'Spring',
    type: 'Backend',
  },
  {
    imageUrl: mongodb,
    name: 'MongoDB',
    type: 'Database',
  },
  {
    imageUrl: postgres,
    name: 'PostgreSQL',
    type: 'Database',
  },
  {
    imageUrl: prisma,
    name: 'Prisma',
    type: 'ORM Tool',
  },
  {
    imageUrl: git,
    name: 'Git',
    type: 'Version Control',
  },
  {
    imageUrl: github,
    name: 'GitHub',
    type: 'Version Control',
  },
];

export const workExp = [
  {
    title: 'Software Engineer',
    company_name: 'Verifone',
    icon: verifone,
    iconBg: '#34ebcc',
    date: 'Jun 2021 - Jun 2023',
    points: [
      'Developing and maintaining payment solutions using Spring Boot and other related technologies.',
      'Collaborating with engineering teams globally to create high-quality applications and minimize defects.',
      'Performing end-to-end testing to ensure quality and durability of product.',
      'Participating in code reviews and providing constructive feedback to other developers.',
    ],
  },
];

export const socialLinks = [
  {
    name: 'Contact',
    iconUrl: contact,
    link: '/contact',
  },
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/YourGitHubUsername',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/YourLinkedInUsername',
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: 'btn-back-red',
    name: 'Amazon Price Tracker',
    description:
      'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
    link: 'https://github.com/adrianhajdin/pricewise',
  },
  {
    iconUrl: threads,
    theme: 'btn-back-green',
    name: 'Full Stack Threads Clone',
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: 'https://github.com/adrianhajdin/threads',
  },
  {
    iconUrl: car,
    theme: 'btn-back-blue',
    name: 'Car Finding App',
    description:
      'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
    link: 'https://github.com/adrianhajdin/project_next13_car_showcase',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Full Stack Instagram Clone',
    description:
      'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    link: 'https://github.com/adrianhajdin/social_media_app',
  },
  {
    iconUrl: estate,
    theme: 'btn-back-black',
    name: 'Real-Estate Application',
    description:
      'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
    link: 'https://github.com/adrianhajdin/projects_realestate',
  },
  {
    iconUrl: summiz,
    theme: 'btn-back-yellow',
    name: 'AI Summarizer Application',
    description:
      'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    link: 'https://github.com/adrianhajdin/project_ai_summarizer',
  },
];
