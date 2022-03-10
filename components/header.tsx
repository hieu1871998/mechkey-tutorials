import Link from 'next/link';
import { useState, useEffect } from 'react';
import Nav from './nav';
import NavItem from './navItem';

const Header = () => {
  const [ scrollY, setScrollY ] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  })

  return (
    <header className='w-full flex flex-col bg-white'>
      <Link href='https://discord.gg/c3RHqNuSUY'>
        <a target='_blank' className='w-full bg-black p-3'>
          <h4 className='text-center text-xs text-white font-leagueSpartan tracking-wide'>JOIN US ON DISCORD: VIETNAM MECHANICAL KEYBOARD</h4>
        </a>
      </Link>
      <div className='border-b border-b-black border-opacity-30 relative py-4 pl-20 pb-4'>
        <Link href='/'>
          <a className='text-3xl font-raleway font-bold tracking-widest select-none'><span className='text-red-500 font-black'>M</span>ECHKEY TUTORIALS</a>            
        </Link>          
      </div>
      {scrollY > 80 ? (
        <div className='w-full flex justify-between px-20 bg-inherit font-sans tracking-widest text-sm font-thin text-neutral-900 z-10 fixed shadow'>
          <Nav>
            <NavItem link='/' isFirst>HOME</NavItem>
            <NavItem link='/'>KEYBOARDS 101</NavItem>
            <NavItem link='/'>STAB MODS</NavItem>
            <NavItem link='/'>SWITCHES</NavItem>
            <NavItem link='/'>KEYCAPS</NavItem>
            <NavItem link='/'>BUILD</NavItem>
            <NavItem link='/'>FIRMWARE</NavItem>
          </Nav>
          <Nav>
            <NavItem link='/' isFirst>SEARCH</NavItem>
          </Nav>
        </div>
      ) : (
        <div className='w-full flex justify-between px-20 bg-inherit font-sans tracking-widest text-sm font-thin text-neutral-900'>
          <Nav>
            <NavItem link='/' isFirst>HOME</NavItem>
            <NavItem link='/'>KEYBOARDS 101</NavItem>
            <NavItem link='/'>STAB MODS</NavItem>
            <NavItem link='/'>SWITCHES</NavItem>
            <NavItem link='/'>KEYCAPS</NavItem>
            <NavItem link='/'>BUILD</NavItem>
            <NavItem link='/'>FIRMWARE</NavItem>
          </Nav>
          <Nav>
            <NavItem link='/' isFirst>SEARCH</NavItem>
          </Nav>
        </div>
      )}
    </header>
  )
}

export default Header;