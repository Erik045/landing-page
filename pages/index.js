import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Erik’s Premium Landing Page</title>
        <meta name="description" content="Landing page profesional buatan Erik Irawan" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-700 to-purple-600 text-white py-36 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            Landing Pages That Convert & Impress
          </h1>
          <p className="text-xl md:text-2xl text-slate-100 mb-10">
            I design & build modern, responsive, and high-converting landing pages for startups, SaaS, and online businesses.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-purple-700 px-8 py-3 rounded-full font-semibold hover:bg-purple-100 transition"
          >
            Let’s Work Together
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-slate-50 py-28 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-16">
            Why Choose Me
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: 'Responsive Design',
                desc: 'Optimized for all devices — mobile, tablet, and desktop.',
              },
              {
                title: 'Conversion Focused',
                desc: 'Every section is crafted to turn visitors into customers.',
              },
              {
                title: 'Fast & Lightweight',
                desc: 'Built with performance in mind using Next.js + Tailwind.',
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="bg-white shadow-lg p-10 rounded-2xl hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-base">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-slate-100 py-28 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Let’s Build Your Next Page
          </h2>
          <p className="text-gray-600 mb-10 text-lg">
            Ready to elevate your business? Reach out and let's talk about your project.
          </p>
          <a
            href="mailto:erikirawan@example.com"
            className="inline-block bg-indigo-700 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-800 transition"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-indigo-900 text-white py-8 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Erik Irawan. All rights reserved.</p>
      </footer>
    </>
  );
}