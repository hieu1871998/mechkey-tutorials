import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../../../components/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Date from '../../../components/date';
import { useRouter } from 'next/router';

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
  const router = useRouter()
  
  if (router.isFallback) {
    return (
      <Layout>
        <div className='container m-auto w-full h-80 flex justify-center content-center'>
          <Head>
            <title>{siteTitle}</title>
          </Head>
          <div className='w-80 h-80 text-center'>
            <span className='text-2xl text-black font-raleway'>Loading post</span>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className='container m-auto pt-4 2xl:px-40 xl:px-40 lg: px-8'>
        <div className='container p-4 border border-black border-opacity-10 shadow-md'>
          <div className='m-4 pb-4 border-b border-black border-opacity-25'>
            <h1 className='text-left text-4xl font-raleway font-bold'>{postData.title}</h1>
            <div className='flex flex-row justify-between text-lg text-gray-500 font-leagueSpartan'>
              <span className=''>Author: {postData.author}</span>
              <span className=''><Date dateString={postData.date} /></span>
            </div>  
          </div>        
          <div
           className='p-4 text-justify text-lg font-sans leading-8'
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
    fallback: true,
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