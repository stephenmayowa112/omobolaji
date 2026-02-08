"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

export default function DiasporanzProject() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleMouseEnter = () => {
      const cursor = document.querySelector(".custom-cursor")
      cursor?.classList.add("hover")
    }

    const handleMouseLeave = () => {
      const cursor = document.querySelector(".custom-cursor")
      cursor?.classList.remove("hover")
    }

    window.addEventListener("mousemove", handleMouseMove)

    const interactiveElements = document.querySelectorAll("a, button, input, textarea")
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-montserrat">
      {/* Custom Cursor */}
      <div
        className="custom-cursor"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
        }}
      ></div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
        <div className="flex justify-between items-center px-8 py-6">
          <Link href="/" className="text-2xl font-bold">
            Bolaji
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white transition-colors">
              About
            </Link>
            <Link href="#portfolio" className="text-gray-300 hover:text-white transition-colors">
              Portfolio
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="animate-fade-in">
              <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
                Diasporanz
                <br />
                <span className="text-gray-400">Product Design</span>
              </h1>
            </div>

            <div className="space-y-6 animate-fade-in-delay-1">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm text-gray-400 mb-2">Category</h3>
                  <p className="text-lg">Development</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 mb-2">Client</h3>
                  <p className="text-lg">Diasporanz</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-sm text-gray-400 mb-2">Start Date</h3>
                  <p className="text-lg">5th August 2024</p>
                </div>
                <div>
                  <h3 className="text-sm text-gray-400 mb-2">Designer</h3>
                  <p className="text-lg">Omobolaji Moses</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="px-8 mb-24">
        <div className="max-w-7xl mx-auto animate-fade-in-delay-2">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/diasporanz-banner-1.png"
              alt="Diasporanz mobile app showing Igbo Community in London"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* The Challenge */}
      <section className="px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-delay-3">
              <h2 className="text-4xl font-bold mb-8">
                The
                <br />
                Challenge
              </h2>
            </div>

            <div className="animate-fade-in-delay-4">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Immigrants often face difficulties connecting with people from their home country when living abroad.
                Existing social platforms like Facebook or WhatsApp groups were fragmented, lacked cultural focus, and
                didn't create a strong sense of belonging.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                This created a challenge for diasporans who wanted to maintain their cultural identity, traditions, and
                values while staying connected to their community abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="animate-fade-in-delay-5">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/diasporanz-design-2.jpg"
                  alt="Diasporanz app mockup showing splash screen and community page"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="animate-fade-in-delay-6">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/diasporanz-banner-3.png"
                  alt="Diasporanz logo on smartphone"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="animate-fade-in-delay-7">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/images/diasporanz-banner-2.png"
                  alt="Diasporanz app displayed on street billboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="animate-fade-in-delay-8">
              <h2 className="text-4xl font-bold mb-8">The Solution</h2>
            </div>

            <div className="animate-fade-in-delay-9">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                As the UX Designer, my role was to design a mobile app experience that would bridge this gap—an
                intuitive platform where diasporans could connect, share, and celebrate their culture in a safe and
                inclusive digital space.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                I conducted user research through surveys and interviews with immigrants to understand pain points
                around connection, identity, and cultural preservation. The design process included creating end-to-end
                user journeys, prototyping in Figma, and advocating for inclusive design practices.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                The DIASPORANZ app provided a dedicated space for immigrants to connect with others from their country,
                helping preserve culture, values, and identity across borders. Early user testing showed strong
                engagement, with participants highlighting how the app gave them a sense of "home" abroad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final Showcase */}
      <section className="px-8 mb-24">
        <div className="max-w-7xl mx-auto animate-fade-in-delay-10">
          <div className="relative h-[600px] rounded-2xl overflow-hidden">
            <Image
              src="/images/diasporanz-portfolio.png"
              alt="Diasporanz app screens showing feeds, communities, and discovery features"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="px-8 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center py-12 border-t border-gray-800">
            <Link
              href="/project/powerlabs"
              className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div>
                <p className="text-sm text-gray-500">PREV PROJECT</p>
                <p className="text-lg">PowerLabs Tech</p>
              </div>
            </Link>

            <Link
              href="/project/cashingames"
              className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
            >
              <div className="text-right">
                <p className="text-sm text-gray-500">NEXT PROJECT</p>
                <p className="text-lg">Cashingames</p>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer Contact */}
      <footer className="px-8 py-16 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-bold mb-8 flex items-center">
                Let's Contact
                <ArrowRight className="w-8 h-8 ml-4" />
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm text-gray-400 mb-4">ADDRESS</h3>
                <p className="text-gray-300">Manchester, UK</p>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-4">USEFUL LINKS</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    About
                  </Link>
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Services
                  </Link>
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Portfolio
                  </Link>
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-sm text-gray-400 mb-4">SUPPORT</h3>
                <div className="space-y-2">
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Terms & Conditions
                  </Link>
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    FAQ
                  </Link>
                  <Link href="#" className="block text-gray-300 hover:text-white transition-colors">
                    Help
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center pt-12 mt-12 border-t border-gray-800">
            <p className="text-gray-400">© 2024 Bolaji is Proudly Powered by Bolaji</p>
            <div className="text-2xl font-bold">Bolaji</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
