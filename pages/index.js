import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Modern Landing Page</title>
        <meta name="description" content="Professional landing pages for your business." />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-800 text-white py-28 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-16">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Landing Pages That Convert & Impress
            </h1>
            <p className="text-lg md:text-xl text-slate-200 mb-10">
              I design and build modern, responsive, and high-converting landing pages that help your business grow.
            </p>
            <a
              href="#contact"
              className="inline-block bg-white text-purple-700 px-8 py-4 rounded-full font-semibold shadow-md hover:bg-purple-100 transition duration-300"
            >
              Let’s Work Together
            </a>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/freelance.svg"
              alt="Freelancer illustration"
              className="w-4/5 md:w-full max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 text-slate-900 py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-14">Why Choose Me?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Modern Tech Stack</h3>
              <p className="text-slate-600 leading-relaxed">
                I use the latest tools like React and Next.js to ensure performance, scalability, and flexibility.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
              <p className="text-slate-600 leading-relaxed">
                Every landing page I build looks great and functions perfectly across all devices.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4">Fast Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                I work fast and efficiently without compromising quality, so you get results on time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-r from-purple-800 to-indigo-700 text-white py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let’s Build Your Next Page</h2>
          <p className="text-lg text-slate-200 mb-10">
            Ready to launch your idea? Let’s collaborate and create something extraordinary.
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block bg-white text-purple-700 px-10 py-4 rounded-full font-semibold shadow-md hover:bg-purple-100 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-100 text-slate-600 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </>
  );
}
