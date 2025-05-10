import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          className="text-5xl font-bold mb-4 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stunning Landing Pages That Make Customers Click
        </motion.h1>
        <p className="text-xl text-slate-200 mb-8">
          I build modern, fast, and conversion-focused pages for your startup or product.
        </p>
        <a
          href="#contact"
          className="bg-white text-indigo-700 px-6 py-3 rounded-full font-semibold hover:bg-indigo-100 transition"
        >
          Let’s Talk
        </a>
      </div>
    </section>
  );
}