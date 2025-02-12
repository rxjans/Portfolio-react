import React from 'react';
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';

import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const About = () => {
  const[ref,inView] = useInView({
    threshold: 0.5,
  });
  return(
  
  <div className='section' id='about' ref={ref}>
    <div className='container mx-auto hidden md:block'> 
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      {/* img */}
        <motion.div
        variants={fadeIn('right', 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.3}}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[640px] bg-about bg-contain bg-no-repeat h-[640px] mix-blend-color-dodge opacity-60 bg-top'>
        </motion.div>
      {/* text */}
        <motion.div
        variants={fadeIn('left', 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: true, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-gradient'>About Me.</h2>
          <h3 className='h3 mb-4 text-[22px] leading-[1.2]'>I am a Full Stack Web Developer with entry-level experience specializing in user interface design, API development, data
            security, and continuous improvement. Adept at identifying opportunities to enhance the user experience and
            develop new features to improve web application functionality.
          </h3>
          <p className='mb-6 text-[16px] leading-[1]'>As far as I can remember, I've always been curious about gaming and the new emerging technologies. I used to wonder how the cogs are working behind the scene to provide with such smooth immersive experience. This curiosity led me to discover a world full of programmers that I ended up admiring as I grew up. I had a dream of contributing to this community I've been following for so long. I discovered various variations of work the programmers would take upon(Backend, Frontend, Designing, Website Development).
          
          Gradually, I found the best ideal field that had me hooked. I started working on my Web Development skills whenever I had free time, I would create different projects to help me better understand the core concepts of Development. After a year of Frontend Development, I switched to MERN Stack Development(MongoDB, Express.js, React.js, Node.js)</p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-8 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                <CountUp start={0} end={6} duration={4} />: null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Learning
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                <CountUp start={0} end={10} duration={4} />: null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Major <br />
                Projects Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                <CountUp start={0} end={15} duration={4} />: null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Minor <br />
                Projects Completed
              </div>
            </div>
          </div>
          <div className='flex gap-x-12 items-center'>
            <button onClick={(e)=>{
                e.preventDefault();
                window.location.href='https://drive.google.com/file/d/1C_WAancJWqJRACtpEnv1rW6pdmR2bIcL/view?usp=drive_link';
                }} 
                className='btn btn-lg'>Resume</button>
            <a href='#home' className='text-gradient btn-link'>
              Home Page
            </a>
          </div>
        </motion.div>
      </div>
    </div>  

    {/* for medium screen size */}
    <div className='container mx-auto md:hidden'> 
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
      {/* img */}
        <div
        variants={fadeIn('right', 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[640px] bg-about bg-contain bg-no-repeat h-[640px] mix-blend-color-dodge opacity-60 bg-top'>
        </div>
      {/* text */}
        <div
        variants={fadeIn('left', 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
          <h2 className='h2 text-gradient'>About Me.</h2>
          <h3 className='h3 mb-4 text-[22px] leading-[1.2]'>I am a Full Stack Web Developer with entry-level experience specializing in user interface design, API development, data
            security, and continuous improvement. Adept at identifying opportunities to enhance the user experience and
            develop new features to improve web application functionality.
          </h3>
          <p className='mb-6 text-[16px] leading-[1]'>As far as I can remember, I've always been curious about gaming and the new emerging technologies. I used to wonder how the cogs are working behind the scene to provide with such smooth immersive experience. This curiosity led me to discover a world full of programmers that I ended up admiring as I grew up. I had a dream of contributing to this community I've been following for so long. I discovered various variations of work the programmers would take upon(Backend, Frontend, Designing, Website Development).
          
          Gradually, I found the best ideal field that had me hooked. I started working on my Web Development skills whenever I had free time, I would create different projects to help me better understand the core concepts of Development. After a year of Frontend Development, I switched to MERN Stack Development(MongoDB, Express.js, React.js, Node.js)</p>
          {/* stats */}
          <div className='flex gap-x-6 lg:gap-x-8 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                <CountUp start={0} end={6} duration={4} />: null}
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Years of <br />
                Learning
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                <CountUp start={0} end={10} duration={4} />: null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Major <br />
                Projects Completed
              </div>
            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {inView ?
                <CountUp start={0} end={15} duration={4} />: null}
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Minor <br />
                Projects Completed
              </div>
            </div>
          </div>
          <div className='flex gap-x-12 items-center'>
            <button onClick={(e)=>{
                e.preventDefault();
                window.location.href='https://drive.google.com/file/d/1C_WAancJWqJRACtpEnv1rW6pdmR2bIcL/view?usp=drive_link';
                }} 
                className='btn btn-lg'>Resume</button>
            <a href='#home' className='text-gradient btn-link'>
              Home Page
            </a>
          </div>
        </div>
      </div>
    </div>  
  </div>
  
  );
};

export default About;
