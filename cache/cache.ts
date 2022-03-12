import fs from 'fs';
import { getCachedPostData } from '../lib/posts';

const postContent = await getCachedPostData();

const createPostCache = (filename: string) => {
  fs.writeFile(`./cache/${filename}.js`, postContent, (err) => {
    if (err) {
      console.log(err);
    }
    console.log('Post cache file written');
  })
}

createPostCache('posts');