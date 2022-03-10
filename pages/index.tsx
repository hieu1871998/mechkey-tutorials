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
    category: string
  }[]
}) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='container max-w-full px-20 py-8'>
        <Grid>
          {allPostsData.map(({ id, imgSrc, title, author, date, category }) => (
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
      </section>
    </Layout>
  );
}

export default Home;