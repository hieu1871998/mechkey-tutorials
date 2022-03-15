import Link from 'next/link';
import { useState, useEffect } from 'react';
import Nav from './nav';
import NavItem from './navItem';
import Search from './search';
import HeaderMenu from './headerMenu';

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
      <div className='xl:block lg:hidden md:hidden sm:hidden border-b border-b-black border-opacity-30 relative py-4 pl-20 pb-4'>
        <Link href='/'>
          <a className='text-3xl p-1 font-raleway font-bold tracking-widest select-none border-2 border-black'><span className='text-red-500 font-black'>M</span>ECHKEY TUTORIALS</a>            
        </Link> 
      </div>
      {scrollY > 80 ? (
        <div className='w-full flex xl:justify-between lg:justify-end md:justify-end sm:justify-end justify-end xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 bg-inherit font-sans tracking-widest text-sm font-thin text-neutral-900 z-10 fixed shadow'>
          <div className='flex align-middle xl:hidden lg:block md:block sm:block relative py-4 pl-20 pb-4'>
            <Link href='/'>
              <a className='m-auto xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-base p-1 font-raleway font-bold tracking-widest select-none border-2 border-black'><span className='text-red-500 font-black'>M</span>ECHKEY TUTORIALS</a>            
            </Link> 
          </div>
          <Nav>
            <NavItem link='/' linkAs='/'>HOME</NavItem>
            <NavItem link='/[category]' linkAs='/keebs'>KEYBOARDS</NavItem>
            <NavItem link='/[category]' linkAs='/stabmods'>STAB MODS</NavItem>
            <NavItem link='/[category]' linkAs='/switches'>SWITCHES</NavItem>
            <NavItem link='/[category]' linkAs='/keycaps'>KEYCAPS</NavItem>
            <NavItem link='/[category]' linkAs='/build'>BUILD</NavItem>
            <NavItem link='/[category]' linkAs='/firmware'>FIRMWARE</NavItem>
            <NavItem link='/keyboardTest' linkAs='/keyboardtest'>KEYTEST</NavItem>
          </Nav>
          <Search />
          <HeaderMenu />
        </div>
      ) : (
        <div className='w-full flex xl:justify-between lg:justify-end md:justify-end sm:justify-end justify-end xl:px-20 lg:px-16 md:px-12 sm:px-8 px-4 bg-inherit font-sans tracking-widest text-sm font-thin text-neutral-900 shadow'>
          <div className='flex align-middle xl:hidden lg:block md:block sm:block relative py-4 pl-20 pb-4'>
            <Link href='/'>
              <a className='m-auto xl:text-3xl lg:text-2xl md:text-xl sm:text-base text-base p-1 font-raleway font-bold tracking-widest select-none border-2 border-black'><span className='text-red-500 font-black'>M</span>ECHKEY TUTORIALS</a>            
            </Link> 
          </div>
          <Nav>
            <NavItem link='/' linkAs='/'>HOME</NavItem>
            <NavItem link='/[category]' linkAs='/keebs'>KEYBOARDS</NavItem>
            <NavItem link='/[category]' linkAs='/stabmods'>STAB MODS</NavItem>
            <NavItem link='/[category]' linkAs='/switches'>SWITCHES</NavItem>
            <NavItem link='/[category]' linkAs='/keycaps'>KEYCAPS</NavItem>
            <NavItem link='/[category]' linkAs='/build'>BUILD</NavItem>
            <NavItem link='/[category]' linkAs='/firmware'>FIRMWARE</NavItem>
            <NavItem link='/keyboardTest' linkAs='/keyboardtest'>KEYTEST</NavItem>
          </Nav>
          <Search />
          <HeaderMenu />
        </div>
      )}
    </header>
  );
}

export default Header;