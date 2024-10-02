import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail } from 'lucide-react'

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Your Name</Link>
          <ul className="flex space-x-4">
            <li><Link href="#about" className="hover:underline">About</Link></li>
            <li><Link href="#projects" className="hover:underline">Projects</Link></li>
            <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            <li><Link href="/resume" className="hover:underline">Resume</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <section id="about" className="mb-12">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=192&width=192"
                alt="Your Name"
                width={192}
                height={192}
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-lg mb-4">
                Hello! I'm [Your Name], a [Your Profession] based in [Your Location]. 
                I'm passionate about [Your Interests/Specialties].
              </p>
              <p className="text-lg">
                With [X] years of experience in [Your Field], I specialize in [Your Key Skills]. 
                I'm always excited to take on new challenges and collaborate on innovative projects.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-muted p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p>Description of your first project.</p>
            </div>
            <div className="border border-muted p-4 rounded-md">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p>Description of your second project.</p>
            </div>
          </div>
        </section>

        <section id="contact" className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="mb-4">Feel free to reach out to me for collaborations or just to say hi!</p>
          <a href="mailto:your.email@example.com" className="text-primary hover:underline">your.email@example.com</a>
        </section>
      </main>

      <footer className="bg-muted text-muted-foreground">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com" aria-label="Email">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}