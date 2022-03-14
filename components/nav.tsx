import React from 'react';

const Nav = ({children}: {children: React.ReactNode}) => {
  return (
    <nav className='w-full h-auto'>
      {children}
    </nav>
  )
};

export default Nav;