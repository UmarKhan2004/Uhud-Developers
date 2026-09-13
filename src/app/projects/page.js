'use client'
import Link from "next/link";
import Navbar from "../components/Navbar";
import { useState } from "react";
import Footer from "../components/Footer";

const categories = ["All Projects", "Residential", "Commercial", "Renovation", "Ongoing"];

export default function Projects() {
    const [activeTab, setActiveTab] = useState("All Projects");

    const projects = [
        {
            id: 1,
            title: "Modern Family Villa",
            category: "Residential",
            location: "Bahria Town, Rawalpindi",
            image: "/villa.jpg",
            status: "Completed",
            description: "A modern family home designed with comfort, functionality, and contemporary architecture in mind."
        },
        {
            id: 2,
            title: "Corporate Office Building",
            category: "Commercial",
            location: "Blue Area, Islamabad",
            image: "/office.jpg",
            status: "Completed",
            description: "A modern commercial space designed to support productivity and professional growth."
        },
        {
            id: 3,
            title: "Luxury Home Renovation",
            category: "Renovation",
            location: "DHA Phase 2, Islamabad",
            image: "/renovation.jpg",
            status: "Completed",
            description: "A complete transformation of an existing home with modern interiors and improved functionality."
        },
        {
            id: 4,
            title: "Premium Residential House",
            category: "Residential",
            location: "Bahria Town, Rawalpindi",
            image: "/house.jpg",
            status: "Ongoing",
            description: "A premium residential project focused on quality construction and modern living."
        },
        {
            id: 5,
            title: "Shopping Mall Project",
            category: "Commercial",
            location: "Gulberg Greens, Islamabad",
            image: "/mall.jpg",
            status: "Ongoing",
            description: "A commercial development designed to provide a modern and functional retail environment."
        },
        {
            id: 6,
            title: "Architectural Design Project",
            category: "Renovation",
            location: "DHA Phase 5, Islamabad",
            image: "/design.jpg",
            status: "Completed",
            description: "A thoughtfully designed project combining functionality, aesthetics, and modern architectural principles."
        }
    ];

    // Filter by category or by status (if Ongoing selected)
    const filteredProjects = activeTab === "All Projects"
        ? projects
        : activeTab === "Ongoing"
            ? projects.filter(project => project.status === "Ongoing")
            : projects.filter(project => project.category === activeTab);

    return (
        <>
            <Navbar />
            <main>
                {/* Hero Section */}
                <div className="relative min-h-[50vh] md:h-[70vh]">
                    <img className="w-full h-full object-cover absolute inset-0" src="/images.webp" alt="Projects Header" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent" />
                    <div className="relative flex flex-col justify-center px-6 sm:px-8 md:px-16 py-16 md:py-0 min-h-[50vh] md:h-[70vh]">
                        <h4 className="text-amber-500 text-xl md:text-2xl font-semibold">Our Projects</h4>
                        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mt-2">
                            Building Spaces 
                            <span className="block text-amber-500">Creating Memories</span>
                        </h1>
                        <p className="text-white/90 max-w-2xl mt-4 sm:mt-6 text-base md:text-lg">
                            Explore our portfolio of completed and ongoing projects that exemplify our commitment to quality, innovation, and excellence.
                        </p>
                    </div>
                </div>
            </main>

            {/* Filterable Projects Section */}
            <section className="max-w-7xl mx-auto px-6 py-12 md:py-16">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold text-white">Our Projects</h2>
                </div>

                {/* Wrapped Buttons for Mobile */}
                <div className="flex flex-wrap justify-center gap-2 mb-10">
                    {categories.map((category) => {
                        const isActive = activeTab === category;
                        return (
                            <button
                                key={category}
                                onClick={() => setActiveTab(category)}
                                className={`px-4 py-2 rounded-md font-medium text-sm transition-colors duration-200 ${
                                    isActive
                                        ? "bg-orange-500 text-white shadow"
                                        : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
                                }`}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className="group flex flex-col bg-slate-900 border border-slate-800 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="overflow-hidden h-52">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-5 flex flex-col gap-2 flex-grow">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs font-semibold uppercase text-orange-400">{project.category}</span>
                                    <span className={`text-xs px-2 py-0.5 rounded ${project.status === 'Ongoing' ? 'bg-amber-500/20 text-amber-400' : 'bg-emerald-500/20 text-emerald-400'}`}>
                                        {project.status}
                                    </span>
                                </div>
                                <h3 className="text-white font-bold text-xl group-hover:text-orange-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 text-xs">{project.location}</p>
                                <p className="text-gray-300 text-sm mt-1">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Banner Section */}
            <section className="px-6 py-12 max-w-7xl mx-auto">
                <div className="relative min-h-[250px] w-full rounded-xl overflow-hidden flex flex-col justify-center px-6 md:px-16 py-8">
                    <img src="architecture.jpg" alt="Architecture" className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
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