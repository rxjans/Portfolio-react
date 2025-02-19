import React from 'react';
import {motion} from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return <section className='py-16 lg:section' id='contact'>
    <div className='container mx-auto hidden md:block'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <motion.div
            variants={fadeIn('right', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}} 
            >
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br />together!</h2>
            </motion.div>
          </div>
          <motion.form
            variants={fadeIn('left', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}} 
            action='https://formspree.io/f/mwkdywve' method='POST' className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your name' name='name'></input>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your email' name='email'></input>
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' type='text' placeholder='Your message' name='message'></textarea>
            <button className='btn btn-lg'>Send Message</button>
          </motion.form>
        </div>
      </div>

      <div className='container mx-auto md:hidden'>
        <div className='flex flex-col lg:flex-row'>
          <div className='flex-1'>
            <div
            variants={fadeIn('right', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: true, amount: 0.7}} 
            >
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's Work <br />together!</h2>
            </div>
          </div>
          <form
            variants={fadeIn('left', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            action='https://formspree.io/f/mwkdywve' method='POST' className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your name' name='name'></input>
            <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' type='text' placeholder='Your email' name='email'></input>
            <textarea className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12' type='text' placeholder='Your message' name='message'></textarea>
            <button className='btn btn-lg'>Send Message</button>
          </form>
        </div>
      </div>
    </section>;
};

export default Contact;
