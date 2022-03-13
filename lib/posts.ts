import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const keebsDirectory = path.join(process.cwd(), 'posts/keebs');
const stabmodsDirectory = path.join(process.cwd(), 'posts/stabmods');
const switchesDirectory = path.join(process.cwd(), 'posts/switches');
const keycapsDirectory = path.join(process.cwd(), 'posts/keycaps');
const buildDirectory = path.join(process.cwd(), 'posts/build');
const firmwareDirectory = path.join(process.cwd(), 'posts/firmware');

const keebsCategory = 'keebs';
const stabmodsCategory = 'stabmods';
const switchesCategory = 'switches';
const keycapsCategory = 'keycaps';
const buildCategory = 'build';
const firmwareCategory = 'firmware';

export const getSortedPostsData = () => {
  const keebsFileNames = fs.readdirSync(keebsDirectory);
  const stabmodsFileNames = fs.readdirSync(stabmodsDirectory);
  const switchesFileNames = fs.readdirSync(switchesDirectory);
  const keycapsFileNames = fs.readdirSync(keycapsDirectory);
  const buildFileNames = fs.readdirSync(buildDirectory);
  const firmwareFileNames = fs.readdirSync(firmwareDirectory);

  const keebsPostsData = keebsFileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(keebsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const category = keebsCategory;
    
    return {
      id,
      category,
      ...(matterResult.data as { date: string; title: string, author: string, imgSrc: string })
    }
  })

  const stabmodsPostsData = stabmodsFileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(stabmodsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const category = stabmodsCategory;
    
    return {
      id,
      category,
      ...(matterResult.data as { date: string; title: string, author: string, imgSrc: string })
    }
  })

  const switchesPostsData = switchesFileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(switchesDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const category = switchesCategory;
    
    return {
      id,
      category,
      ...(matterResult.data as { date: string; title: string, author: string, imgSrc: string })
    }
  })

  const keycapsPostsData = keycapsFileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(keycapsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const category = keycapsCategory;
    
    return {
      id,
      category,
      ...(matterResult.data as { date: string; title: string, author: string, imgSrc: string })
    }
  })

  const buildPostsData = buildFileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(buildDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const category = buildCategory;
    
    return {
      id,
      category,
      ...(matterResult.data as { date: string; title: string, author: string, imgSrc: string })
    }
  })

  const firmwarePostsData = firmwareFileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(firmwareDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    const category = firmwareCategory;
    
    return {
      id,
      category,
      ...(matterResult.data as { date: string; title: string, author: string, imgSrc: string })
    }
  })

  const allPostsData = keebsPostsData.concat(stabmodsPostsData).concat(switchesPostsData).concat(keycapsPostsData).concat(buildPostsData).concat(firmwarePostsData);
  
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
};

export const getAllPostIds = () => {
  const keebsFileNames = fs.readdirSync(keebsDirectory);
  const stabmodsFileNames = fs.readdirSync(stabmodsDirectory);
  const switchesFileNames = fs.readdirSync(switchesDirectory);
  const keycapsFileNames = fs.readdirSync(keycapsDirectory);
  const buildFileNames = fs.readdirSync(buildDirectory);
  const firmwareFileNames = fs.readdirSync(firmwareDirectory);

  let categoryNames:string[] = [];

  keebsFileNames.forEach(keebsFileName => {
    categoryNames.push(keebsDirectory);
  });
  stabmodsFileNames.forEach(stabmodsFileName => {
    categoryNames.push(stabmodsDirectory);
  });
  switchesFileNames.forEach(switchesFileName => {
    categoryNames.push(switchesDirectory);
  });
  keycapsFileNames.forEach(keycapsFileName => {
    categoryNames.push(keycapsDirectory);
  });
  buildFileNames.forEach(buildFileName => {
    categoryNames.push(buildDirectory);
  });
  firmwareFileNames.forEach(firmwareFileName => {
    categoryNames.push(firmwareDirectory);
  });

  const fileNames = keebsFileNames.concat(stabmodsFileNames).concat(switchesFileNames).concat(keycapsFileNames).concat(buildFileNames).concat(firmwareFileNames);

  const postParams = categoryNames.map((e, i) => {
    return {
      categoryName: e,
      id: fileNames[i]
    }
  });

  return postParams.map(postParam => {
    return {
      params: {
        category: postParam.categoryName,
        id: postParam.id
      }
    }
  });
}

export const getPostData = async (category: string, id: string) => {
  const fullPath = path.join(`${category}`, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf-8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { title: string, date: string, author: string, imgSrg: string, videoId: string})
  }
}