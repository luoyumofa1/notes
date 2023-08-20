import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 代码笔记的侧边栏
  "/codenotes/": [
    {
      text: "零碎知识",
      icon: "proposal",
      collapsible: true,
      prefix: "/codenotes/C++/",
      children: [
        {
          text: "regexp",
          icon: "write",
          link: "regexp.md",
        },
        {
          text: "git操作",
          icon: "write",
          link: "git操作.md",
        },
        {
          text: "C++指针delete",
          icon: "write",
          link: "C++指针delete.md",
        },
        {
          text: "C++正则表达式-函数",
          icon: "write",
          link: "C++正则表达式-函数.md",
        },
        {
          text: "pcl中点云显示",
          icon: "write",
          link: "pcl中点云显示.md",
        },
        {
          text: "vcpkg包管理器快速入门",
          icon: "write",
          link: "vcpkg包管理器快速入门.md",
        },
      ],
    },
    {
      text: "算法和数据结构",
      icon: "ability",
      collapsible: true,
      prefix: "/codenotes/algdata/",
      children: [
        {
          text: "算法小抄",
          icon: "like",
          collapsible: true,
          prefix: "lbld/",
          children: [
            "算法小抄核心套路.md",
          ],
        },
      ],
    },
    {
      text: "在线技术文档",
      icon: "read",
      collapsible: true,
      prefix: "/codenotes/cookbook/",
      children: [""],
    },
  ],

  // 浮生杂记的侧边栏
  "/floatinglife/": [
    {
      text: "书籍资源",
      icon: "linter",
      collapsible: true,
      link: "/resources/books/",
    },
    {
      text: "影音资源",
      icon: "computer",
      collapsible: true,
      link: "/resources/videos/",
    },
    {
      text: "工具类库",
      icon: "module",
      collapsible: true,
      link: "/resources/toollibrary/",
    },
  ],
});
