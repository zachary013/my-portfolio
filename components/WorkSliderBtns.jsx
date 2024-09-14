'use client'

import { useSwiper } from 'swiper/react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const WorkSliderBtns = () => {
  const swiper = useSwiper()

  return (
    <>
      <button 
        onClick={() => swiper.slidePrev()} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        onClick={() => swiper.slideNext()} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/80 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </>
  )
}

export default WorkSliderBtns