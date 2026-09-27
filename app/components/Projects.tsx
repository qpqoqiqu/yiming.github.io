"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const projects = [
  {
    title: "电商平台",
    description:
      "面向电子产品的全栈电商解决方案，现代界面 + 流畅购物体验，前后台一气呵成。",
    image: "/images/project-1.png",
    tags: ["React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "设计公司官网",
    description: "暗色主题的现代设计公司官网，带动态动画与创意作品展示模块。",
    image: "/images/project-2.png",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS"],
  },
  {
    title: "任务管理应用",
    description:
      "简洁直观的移动端任务管理 App，集成日历视图与团队协作功能。",
    image: "/images/project-3.png",
    tags: ["React Native", "TypeScript", "Node.js"],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">我的项目</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 md:h-64">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-tertiary text-primary px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

