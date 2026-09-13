import Link from "next/link";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Footer Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <h2 className="text-xl font-bold text-orange-400">Uhud Developers</h2>
            <p className="text-sm font-light text-gray-300 leading-relaxed">
              Building quality spaces through thoughtful design, reliable craftsmanship, and a commitment to lasting value.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-xl font-bold text-orange-400">Quick Links</h2>
            <ul className="flex flex-col gap-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((item) => {
                const href = item === "Home" ? "/" : `/${item.toLowerCase()}`;
                return (
                  <li key={item}>
                    <Link
                      href={href}
                      className="relative inline-block text-gray-300 hover:text-white transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col">
            <h2 className="mb-4 text-xl font-bold text-orange-400">Services</h2>
            <ul className="flex flex-col gap-2">
              {[
                "Residential Construction",
                "Commercial Construction",
                "Renovation & Remodeling",
                "Architecture & Design",
                "Project Management",
                "Consultation",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href={service === "Consultation" ? "/contact" : "/services"}
                    className="relative inline-block text-gray-300 hover:text-white transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-orange-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-3">
            <h2 className="mb-1 text-xl font-bold text-orange-400">Contact</h2>
            
            <div className="flex items-center gap-3">
              <FaPhone className="text-orange-500 shrink-0" />
              <a href="tel:03379855733" className="text-gray-300 hover:text-white text-sm transition-colors">
                0337-9855733
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-orange-500 shrink-0" />
              <a href="mailto:uhuddevelopers@gmail.com" className="text-gray-300 hover:text-white text-sm transition-colors">
                uhuddevelopers@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram className="text-orange-500 shrink-0" />
              <span className="text-gray-300 text-sm">Uhud Developers</span>
            </div>

            <div className="flex items-center gap-3">
              <FaFacebook className="text-orange-500 shrink-0" />
              <span className="text-gray-300 text-sm">Uhud Developers</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 border-t border-gray-800 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; 2026 Uhud Developers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}