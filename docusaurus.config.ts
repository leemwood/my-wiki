import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


// 注意：此配置文件运行在Node.js环境，不要使用浏览器API或JSX语法

const config: Config = {
  // 基础配置
  title: '柠枺', // 网站标题（显示在浏览器标签页和网站头部）
  tagline: '世界源于灵魂的幻想。', // 网站标语（通常显示在首页的副标题位置）
  favicon: 'img/favicon.ico', // 浏览器标签页图标

  // 部署配置
  url: 'https://wiki.lemwood.cn', // 生产环境访问地址
  baseUrl: '/', // 网站的基础路径（GitHub Pages部署时通常设为 '/项目名/'）

  // GitHub Pages部署配置（如果不用GitHub Pages可忽略）
  organizationName: 'leemwood', // GitHub组织/用户名
  projectName: 'my-wiki', // GitHub仓库名

  // 构建配置
  onBrokenLinks: 'warn', // 遇到损坏链接时抛出错误（可选值：ignore | warn | throw）
  onBrokenMarkdownLinks: 'warn', // 遇到损坏的Markdown链接时警告

  // 国际化配置
  i18n: {
    defaultLocale: 'zh-CN', // 默认语言
    locales: ['zh-CN', 'en'], // 支持的语言列表（如需中文支持可添加 'zh-Hans'）
    path: './i18n',
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
        htmlLang: 'en-US',
        calendar: 'gregory',
        path: 'en',
      },
      "zh-CN": {
        label: '简体中文',
        direction: 'ltr',
        htmlLang: 'zh-CN',
        calendar: 'gregory',
        path: '.',
      },
    },
  },

  // 预设配置
  presets: [
    [
      'classic',
      {
        // 文档模块配置
        docs: {
          sidebarPath: './sidebars.ts', // 侧边栏配置文件路径
          editUrl: // 文档编辑链接（建议改为你的仓库地址）
            'https://github.com/ning-g-mo/wiki/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // 博客模块配置
        blog: {
          showReadingTime: true, // 显示阅读时间
          feedOptions: { // RSS订阅配置
            type: ['rss', 'atom'], 
            xslt: true,
          },
          editUrl: // 博客编辑链接（建议改为你的仓库地址）
            'https://github.com/leemwood/my-wiki/tree/main/packages/create-docusaurus/templates/shared/',
          // 博客内容校验配置
          onInlineTags: 'warn', // 行内标签警告
          onInlineAuthors: 'warn', // 行内作者警告 
          onUntruncatedBlogPosts: 'warn', // 未截断的博客文章警告
        },
        // 主题配置
        theme: {
          customCss: './src/css/custom.css', // 自定义CSS文件路径
        },
      } satisfies Preset.Options,
    ],
  ],

  // 主题配置
  themeConfig: {
    image: 'img/docusaurus-social-card.jpg', // 社交媒体分享卡片图片
    navbar: { // 导航栏配置
      title: '柠枺',
      logo: {
        alt: '柠枺 Logo', // logo的alt文本（无障碍访问需要）
        src: 'img/logo.png', // logo图片路径
      },
      items: [ // 导航项配置
        {
          type: 'localeDropdown',
          position: 'left',
        },
        {
          type: 'docSidebar', // 文档侧边栏类型
          sidebarId: 'tutorialSidebar', // 对应侧边栏ID
          position: 'left', // 显示位置
          label: '文档', // 显示文本
        },
        {to: '/blog', label: '博客', position: 'left'}, // 博客链接
        {
          href: 'https://github.com/ning-g-mo/wiki',
          label: 'GitHub',
          position: 'right', // 右侧显示
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: '柠枺 Logo',
        src: 'img/logo.png',
        href: '/',
        width: 60,
        height: 60,
      },
      links: [
        {
          title: '文档',
          items: [
            { label: '快速开始', to: '/docs/intro' },
            { label: 'leaves整合包', to: '/docs/leaves' },
            { label: 'geysermenu', to: '/docs/geysermenu' },
            { label: 'bellcommand', to: '/docs/bellcommand'},
            { label: '柠枺镜像', to: '/docs/lemwood-mirror' },
            { label: '控件转换器', to: '/docs/fcl-to-zl2' },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ning-g-mo/wiki',
            },
            {
              label: 'QQ群',
              href: 'https://qm.qq.com/q/G0yqhEtNSO',
            }
          ],
        },
      ],
      copyright: `
        <div style="margin-top: 2rem; border-top: 1px solid #444; padding-top: 1rem">
          <div>
            版权所有 © ${new Date().getFullYear()} by 柠枺 · 
          </div>
          <div>
            此网站基于 <a href="https://docusaurus.io/" target="_blank" rel="noopener noreferrer">Docusaurus</a>开发.
          </div>
          <div>
            <a href="https://beian.miit.gov.cn/" target="_blank" rel="noopener noreferrer">新ICP备2024015133号-3</a>
          </div>
        </div>
      `, 
    },
    prism: { // 代码块高亮配置
      theme: prismThemes.github, // 亮色主题
      darkTheme: prismThemes.dracula, // 暗色主题
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
