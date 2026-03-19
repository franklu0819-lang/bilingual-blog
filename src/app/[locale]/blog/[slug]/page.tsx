import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPostSlugs } from '@/lib/posts';
import { format } from 'date-fns';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';

export async function generateStaticParams() {
  return getAllPostSlugs();
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const post = getPostBySlug(locale, slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-2xl mx-auto">
      <header className="mb-8 space-y-4">
        <div className="flex items-center gap-2 text-sm text-slate-500">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'yyyy-MM-dd')}
          </time>
          <span>·</span>
          <span>{post.tags.join(', ')}</span>
        </div>
        
        <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
          {post.title}
        </h1>
        
        <p className="text-lg text-slate-600 dark:text-slate-400">
          {post.description}
        </p>
      </header>

      <div className="prose prose-slate dark:prose-invert max-w-none">
        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </div>
    </article>
  );
}
