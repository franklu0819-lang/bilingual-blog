import { getTranslations } from 'next-intl/server';
import { ExternalLink, Github, Code2, Rocket, Layout, Sparkles } from 'lucide-react';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'zh' }];
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations('Navbar');

  const projects = [
    {
      title: "Bilingual Blog Engine",
      description: locale === 'en' 
        ? "A sleek, high-performance blog engine with built-in i18n support, MDX rendering, and a premium developer-focused UI."
        : "一个精美、高性能的博客引擎，内置 i18n 支持、MDX 渲染和高端开发者 UI。",
      tags: ["Next.js 16", "Tailwind CSS 4", "TypeScript"],
      icon: <Layout className="text-blue-500" size={24} />,
      link: "#",
      github: "#"
    },
    {
      title: "UI Component Library",
      description: locale === 'en'
        ? "A collection of accessible, highly customizable UI components built with Radix UI and Tailwind CSS."
        : "一组使用 Radix UI 和 Tailwind CSS 构建的可访问、高度可定制的 UI 组件库。",
      tags: ["React", "Radix UI", "Tailwind CSS"],
      icon: <Sparkles className="text-indigo-500" size={24} />,
      link: "#",
      github: "#"
    },
    {
      title: "Task Management SaaS",
      description: locale === 'en'
        ? "A full-stack project management tool featuring real-time collaboration, drag-and-drop boards, and team analytics."
        : "一个全栈项目管理工具，具有实时协作、拖放看板和团队分析功能。",
      tags: ["Next.js", "Prisma", "PostgreSQL", "Socket.io"],
      icon: <Rocket className="text-purple-500" size={24} />,
      link: "#",
      github: "#"
    },
    {
      title: "AI Code Assistant",
      description: locale === 'en'
        ? "An experimental VS Code extension that uses LLMs to provide context-aware code suggestions and refactoring."
        : "一个实验性的 VS Code 扩展，使用 LLM 提供上下文感知的代码建议和重构。",
      tags: ["TypeScript", "OpenAI API", "VS Code Extension"],
      icon: <Code2 className="text-emerald-500" size={24} />,
      link: "#",
      github: "#"
    }
  ];

  return (
    <div className="space-y-12 py-12">
      <div className="space-y-4 text-center md:text-left">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
          {locale === 'en' ? 'Selected' : '精选'} <span className="text-gradient">{t('projects')}</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl">
          {locale === 'en' 
            ? "A showcase of my recent work in frontend engineering, UI design, and full-stack development."
            : "我在前端工程、UI 设计和全栈开发方面的近期作品展示。"}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="group relative bg-card border border-border rounded-3xl p-8 transition-all-300 hover:shadow-2xl hover:shadow-blue-500/5 hover:-translate-y-2 flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {project.icon}
              </div>
              
              <div className="space-y-3">
                <h3 className="text-2xl font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 text-xs font-semibold bg-secondary text-secondary-foreground rounded-full border border-border/50">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-4 mt-8 pt-6 border-t border-border/50">
              <a 
                href={project.link} 
                className="inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-blue-600 transition-colors"
              >
                <ExternalLink size={16} />
                <span>{locale === 'en' ? 'Live Demo' : '在线演示'}</span>
              </a>
              <a 
                href={project.github} 
                className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github size={16} />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
