import Head from 'next/head';
import Layout, { siteTitle } from '../../../components/layout';
import Grid from '../../../components/grid';
import GridItem from '../../../components/gridItem';
import { getAllPostIds, getSortedPostsData } from '../../../lib/posts';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { GetStaticPaths } from 'next/types';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();

  return {
    props: {
      allPostsData
    }
  }
}

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
  const { category } = router.query;
  
  return (
    <Layout>
      Page: {router.pathname}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className='container max-w-full px-20 py-8'>
        <Grid>
          {allPostsData.map(({ id, category, imgSrc, title, author, date }) => {
            if (category === category) {(
            <GridItem
              key={id}
              imageSrc={'/' + imgSrc}
              title={title}
              author={author}
              date={date}
              href='/posts/[category]/[id]'
              hrefAs={`/posts/${category}/${id}`}
            />           
          )}})}
        </Grid>
      </section>
    </Layout>
  )
}

export default CategoryIndex;