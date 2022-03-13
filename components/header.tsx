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
  });

   return (
    <header className='w-full flex flex-col bg-white'>
      <div className='border-b border-b-black border-opacity-30 relative py-4 pl-20 pb-4'>
        <Link href='/'>
          <a className='text-3xl p-1 font-raleway font-bold tracking-widest select-none border-2 border-black'><span className='text-red-500 font-black'>M</span>ECHKEY TUTORIALS</a>            
        </Link>          
      </div>
      {scrollY > 80 ? (
        <div className='w-full flex justify-between pr-20 bg-inherit font-sans tracking-widest text-sm font-thin text-neutral-900 z-10 fixed shadow'>
          <div className='flex flex-row'>
            <Link href='/'>
              <a className='w-20 py-2 text-3xl text-center font-raleway font-bold tracking-widest select-none'><span className='text-red-500 font-black'>M</span>T</a>            
            </Link>
            <Nav>
            <NavItem link='/' linkAs='/' isFirst>HOME</NavItem>
            <NavItem link='/[category]' linkAs='/keebs'>KEYBOARDS 101</NavItem>
            <NavItem link='/[category]' linkAs='/stabmods'>STAB MODS</NavItem>
            <NavItem link='/[category]' linkAs='/switches'>SWITCHES</NavItem>
            <NavItem link='/[category]' linkAs='/keycaps'>KEYCAPS</NavItem>
            <NavItem link='/[category]' linkAs='/build'>BUILD</NavItem>
            <NavItem link='/[category]' linkAs='/firmware'>FIRMWARE</NavItem>
            <NavItem link='/keyboardTest' linkAs='/keyboardtest'>KEYBOARD TEST</NavItem>
            </Nav>
          </div>
          <Nav>
          <NavItem link='/' linkAs='/' isFirst>SEARCH</NavItem>
          </Nav>
        </div>
      ) : (
        <div className='w-full flex justify-between px-20 bg-inherit font-sans tracking-widest text-sm font-thin text-neutral-900'>
          <Nav>
            <NavItem link='/' linkAs='/' isFirst>HOME</NavItem>
            <NavItem link='/[category]' linkAs='/keebs'>KEYBOARDS 101</NavItem>
            <NavItem link='/[category]' linkAs='/stabmods'>STAB MODS</NavItem>
            <NavItem link='/[category]' linkAs='/switches'>SWITCHES</NavItem>
            <NavItem link='/[category]' linkAs='/keycaps'>KEYCAPS</NavItem>
            <NavItem link='/[category]' linkAs='/build'>BUILD</NavItem>
            <NavItem link='/[category]' linkAs='/firmware'>FIRMWARE</NavItem>
            <NavItem link='/keyboardTest' linkAs='/keyboardtest'>KEYBOARD TEST</NavItem>
          </Nav>
          <Nav>
            <NavItem link='/' linkAs='/' isFirst>SEARCH</NavItem>
            {/* <input className='w-64' type='text'></input> */}
          </Nav>
        </div>
      )}
    </header>
  );
}

export default Header;