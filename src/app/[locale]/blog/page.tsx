import PostCard from '@/components/PostCard';
import { getPostsByLocale } from '@/lib/posts';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const posts = getPostsByLocale(locale);

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
        {locale === 'en' ? 'All Posts' : '所有文章'}
      </h1>

      {posts.length > 0 ? (
        <div className="space-y-8">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <p className="text-slate-500 italic">
          {locale === 'en' ? 'No posts yet.' : '暂无文章。'}
        </p>
      )}
    </div>
  );
}
