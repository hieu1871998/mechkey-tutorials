const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const postsDirectory = path.join(process.cwd(), 'posts')
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

const postData = () => {
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
      ...(matterResult.data)
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
      ...(matterResult.data)
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
      ...(matterResult.data)
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
      ...(matterResult.data)
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
      ...(matterResult.data)
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
      ...(matterResult.data)
    }
  })

  const allPostsData = keebsPostsData.concat(stabmodsPostsData).concat(switchesPostsData).concat(keycapsPostsData).concat(buildPostsData).concat(firmwarePostsData);
  
  return `export const allPostsData = ${JSON.stringify(allPostsData)}`
}

try {
  fs.readdirSync('cache')
} catch (e) {
  fs.mkdirSync('cache')
}

fs.writeFile('cache/data.js', postData(), (err) => {
  if (err) return console.log(err);
  console.log('Posts cached');
})