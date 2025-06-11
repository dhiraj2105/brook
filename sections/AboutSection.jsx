"use client";

import Image from 'next/image';
import bgImage from '../assets/bg.webp'; // Adjust this path

export default function AboutSection() {
    return (
        <section id='about'
            className="w-full sm:h-[80vh] h-[91vh] px-4 sm:px-6 bg-cover bg-center relative flex items-center justify-center"
            style={{
                backgroundImage: `url(${bgImage.src})`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl text-center sm:mt-0 mt-25">
                {/* Label */}
                <h4 className="text-[16px] text-white font-semibold uppercase tracking-widest mb-3">
                    ABOUT US
                </h4>

                {/* Heading */}
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-snug">
                    A Home That Breathes, A Lifestyle That Moves Forward
                </h2>

                {/* Paragraph */}
                <p className="text-lg md:text-xl max-w-3xl mx-auto text-white mb-12 leading-relaxed">
                    Nestled in the heart of Sector 12, Greater Noida West, The Brook by Fusion Limited brings together intuitive design, smart home features, and lifestyle-enhancing amenities in one sophisticated address. Every apartment here is crafted to offer abundant natural light, intelligent space planning, and serene green views. A rare combination in today’s vertical cities.
                    Whether you're seeking an elevated living experience or a future-proof real estate investment, The Brook offers the perfect blend of both.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-6xl mx-auto">
                    {[
                        { number: "10+", label: "Years Experience" },
                        { number: "500+", label: "Projects Delivered" },
                        { number: "1000+", label: "Happy Families" },
                        { number: "100%", label: "On-time Delivery" },
                        { number: "24/7", label: "Support Team" },
                        { number: "A+", label: "Construction Grade" },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <span className="text-4xl md:text-5xl font-bold text-white">{item.number}</span>
                            <p className="mt-2 text-sm md:text-base text-white text-center">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
