"use client";
import CountUp from 'react-countup';

const stats = [
    {
        num: 2,
        text: 'Years of Experience',
    },
    {
        num: 14,
        text: 'Projects Completed',
    },
    {
        num: 15,
        text: 'Technologies Mastered',
    },
    {
        num: 200,
        text: 'Code Commits',
    }
]
const Stats = () => {
    return <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
        <div className="container mx-auto">
            <div className="flex flex-wrap max-w-[80vw] mx-auto xl:max-w-none gap-6">
                {stats.map((item, index) => {
                    return (
                        <div key={index} className="flex-1 flex items-center justify-center gap-4 xl:justify-start">
                            <CountUp
                                start={0}
                                end={item.num}
                                duration={5}
                                delay={2}
                                separator=","
                                className="text-4xl xl:text-6xl font-extrabold"
                            />
                            <p className={`$
                            {item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80
                            `}>
                            {item.text}
                            </p>
                        </div>
                    );
                }
                )}
            </div>
        </div>
    </section>
}

export default Stats