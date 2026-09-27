/** @type {import('next').NextConfig} */
const nextConfig = {
  // 静态导出：build 后产出 out/ 目录，可直接扔到 GitHub Pages / Gitee Pages /
  // Cloudflare Pages / Vercel 等任意静态托管。
  output: 'export',

  // GitHub Pages 等静态托管默认不支持 clean URL，加 trailingSlash 让生成的
  // 路由以 /xxx/ 形式落到 out/xxx/index.html，避免刷新子页 404。
  trailingSlash: true,

  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
