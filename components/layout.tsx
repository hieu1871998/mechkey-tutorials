import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Header from './header';
import Link from 'next/link';

export const siteTitle: string = 'MECHKEY TUTORIALS';

const Layout = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [ scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  })

  return (
    <div className='max-w-full container'>
      <Head>
        <link rel='icon' href='favicon.ico' />
        <meta name='description' content='Faerie'/>
        <meta name='og:title' content={siteTitle} />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header />
      <main>
      {scrollY > 80 ? (
        <div className='mt-20'>
          {children}
        </div>
      ) : (
        <div className='mt-0'>
          {children}
        </div>
      )}
      </main>
      <footer className='w-full mt-8 flex flex-col bg-white'>
        <Link href='https://discord.gg/c3RHqNuSUY'>
          <a target='_blank' className='w-full bg-black p-3'>
            <h4 className='text-center text-xs text-white font-leagueSpartan tracking-wide'>JOIN US ON DISCORD: VIETNAM MECHANICAL KEYBOARD</h4>
          </a>
        </Link>        
      </footer>
    </div>
  );
}

export default Layout;