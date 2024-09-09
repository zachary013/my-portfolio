"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

const Photo = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: 'easeIn' },
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: 'easeInOut' },
          }}
          className="w-[298px] h-[298px] lg:w-[498px] lg:h-[498px] mix-blend-lighten absolute"
        >
          <Image
            src="/assets/photo.png"
            alt="Homepage Image"
            priority
            quality={100}
            fill
            className="object-contain rounded-full"
          />
        </motion.div>
        <motion.svg
          className="w-[300px] xl:w-[506px] h-[300px] xl:h-[506px]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#E31B6D"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: '15 120 25 25' }}
            animate={{
              strokeDasharray: [
                '15 120 25 25',
                '16 25 92 72',
                '4 250 22 22',
              ],
              rotate: [0, 360],
              strokeWidth: [4, 8, 4],
              stroke: ['#E31B6D', '#48E0E4'],
              opacity: [1, 0.5, 1],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
