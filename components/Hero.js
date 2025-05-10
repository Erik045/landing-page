import Image from "next/image";
import freelance from "../public/freelance.svg";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="container mx-auto px-4 flex flex-col-reverse lg:flex-row items-center">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Clean & Modern Landing Pages
          </h1>
          <p className="text-lg text-gray-600">
            I&apos;m a passionate frontend developer who helps brands stand out
            through elegant and high-converting landing pages.
          </p>
          <a
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
          >
            Let&apos;s Work Together
          </a>
        </div>

        {/* Illustration Section */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <Image
            src={freelance}
            alt="Freelancer Illustration"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
    </section>
  );
}
