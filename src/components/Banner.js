import React from 'react';
import Image from '../assets/final12.png';

import {FaGithub, FaDribbble, FaInstagram, FaLinkedin} from 'react-icons/fa';
import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='text-[55px] lg:text-[50px] font-bold leading[1] xl:text-[90px]'>
            RAJAN <span>SHARMA</span>
            </motion.h1>
            <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='mb-6 text-[36px] md:text-[48px] lg:text-[30px] xl:text-[50px] font-secondary font-semibold leading-[2]'>
              <span className='mr-4 text-white'>I am a</span>
              <TypeAnimation sequence={[
                'Front-End Developer',
                2000,
                'Back-End Developer',
                2000,
                'UI/UX Designer',
                2000
              ]}
              speed={50}
              className='text-accent'
              wrapper='span'
              repeat={Infinity}
              />

            </motion.div>
            <motion.p 
            variants={fadeIn('up', 1.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='mb-8 max-w-lg mx-auto lg:mx-0'>A Web Developer with entry-level experience specializing in user interface design, API development, data
security, and continuous improvement. Adept at identifying opportunities to enhance the user experience and
develop new features to improve web application functionality
            </motion.p>
            <motion.div 
            variants={fadeIn('left', 2.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button onClick={(e)=>{
                e.preventDefault();
                window.location.href='#contact';
                }} 
                className='btn btn-lg'>Contact Me</button>
              <a href='home' className='text-gradient btn-link'>My Portfolio</a>
            </motion.div>
          
            <motion.div 
            variants={fadeIn('right', 3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:max-0'>
              <a href='https://github.com/rxjans'>
              <FaGithub />
              </a>
              <a href='https://www.instagram.com/_.rxjans/'>
              <FaInstagram />
              </a>
              <a href='https://www.linkedin.com/in/rajan-sharma-418364242/'>
              <FaLinkedin />
              </a>
            </motion.div>
          </div>      
          <motion.div
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
           className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mix-blend-color-dodge'>
            <img src={Image}></img>
          </motion.div>
      </div>
    </div>
  </section>
};

export default Banner;
