import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-primary text-quaternary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center">关于我</h2>
        <div className="md:flex md:items-center">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="/images/hero.png"
              alt="内森·斯特林"
              width={400}
              height={400}
              className="rounded-lg mx-auto object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <p className="mb-4">
              你好，我是内森·斯特林，一名热爱产品的网页开发者与设计师。五年多时间里，我专注于打造美观、好用、以用户为中心的数字作品。
            </p>
            <p className="mb-4">
              我擅长用 React、Node.js、Python 等现代技术栈搭建响应式网站与 Web 应用。开发与设计双重背景让我能在美感与功能之间找到平衡，让作品既好看又好用。
            </p>
            <p>
              不写代码、不做设计的时候，我喜欢折腾新技术、参与开源项目，或者在技术沙龙和线上社区里跟同行交流。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

