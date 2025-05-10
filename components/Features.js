export default function Features() {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-12">Why Work With Me</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: 'Responsive Design',
              desc: 'Every device, every screen, always pixel perfect.',
            },
            {
              title: 'High Conversion',
              desc: 'Strategically built to maximize your leads and sales.',
            },
            {
              title: 'Clean Code',
              desc: 'Scalable, maintainable, and built with the latest stack.',
            },
          ].map((f, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md p-6 rounded-xl hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
