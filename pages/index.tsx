import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Grid from '../components/grid';
import GridItem from '../components/gridItem';
import { getSortedPostsData } from '../lib/posts';

const Home = ({
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
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='container max-w-full px-20 pt-8 pb-24'>
        <Grid isHome>
          {allPostsData.map(({ id, category, imgSrc, title, author, date }) => (
            <GridItem
              key={id}
              imageSrc={imgSrc}
              title={title}
              author={author}
              date={date}
              category={category}
              href='/[category]/[id]'
              hrefAs={`${category}/${id}`}
            />           
          ))}
        </Grid>
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

export default Home;