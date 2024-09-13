"use client";

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
    window.open('/Docs/cv.pdf', '_blank'); // Update the path to your PDF
  };

  const handleSocialClick = (url) => {
    playClickSound();
    window.open(url, '_blank');
  };
  
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:t-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Hi I'm <br /> <span className="text-accent">Zakariae Azarkan</span>
            </h1>
            <p className="max-w-[500px] mb-9 test-white/80">I am a passionate Full Stuck Developer based in Tangier, Morocco.</p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
                onClick={handleResumeClick}
              >
                <span>Get my resume</span>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  contaierStyles="flex gap-6 "
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                  onSocialClick={handleSocialClick}
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo alt="my photo"/>
          </div>
        </div>
      </div>
      <Stats />
    </section>
  )
}

export default Home