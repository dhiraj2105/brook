"use client";

import { useState } from 'react';
import Image from 'next/image';

// Floor plan images
import floorplan1 from '../assets/floor1.webp';
import floorplan2 from '../assets/floor1.webp';

// Background image
import bgImage from '../assets/amenities.png';

const accordionData = [
    {
        title: '3 BHK – 1350-1545 sq. ft.',
        content:
            'Ideal for growing families, our 3 BHK layouts are designed with spacious living areas, corner ventilation, modular kitchens, and premium fittings to offer comfort and style.',
        image: floorplan1,
    },
    {
        title: '4 BHK – 2010-2050 sq. ft.',
        content:
            'Our 4 BHK residences offer expansive spaces perfect for larger families, featuring thoughtfully designed layouts, airy balconies, and smartly planned utility zones.',
        image: floorplan2,
    },
    {
        title: 'Why Choose The Brook?',
        content:
            'Enjoy the freedom to live your way with flexible payment plans, loan assistance from top banks, and layouts tailored for modern lifestyles.',
        image: floorplan1,
    },
];

const FloorPlansSection = () => {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleAccordion = (index) => {
        setOpenIndex(index === openIndex ? null : index);
    };
    const openPopup = () => {
        window.dispatchEvent(new Event("openPopup"));
    };
    return (
        <section
            id="floorPlan"
            className="w-full bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            <div className="w-full h-full">
                <div className="max-w-7xl mx-auto px-6 py-20">
                    {/* Title */}
                    <div className="text-center mb-12">
                        <h4 className="text-base uppercase tracking-widest font-semibold">
                            Layout Options
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2">
                            Tailored for Every Modern Family
                        </h2>
                        <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                            At The Brook, space isn’t just square footage — it’s the freedom to live your way.
                        </p>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col md:flex-row gap-12 items-start">
                        {/* Left: Dynamic Image */}
                        {/* <div className="w-full md:w-1/2">
                            {openIndex !== null && (
                                <Image
                                    src={accordionData[openIndex].image}
                                    alt={accordionData[openIndex].title}
                                    className="w-full h-auto rounded-lg shadow-xl transition duration-300 ease-in-out"
                                    width={700}
                                    height={500}
                                />
                            )}
                        </div> */}
                        {/* Left: Dynamic Image with blur overlay */}
                        <div className="w-full md:w-1/2 relative rounded-lg overflow-hidden shadow-xl">
                            {openIndex !== null && (
                                <>
                                    <Image
                                        src={accordionData[openIndex].image}
                                        alt={accordionData[openIndex].title}
                                        className="w-full h-auto transition duration-300 ease-in-out"
                                        width={700}
                                        height={500}
                                    />
                                    {/* Overlay with blur */}
                                    <div className="absolute inset-0 bg-white/1 backdrop-blur-[2.5px] pointer-events-none rounded-lg"></div>
                                </>
                            )}
                        </div>


                        {/* Right: Accordion */}
                        <div className="w-full md:w-1/2 space-y-6">
                            {accordionData.map((item, index) => (
                                <div
                                    key={index}
                                    className="border border-gray-300 rounded-lg shadow-md bg-white overflow-hidden transition"
                                >
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className={`w-full px-6 py-5 text-left text-lg font-semibold transition-colors duration-200 ${openIndex === index
                                            ? 'bg-blue-50 '
                                            : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                                            }`}
                                    >
                                        {item.title}
                                    </button>
                                    {openIndex === index && (
                                        <div className="px-6 py-4 text-gray-700 text-base leading-relaxed bg-white">
                                            {item.content}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <button className="bg-[#D0B674] cursor-pointer text-white border hover:bg-white hover:text-[#D0B674] border-[#D0B674] font-semibold text-lg py-4 px-12 transition duration-300" onClick={openPopup}>Know More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FloorPlansSection;
