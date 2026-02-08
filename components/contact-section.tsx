import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function ContactSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm text-gray-400 mb-2">FOUNDER & CEO</p>
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
        </div>

        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <Input className="bg-gray-900 border-gray-700 text-white" placeholder="Your name" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <Input
                type="email"
                className="bg-gray-900 border-gray-700 text-white"
                placeholder="your.email@example.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Subject</label>
            <Input className="bg-gray-900 border-gray-700 text-white" placeholder="Subject" />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <Textarea className="bg-gray-900 border-gray-700 text-white min-h-32" placeholder="Your message..." />
          </div>

          <div className="text-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-3 font-semibold">
              LET'S TALK
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
