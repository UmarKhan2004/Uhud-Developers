import Link from "next/link";
export default function Navbar(){
    return(
<nav className="w-full border-b  border-gray-200">
    <div className="mx-auto flex flex-col   max-w-7xl justify-between px-6 py-4
    md:flex-row md:item-center md:justify-between">
<Link href="/" className="text-2xl font-bold">Uhud Developers</Link>
    
 <div className="flex items-center gap-8">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact" className="p-2 bg-orange-500 rounded-xl hover:text-gray-200">Contact</Link>
                </div>
                </div>
</nav>
    )
}