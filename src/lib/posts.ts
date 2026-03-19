import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
  lang: string;
  content: string;
}

function getMDXFiles(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));
}

export function getPostsByLocale(locale: string): PostMeta[] {
  const langDir = path.join(postsDirectory, locale);
  const files = getMDXFiles(langDir);

  return files
    .map((filename) => {
      const filePath = path.join(langDir, filename);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      const { data, content } = matter(fileContent);

      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: data.title,
        date: data.date,
        description: data.description,
        tags: data.tags || [],
        lang: locale,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(locale: string, slug: string): PostMeta | undefined {
  const posts = getPostsByLocale(locale);
  return posts.find((post) => post.slug === slug);
}

export function getAllPostSlugs(): { locale: string; slug: string }[] {
  const slugs: { locale: string; slug: string }[] = [];
  for (const locale of ['en', 'zh']) {
    const langDir = path.join(postsDirectory, locale);
    const files = getMDXFiles(langDir);
    for (const file of files) {
      slugs.push({
        locale,
        slug: file.replace(/\.mdx$/, ''),
      });
    }
  }
  return slugs;
}
