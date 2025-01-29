import React from 'react';
import {
  FaDocker,
  FaJenkins,
  FaAws,
  FaGithub,
  FaVuejs,
  FaAngular,
  FaLaravel,
  FaNodeJs,
  FaLinux
} from 'react-icons/fa';

import {
  SiKubernetes,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
  SiFlask,
  SiSpringboot,
  SiJupyter,
  SiDotnet,
  SiOracle,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiUnity,
  SiExpress
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
        icon: <FaDocker className='text-7xl text-blue-500' />,
        title: 'Docker',
      },
      {
        icon: <FaJenkins className='text-7xl text-red-500' />,
        title: 'Jenkins',
      },
      {
        icon: <SiKubernetes className='text-7xl text-blue-600' />,
        title: 'Kubernetes',
      },
      {
        icon: <SiTerraform className='text-7xl text-purple-600' />,
        title: 'Terraform',
      },
      {
        icon: <FaAws className='text-7xl text-yellow-500' />,
        title: 'AWS',
      },
      {
        icon: <SiGrafana className='text-7xl text-orange-500' />,
        title: 'Grafana',
      },
      {
        icon: <SiPrometheus className='text-7xl text-red-600' />,
        title: 'Prometheus',
      },
      {
        icon: <SiFlask className='text-7xl text-gray-800' />,
        title: 'Flask',
      },
      {
        icon: <SiSpringboot className='text-7xl text-green-600' />,
        title: 'Spring Boot',
      },
      {
        icon: <RiNextjsFill className='text-7xl text-black' />,
        title: 'Next.js',
      },
      {
        icon: <FaVuejs className='text-7xl text-emerald-500' />,
        title: 'Vue.js',
      },
      {
        icon: <FaAngular className='text-7xl text-red-600' />,
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
        icon: <FaLaravel className='text-7xl text-red-500' />,
        title: 'Laravel',
      },
      {
        icon: <SiUnity className='text-7xl text-gray-800' />,
        title: 'Unity',
      },
      {
        icon: <FaGithub className='text-7xl text-orange-600' />,
        title: 'Git',
      },
      {
        icon: <FaLinux className='text-7xl text-node' />,
        title: 'Linux',
      },
      {
        icon: <SiJupyter className='text-7xl text-orange-500' />,
        title: 'Jupyter Notebook',
      },
      {
        icon: <SiDotnet className='text-7xl text-purple-600' />,
        title: '.NET',
      },
      {
        icon: <SiOracle className='text-7xl text-red-600' />,
        title: 'Oracle',
      },
      {
        icon: <SiMysql className='text-7xl text-blue-600' />,
        title: 'MySQL',
      },
      {
        icon: <SiPostgresql className='text-7xl text-blue-500' />,
        title: 'PostgreSQL',
      },
      {
        icon: <SiMongodb className='text-7xl text-green-500' />,
        title: 'MongoDB',
      },
    ]
  }
];