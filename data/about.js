import React from 'react';
import {
  FaJs,
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPython,
  FaJava,
  FaAngular,
  FaDocker,
  FaSymfony,
  FaFigma
} from 'react-icons/fa';

import {
  SiCsharp,
  SiTailwindcss,
  SiExpress,
  SiQuasar,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiUnity,
  SiSpringboot
} from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";

export const about = {
  title: 'About Me',
  description: 'I\'m Zakariae Azarkan, a full-stack developer with over 2 years of experience, specializing in building responsive and high-performance websites using technologies such as React and Express. I focus on creating clean, user-friendly interfaces and continuously improve my skills to deliver great results for my clients.',
};

export const experience = [
  {
    icon: '/assets/about/badge.svg',
    title: 'My Experience',
    description: 'As an intern at Hashtag 64, I developed a cross-platform mobile app offering relaxing music playlists, preset sound waves, and customizable sound options to help mask tinnitus symptoms, enhancing users quality of life.',
    items: [
      {
        company: 'Hashtag 64',
        position: 'Full Stack Developer',
        duration: '01 July 2024 - 31 Nobember 2024',
      },
    ]
  }
];

export const education = [
  {
    icon: '/assets/about/cap.svg',
    title: 'My Education',
    items: [
      {
        institution: 'Faculty of Science and Technology of Tangier',
        degree: 'Software Engineering Degree',
        duration: 'September 2023 - Present',
      },
      {
        institution: 'Faculty of Science of Tetouan',
        degree: 'University Diploma in Computer Science',
        duration: '2021 - 2023',
      },
      {
        institution: 'CPGE Tetouan',
        degree: 'Mathematics and Physics (MPSI)',
        duration: '2020 - 2021',
      }
    ]
  }
];

export const certificates = [
  {
    title: 'Frontend Developer (React)',
    platform: 'HackerRank',
    dateEarned: '2024',
    description: 'Proved ability to create and optimize interactive, dynamic web apps using React.',
    link: 'https://www.hackerrank.com/certificates/iframe/27aea8f4fd10',
    image: '/assets/certificates/frontend-react.png',
  },
  {
    title: 'SQL BASIC',
    platform: 'HackerRank',
    dateEarned: '2024',
    description: 'Completed SQL Basics on HackerRank, proving skills in writing and optimizing queries.',
    link: 'https://www.hackerrank.com/certificates/256451400398',
    image: '/assets/certificates/cert1.png',
  },
  {
    title: 'JavaScript BASIC',
    platform: 'HackerRank',
    dateEarned: '2024',
    description: 'Achieved JavaScript Basics on HackerRank, showing a solid grasp of core JavaScript concepts.',
    link: 'https://www.hackerrank.com/certificates/iframe/abafff203fce',
    image: '/assets/certificates/js-basic.png',
  },
  {
    title: 'Postman API Fundamentals Student Expert',
    platform: 'Postman',
    dateEarned: '2024',
    description: 'Gained hands-on experience in building, testing, and managing APIs using Postman.',
    link: 'https://badgr.com/public/assertions/WzAtwvbfSHKBfLWOSdWv4A',
    image: '/assets/certificates/postman-api.png',
  },
  {
    title: 'SQL Intermediate',
    platform: 'HackerRank',
    dateEarned: '2024',
    description: 'Expanded SQL knowledge, working with more complex queries, subqueries, and advanced functions.',
    link: 'https://www.hackerrank.com/certificates/iframe/6dc828f31013',
    image: '/assets/certificates/cert1.png',
  },
  {
    title: 'JavaScript Intermediate',
    platform: 'HackerRank',
    dateEarned: '2024',
    description: 'Strengthened skills in JavaScript with advanced concepts like promises, callbacks, and ES6 features.',
    link: 'https://www.hackerrank.com/certificates/iframe/6ef9b8e5ff2a',
    image: '/assets/certificates/cert1.png',
  },
];

export const skills = [
  {
    title: 'My Skills',
    skillList: [
      {
        icon: <FaReact className='text-7xl text-react' />,
        title: 'React',
      },
      {
        icon: <RiNextjsFill className='text-7xl text-next' />,
        title: 'Next.js',
      },
      {
        icon: <FaVuejs className='text-7xl text-vue' />,
        title: 'Vue.js',
      },
      {
        icon: <FaAngular className='text-7xl text-vue' />,
        title: 'Angular',
      },
      {
        icon: <FaNodeJs className='text-7xl text-node' />,
        title: 'Node.js',
      },
      {
        icon: <SiExpress className='text-7xl text-express' />,
        title: 'Express',
      },
      {
        icon: <SiSpringboot className='text-7xl text-express' />,
        title: 'Spring Boot',
      },
      {
        icon: <FaLaravel className='text-7xl text-laravel' />,
        title: 'Laravel',
      },
      {
        icon: <FaSymfony className='text-7xl text-laravel' />,
        title: 'Symfony',
      },
      {
        icon: <FaPython className='text-7xl text-python' />,
        title: 'Python',
      },
      {
        icon: <FaJava className='text-7xl text-java' />,
        title: 'Java',
      },
      {
        icon: <FaJs className='text-7xl text-js' />,
        title: 'JavaScript',
      },
      {
        icon: <SiCsharp className='text-7xl text-js' />,
        title: 'C#',
      },
      {
        icon: <SiTailwindcss className='text-7xl text-tailwind' />,
        title: 'Tailwind CSS',
      },
      {
        icon: <SiQuasar className='text-7xl text-quasar' />,
        title: 'Quasar',
      },
      {
        icon: <SiMongodb className='text-7xl text-mongodb' />,
        title: 'MongoDB',
      },
      {
        icon: <SiMysql className='text-7xl text-mysql' />,
        title: 'MySQL',
      },
      {
        icon: <SiPostgresql className='text-7xl text-postgresql' />,
        title: 'PostgreSQL',
      },
      {
        icon: <SiGit className='text-7xl text-git' />,
        title: 'Git',
      },
      {
        icon: <FaDocker className='text-7xl text-git' />,
        title: 'Docker',
      },
      {
        icon: <SiUnity className='text-7xl text-git' />,
        title: 'Unity',
      },
      {
        icon: <FaFigma className='text-7xl text-git' />,
        title: 'Figma',
      },
    ]
  }
];