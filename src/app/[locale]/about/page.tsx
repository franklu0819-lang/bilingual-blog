import { getTranslations } from 'next-intl/server';
import { Github, Twitter, Linkedin, Mail, MapPin, Briefcase } from 'lucide-react';
import Image from 'next/image';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Navbar');

  return (
    <div className="max-w-3xl mx-auto py-12 space-y-16">
      {/* Intro Section */}
      <section className="flex flex-col md:flex-row gap-12 items-center md:items-start">
        <div className="relative shrink-0">
          <div className="w-32 h-32 md:w-48 md:h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl rotate-3">
             <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold -rotate-3">
               XR
             </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-background border-4 border-background rounded-full flex items-center justify-center text-blue-500 shadow-lg">
             <Briefcase size={20} />
          </div>
        </div>

        <div className="space-y-6 text-center md:text-left">
          <div className="space-y-2">
            <h1 className="text-4xl font-extrabold tracking-tight">Xiaorou</h1>
            <p className="text-xl text-muted-foreground font-medium">
              Senior Frontend Engineer & Designer
            </p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin size={16} />
              <span>Shanghai, China</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail size={16} />
              <span>hello@xiaorou.blog</span>
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-3">
            <SocialButton href="#" icon={<Github size={18} />} label="Github" />
            <SocialButton href="#" icon={<Twitter size={18} />} label="Twitter" />
            <SocialButton href="#" icon={<Linkedin size={18} />} label="LinkedIn" />
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="prose prose-slate dark:prose-invert">
        <h2 className="text-2xl font-bold">{locale === 'en' ? 'My Story' : '我的故事'}</h2>
        {locale === 'en' ? (
          <>
            <p>
              Hi there! I'm a developer passionate about building great software and digital experiences. 
              With over 5 years of experience in frontend engineering, I specialize in React, Next.js, and modern CSS techniques.
            </p>
            <p>
              I believe that code is not just about logic—it's about craft. Every pixel, Every transition, and every line of code 
              should serve a purpose and provide value to the user.
            </p>
            <h3>Technical Stack</h3>
            <ul>
              <li><strong>Frontend:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
              <li><strong>State Management:</strong> Redux, Zustand, React Query</li>
              <li><strong>Tools:</strong> Vite, Webpack, Figma, Git</li>
              <li><strong>Backend:</strong> Node.js, Express, PostgreSQL</li>
            </ul>
          </>
        ) : (
          <>
            <p>
              你好！我是一名热衷于构建优秀软件和数字体验的开发者。
              拥有超过 5 年的前端工程经验，我擅长 React、Next.js 和现代 CSS 技术。
            </p>
            <p>
              我相信代码不仅仅是逻辑，它也是一种工艺。每一个像素、每一次过渡、每一行代码
              都应该有其目的，并为用户提供价值。
            </p>
            <h3>技术栈</h3>
            <ul>
              <li><strong>前端:</strong> React, Next.js, TypeScript, Tailwind CSS</li>
              <li><strong>状态管理:</strong> Redux, Zustand, React Query</li>
              <li><strong>工具:</strong> Vite, Webpack, Figma, Git</li>
              <li><strong>后端:</strong> Node.js, Express, PostgreSQL</li>
            </ul>
          </>
        )}
      </section>
    </div>
  );
}

function SocialButton({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-xl bg-secondary text-secondary-foreground hover:bg-accent hover:text-accent-foreground transition-all-300 border border-border/50 shadow-sm"
    >
      {icon}
      <span>{label}</span>
    </a>
  );
}
