import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "AI悦创-Python一对一辅导",
  description: "Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学",
  base: "/",
  theme,

  head: [
    [
      "link", {
        rel: "shortcut icon",
        // href: "/favicon.ico",
        href: "/aiyc.svg",
      }
    ],
    
    

  ],
    

  shouldPrefetch: false,
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  }
});
