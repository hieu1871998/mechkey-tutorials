import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import Header from './header';

export const siteTitle: string = 'VNMK';

const Layout = ({children}: {children: React.ReactNode}) => {
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
      <footer className='container mx-auto my-16 px-8 py-16 border-t border-black border-opacity-30 grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2'>
        
      </footer>
    </div>
  );
}

export default Layout;