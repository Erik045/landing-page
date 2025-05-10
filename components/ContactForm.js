export default function ContactForm() {
  return (
    <section id="contact" className="py-16 px-4 bg-white">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Let's Work Together</h2>
        <form action="https://formsubmit.co/youremail@example.com" method="POST" className="space-y-4">
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="text"
            name="name"
            required
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Your Email"
            className="w-full border px-4 py-2 rounded"
          />
          <textarea
            name="message"
            rows="4"
            required
            placeholder="Your Message"
            className="w-full border px-4 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}