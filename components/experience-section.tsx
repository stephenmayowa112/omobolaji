const experiences = [
  {
    period: "2018 - Present",
    title: "Art Director",
    company: "AT DESIGN STUDIO",
    description:
      "Crafting captivating digital experiences that put users at the heart of the design. Elevate your product to increased.",
  },
  {
    period: "2015-2017",
    title: "Front-end Developer",
    company: "AT ENVATO MARKET",
    description:
      "Crafting captivating digital experiences that put users at the heart of the design. Elevate your product to increased.",
  },
  {
    period: "2010-2014",
    title: "Bachelor's Degree in Design",
    company: "US RMIT UNIVERSITY",
    description:
      "Crafting captivating digital experiences that put users at the heart of the design. Elevate your product to increased.",
  },
]

export function ExperienceSection() {
  return (
    <section className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Working Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-gray-700 pl-8 relative">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-white rounded-full" />

              <div className="space-y-2">
                <p className="text-sm text-gray-400 font-medium">{exp.period}</p>
                <h3 className="text-xl font-bold">
                  {exp.title} <span className="text-gray-400">[{exp.company}]</span>
                </h3>
                <p className="text-gray-300 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">My Specializations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["UI/UX Design", "Development", "Graphic Design", "WordPress"].map((spec, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-16 h-16 bg-gray-800 rounded-lg mx-auto flex items-center justify-center">
                  <div className="w-8 h-8 bg-gray-600 rounded" />
                </div>
                <p className="text-sm font-medium">{spec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
