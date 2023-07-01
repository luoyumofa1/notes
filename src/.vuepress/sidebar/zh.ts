import { sidebar } from "vuepress-theme-hope";

export const zhSidebar = sidebar({
  // 代码笔记的侧边栏
  "/codenotes/": [
    {
      text: "零碎知识",
      icon: "java",
      collapsible: true,
      prefix: "/codenotes/C++/",
      children: [
        {
          text: "C++网络编程",
          icon: "write",
          link: "C++网络编程.md",
        },
        {
          text: "C++指针delete",
          icon: "write",
          link: "C++指针delete.md",
        },
        {
          text: "opengl",
          icon: "write",
          link: "opengl.md",
        },
        {
          text: "pcl中点云显示",
          icon: "write",
          link: "pcl中点云显示.md",
        },
        {
          text: "phpword生成word",
          icon: "write",
          link: "phpword生成word.md",
        },
        {
          text: "C++typedef",
          icon: "write",
          link: "C++typedef.md",
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

  // 开源项目的侧边栏
  // "/projects/": [
  //   {
  //     text: "技术教程",
  //     icon: "guide",
  //     collapsible: true,
  //     link: "/projects/techguide/",
  //   },
  //   {
  //     text: "实战项目",
  //     icon: "workingDirectory",
  //     collapsible: true,
  //     link: "/projects/pracprojects/",
  //   },
  //   {
  //     text: "系统设计",
  //     icon: "shell",
  //     collapsible: true,
  //     link: "/projects/systemdesign/",
  //   },
  //   {
  //     text: "工具类库",
  //     icon: "module",
  //     collapsible: true,
  //     link: "/projects/toollibrary/",
  //   },
  // ],

});
