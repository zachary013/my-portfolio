"use client";

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import "swiper/css";
import Link from 'next/link';
import { useState } from 'react';

import {
  FaHtml5,
  FaCss3,
  FaPhp,
  FaJs,
  FaVuejs,
  FaReact,
  FaNodeJs,
  FaLaravel,
  FaPython,
  FaJava,
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
  SiUnity
} from 'react-icons/si';
import { RiNextjsFill } from "react-icons/ri";


const about = {
  title: 'About Me',
  description: 'I\'m Zakariae Azarkan, a full-stack developer with over 2 years of experience, specializing in building responsive and high-performance websites using technologies such as React and Express. I focus on creating clean, user-friendly interfaces and continuously improve my skills to deliver great results for my clients.',
};

const experience = [
  {
    icon: '/assets/about/badge.svg',
    title: 'My Experience',
    description: 'As an intern at Hashtag 64, I developed a cross-platform mobile app offering relaxing music playlists, preset sound waves, and customizable sound options to help mask tinnitus symptoms, enhancing users quality of life.',
    items: [
      {
        company: 'Hashtag 64',
        position: 'Full Stack Developer',
        duration: 'July 2024 - Present',
      },
    ]
  }
];

const education = [
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
        degree: 'Mathematics and Physics',
        duration: '2020 - 2021',
      }
    ]
  }
];

const certificates = [
  {
    icon: '/assets/about/certificate.svg',
    title: 'My Certificates',
    items: [
      {
        title: 'SQL BASIC',
        platform: 'HackerRank',
        dateEarned: '2024',
        description: 'An introductory course covering the fundamentals of React, including components, state management, and hooks.',
        link: '#',
        image: '/assets/certificates/cert1.png',
      },
      {
        title: 'JavaScript BASIC',
        platform: 'HackerRank',
        dateEarned: '2024',
        description: 'A course focusing on advanced SQL queries, database optimization, and data manipulation techniques.',
        link: '#',
        image: '/assets/certificates/cert1.png',
      }
    ]
  }
];

const skills = [
  {
    title: 'My Skills',
    skillList: [
      {
        icon: <FaHtml5 className='text-7xl text-html' />,
        title: 'HTML5',
      },
      {
        icon: <FaCss3 className='text-7xl text-css' />,
        title: 'CSS3',
      },
      {
        icon: <FaJs className='text-7xl text-js' />,
        title: 'JavaScript',
      },
      {
        icon: <FaPhp className='text-7xl text-php' />,
        title: 'PHP',
      },
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
        icon: <FaNodeJs className='text-7xl text-node' />,
        title: 'Node.js',
      },
      {
        icon: <SiExpress className='text-7xl text-express' />,
        title: 'Express',
      },
      {
        icon: <FaLaravel className='text-7xl text-laravel' />,
        title: 'Laravel',
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
        icon: <SiUnity className='text-7xl text-git' />,
        title: 'Unity',
      },
    ]
  }
];

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const About = () => {
  const [certificate, setCertificate] = useState(certificates[0]);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setCertificate(certificates[currentIndex]);
  };


  return <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 1,
      transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' }
    }}
    className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
  >
    <div className="container mx-auto">
      <Tabs
        defaultValue='about'
        className='flex flex-col xl:flex-row gap-[60px]'
      >
        <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
          <TabsTrigger value="about">About Me</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="certificates">Certificates</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
        </TabsList>

        <div className='min-h-[70vh] w-full'>
          <TabsContent value="about" className='w-full'>
            <div className='flex flex-col md:flex-row gap-[30px] text-center xl:text-left'>
              <div className='md:w-1/2'>
                <h3 className='text-4xl font-bold mb-4'>{about.title}</h3>
                <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-6 text-justify'>{about.description}</p>
              </div>
              <div className='md:w-1/2 flex justify-center items-center'>
                <Image
                  src="/assets/photo2.jpeg"
                  alt="Zakariae Azarkan"
                  width={356}
                  height={356}
                  className='object-cover'
                  priority
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="experience" className='w-full'>
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{experience[0].title}</h3>
              <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{experience[0].description}</p>
              <ScrollArea className='w-full'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {
                    experience[0].items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#081f37] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max--[260px] min-h-[60px] text-center lg:text-left'>
                            {item.position}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                            <p className='text-white/60'>{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="education" className='w-full'>
            <div className='flex flex-col gap-[30px] text-center xl:text-left'>
              <h3 className='text-4xl font-bold'>{education[0].title}</h3>
              <ScrollArea className='w-full'>
                <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                  {
                    education[0].items?.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className='bg-[#081f37] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start'>
                          <span className='text-accent'>{item.duration}</span>
                          <h3 className='text-xl max--[260px] min-h-[60px] text-center lg:text-left'>
                            {item.degree}
                          </h3>
                          <div className='flex items-center gap-3'>
                            <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                            <p className='text-white/60'>{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                </ul>
              </ScrollArea>
            </div>
          </TabsContent>
          <TabsContent value="certificates" className='w-full'>
            <h3 className='text-4xl font-bold text-center mb-8'>My Certificates</h3>
            <div className='w-full xl:w-[60%] mx-auto relative'>
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className='mb-12'
                onSlideChange={handleSlideChange}
              >
                {certificates.map((cert, index) => (
                  <SwiperSlide key={index} className='w-full'>
                    <div className='relative flex flex-col justify-center items-center bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden'>
                      <Image
                        src={cert.image}
                        width={600}
                        height={400}
                        className='object-cover w-full h-48'
                        alt={`${cert.title} certificate`}
                      />
                      <div className='p-4'>
                        <h4 className='text-xl font-semibold'>{cert.title}</h4>
                        <p className='text-gray-600'>{cert.platform} - {cert.dateEarned}</p>
                        <p className='text-gray-500 mt-2'>{cert.description}</p>
                      </div>
                      {cert.link && (
                        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2'>
                          <Link href={cert.link} target="_blank" rel="noopener noreferrer">
                            <TooltipProvider delayDuration={100}>
                              <Tooltip>
                                <TooltipTrigger className='bg-accent text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-pink-700 transition-colors'>
                                  View Certificate
                                </TooltipTrigger>
                                <TooltipContent>
                                  <p>View Certificate</p>
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </Link>
                        </div>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 top-1/2 transform -translate-y-1/2 z-20"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </div>
          </TabsContent>
          <TabsContent value="skills" className='w-full h-full'>
            <div className='flex flex-col gap-[30px]'>
              <div className='flex flex-col gap-[30px] text-center xl:text-left'>
                <h3 className='text-4xl font-bold'>{skills[0].title}</h3>
              </div>
              <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                {skills[0].skillList.map((skill, index) => {
                  return <li key={index}>
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className='w-full h-[150px] bg-[#081f37] rounded-xl flex justify-center items-center group'>
                          <div className='text-6xl group-hover:text-accent transition-all duration-300'>
                            {skill.icon}
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className='capitalize'>{skill.title}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </li>
                })}
              </ul>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  </motion.div>
}

export default About