import Link from 'next/link'

export default function ResumePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground shadow-md">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">Your Name</Link>
          <ul className="flex space-x-4">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/resume" className="hover:underline font-semibold">Resume</Link></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6">Resume</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Professional Summary</h2>
          <p className="mb-4">
            [Your professional summary goes here. Highlight your key skills, experiences, and career objectives.]
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Work Experience</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Job Title</h3>
            <p className="text-muted-foreground">Company Name | Start Date - End Date</p>
            <ul className="list-disc list-inside mt-2">
              <li>Key responsibility or achievement</li>
              <li>Another key responsibility or achievement</li>
              <li>Yet another key responsibility or achievement</li>
            </ul>
          </div>
          {/* Add more job experiences as needed */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div>
            <h3 className="text-xl font-semibold">Degree Name</h3>
            <p className="text-muted-foreground">University Name | Graduation Year</p>
          </div>
          {/* Add more education entries as needed */}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Skills</h2>
          <ul className="list-disc list-inside">
            <li>Skill 1</li>
            <li>Skill 2</li>
            <li>Skill 3</li>
            {/* Add more skills as needed */}
          </ul>
        </section>
      </main>

      <footer className="bg-muted text-muted-foreground">
        <div className="container mx-auto px-4 py-6 text-center">
          <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}