import React from 'react';
//logo
import Logo from '../assets/logo.png';



const Header = () => {
  return <header className='py-4'>
    <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <a href='#'>
            <img className='h-[120px] w-[120px]' src={Logo} />
          
          </a>
          {/* button */}
          <button className='btn btn-sm'>Let's Talk</button>
        </div>
    </div>
  </header>;
};

export default Header;
