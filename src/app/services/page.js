import Link from "next/link";
import Navbar from "../components/Navbar";
import { FaArrowRight, FaArrowDown } from 'react-icons/fa'
import { FaHome, FaBuilding, FaPaintRoller, FaDraftingCompass, FaHardHat, FaComments } from "react-icons/fa";
import Footer from "../components/Footer";
export default function Services() {
    const services = [
        {
            id:1,
            icon: FaHome,
            title: "Residential Construction",
            description: "We build modern and durable homes tailored to your lifestyle and needs."
        },
        {
            id:2,
            icon: FaBuilding,
            title: "Commercial Construction",
            description: "From offices to retail spaces, we deliver commercial projects that inspire growth."
        },
        {
            id:3,
            icon: FaPaintRoller,
            title: "Renovation & Remodeling",
            description: "We transform existing spaces with innovative designs and quality craftsmanship."
        },
        {
            id:4,
            icon: FaDraftingCompass,
            title: "Architecture & Design",
            description: "Our design process blends creativity and functionality to bring your vision to life."
        },
        {
            id:5,
            icon: FaHardHat,
            title: "Project Management",
            description: "We manage every detail to ensure your project is completed on time and within budget."
        },
        {
            id:7,
            icon: FaComments,
            title: "Consultation",
            description: "Expert advice and solutions to help you make the right decisions for your project."
        }

    ];
    const steps = [
        {
            id:1,
            number: "01",
            title: "Consultation",
            description: "We understand your requirements, budget, and vision."
        },
        {
            id:2,
            number: "02",
            title: "Planning & Design",
            description: "We develop the design and plan the project in detail."
        },
        {
            id:3,
            number: "03",
            title: "Construction",
            description: "Our team manages the construction while maintaining quality."
        },
        {
            id:4,
            number: "04",
            title: "Handover",
            description: "We complete the project and hand over your finished space."
        }
    ]
    return (
        <div>
            <Navbar />

            <main>
                <div className="relative h-[70vh]  ">
                    <img className=" w-full h-full object-cover" src="/images.webp" />
                    <div className="absolute  inset-0 bg-black/50">

                    </div>
                    <div className="flex flex-col justify-center px-8 md:px-16 absolute inset-0 ">
                        <h4 className="text-amber-600 text-2xl">Our Services</h4>
                        <h1 className="text-white text-5xl font-bold leading-tight tracking-tight md:text-7xl">Building Excellence,
                            <span className="block  text-amber-500">Delivering Trust</span>
                        </h1>
                        <p className="text-white/90 max-w-2xl mt-6 text-lg">We offer end-to-end construction and development services tailored to your needs. From concept to completion, we build spaces that last.</p>
                    </div>
                </div>
                <section className="max-w-7xl mx-auto px-6 py-20">

                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-950">
                            What We Do
                        </h2>

                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            From planning and design to construction and renovation,
                            we provide complete solutions for your project.
                        </p>
                    </div>

                    <div className="card-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {services.map((service) => {
                            const Icon = service.icon
                            return (
                                <div key={service.id} className="card p-6 bg-white rounded-xl shadow-md">
                                    <Icon className="w-10 h-10 text-amber-600 mb-4" />

                                    <h3 className="text-xl font-semibold text-blue-950 mb-2">
                                        {service.title}
                                    </h3>

                                    <p className="text-gray-600">
                                        {service.description}
                                    </p>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-12">
                        <p className="text-amber-600 font-semibold">
                            OUR PROCESS
                        </p>

                        <h2 className="text-4xl font-bold text-white mt-2">
                            How We Work
                        </h2>

                        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
                            From the first conversation to project completion,
                            we keep the process clear and organized.
                        </p>
                    </div>
                    <div className="card-container flex flex-col md:flex-row items-center justify-between gap-4">
                        {steps.map((step, index) => {
                            return (
                                <div key={step.id} className="flex flex-col md:flex-row ">
                                    <div className="card  bg-white  shadow-md h-50  w-3xs justify-center text-center gap-3 rounded-lg">
                                        <span className="mb-6 text-amber-600">{step.number}</span>
                                        <h2 className="text-4xl font-bold text-blue-500 mb-7">{step.title}</h2>
                                        <p className="text-blue-400 text-sm ">{step.description}</p>

                                    </div>
                                    {index !== 3 &&
                                        (
                                            <div className="my-2 md:mx-2 flex justify-center items-center">
                                                <FaArrowDown className="block md:hidden text-2xl" />
                                                <FaArrowRight className="hidden md:block text-2xl" />
                                            </div>
                                        )
                                    }
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section className="max-w-7xl mx-auto px-6 py-20">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-blue-950 mt-2">Have a project in mind?</h2>
                        <h4 className="text-2xl font-bold text-amber-500 mt-2">Let's build together.</h4>
                        <p className="text-md text-gray-600">Whether you're planning a new home,
                            renovation, or commercial project,
                            we're ready to discuss your requirements.</p>
                    </div>
                    <div className="text-center mb-12">
 <Link href="/contact" className=" p-4 rounded-md bg-orange-600 text-black hover:text-white hover:bg-blue-950">Request a Consultation</Link>                 
                    </div>
                </section>
            </main>
          <Footer/>
        </div>
    )
}