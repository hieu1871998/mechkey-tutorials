import Link from 'next/link';
import { Icon } from '@fluentui/react';
import { iconClass } from './layout';
import { useRef } from 'react';

const HeaderMenu = () => {
  const menuRef = useRef<HTMLButtonElement>(null);
  const menuDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    menuDropdownRef.current?.classList.toggle('hidden');
  }

  return (
    <div className='relative w-max py-4 xl:hidden'>
      <button
        ref={menuRef}
        className='flex align-middle p-2 float-right hover:bg-black hover:bg-opacity-10 active:bg-black active:bg-opacity-30 transition-all duration-300'
        onClick={toggleMenu}
      >
        <Icon iconName='CollapseMenu' className={iconClass} />
      </button>      
      <div
        ref={menuDropdownRef}
        className='z-10 absolute w-60 right-0 top-14 min-w-max xl:w-60 lg:w-60 md:w-full sm:w-screen flex-col bg-white shadow-md shadow-gray-500 hidden'
      >
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
  );
}

export default HeaderMenu;