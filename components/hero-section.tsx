export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

      {/* Profile image placeholder */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-48 bg-gradient-to-b from-gray-700 to-gray-800 rounded-lg opacity-20" />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        {/* Logo */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-wider">Bolaji</h1>
        </div>

        {/* Main content */}
        <div className="space-y-6">
          <p className="text-lg text-gray-300">Hello, I'm</p>

          <h2 className="text-6xl md:text-8xl font-bold tracking-tight">
            OMOBOLAJI
            <br />
            MOSES
          </h2>

          <div className="space-y-2">
            <p className="text-lg text-gray-300">Industry Certified</p>
            <h3 className="text-4xl md:text-5xl font-bold text-white">
              UX
              <br />
              DESIGNER
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
