import React from 'react';

const Nav = ({children}: {children: React.ReactNode}) => {
  return (
    <nav className='w-full h-auto xl:block lg:hidden md:hidden sm:hidden hidden'>
      {children}
    </nav>
  )
};

export default Nav;