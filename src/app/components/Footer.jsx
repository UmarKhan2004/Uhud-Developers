import Link from "next/link";
import { FaPhone, FaEnvelope, FaInstagram, FaFacebook } from 'react-icons/fa'
export default function Footer() {
    return (
        <footer className=" bg-black ">
            {/*Footer Content*/}
            <div className="flex flex-col gap-10 md:flex-row md:justify-between">
                <div className="flex flex-col gap-8   max-w-[40vw] ml-6 ">
                    <h1 className="text-orange-400 font-bold text-xl mb-3.5 ">Uhud Developers</h1>
                    <p className="font-serif text-white font-light text-[15px] ">Building quality spaces through thoughtful design, reliable craftsmanship, and a commitment to lasting value.</p>
                </div>
                <div className=" pr-8 pl-8 flex flex-col  md:items-center">
                    <h1 className="text-orange-400 font-bold text-xl mb-3.5 ">Quick Links</h1>
                    <ul className="">
                        <li className="mb-0.5"><Link href="/" className="text-white mb-2 relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-50 after:transition-all after:duration-300 hover:text-white hover:after:w-full">Home</Link></li>
                        <li className="mb-0.5"><Link href="/about" className="text-White mb-2 relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">About</Link></li>
                        <li className="mb-0.5"><Link href="/services" className="text-white mb-2 relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">Services</Link></li>
                        <li className="mb-0.5"><Link href="/projects" className="text-white mb-2 relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">Projects</Link></li>
                        <li className="mb-0.5"><Link href="/contact" className="text-white mb-2 relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">Contact</Link></li>
                    </ul>
                </div>
                <div className="  pr-8 pl-8 flex flex-col  md:items-center">
                    <h1 className="text-orange-400 font-bold text-xl mb-3.5">Services</h1>
                    <ul>
                        <li className="mb-0.5"><Link href="/services" className="text-white  relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">Residential Construction</Link></li>
                        <li className="mb-0.5"><Link href="/services" className="text-white  relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">Commercial Construction</Link></li>
                        <li className="mb-0.5"><Link href="/services" className="text-white  relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">Renovation & Remodeling</Link></li>
                        <li className="mb-0.5"><Link href="/services" className="text-white  relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">Architecture & Design</Link></li>
                        <li className="mb-0.5"><Link href="/services" className="text-white relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">Project Management</Link></li>
                        <li className="mb-0.5"><Link href="/contact" className="text-white  relative  no-underline after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:w-0 after:bg-gray-400 after:transition-all after:duration-300 hover:text-white hover:after:w-full">Consultation</Link></li>
                    </ul>
                </div>
                <div className="sm:mr-4 flex flex-col">
                    <h1 className="text-orange-400 font-bold text-xl mb-3.5">Contact</h1>
                    <p className="flex items-center gap-1"><FaPhone className="text-orange-600" /><span className="text-white">Phone:</span></p><p className="text-gray-300">0337-9855733</p>
                    <p className="flex items-center gap-1"><FaEnvelope className="text-orange-600" /><span className="text-white">Email:</span></p ><p className="text-gray-300">uhuddevelopers@gmail.com</p>
                    <p className="flex items-center gap-1"><FaInstagram className="text-orange-600" /><span className="text-white">Instagram:</span></p><p className="text-gray-300">Uhud Developers</p>
                    <p className="flex items-center gap-1"><FaFacebook className="text-orange-600" /><span className="text-white">Facebook:</span></p><p className="text-gray-300">Uhud Developers</p>
                </div>
            </div>      
            {/*Copyright Content*/}
<div className="flex justify-center text-center">
    <h1 className="font-bold font-sans text-gray-400 ">&copy; 2026 Uhud Developers. All rights reserved.</h1>
</div>
        </footer>
    )
}