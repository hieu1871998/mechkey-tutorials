import Link from 'next/link';
import Image from 'next/image';
import Date from './date';

const GridItem = ({
  imageSrc, 
  title, 
  author,
  date,
  category,
  href,
  hrefAs
}: {
  imageSrc: string,
  title: string,
  author: string,
  date: string,
  category: string,
  href: string,
  hrefAs: string
}) => {

  const toTitleCase = (str: string) => {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  return (
    <div className='col-span-1 border border-black border-opacity-25 shadow-md relative overflow-hidden'>
      <div className='w-full aspect-w-16 aspect-h-9 relative'>
        <Link href={href} as={hrefAs}>
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
      <Link href={href} as={hrefAs}>
        <a>
          <div className='flex flex-col w-full bg-white bg-opacity-75 justify-center align-middle absolute -bottom-9 left-0 overflow-hidden hover:bottom-0 transition-all duration-500 backdrop-blur-xl'>
            <div className='py-2'>
              <h4 className='px-4 w-full text-2xl text-black text-ellipsis font-leagueSpartan font-normal tracking-wide line-clamp-1 overflow-hidden'>{title}</h4>
              <p className='px-4 w-full text-base text-gray-800 text-ellipsis font-leagueSpartan font-normal tracking-wide line-clamp-1 overflow-hidden'>{toTitleCase(category)}</p>
            </div>            
            <div className='flex flex-row justify-between mx-4 border-t border-white border-opacity-50'>
              <p className='w-full text-left text-base text-black font-leagueSpartan font-normal tracking-widest leading-loose'>{author}</p>
              
              <p className='w-full text-right text-base text-black font-leagueSpartan font-normal tracking-widest leading-loose'><Date dateString={date} /></p>
            </div>
          </div>
        </a>
      </Link>
      
    </div>
  )
}

export default GridItem;