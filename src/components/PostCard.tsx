import Link from 'next/link';
import { useLocale } from 'next-intl';
import { format } from 'date-fns';
import { PostMeta } from '@/lib/posts';
import { Calendar, Tag, Clock, ArrowRight } from 'lucide-react';

interface PostCardProps {
  post: PostMeta;
}

export default function PostCard({ post }: PostCardProps) {
  const locale = useLocale();
  
  // Mock reading time calculation (e.g., 5 min)
  const readingTime = "5 min";

  return (
    <article className="group relative bg-card hover:bg-accent/50 border border-border rounded-2xl overflow-hidden transition-all-300 hover:shadow-xl hover:shadow-blue-500/10 hover:-translate-y-1">
      <Link href={`/${locale}/blog/${post.slug}`} className="block p-6 sm:p-8">
        <div className="flex flex-col h-full space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-blue-500" />
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMM dd, yyyy')}
              </time>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-blue-500" />
              <span>{readingTime}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Tag size={14} className="text-blue-500" />
              <span className="capitalize">{post.tags[0]}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
              {post.title}
            </h2>
            
            <p className="text-muted-foreground line-clamp-3 leading-relaxed">
              {post.description}
            </p>
          </div>

          <div className="pt-4 flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-all-300 translate-x-[-10px] group-hover:translate-x-0">
            <span>{locale === 'en' ? 'Read full article' : '阅读全文'}</span>
            <ArrowRight size={16} className="ml-1" />
          </div>
        </div>
      </Link>
    </article>
  );
}
