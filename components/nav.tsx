import React from 'react';

const Nav = ({children}: {children: React.ReactNode}) => {
  return (
    <nav className='py-4'>
      {children}
    </nav>
  )
};

export default Nav;