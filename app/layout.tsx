import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "内森·斯特林 - 网页开发者与设计师",
  description:
    "内森·斯特林的作品集，专注于打造现代、响应式、用户体验优先的网页解决方案。",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-quaternary text-primary`}>{children}</body>
    </html>
  )
}

