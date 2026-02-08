"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { Monitor, Palette, Code, Globe, Brush, Layers, Figma } from "lucide-react"
import Link from "next/link"

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)

    // Here you would typically send the email
    // For now, we'll just log the data
    console.log("Form submitted:", {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      to: "omobolaji.moses@gmail.com",
    })

    alert("Message sent successfully!")
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row relative overflow-x-hidden font-sans">
      <div
        className="fixed w-4 h-4 bg-white/20 rounded-full pointer-events-none z-50 transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
          transform: `scale(${mousePosition.x > 0 ? 1 : 0})`,
        }}
      />

      <div className="w-full relative h-[50vh] lg:w-2/5 lg:fixed lg:left-0 lg:top-0 lg:h-screen overflow-hidden">
        <div className="relative h-full">
          <img src="/images/portrait.jpg" alt="Omobolaji Moses" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-black/60 via-black/20 to-transparent lg:border-white lg:border-solid"></div>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-3/5 lg:ml-auto">
        <div className="px-6 py-12 lg:pl-16 lg:pr-55">
          <div className="mb-16 animate-fade-in">
            <div className="text-sm text-gray-400 mb-4">Hello, I'm</div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-2 animate-slide-up">
              OMOBOLAJI
              <br />
              <span className="text-gray-400">MOSES</span>
            </h1>
            <div className="text-sm text-gray-400 mb-4">Industry Certified</div>
            <h2 className="text-2xl lg:text-4xl font-bold animate-slide-up-delay">
              UX
              <br />
              <span className="text-gray-400">DESIGNER</span>
            </h2>
          </div>

          <div className="mb-16 animate-fade-in-delay">
            <h3 className="text-2xl font-semibold mb-8">My Skills</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-red-500 rounded flex items-center justify-center group-hover:bg-red-400 transition-colors">
                      <Figma size={16} />
                    </div>
                    <span className="text-sm">UI / UX Design</span>
                    <span className="text-xs text-gray-400 ml-auto">95%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1">
                    <div className="bg-red-500 h-1 rounded-full animate-progress-95" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center group-hover:bg-blue-400 transition-colors">
                      <Palette size={16} />
                    </div>
                    <span className="text-sm">Graphic Design</span>
                    <span className="text-xs text-gray-400 ml-auto">85%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1">
                    <div className="bg-blue-500 h-1 rounded-full animate-progress-85" style={{ width: "85%" }}></div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-gray-500 rounded flex items-center justify-center group-hover:bg-gray-400 transition-colors">
                      <Code size={16} />
                    </div>
                    <span className="text-sm">{"Web Design"}</span>
                    <span className="text-xs text-gray-400 ml-auto">85%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1">
                    <div className="bg-gray-500 h-1 rounded-full animate-progress-90" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <div className="group hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-8 h-8 bg-blue-400 rounded flex items-center justify-center group-hover:bg-blue-300 transition-colors">
                      <Globe size={16} />
                    </div>
                    <span className="text-sm">{"Project Management"}</span>
                    <span className="text-xs text-gray-400 ml-auto">78%</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-1">
                    <div className="bg-blue-400 h-1 rounded-full animate-progress-78" style={{ width: "78%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="mb-16 animate-fade-in-delay-2">
            <h3 className="text-2xl font-semibold mb-8">Working Experience</h3>
            <div className="space-y-8">
              <div className="hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 hover:transform hover:translateX-2">
                <div className="flex items-center gap-4 mb-2">
                  <h4 className="text-lg font-semibold">UX Designer</h4>
                  <span className="text-sm text-gray-400">[AT DIASPORANZ]</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">August 2024 - Present</div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Designed the Diasporanz mobile app with a cross-functional team. Created end-to-end user journeys and
                  mobile interfaces for a social media app connecting diasporans worldwide.
                </p>
              </div>

              <div className="hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 hover:transform hover:translateX-2">
                <div className="flex items-center gap-4 mb-2">
                  <h4 className="text-lg font-semibold">UX Designer</h4>
                  <span className="text-sm text-gray-400">[AT POWERLABS TECH]</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">July 2023 - July 2024</div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Designed the PAI website with a cross-functional team focusing on Power Artificial Intelligence. The
                  project resulted in over 40,000 registered users within the first 3 months.
                </p>
              </div>



              <div className="hover:bg-gray-900/50 p-4 rounded-lg transition-all duration-300 hover:transform hover:translateX-2">
                <div className="flex items-center gap-4 mb-2">
                  <h4 className="text-lg font-semibold">UI/UX Designer</h4>
                  <span className="text-sm text-gray-400">[AT BYTEDANCE]</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">March 2021 - Nov 2022</div>
                <p className="text-sm text-gray-300 leading-relaxed">
                  Redesigned the User Interface for the LetsChat app, resulting in a remarkable 500% increase in sign
                  ups and a 4.7/5 rating on softonic.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16 animate-fade-in-delay-3">
            <h3 className="text-2xl font-semibold mb-8">My Specializations</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Monitor className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Digital Product Design</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  I use innovative methods to create digital products that are both functional and aesthetically
                  pleasing.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Globe className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Web Design</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  I develop responsive websites and web applications using modern technologies and best practices.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Brush className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-2">Branding Design</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  I create comprehensive brand identities that communicate your values and connect with your audience.
                </p>
              </div>

              <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                  <Layers className="w-8 h-8 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-lg font-semibold mb-2">UI-UX Design</h4>
                <p className="text-sm text-gray-400 leading-relaxed">
                  I design user interfaces and experiences that are intuitive, accessible, and delightful to use.
                </p>
              </div>
            </div>
          </div>

          {/* Portfolio Section */}
          <div className="mb-16 animate-fade-in-delay-4">
            <h3 className="text-2xl font-semibold mb-8">My Portfolio</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="portfolio-item bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img src="/mobile-app-mockup.png" alt="Mobile App Design" className="w-full h-48 object-cover" />
                <div className="portfolio-overlay">
                  <Link href="/project/diasporanz" className="block">
                    <h4 className="font-semibold mb-1">Diasporanz Mobile App</h4>
                    <p className="text-sm text-gray-300">Social media app connecting diasporans worldwide</p>
                  </Link>
                </div>
              </div>
              <div className="portfolio-item bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <img src="/web-design-project.png" alt="Web Design Project" className="w-full h-48 object-cover" />
                <div className="portfolio-overlay">
                  <Link href="/project/powerlabs" className="block">
                    <h4 className="font-semibold mb-1">PowerLabs AI Website</h4>
                    <p className="text-sm text-gray-300">AI-powered energy management platform design</p>
                  </Link>
                </div>
              </div>
              <div className="portfolio-item bg-gray-800 rounded-lg overflow-hidden sm:col-span-2 hover:transform hover:scale-105 transition-all duration-300">
                <img src="/branding-design-showcase.png" alt="Branding Design" className="w-full h-48 object-cover" />
                <div className="portfolio-overlay">
                  <Link href="/project/cashingames" className="block">
                    <h4 className="font-semibold mb-1">GameArk Brand Identity</h4>
                    <p className="text-sm text-gray-300">Complete branding and UI design for mobile gaming platform</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Section */}
          <div className="mb-16 animate-fade-in-delay-5">
            <h3 className="text-2xl font-semibold mb-8">The Testimonials</h3>
            <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-colors duration-300">
              <p className="text-sm text-gray-300 leading-relaxed mb-4">
                "I have been working with people in this space for a number of years and amongst them Omobolaji as
                proven himself with his level of professionalism. It feels great working with someone that knows how to
                get the job done."
              </p>
              <div className="text-sm font-semibold">{"Stephen Mayowa"}</div>
              <div className="text-xs text-gray-400">Senior Engineer at CashingGames </div>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div className="mb-16 animate-fade-in-delay-6">
            <h3 className="text-2xl font-semibold mb-8">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-sm focus:outline-none focus:border-white hover:border-gray-400 transition-colors placeholder-gray-500"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-sm focus:outline-none focus:border-white hover:border-gray-400 transition-colors placeholder-gray-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-sm focus:outline-none focus:border-white hover:border-gray-400 transition-colors placeholder-gray-500"
              />
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                required
                className="w-full bg-transparent border-0 border-b border-gray-600 px-0 py-3 text-sm focus:outline-none focus:border-white resize-none hover:border-gray-400 transition-colors placeholder-gray-500"
              ></textarea>
              <button
                type="submit"
                className="w-full py-3 font-semibold text-white bg-transparent border-2 border-gray-400 rounded-xl text-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 hover:transform hover:scale-105"
              >
                LET'S TALK
              </button>
            </form>
          </div>

          {/* Footer Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex justify-between items-center">
              <div className="text-sm text-gray-400">Omobolaji Moses </div>
              <div className="text-xs text-gray-500">© 2025 Omobolaji Moses Portfolio</div>
              <div className="flex gap-4 text-xs text-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
