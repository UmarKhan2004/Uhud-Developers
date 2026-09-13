import Link from "next/link";
import Navbar from "../components/Navbar";
import { FaArrowRight, FaArrowDown } from 'react-icons/fa';
import { FaHome, FaBuilding, FaPaintRoller, FaDraftingCompass, FaHardHat, FaComments } from "react-icons/fa";
import Footer from "../components/Footer";

export default function Services() {
    const services = [
        { id: 1, icon: FaHome, title: "Residential Construction", description: "We build modern and durable homes tailored to your lifestyle and needs." },
        { id: 2, icon: FaBuilding, title: "Commercial Construction", description: "From offices to retail spaces, we deliver commercial projects that inspire growth." },
        { id: 3, icon: FaPaintRoller, title: "Renovation & Remodeling", description: "We transform existing spaces with innovative designs and quality craftsmanship." },
        { id: 4, icon: FaDraftingCompass, title: "Architecture & Design", description: "Our design process blends creativity and functionality to bring your vision to life." },
        { id: 5, icon: FaHardHat, title: "Project Management", description: "We manage every detail to ensure your project is completed on time and within budget." },
        { id: 7, icon: FaComments, title: "Consultation", description: "Expert advice and solutions to help you make the right decisions for your project." }
    ];

    const steps = [
        { id: 1, number: "01", title: "Consultation", description: "We understand your requirements, budget, and vision." },
        { id: 2, number: "02", title: "Planning & Design", description: "We develop the design and plan the project in detail." },
        { id: 3, number: "03", title: "Construction", description: "Our team manages the construction while maintaining quality." },
        { id: 4, number: "04", title: "Handover", description: "We complete the project and hand over your finished space." }
    ];

    return (
        <div>
            <Navbar />

            <main>
                {/* Hero Section */}
                <div className="relative min-h-[50vh] md:h-[70vh]">
                    <img className="w-full h-full object-cover absolute inset-0" src="/images.webp" alt="Services Header" />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="relative flex flex-col justify-center px-6 sm:px-8 md:px-16 py-16 md:py-0 min-h-[50vh] md:h-[70vh]">
                        <h4 className="text-amber-500 text-xl md:text-2xl font-semibold">Our Services</h4>
                        <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mt-2">
                            Building Excellence,
                            <span className="block text-amber-500">Delivering Trust</span>
                        </h1>
                        <p className="text-white/90 max-w-2xl mt-4 sm:mt-6 text-base md:text-lg">
                            We offer end-to-end construction and development services tailored to your needs. From concept to completion, we build spaces that last.
                        </p>
                    </div>
                </div>

                {/* Services Grid */}
                <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-950">
                            What We Do
                        </h2>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base">
                            From planning and design to construction and renovation, we provide complete solutions for your project.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div key={service.id} className="p-6 bg-white rounded-xl shadow-md border border-gray-100 flex flex-col items-start">
                                    <Icon className="w-10 h-10 text-amber-600 mb-4" />
                                    <h3 className="text-xl font-semibold text-blue-950 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </section>

                {/* Process Steps */}
                <section className="bg-slate-900 py-12 md:py-20">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="text-center mb-12">
                            <p className="text-amber-500 font-semibold tracking-wider uppercase text-xs">
                                OUR PROCESS
                            </p>
                            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
                                How We Work
                            </h2>
                            <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
                                From the first conversation to project completion, we keep the process clear and organized.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-stretch">
                            {steps.map((step, index) => (
                                <div key={step.id} className="flex flex-col items-center">
                                    <div className="bg-white p-6 rounded-lg shadow-md w-full flex flex-col items-center text-center justify-between min-h-[220px]">
                                        <span className="text-amber-600 font-bold text-lg">{step.number}</span>
                                        <h3 className="text-xl font-bold text-blue-950 my-2">{step.title}</h3>
                                        <p className="text-gray-600 text-sm">{step.description}</p>
                                    </div>
                                    {index !== steps.length - 1 && (
                                        <div className="my-4 md:hidden text-amber-500">
                                            <FaArrowDown className="text-xl" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-blue-950">Have a project in mind?</h2>
                        <h4 className="text-xl md:text-2xl font-semibold text-amber-500 mt-2">Let's build together.</h4>
                        <p className="mt-4 text-gray-600 text-sm md:text-base">
                            Whether you're planning a new home, renovation, or commercial project, we're ready to discuss your requirements.
                        </p>
                        <div className="mt-8">
                            <Link 
                                href="/contact" 
                                className="inline-block px-6 py-3 rounded-md bg-orange-600 text-white font-medium hover:bg-blue-950 transition-colors"
                            >
                                Request a Consultation
                            </Link>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}