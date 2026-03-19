import { getTranslations } from 'next-intl/server';
import PostCard from '@/components/PostCard';
import { getPostsByLocale } from '@/lib/posts';
import { ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export default async function Index({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Index');
  const posts = getPostsByLocale(locale);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-12 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-500/10 blur-[100px] rounded-full" />
        </div>

        <div className="space-y-8 max-w-3xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-tight">
              {locale === 'en' ? (
                <>
                  Crafting <span className="text-gradient">Digital</span> Experiences.
                </>
              ) : (
                <>
                  打造卓越的 <span className="text-gradient">数字</span> 体验。
                </>
              )}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              {t('description')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={`/${locale}/blog`}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:opacity-90 transition-all-300 shadow-lg shadow-primary/20 flex items-center gap-2 group"
            >
              <span>{locale === 'en' ? 'Read Blog' : '阅读博客'}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <div className="flex items-center gap-2 px-4">
              <SocialLink href="#" icon={<Github size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts Section */}
      <section className="space-y-12">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-bold tracking-tight">
              {locale === 'en' ? 'Latest Thinking' : '最新思考'}
            </h2>
            <p className="text-muted-foreground">
              {locale === 'en' ? 'Deep dives into engineering and design.' : '深入探讨工程与设计。'}
            </p>
          </div>
          <Link 
            href={`/${locale}/blog`} 
            className="text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1 group"
          >
            <span>{locale === 'en' ? 'View all' : '查看全部'}</span>
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
        
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(0, 4).map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border-2 border-dashed border-border rounded-3xl">
            <p className="text-muted-foreground italic text-lg">
              {locale === 'en' ? 'No posts found.' : '暂无文章。'}
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 text-muted-foreground hover:text-foreground hover:bg-accent rounded-full transition-all-300"
    >
      {icon}
    </a>
  );
}
