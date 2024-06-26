import React from 'react';
import {BiBriefcase, BiHomeAlt,BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs';

import {Link} from 'react-scroll';

const Nav = () => {
  return <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
    <div className='container mx-auto'>
      <div className='w-full bg-black/20 h-[70px] mx-auto backdrop-blur-2xl rounded-full 
      max-w-[455px] px-5 flex justify-between items-center text-2xl text-white/70'>
        <Link 
          to='home' 
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-200}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiHomeAlt />
        </Link>
        <Link 
          to='about' 
          activeClass='active'
          spy={true}
          smooth={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BiUser />
        </Link>
        <Link 
          to='services' 
          activeClass='active'
          spy={true}
          smooth={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsClipboardData />
        </Link>
        <Link 
          to='contact' 
          activeClass='active'
          spy={true}
          smooth={true}
          className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'>
          <BsChatSquare />
        </Link>
      </div>
    </div>
  </nav>;
};

export default Nav;
