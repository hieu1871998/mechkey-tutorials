import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';

const Post = ({
  postData
} : {
  postData: {
    title: string,
    author: string,
    date: string,
    imgSrc: string,
    category: string,
    contentHtml: string
  }
}) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className='container pt-4 px-40'>
        <div className='container p-4 border border-black border-opacity-10 shadow-md'>
          <div className='m-4 pb-4 border-b border-black border-opacity-25'>
            <h1 className='text-left text-4xl font-raleway font-bold'>{postData.title}</h1>
            <div className='flex flex-row justify-between text-lg text-gray-500 font-leagueSpartan'>
              <span className=''>Author: {postData.author}</span>
              <span className=''><Date dateString={postData.date} /></span>
            </div>  
          </div>        
          <div
           className='p-4 text-justify text-lg font-raleway'
           dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>        
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.category as string, params?.id as string);
  return {
    props: {
      postData,
    }
  };
}

export default Post;