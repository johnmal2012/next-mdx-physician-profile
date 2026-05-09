import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentPath = path.join(process.cwd(), 'src/content/physician');

export function getMdxContent(filename: string) {
  const filePath = path.join(contentPath, filename);
  const source = fs.readFileSync(filePath, 'utf-8');

  const { content, data } = matter(source);

  return {
    content,
    frontmatter: data,
  };
}