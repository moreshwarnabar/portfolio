import { meta, shopify, starbucks, tesla } from '../assets/images';
import {
  asu,
  car,
  contact,
  css,
  email,
  estate,
  git,
  github,
  html,
  java,
  javascript,
  linkedin,
  mongodb,
  muj,
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
  music,
  tshirt,
  apple,
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

export const education = [
  {
    title: 'Master of Science in Computer Science',
    icon: asu,
    iconBg: '#8C1D40',
    institution: 'Arizona State University',
    date: 'Aug 2023 - Present',
  },
  {
    title: 'Bachelor of Technology in Electrical and Electronics Engineering',
    icon: muj,
    iconBg: '#f08000',
    institution: 'Manipal University Jaipur',
    date: 'Jul 2014 - Aug 2020',
  },
];

export const socialLinks = [
  {
    name: 'GitHub',
    iconUrl: github,
    link: 'https://github.com/moreshwarnabar',
  },
  {
    name: 'LinkedIn',
    iconUrl: linkedin,
    link: 'https://www.linkedin.com/in/moreshwar-rajan-nabar',
  },
];

export const projects = [
  {
    iconUrl: music,
    theme: 'btn-back-red',
    name: 'Spotify Clone',
    description:
      'Developed a replica of the popular digital music service "Spotify," enabling users to upload and listen to music.',
    link: 'https://spotify-clone-beige-two.vercel.app/',
  },
  {
    iconUrl: tshirt,
    theme: 'btn-back-yellow',
    name: '3D T-Shirt Customization App',
    description:
      'App that provides a virtual environment to design T-Shirts, and leverages AI to generate patterns and textures.',
    link: 'https://3d-shop-gold.vercel.app/',
  },
  {
    iconUrl: apple,
    theme: 'btn-back-black',
    name: 'Product Launch Website',
    description:
      "Created a page identical to Apple's iPhone Website, enhancing user experience with seamless and captivating animations.",
    link: 'https://apple-website-blue.vercel.app/',
  },
  {
    iconUrl: snapgram,
    theme: 'btn-back-pink',
    name: 'Face Recognition Service',
    description:
      'Built a cloud service that performs image classification on input images, and returns the classification result.',
    link: 'https://github.com/moreshwarnabar/face-recognition-service',
  },
];
