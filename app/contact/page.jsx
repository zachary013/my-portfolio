"use client";

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

//icons
import { FaPhoneAlt, FaEnvelope, FaLinkedin  } from 'react-icons/fa';
import { FaSquareUpwork } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

const info = [
  {
    icon: <FaPhoneAlt />,
    title: 'Phone',
    description: '(+212) 6 74 70 51 81'
  },
  {
    icon: <FaEnvelope />,
    title: 'Email',
    description: 'azarkanzakariae@gmail.com',
    action: () => window.location.href = "mailto:azarkanzakariae@gmail.com"
  },
  {
    icon: <FaLinkedin />,
    title: 'LinkedIn',
    description: 'Zakariae Azarkan',
    action: () => window.open("https://www.linkedin.com/in/zakariae-azarkan/", "_blank")
  },
  {
    icon: <FaSquareUpwork />,
    title: 'Upwork',
    description: 'Zakariae A',
    action: () => window.open("https://www.upwork.com/freelancers/~011d6275a3b0fe672a", "_blank")
  },
  {
    icon: <TbBrandFiverr />,
    title: 'Fiverr',
    description: 'zakariaeazarkan',
    action: () => window.open("https://www.fiverr.com/zakariaeazarkan", "_blank")
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='py-6'
    >
      <div className="container mx-auto">
        <div className='flex flex-col xl:flex-row gap-[30px]'>
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='xl:w-[54%] order-2 xl:order-none'
          >
            <form className='flex flex-col gap-6 p-10 bg-gray-800 bg-opacity-50 backdrop-blur-lg rounded-xl'>
              <motion.h3 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className='text-4xl text-accent'
              >
                Contact Me
              </motion.h3>
              <motion.h3 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className='text-2xl text-white'
              >
                Let's get in touch
              </motion.h3>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className='grid grid-cols-1 md:grid-cols-2 gap-6'
              >
                <Input type='firstname' placeholder='Firstname' />
                <Input type='lastname' placeholder='Lastname' />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className='grid grid-cols-1 gap-6'
              >
                <Input type='email' placeholder='Email' />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
              >
                <Select>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder='Select a service' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="est">Web Development</SelectItem>
                      <SelectItem value="cst">Mobile Development</SelectItem>
                      <SelectItem value="mst">Gaming</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
              >
                <Textarea className='h-[200px]' placeholder='Message' />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <Button size="md" className='max-w-40'>Submit</Button>
              </motion.div>
            </form>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'
          >
            <ul className='flex flex-col gap-10'>
              {info.map((item, index) => {
                return (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-center gap-6 cursor-pointer" 
                    onClick={item.action}
                  >
                    <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent rounded-md flex items-center justify-center'>
                      <div className='text-[28px]'>{item.icon}</div>
                    </div>
                    <div className='flex-1'>
                      <p className='text-white/60'>{item.title}</p>
                      <h3 className='text-xl'>{item.description}</h3>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;