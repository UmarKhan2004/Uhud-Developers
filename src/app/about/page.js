import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";
import { 
  LuShieldCheck, 
  LuBadgeCheck, 
  LuUserCheck, 
  LuSprout 
} from "react-icons/lu";

export default function About() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section>
        <div className="relative h-[50vh] md:h-[70vh]">
          <img className="w-full h-full object-cover" src="/construction.jpg" alt="Construction background" />
          <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
          <div className="flex flex-col justify-center px-6 md:px-16 absolute inset-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl text-amber-600 font-bold">
              About <span className="text-amber-50">Us</span>
            </h1>
            <p className="text-sm m-1 text-gray-200">Building stronger spaces for tomorrow</p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* Left Content */}
          <div className="w-full md:w-1/2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
              <span className="text-xs font-semibold tracking-wider text-orange-500 uppercase">
                Who We Are
              </span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your Trusted Construction &{" "}
                <span className="block text-orange-500">Development Partner</span>
              </h2>
              <p className="text-gray-300 mb-4 text-sm md:text-base leading-relaxed">
                Uhud Developers is a construction and development company committed to turning your vision into reality. We specialize in residential, commercial, and renovation projects, delivering high-quality work with a focus on modern design, durability, and customer satisfaction.
              </p>
              <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                With a team of experienced professionals and a passion for excellence, we build spaces that not only meet today's needs but also add value for tomorrow.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img src="about.jpg" alt="About Uhud Developers" className="w-full max-h-[450px] object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-black text-white py-16 px-6 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <img src="site.jpg" alt="Engineers at site" className="w-full h-[300px] md:h-[400px] object-cover" />
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-8 h-0.5 bg-orange-500 rounded-full" />
            <span className="text-xs font-bold tracking-widest text-orange-500 uppercase">
              Our Values
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quality. <span className="text-orange-500">Integrity.</span> Trust.
          </h2>

          <p className="text-gray-400 text-sm leading-relaxed mb-8">
            We believe that great construction is built on more than just bricks and cement — 
            it's built on trust, clear communication, and a commitment to doing what's right. 
            Our values guide every decision we make, from the first consultation to the final handover.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-start gap-4">
              <LuBadgeCheck className="w-7 h-7 text-orange-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white text-base">Quality Workmanship</h3>
                <p className="text-xs text-gray-400 mt-1">We never compromise on quality.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LuUserCheck className="w-7 h-7 text-orange-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white text-base">Client Focus</h3>
                <p className="text-xs text-gray-400 mt-1">Your satisfaction is our priority.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LuShieldCheck className="w-7 h-7 text-orange-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white text-base">Transparency</h3>
                <p className="text-xs text-gray-400 mt-1">Honest communication at every step.</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <LuSprout className="w-7 h-7 text-orange-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-white text-base">Sustainable Growth</h3>
                <p className="text-xs text-gray-400 mt-1">Building for a better, longer future.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="px-6 py-12 max-w-7xl mx-auto">
        <div className="relative min-h-62.5 w-full rounded-xl overflow-hidden flex flex-col justify-center px-8 md:px-16">
          <img src="architecture.jpg" alt="Architecture" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/60 to-transparent" />
          <div className="relative z-10 flex flex-col items-start gap-3">
            <h2 className="text-white text-2xl md:text-3xl font-bold">Have a Project in Mind?</h2>
            <p className="text-white/80">Let's build something great</p>
            <Link href="/contact" className="px-5 py-2 bg-amber-600 hover:bg-amber-700 text-amber-50 rounded-md transition-colors">
              Start Project
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}