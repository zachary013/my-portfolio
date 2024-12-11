'use client';

import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import useSound from "use-sound";

const Home = () => {
  const [playClickSound] = useSound('/sounds/box-click.wav', { volume: 0.5 });

  const handleResumeClick = () => {
    playClickSound();
    window.open('/Docs/cv_fr.pdf', '_blank');
  };

  const handleSocialClick = (url) => {
    playClickSound();
    window.open(url, '_blank');
  };
  
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="h-full"
    >
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:t-8 xl:pb-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center xl:text-left order-2 xl:order-none"
          >
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="h1 mb-6"
            >
              Hi I'm <br /> <span className="text-accent">Zakariae Azarkan</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="max-w-[500px] mb-9 text-white/60"
            >
              I am a junior Full Stack Developer based in 📍Tangier, Morocco.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col xl:flex-row items-center gap-8"
            >
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleResumeClick}
              >
                <span>Get my resume</span>
                <FiDownload />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  contaierStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  onSocialClick={handleSocialClick}
                />
              </div>
            </motion.div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="order-1 xl:order-none mb-8 xl:mb-0"
          >
            <Photo alt="my photo"/>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Stats />
      </motion.div>
    </motion.section>
  )
}

export default Home;