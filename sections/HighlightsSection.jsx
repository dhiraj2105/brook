"use client";
import Image from "next/image";
import { MdSecurity, MdLocalPlay, MdOutlineLocalFireDepartment } from "react-icons/md";
import { MdOutlineElectricalServices } from "react-icons/md";
import { FaSpa } from "react-icons/fa6";
import { FaSwimmingPool, FaChild, FaRunning } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { PiGarageDuotone } from "react-icons/pi";

// Background and Decorative Images
import bgImage from "../assets/bgHighlight.webp";
import highlightImg from "../assets/highlights.jpg";

// Highlight items using React Icons
const highlights = [
    { icon: <MdSecurity size={32} />, text: "24x7 Smart Security with Facial Recognition" },
    { icon: <FaSwimmingPool size={32} />, text: "Infinity Edge Swimming Pool & Sun Deck" },
    { icon: <FaSpa size={32} />, text: "Lavish Clubhouse with Spa, Gym, and Banquet Hall" },
    { icon: <MdLocalPlay size={32} />, text: "Indoor Games Zone & Mini Theatre" },
    { icon: <FaRunning size={32} />, text: "Jogging Track for Active Lifestyle" },
    { icon: <IoIosPeople size={32} />, text: "Senior Citizen Garden" },
    { icon: <FaChild size={32} />, text: "Kids’ Play Area" },
    { icon: <MdOutlineElectricalServices size={32} />, text: "EV Charging Stations & Green Building Features" },
    { icon: <MdOutlineLocalFireDepartment size={32} />, text: "3-Tier Security & Fire Safety Compliance" },
    { icon: <PiGarageDuotone size={32} />, text: "Grand Podium Entrance & Elevated Landscapes" },
];

export default function HighlightsSection() {
    const openPopup = () => {
        window.dispatchEvent(new Event("openPopup")); // Dispatch event to open popup
    };
    return (
        <section
            id="highlights"
            className="relative py-16 md:py-20 px-4 sm:px-6 bg-cover bg-center overflow-hidden"
            style={{
                backgroundImage: `url(${bgImage.src})`,
            }}
        >
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto text-center">
                <h5 className="text-sm md:text-base font-semibold uppercase tracking-widest mb-2">
                    Highlights
                </h5>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                    Thoughtful Spaces for a Balanced Life </h2>
                <p className="text-lg md:text-xl text-gray-700 mb-10 max-w-3xl mx-auto">
                    The Brook is more than just a home, it’s a lifestyle ecosystem designed for wellness, leisure, and smart living.
                </p>

                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Highlight Image */}
                    <div className="w-full md:w-1/2">
                        <Image
                            src={highlightImg}
                            alt="Highlight"
                            className="rounded-lg shadow-xl w-full h-auto"
                        />
                    </div>

                    {/* Highlights List */}
                    <div className="w-full md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                        {highlights.map((item, index) => (
                            <div key={index} className="flex items-start gap-4">
                                <span className="mt-1">{item.icon}</span>
                                <p className="text-base sm:text-lg xl:text-xl leading-snug">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* See More Button */}
                <div className="mt-10">
                    <button className="border bg-[#D0B674]  text-white px-6 py-2 cursor-pointer hover:bg-black text-xl hover:text-white transition" onClick={openPopup}>
                        See More
                    </button>
                </div>
            </div>
        </section>
    );
}
