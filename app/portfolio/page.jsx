'use client'

import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css"
import { BsArrowUpRight, BsGithub } from 'react-icons/bs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import WorkSliderBtns from '@/components/WorkSliderBtns'
import Link from 'next/link'
import Image from 'next/image'
import { projects, techIcons } from '@/data/projects'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Portfolio() {
  const [project, setProject] = useState(projects[0])
  const [hoveredIndex, setHoveredIndex] = useState(null)

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex
    setProject(projects[currentIndex])
  }

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row xl:gap-[30px]'>
          <motion.div 
            variants={fadeInUp}
            className='w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none'
          >
            <motion.div variants={staggerChildren} className='flex flex-col gap-[30px] h-[50%]'>
              <motion.div 
                variants={fadeInUp}
                className='text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-accent to-purple-500 mb-4'
              >
                {project.num}
              </motion.div>
              <motion.h2 
                variants={fadeInUp}
                className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize'
              >
                {project.title}
              </motion.h2>
              <motion.p variants={fadeInUp} className='text-white/60'>{project.description}</motion.p>
              <motion.ul variants={staggerChildren} className='flex gap-4'>
                {project.stack.map((item, index) => (
                  <motion.li key={index} variants={fadeInUp} className='text-4xl flex items-center'>
                    <div className='text-4xl mr-4' aria-label={item.name}>
                      {techIcons[item.name]}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.div variants={fadeInUp} className='border border-white/20'></motion.div>
              <motion.div variants={staggerChildren} className='flex items-center gap-4'>
                <motion.div variants={fadeInUp}>
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
                </motion.div>
                <motion.div variants={fadeInUp}>
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
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            className='w-full xl:w-[50%]'
          >
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className='xl:h-[520px] mb-12'
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className='w-full'>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className='h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-lg overflow-hidden'
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <Image
                      src={project.image}
                      fill
                      className='object-cover'
                      alt={project.title}
                    />
                    <motion.div 
                      initial={{ opacity: 1 }}
                      animate={{ opacity: hoveredIndex === index ? 0 : 1 }}
                      transition={{ duration: 0.3 }}
                      className='absolute inset-0 bg-gradient-to-t from-black/70 to-black/20'
                    />
                    <motion.div 
                      initial={{ opacity: 1, y: 0 }}
                      animate={{ 
                        opacity: hoveredIndex === index ? 0 : 1,
                        y: hoveredIndex === index ? 20 : 0
                      }}
                      transition={{ duration: 0.3 }}
                      className='absolute inset-0 flex flex-col justify-end p-6'
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80">{project.category}</p>
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none "
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}