import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export default function Projrcts(){
    return(
        <>
        <Navbar/>
        <main>
        <div className="relative h-[70vh]"  >
<img className=" w-full h-full object-cover" src="/images.webp" />
        <div className="absolute inset-0 bg-linear-to-r from-black to-transparent">
        </div>
        <div className="flex flex-col justify-center px-8 md:px-16 absolute inset-0">
<h4 className="text-amber-600 text-2xl">Our Projects</h4>
<h1 className="text-white text-5xl font-bold leading-tight tracking-tight md:text-7xl">Building Spaces 
    <span className="block  text-amber-500">Creating Memories</span>
</h1>
<p className="text-white/90 max-w-2xl mt-6 text-lg">Explore our portfolio of completed and ongoing projects that exemplify our commitment to quality, innovation, and excellence.</p>
        </div>
        </div>
        </main>
        <Footer/>
        </>
    )
}