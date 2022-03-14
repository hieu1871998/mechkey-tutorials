import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/date';
import { useRouter } from 'next/router';
import YoutubeEmbed from '../../components/youtubeEmbed';
import ReactMarkDown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Spinner, SpinnerSize } from '@fluentui/react/lib/Spinner';

const Post = ({
  postData
} : {
  postData: {
    title: string,
    author: string,
    date: string,
    imgSrc: string,
    category: string,
    contentHtml: string,
    videoId: string
  }
}) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Layout>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <div className='container min-h-full h-full flex justify-center'>
          <Spinner size={SpinnerSize.large} label='Loading' />
        </div>
      </Layout>
    )
  }

  if (!postData) return null;

  return (
    <Layout>
      <Head>
        <title>{postData?.title} - {siteTitle}</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta property='og:type' content='article' />
        <meta property='og:title' content={postData?.title} />
      </Head>
      <div className='container m-auto mb-20 pt-4 2xl:px-40 xl:px-40 lg: px-8'>
        <div className='container p-4 border border-black border-opacity-10 shadow-md'>
          <div className='m-4 pb-4 border-b border-black border-opacity-25'>
            <h1 className='text-left text-4xl font-raleway font-bold'>{postData?.title}</h1>
            <div className='flex flex-row justify-between text-lg text-gray-500 font-leagueSpartan'>
              <span className=''>Author: {postData?.author}</span>
              <span className=''><Date dateString={postData?.date} /></span>
            </div>  
          </div>        
          <article className='p-4 m-auto prose lg:prose-xl max-w-none prose-gray font-leagueSpartan text-justify'>
            <ReactMarkDown remarkPlugins={[remarkGfm]}>{postData?.contentHtml}</ReactMarkDown>
          </article>
          {(postData?.videoId != '' && postData?.videoId != null && postData?.videoId != undefined) && 
            <div className='w-full aspect-w-16 aspect-h-9'>
              <YoutubeEmbed videoId={postData?.videoId} />
            </div>
          }          
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
  let postData = null;
  try {
    postData = await getPostData(params?.category as string, params?.id as string);
  } catch (err) { };

  return {
    props: {
      postData,
    }
  };
}

export default Post;