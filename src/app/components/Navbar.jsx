import Link from "next/link";
export default function Navbar(){
    return(
<nav className="w-full border-b border-gray-200">
    <div className="mx-auto flex max-w-7xl justify-between px-6 py-4">
<Link href="/" className="text-2xl font-bold">Uhud Developers</Link>
    
 <div className="flex items-center gap-8">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/services">Services</Link>
                    <Link href="/projects">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </div>
                </div>
</nav>
    )
}