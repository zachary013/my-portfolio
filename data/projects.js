import { FaUnity, FaLaravel, FaVuejs, FaNodeJs, FaReact, FaSass, FaAngular, FaDocker } from 'react-icons/fa'
import { SiMongodb, SiCsharp, SiExpress, SiInertia, SiMysql, SiQuasar, SiTailwindcss, SiSpringboot } from 'react-icons/si'
import { BiLogoPostgresql } from "react-icons/bi";

export const techIcons = {
  CSharp: <SiCsharp className='text-accent' />,
  Unity: <FaUnity className='text-accent' />,
  Laravel: <FaLaravel className='text-accent' />,
  Vue: <FaVuejs className='text-accent' />,
  Inertia: <SiInertia className='text-accent' />,
  MySql: <SiMysql className='text-accent' />,
  MongoDB: <SiMongodb className='text-accent' />,
  'Express.js': <SiExpress className='text-accent' />,
  React: <FaReact className='text-accent' />,
  'Node.js': <FaNodeJs className='text-accent' />,
  'Sass': <FaSass className='text-accent' />,
  'Quasar': <SiQuasar className='text-accent' />,
  'Tailwind.css': <SiTailwindcss className='text-accent' />,
  'Spring Boot': <SiSpringboot className='text-accent' />,
  'Docker': <FaDocker className='text-accent' />,
  'PostgreSQL': <BiLogoPostgresql className='text-accent' />,
  'Angular': <FaAngular className='text-accent' />,
}

export const projects = [
  {
    num: '01',
    category: 'Gaming',
    title: 'Dungeon Adventure',
    description: '2D procedurally generated RPG game in Unity.',
    stack: [{ name: "CSharp" }, { name: "Unity" }],
    image: '/assets/projects/dungeon-game.png',
    live: '',
    github: 'https://github.com/zachary013/dungeon-adventure-rpg-2d',
  },
  {
    num: '02',
    category: 'Full Stack',
    title: 'Clothing Brand Cloe',
    description: 'Cloe is an ecommerce website built using Laravel Vue and Inertia.',
    stack: [{ name: "Laravel" }, { name: "Vue" }, { name: "Inertia" }, { name: "MySql" }, { name: "Tailwind.css" }],
    image: '/assets/projects/cloe.png',
    live: '',
    github: 'https://github.com/zachary013/laravel-vue-ecommerce',
  },
  {
    num: '03',
    category: 'Fullstack',
    title: 'Riviera Estate',
    description: 'A real estate website built using the MERN stack.',
    stack: [{ name: "MongoDB" }, { name: "Express.js" }, { name: "React" }, { name: "Node.js" }, { name: "Sass" }],
    image: '/assets/projects/real-estate.png',
    live: '',
    github: 'https://github.com/zachary013/real-estate-app-mern',
  },
  {
    num: '04',
    category: 'Frontend',
    title: 'Taskify',
    description: 'An efficient To-Do List cross-platform application built using the Quasar Framework. The app helps users manage their tasks effectively with a clean interface.',
    stack: [{ name: "Vue" }, { name: "Quasar" }],
    image: '/assets/projects/todo.png',
    live: '',
    github: 'https://github.com/zachary013/quasar-todo-list-app',
  },
  {
    num: '05',
    category: 'Full Stack',
    title: 'Book Network App : Bookie',
    description: 'Bookie is a book-centric social app that allows users to discover books, share reviews, and connect with fellow readers. The app provides personalized recommendations and facilitates virtual book clubs and events.',
    stack: [{ name: "Spring Boot" }, { name: "Angular" }, { name: "PostgreSQL" }, { name: "Docker" }],
    image: '/assets/projects/social_book.jpg',
    live: '',
    github: 'https://github.com/zachary013/spring-angular-book-network',
  }
]