import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "马艺铭 - 个人主页",
  description: "马艺铭的个人主页：乐观积极、热爱生活、认真负责。",
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

