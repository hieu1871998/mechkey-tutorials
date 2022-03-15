import Link from 'next/link';
import { useState, useEffect } from 'react';
import Nav from './nav';
import NavItem from './navItem';
import HeaderMenu from './headerMenu';
import SearchVertical from './searchVertical';
import { Icon } from '@fluentui/react';

const HeaderVertical = () => {
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
    <header className='w-1/6 bg-slate-100 min-h-screen h-full flex flex-col justify-start align-middle shadow'>
      <div className='flex relative py-4'>
        <Link href='/'>
          <a className='m-auto text-base p-1 font-raleway font-bold tracking-widest select-none border-2 border-black'><span className='text-red-500 font-black'>M</span>ECHKEY TUTORIALS</a>            
        </Link> 
      </div>
      <SearchVertical />
      <div className='w-full mt-4 flex xl:justify-between lg:justify-end md:justify-end sm:justify-end justify-end bg-inherit font-sans tracking-widest text-sm font-thin text-neutral-900'>
        <div className='relative w-full'>
          <ul>
            <Link href='/' as='/'>
              <a>
                <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                  <span>HOME</span>
                </li>
              </a>
            </Link>
            <Link href='/[category]' as='/keebs'>
              <a>
                <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                  <span>KEYBOARDS</span>
                </li>
              </a>
            </Link>
            <Link href='/[category]' as='/stabmods'>
              <a>
                <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                  <span>STAB MODS</span>
                </li>
              </a>
            </Link>
            <Link href='/[category]' as='/switches'>
              <a>
                <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                  <span>SWITCHES</span>
                </li>
              </a>
            </Link>
            <Link href='/[category]' as='/keycaps'>
              <a>
                <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                  <span>KEYCAPS</span>
                </li>
              </a>
            </Link>
            <Link href='/[category]' as='/build'>
              <a>
                <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                  <span>BUILD</span>
                </li>
              </a>
            </Link>
            <Link href='/[category]' as='/firmware'>
              <a>
                <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                  <span>FIRMWARE</span>
                </li>
              </a>
            </Link>
            <Link href='/keyboardtest' as='/keyboardtest'>
              <a>
                <li className='w-full text-base text-center font-leagueSpartan font-thin hover:bg-black hover:bg-opacity-10 transition-all duration-300 p-2 tracking-widest'>
                  <span>KEYBOARD TEST</span>
                </li>
              </a>
            </Link>
          </ul>              
        </div>
      </div>
    </header>
  );
}

export default HeaderVertical;