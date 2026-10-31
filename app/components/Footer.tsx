export default function Footer() {
  return (
    <footer className="bg-primary text-quaternary py-8">
      <div className="container mx-auto px-6 text-center">
        <p>&copy; {new Date().getFullYear()} 马艺铭. 保留所有权利。</p>
        <div className="mt-4">
          <a
            href="https://github.com/qpqoqiqu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-quaternary hover:text-tertiary"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}

