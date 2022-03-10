import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Grid from '../components/grid';
import GridItem from '../components/gridItem';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import { useRouter } from 'next/router';

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

const Home = ({
  allPostsData
}: {
  allPostsData: {
    id: string,
    imgSrc: string,
    title: string,
    author: string,
    date: string
  }[]
}) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <div className='w-full h-full relative'>
        <Image 
          priority
          src='/images/banners/banner1.jpg'
          className='w-full h-max relative'
          width='1600'
          height='512'
          objectFit='cover'
          objectPosition='center'
          alt=''
        />
      </div> */}
      {/* <section className='container max-w-full px-16 pt-20'>
        <div className='flex content-center justify-center w-full h-20'>
          <Link href='/'>
            <a className='text-2xl text-black font-leagueSpartan font-black tracking-widest'>GUIDES</a>
          </Link>
        </div>
        <Grid>
          <GridItem
            imageSrc='/images/events/event1.png'
            title='Mechfund Week 1'
            author='Running'
            date='2022'
          />
        </Grid>
        <div className='w-full py-8 flex flex-row justify-center'>
          <Link href='/'>
            <a>
              <button className='px-8 py-3 shadow font-sans font-thin text-sm hover:bg-gray-200 transition-all duration-300'>READ MORE</button>
            </a>
          </Link>
        </div>  
      </section> */}
      <section className='container max-w-full px-20 py-8'>
        {/* <div className='flex content-center justify-center w-full h-20'>
          <Link href='/'>
            <a className='text-2xl text-black font-leagueSpartan font-black tracking-widest'>BLOGS</a>
          </Link>
        </div> */}
        <Grid>
          {allPostsData.map(({ id, imgSrc, title, author, date }) => (
            <GridItem
              key={id}
              imageSrc={'/' + imgSrc}
              title={title}
              author={author}
              date={date}
              href={`/posts/${id}`}
            />
          ))}
        </Grid>
        {/* <div className='w-full py-8 flex flex-row justify-center'>
          <Link href='/'>
            <a>
              <button className='px-8 py-3 shadow font-sans font-thin text-sm hover:bg-gray-200 transition-all duration-300'>READ MORE</button>
            </a>
          </Link>
        </div> */}
      </section>
    </Layout>
  );
}

export default Home;