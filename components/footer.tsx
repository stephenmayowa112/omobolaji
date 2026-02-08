export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-xl">Bolaji</span>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-400">© 2024 Bolaji Portfolio</p>
        </div>

        <div className="flex space-x-6">
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
            FAQ
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
            Careers
          </a>
          <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  )
}
