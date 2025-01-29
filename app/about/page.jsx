'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import WorkSliderBtns from '@/components/WorkSliderBtns';
import "swiper/css";
import Link from 'next/link';
import { useState, useRef } from 'react';

import { about, experience, education, certificates, skills } from '@/data/about';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion, AnimatePresence } from 'framer-motion';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const [certificate, setCertificate] = useState(certificates[0]);
  const [activeTab, setActiveTab] = useState('about');

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setCertificate(certificates[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'
    >
      <div className="container mx-auto">
        <Tabs 
          defaultValue='about' 
          className='flex flex-col xl:flex-row gap-[60px]'
          onValueChange={(value) => setActiveTab(value)}
        >
          <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
            <TabsTrigger value="about">About Me</TabsTrigger>
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="certificates">Certificates</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
          </TabsList>

          <div className='min-h-[70vh] w-full'>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <TabsContent value="about" className='w-full'>
                  <div className='flex flex-col md:flex-row gap-[30px] text-center xl:text-left'>
                    <motion.div
                      className='md:w-1/2'
                      variants={fadeInUp}
                      initial="initial"
                      animate="animate"
                    >
                      <motion.h3 
                        className='text-4xl font-bold mb-4'
                        variants={fadeInUp}
                      >
                        {about.title}
                      </motion.h3>
                      <motion.p 
                        className='max-w-[600px] text-white/60 mx-auto xl:mx-0 mb-6 text-justify'
                        variants={fadeInUp}
                      >
                        {about.description}
                      </motion.p>
                    </motion.div>
                    <motion.div
                      className='md:w-1/2 flex justify-center items-center'
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                    >
                      <Image
                        src="/assets/photo2.jpeg"
                        alt="Zakariae Azarkan"
                        width={356}
                        height={356}
                        className='object-cover rounded-lg shadow-lg'
                        priority
                      />
                    </motion.div>
                  </div>
                </TabsContent>
                <TabsContent value="experience" className='w-full'>
                  <motion.div 
                    className='flex flex-col gap-[30px] text-center xl:text-left'
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.h3 
                      className='text-4xl font-bold'
                      variants={fadeInUp}
                    >
                      {experience[0].title}
                    </motion.h3>
                    <motion.p 
                      className='max-w-[600px] text-white/60 mx-auto xl:mx-0 text-justify'
                      variants={fadeInUp}
                    >
                      {experience[0].description}
                    </motion.p>
                    <ScrollArea className='w-full'>
                      <motion.ul 
                        className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'
                        variants={staggerContainer}
                      >
                        {experience[0].items.map((item, index) => (
                          <motion.li
                            key={index}
                            variants={fadeInUp}
                            className='bg-gray-800 bg-opacity-50 backdrop-blur-lg h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start'
                          >
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max--[260px] min-h-[60px] text-center lg:text-left'>
                              {item.position}
                            </h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                              <p className='text-white/60'>{item.company}</p>
                            </div>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </ScrollArea>
                  </motion.div>
                </TabsContent>
                <TabsContent value="education" className='w-full'>
                  <motion.div 
                    className='flex flex-col gap-[30px] text-center xl:text-left'
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.h3 
                      className='text-4xl font-bold'
                      variants={fadeInUp}
                    >
                      {education[0].title}
                    </motion.h3>
                    <ScrollArea className='w-full'>
                      <motion.ul 
                        className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'
                        variants={staggerContainer}
                      >
                        {education[0].items?.map((item, index) => (
                          <motion.li
                            key={index}
                            variants={fadeInUp}
                            className='bg-gray-800 bg-opacity-50 backdrop-blur-lg h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start'
                          >
                            <span className='text-accent'>{item.duration}</span>
                            <h3 className='text-xl max--[260px] min-h-[60px] text-center lg:text-left'>
                              {item.degree}
                            </h3>
                            <div className='flex items-center gap-3'>
                              <span className='w-[6px] h-[6px] rounded-full bg-accent '></span>
                              <p className='text-white/60'>{item.institution}</p>
                            </div>
                          </motion.li>
                        ))}
                      </motion.ul>
                    </ScrollArea>
                  </motion.div>
                </TabsContent>
                <TabsContent value="certificates" className='w-full py-8'>
                  <motion.div 
                    className='flex flex-col items-center'
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.h3 
                      className='text-4xl font-bold mb-6'
                      variants={fadeInUp}
                    >
                      My Certificates
                    </motion.h3>
                    <motion.div 
                      className='relative w-full max-w-[600px]'
                      variants={fadeInUp}
                    >
                      <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        onSlideChange={handleSlideChange}
                        className='w-full'
                      >
                        {certificates.map((cert, index) => (
                          <SwiperSlide key={index}>
                            <motion.div 
                              className='bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-lg shadow-lg p-4 flex flex-col items-center'
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.5 }}
                            >
                              <Image
                                src={cert.image}
                                alt={cert.title}
                                width={400}
                                height={300}
                                className="rounded-lg mb-4"
                              />
                              <h4 className='text-2xl font-semibold text-accent'>{cert.title}</h4>
                              <p className='text-white/70 mb-2'>{cert.platform} | {cert.dateEarned}</p>
                              <p className='text-white/60 mb-4 text-justify'>{cert.description}</p>
                              <Link href={cert.link} target='_blank' className='inline-flex items-center justify-center px-4 py-2 bg-accent text-white text-xs rounded hover:bg-accent-hover transition-colors'>
                                View Certificate
                              </Link>
                            </motion.div>
                          </SwiperSlide>
                        ))}
                        <WorkSliderBtns
                          containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                          btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                        />
                      </Swiper>
                    </motion.div>
                  </motion.div>
                </TabsContent>
                <TabsContent value="skills" className='w-full h-full'>
                  <motion.div 
                    className='flex flex-col gap-[30px]'
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                  >
                    <motion.div 
                      className='flex flex-col gap-[30px] text-center xl:text-left'
                      variants={fadeInUp}
                    >
                      <h3 className='text-4xl font-bold'>{skills[0].title}</h3>
                    </motion.div>
                    <motion.ul 
                      className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'
                      variants={staggerContainer}
                    >
                      {skills[0].skillList.map((skill, index) => (
                        <motion.li 
                          key={index}
                          variants={fadeInUp}
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className='w-full h-[150px] bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg rounded-xl flex justify-center items-center group hover:from-accent hover:to-accent-hover transition-all duration-300'>
                                <motion.div 
                                  className='text-6xl group-hover:text-white transition-all duration-300'
                                  whileHover={{ scale: 1.1 }}
                                  whileTap={{ scale: 0.9 }}
                                >
                                  {skill.icon}
                                </motion.div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className='capitalize'>{skill.title}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                </TabsContent>
              </motion.div>
            </AnimatePresence>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default About;