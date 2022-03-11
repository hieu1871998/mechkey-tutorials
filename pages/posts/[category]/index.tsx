import Head from 'next/head';
import Layout, { siteTitle } from '../../../components/layout';
import Grid from '../../../components/grid';
import GridItem from '../../../components/gridItem';
import { getSortedPostsData } from '../../../lib/posts';
import { useState } from 'react';
import { useRouter } from 'next/router';

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
      Page: {category}
    </Layout>
  )
}

export default CategoryIndex;