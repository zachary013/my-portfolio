"use client";

import { button } from '@/components/ui/button';
import { input } from '@/components/ui/input';
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

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

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
]

import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className='py-6'
    >
    <div className="container mx-auto">
      <div className='flex flex-col xl:flex-row gap-[30px]'>
        <div className='xl:w-[54%] order-2 xl:order-none'>
          <form className='flex flex-col gap-6 p-10 bg-[#081f37] rounded-xl'>
            <h3 className='text-4xl text-accent'>Contact Me</h3>
            <h3 className='text-2xl text-white'>Let's get in touch</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
              <Input type='firstname' placeholder='Firstname' />
              <Input type='lastname' placeholder='Lastname' />
            </div>
            <div className='grid grid-cols-1 gap-6 '>
            <Input type='email' placeholder='Email' />
            </div>

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
            <Textarea className='h-[200px]' placeholder='Message' />
            <Button size="md" className='max-w-40'>Submit</Button>
          </form>
        </div>
        <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
          <ul className='flex flex-col gap-10'>
            {info.map((item, index) => {
              return <li key={index} className="flex items-center gap-6 cursor-pointer" onClick={item.action}>
                <div className='w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] text-accent rounded-md flex items-center justify-center'>
                  <div className='text-[28px]'>{item.icon}</div>
                </div>
                <div className='flex-1'>
                  <p className='text-white/60'>{item.title}</p>
                  <h3 className='text-xl'>{item.description}</h3>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>
    </motion.section>
  )
}

export default Contact