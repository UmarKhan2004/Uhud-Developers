import Navbar from "./components/Navbar";
import Link from "next/link";
import Footer from "./components/Footer";
export default function Home() {
    return (
        <div>
            <Navbar />

            <main>
                <section className="min-h-[80vh] flex items-center" >
                    <div className="mx-auto w-full max-w-7xl px-6 py-20">
                        <div className="max-w-3xl">
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">Uhud Developers</p>
                        <h1 className="text-5xl font-bold leading-tight tracking-tight md:text-7xl">Building Spaces 
                            <span className="block text-gray-500">built for living.</span>
                        </h1>
                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">We develop, construct and renovate spaces designed around quality, functionality and modern living.</p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <Link href="" className="rounded-full bg-black px-7 py-3 font-medium text-white transition hover:bg-gray-800">Explore Projects</Link>
                            <Link href="" className="rounded-full border border-gray-300 px-7 py-3 font-medium transition hover:bg-gray-100 hover:text-black">Start a Project</Link>
                        </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </div>
    );
}   