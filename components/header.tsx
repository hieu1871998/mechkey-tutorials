import { GetStaticPaths } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Nav from './nav';
import NavItem from './navItem';

const Header = () => {
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady) return;
  },[router.isReady]);
  const category = router.query;

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
              <NavItem link='/posts/[category]' linkAs={`/posts/${category}`}>KEYBOARDS 101</NavItem>
              <NavItem link='/posts/[category]' linkAs={`/posts/${category}`}>STAB MODS</NavItem>
              <NavItem link='/switches' linkAs='/'>SWITCHES</NavItem>
              <NavItem link='/keycaps' linkAs='/'>KEYCAPS</NavItem>
              <NavItem link='/build' linkAs='/'>BUILD</NavItem>
              <NavItem link='/firmware' linkAs='/'>FIRMWARE</NavItem>
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
            <NavItem link='/posts/[category]' linkAs={`/posts/${category}`}>KEYBOARDS 101</NavItem>
            <NavItem link='/' linkAs='/'>STAB MODS</NavItem>
            <NavItem link='/' linkAs='/'>SWITCHES</NavItem>
            <NavItem link='/' linkAs='/'>KEYCAPS</NavItem>
            <NavItem link='/' linkAs='/'>BUILD</NavItem>
            <NavItem link='/' linkAs='/'>FIRMWARE</NavItem>
          </Nav>
          <Nav>
            <NavItem link='/' linkAs='/' isFirst>SEARCH</NavItem>
          </Nav>
        </div>
      )}
    </header>
  )
}

export default Header;