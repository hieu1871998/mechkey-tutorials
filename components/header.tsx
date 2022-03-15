import Link from 'next/link';
import { useState, useEffect } from 'react';
import Nav from './nav';
import NavItem from './navItem';
import Search from './search';

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
        <div className='w-full flex justify-between px-20 bg-inherit font-sans tracking-widest text-sm font-thin text-neutral-900 z-10 fixed shadow'>
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
        </div>
      ) : (
        <div className='w-full flex justify-between px-20 bg-inherit font-sans tracking-widest text-sm font-thin text-neutral-900 shadow'>
          {/* <div className='relative w-64 py-4 xl:hidden'>
            <span className='w-full text-lg font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>MENU</span>
            <div className='z-10 absolute min-w-max w-full flex flex-col bg-white shadow-md shadow-gray-500'>
              <ul>
                <Link href='/' as='/'>
                  <a>
                    <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                      <span>HOME</span>
                    </li>
                  </a>
                </Link>
                <Link href='/' as='/'>
                  <a>
                    <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                      <span>KEYBOARDS 101</span>
                    </li>
                  </a>
                </Link>
                <Link href='/' as='/'>
                  <a>
                    <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                      <span>STAB MODS</span>
                    </li>
                  </a>
                </Link>
                <Link href='/' as='/'>
                  <a>
                    <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                      <span>SWITCHES</span>
                    </li>
                  </a>
                </Link>
                <Link href='/' as='/'>
                  <a>
                    <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                      <span>KEYCAPS</span>
                    </li>
                  </a>
                </Link>
                <Link href='/' as='/'>
                  <a>
                    <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                      <span>BUILD</span>
                    </li>
                  </a>
                </Link>
                <Link href='/' as='/'>
                  <a>
                    <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                      <span>FIRMWARE</span>
                    </li>
                  </a>
                </Link>
                <Link href='/' as='/'>
                  <a>
                    <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                      <span>KEYBOARD TEST</span>
                    </li>
                  </a>
                </Link>
              </ul>              
            </div>
          </div> */}
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
        </div>
      )}
    </header>
  );
}

export default Header;