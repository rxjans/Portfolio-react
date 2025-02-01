import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';
import { BsPatchCheckFill } from 'react-icons/bs';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <div className='section pb-48' id='services' ref={ref}>
      <div className='container mx-auto h-screen hidden md:block'>
        <motion.div
          variants={fadeIn('down', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='text-center md:mt-8 xl:mt-36'>
          <h3 className='h2 lg:text-[16px] text-[12px] mb-0 text-zinc-400'>What Skills I have</h3>
          <h2 className='h3 lg:text-[36px] text-[24px] mb-2 text-gradient font-tertiary xl:mb-20 lg:mb-4'>My Experience</h2>
          <div className='flex flex-col xl:flex-row gap-x-8 lg:gap-x-16 lg:gap-y-0 items-center'>
            {/* Frontend Card */}
            <motion.div
              variants={fadeIn('right', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='w-full xl:w-[560px] lg:min-w-[320px] mb-8 xl:mb-0'>
              <div className='border-gradient border-b py-10 px-20 rounded-2xl bg-gradient-to-r from-indigo-500/50 from-10% to-fuchsia-500/50 hover:bg-site'>
                <h3 className='text-gradient border-b rounded-2xl mb-6 '>Frontend Development</h3>
                <div className='text-left grid grid-cols-2 gap-6 gap-x-18'>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>HTML</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>CSS</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>Javascript</h4>
                      <small className='text-gray-300 font-semibold'>Intermediate</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>Tailwind</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>React</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>Redux Toolkit</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                </div>
              </div>
            </motion.div>

            {/* Backend Card */}
            <motion.div
              variants={fadeIn('left', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='w-full xl:w-[560px] lg:min-w-[320px]'>
              <div className='border-gradient border-b py-10 px-20 rounded-2xl bg-gradient-to-r from-indigo-500/50 from-10% to-fuchsia-500/50 hover:bg-site'>
                <h3 className='text-gradient border-b rounded-2xl mb-6 '>Backend Development</h3>
                <div className='text-left grid grid-cols-2 gap-6 gap-x-18'>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>NodeJs</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>MongoDB</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>MySql</h4>
                      <small className='text-gray-300 font-semibold'>Intermediate</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>ExpressJs</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>Postman</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>Insomnia</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                </div>
              </div>
            </motion.div>
          </div>
          <div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex items-center justify-center gap-x-8 mt-8'>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://www.linkedin.com/in/rajan-sharma-418364242/';
                
            }}
            className='btn btn-sm'>
            Hire Me
          </button>
        </div>
        </motion.div>

        {/* Hire Me Button
        <motion.div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex items-center justify-center gap-x-8 mt-8'>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://www.linkedin.com/in/rajan-sharma-418364242/overlay/1706606139814/single-media-viewer/?profileId=ACoAADw1h1QBM7HGrnA3-gcKqsUkY_HLkT3UW7s';
            }}
            className='btn btn-sm'>
            Hire Me
          </button>
        </motion.div> */}
      </div>
      <div className='container mx-auto h-screen md:hidden'>
        <div
          variants={fadeIn('down', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='text-center md:mt-8 xl:mt-36'>
          <h3 className='h2 lg:text-[16px] text-[12px] mb-0 text-zinc-400'>What Skills I have</h3>
          <h2 className='h3 lg:text-[36px] text-[24px] mb-2 text-gradient font-tertiary xl:mb-20 lg:mb-4'>My Experience</h2>
          <div className='flex flex-col xl:flex-row gap-x-8 lg:gap-x-16 lg:gap-y-0 items-center'>
            {/* Frontend Card */}
            <div
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='w-full xl:w-[560px] lg:min-w-[320px] mb-8 xl:mb-0'>
              <div className='border-gradient border-b py-10 px-20 rounded-2xl bg-gradient-to-r from-indigo-500/50 from-10% to-fuchsia-500/50 hover:bg-site'>
                <h3 className='text-gradient border-b rounded-2xl mb-6 '>Frontend Development</h3>
                <div className='text-left grid grid-cols-2 gap-6 gap-x-18'>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>HTML</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>CSS</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>Javascript</h4>
                      <small className='text-gray-300 font-semibold'>Intermediate</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>Tailwind</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>React</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>RTK</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div
              variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='w-full xl:w-[560px] lg:min-w-[320px]'>
              <div className='border-gradient border-b py-10 px-20 rounded-2xl bg-gradient-to-r from-indigo-500/50 from-10% to-fuchsia-500/50 hover:bg-site'>
                <h3 className='text-gradient border-b rounded-2xl mb-6 '>Backend Development</h3>
                <div className='text-left grid grid-cols-2 gap-6 gap-x-18'>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>NodeJs</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>MongoDB</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>MySql</h4>
                      <small className='text-gray-300 font-semibold'>Intermediate</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>ExpressJs</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>Postman</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                  <article className='flex'>
                    <BsPatchCheckFill className='min-w-[18px] text-blue-400 mt-2 mr-2' />
                    <div>
                      <h4 className='font-bold'>Insomnia</h4>
                      <small className='text-gray-300 font-semibold'>Experienced</small>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Hire Me Button */}
        <div
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount: 0.7 }}
          className='flex items-center justify-center gap-x-8 mt-8'>
          <button
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                'https://www.linkedin.com/in/rajan-sharma-418364242/';
            }}
            className='btn btn-sm'>
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Services;
