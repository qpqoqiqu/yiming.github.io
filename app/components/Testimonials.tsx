const testimonials = [
  {
    name: "陈晓琳",
    company: "Tech Innovators Inc.",
    testimonial:
      "Nathan 在设计与开发上都有一手，让我们整个项目非常省心。他交付的网站远超我们的预期。",
  },
  {
    name: "王建国",
    company: "Creative Solutions LLC",
    testimonial:
      "和 Nathan 合作非常愉快，他对细节的把控和问题解决能力一流。强烈推荐他的服务。",
  },
  {
    name: "李心怡",
    company: "StartUp Ventures",
    testimonial:
      "Nathan 把我脑海里的想法变成了既好用又好看的网站，让我印象深刻。说他是专业的代名词，一点也不为过。",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-tertiary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">客户推荐</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <p className="mb-4 text-gray-600 italic">"{testimonial.testimonial}"</p>
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-sm text-gray-500">{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

