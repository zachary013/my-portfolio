'use client'

import { motion } from 'framer-motion'
import React, { useState, useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import WorkSliderBtns from '@/components/WorkSliderBtns'
import Link from 'next/link'
import Image from 'next/image'
import { FaUnity, FaLaravel, FaVuejs, FaNodeJs, FaReact, FaSass } from 'react-icons/fa'
import { SiMongodb, SiCsharp, SiExpress, SiInertia, SiMysql } from 'react-icons/si'

const techIcons = {
  CSharp: <SiCsharp className='text-secondary' />,
  Unity: <FaUnity className='text-secondary' />,
  Laravel: <FaLaravel className='text-secondary' />,
  Vue: <FaVuejs className='text-secondary' />,
  Inertia: <SiInertia className='text-secondary' />,
  MySql: <SiMysql className='text-secondary' />,
  MongoDB: <SiMongodb className='text-secondary' />,
  'Express.js': <SiExpress className='text-secondary' />,
  React: <FaReact className='text-secondary' />,
  'Node.js': <FaNodeJs className='text-secondary' />,
  'Tailwind.css': <FaSass className='text-secondary' />,
}

const projects = [
  {
    num: '01',
    category: 'Gaming',
    title: 'Dungeon Adventure',
    description: '2D procedurally generated RPG game in Unity.',
    stack: [{ name: "CSharp" }, { name: "Unity" }],
    image: '/assets/projects/dungeon-game.png',
    video: '/assets/videos/unity-game.mp4',
    live: '',
    github: 'https://github.com/zachary013/dungeon-adventure-rpg-2d',
  },
  {
    num: '02',
    category: 'Full Stack',
    title: 'Ecommerce Website Cloe',
    description: 'Cloe is an ecommerce website built using Laravel Vue and Inertia.',
    stack: [{ name: "Laravel" }, { name: "Vue" }, { name: "Inertia" }, { name: "MySql" }],
    image: '/assets/projects/cloe.png',
    video: '/assets/videos/cloe-website.mp4',
    live: '',
    github: 'https://github.com/zachary013/laravel-vue-ecommerce',
  },
  {
    num: '03',
    category: 'Fullstack',
    title: 'SolMar Estate',
    description: 'A real estate website built using the MERN stack.',
    stack: [{ name: "MongoDB" }, { name: "Express.js" }, { name: "React" }, { name: "Node.js" }, { name: "Tailwind.css" }],
    image: '/assets/projects/real-estate.jpg',
    video: '',
    live: '',
    github: 'https://github.com/zachary013/real-estate-app-mern',
  },
]

const Portfolio = () => {
  const [project, setProject] = useState(projects[0])
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const videoRefs = useRef(projects.map(() => React.createRef()))

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  useEffect(() => {
    projects.forEach((project, index) => {
      if (project.video) {
        const video = videoRefs.current[index].current
        video.load()
      }
    })
  }, [])

  const handleMouseEnter = (index) => {
    setHoveredIndex(index)
    if (projects[index].video) {
      const video = videoRefs.current[index].current
      video.play()
    }
  }

  const handleMouseLeave = (index) => {
    setHoveredIndex(null)
    if (projects[index].video) {
      const video = videoRefs.current[index].current
      video.pause()
      video.currentTime = 0
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <div className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'>
            <div className='flex flex-col gap-[30px] h-[50%]'>
              <div className='text-8xl leading-none font-extra-bold text-transparent text-outline'>
                {project.num}
              </div>
              <h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'>
                {project.title}
              </h2>
              <p className='text-white/60'>{project.description}</p>
              <ul className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <li key={index} className='text-4xl flex items-center'>
                    <div className='text-4xl mr-4' aria-label={item.name}>
                      {techIcons[item.name]}
                    </div>
                  </li>
                ))}
              </ul>
              <div className='border border-white/20'></div>
              <div className='flex items-center gap-4'>
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsArrowUpRight className='text-white text-3xl group-hover:text-accent ' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
                        <BsGithub className='text-white text-3xl group-hover:text-accent ' />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repo</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className='w-full xl:w-[50%]'>
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <div
                    className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden'
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    {project.video ? (
                      <video
                        ref={videoRefs.current[index]}
                        className='absolute inset-0 w-full h-full object-cover'
                        loop
                        muted
                        playsInline
                        preload="auto"
                      >
                        <source src={project.video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    ) : (
                      <Image
                        src={project.image}
                        fill
                        className='object-cover'
                        alt={project.title}
                      />
                    )}
                    <div 
                      className={`absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 transition-opacity duration-300 ${
                        hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                      }`}
                    />
                    <div 
                      className={`absolute inset-0 flex flex-col justify-end p-6 transition-opacity duration-300 ${
                        hoveredIndex === index ? 'opacity-0' : 'opacity-100'
                      }`}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.category}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Portfolio