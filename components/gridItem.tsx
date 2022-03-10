import Link from 'next/link';
import Image from 'next/image';
import Date from './date';

const GridItem = ({
  imageSrc, 
  title, 
  author,
  date,
  href
}: {
  imageSrc: string,
  title: string,
  author: string,
  date: string,
  href: string
}) => {

  return (
    <div className='col-span-1 border border-black border-opacity-25 shadow-md relative overflow-hidden'>
      <div className='w-full aspect-w-2 aspect-h-1 relative'>
        <Link href={href}>
          <a>
            <Image
              priority
              src={imageSrc}
              className='relative'
              layout='fill'
              objectFit='cover'
              objectPosition='center'
              alt=''
            />
          </a>          
        </Link>
      </div>
      <Link href={href}>
        <a>
          <div className='flex flex-col w-full bg-black bg-opacity-50 justify-center align-middle absolute -bottom-9 left-0 overflow-hidden hover:bottom-0 transition-all duration-500'>
            <h4 className='px-4 py-1 w-full text-2xl text-white text-ellipsis font-leagueSpartan font-normal tracking-wide leading-loose line-clamp-1 overflow-hidden'>{title}</h4>
            <div className='flex flex-row justify-between mx-4 border-t border-white border-opacity-50'>
              <p className='w-full text-left text-base text-white font-raleway font-normal tracking-widest leading-loose'>{author}</p>
              <p className='w-full text-right text-base text-white font-raleway font-normal tracking-widest leading-loose'><Date dateString={date} /></p>
            </div>
          </div>
        </a>
      </Link>
      
    </div>
  )
}

export default GridItem;