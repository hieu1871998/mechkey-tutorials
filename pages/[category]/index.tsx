import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import Grid from '../../components/grid';
import GridItem from '../../components/gridItem';
import { getAllPostIds, getSortedPostsData } from '../../lib/posts';
import { useRouter } from 'next/router';
import { GetStaticPaths, GetStaticProps } from 'next/types';

const CategoryIndex = ({
  allPostsData
}: {
  allPostsData: {
    category: string,
    id: string,
    imgSrc: string,
    title: string,
    author: string,
    date: string
  }[]
}) => {
  const router = useRouter();
  const category = router.asPath;
  const currentCategory = category.replace('/', '')
  
  if (router.isFallback) {
    return (
      <Layout>
        <div className='container m-auto w-full h-80 flex justify-center content-center'>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <div className='w-80 h-80 text-center'>
            <span className='text-2xl text-black font-raleway'>Loading posts</span>
          </div>
        </div>
      </Layout>
    )
  }

  if (!allPostsData) return null;

  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='container max-w-full xl:px-20 lg:px-20 md:px-14 sm:px-4 pt-8 pb-24'>
        <Grid isHome>
          {allPostsData?.map(({ id, category, imgSrc, title, author, date }) => {
            if (currentCategory === category) {
              return (
                <GridItem
                  key={id}
                  imageSrc={imgSrc}
                  title={title}
                  author={author}
                  date={date}
                  category={category}
                  href='/[category]/[id]'
                  hrefAs={`/${category}/${id}`}
                />
              );
            }
          })}
        </Grid>
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}


export default CategoryIndex;