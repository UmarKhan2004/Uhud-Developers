'use client'
import { LuMapPin, LuPhoneCall, LuMail, LuSend } from "react-icons/lu";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 py-12 w-full">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Form */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-2">
                Contact Us
              </h1>
              <p className="text-gray-300 text-base md:text-lg">
                Let's build something great together.
              </p>
            </div>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="Your Number"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-400 mb-1 uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-white focus:outline-none focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-orange-500 hover:bg-orange-600 text-black font-bold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                <LuSend className="w-5 h-5" />
                <span>Send Message</span>
              </button>
            </form>
          </div>

          {/* Right Column: Image with Overlaid Contact Info Card */}
          <div className="relative h-137.5 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl">
            {/* Background Image */}
            <img
              src="contact.jpg"
              alt="Office building"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/60 to-transparent" />

            {/* Contact Details Card Overlaid at the Bottom */}
            <div className="absolute bottom-0 inset-x-0 p-6 md:p-8 space-y-6">
              
              {/* Office Address */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/20 text-orange-500 rounded-lg shrink-0 border border-orange-500/30">
                  <LuMapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Our Office</h3>
                  <p className="text-sm text-gray-300">
                    Haundmrit Road, Islamabad, Pakistan
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/20 text-orange-500 rounded-lg shrink-0 border border-orange-500/30">
                  <LuPhoneCall className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Call Us</h3>
                  <p className="text-sm text-gray-300">+92 300 1234567</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-orange-500/20 text-orange-500 rounded-lg shrink-0 border border-orange-500/30">
                  <LuMail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-base">Email Us</h3>
                  <p className="text-sm text-gray-300">professional@uhud.com</p>
                </div>
              </div>

            </div>
          </div>

        </section>
      </main>

      <Footer />
    </div>
  );
}