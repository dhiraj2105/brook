
'use client';

import {
    FaSwimmingPool,
    FaBasketballBall,
    FaPlayCircle,
    FaDumbbell,
    FaGolfBall,
    FaBowlingBall,
    FaTree,
} from 'react-icons/fa';
import { GiTennisRacket } from 'react-icons/gi';
import { GrYoga } from 'react-icons/gr';
import { MdOutlineDeck } from 'react-icons/md';

import bgImage from '../assets/amenities.png';
import amenitiesImage from '../assets/amenities.jpg';

const amenities = [
    { icon: <FaPlayCircle />, label: "Toddlers' Play Area" },
    { icon: <MdOutlineDeck />, label: 'Water Feature' },
    { icon: <GrYoga />, label: 'Yoga, Aerobics' },
    { icon: <FaSwimmingPool />, label: 'Swimming Pool' },
    { icon: <FaBowlingBall />, label: 'Indoor Games Room' },
    { icon: <FaBasketballBall />, label: 'Basketball Court' },
    { icon: <GiTennisRacket />, label: 'Badminton Court' },
    { icon: <FaTree />, label: 'Senior Citizen Garden' },
    { icon: <MdOutlineDeck />, label: 'Deck Seating' },
    { icon: <FaGolfBall />, label: 'Chip and Putting Greens' },
    { icon: <FaDumbbell />, label: 'Jogging Track & Gymnasium' },
    { icon: <FaTree />, label: 'Topiary Garden' },
];

export default function AmenitiesSection() {
    return (
        <section
            id="amenities"
            className="relative py-20 px-6 bg-cover bg-center "
            style={{ backgroundImage: `url(${bgImage.src})` }}
        >
            {/* Overlay */}
            {/* <div className="absolute inset-0 bg-black/40 z-0" /> */}

            {/* Content */}
            <div className="relative z-10 container mx-auto text-center md:text-left">
                <h5 className="text-xl font-semibold uppercase tracking-wide mb-4">Amenities</h5>
                <h2 className="text-3xl md:text-5xl font-bold mb-12">Indulgent Living. Inspired Amenities.

                </h2>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Static Image */}
                    <div className="w-full">
                        <img
                            src={amenitiesImage.src}
                            alt="Amenities"
                            className="rounded-xl shadow-lg w-full h-auto object-cover"
                        />
                    </div>

                    {/* Amenities Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {amenities.map((item, index) => (
                            <div key={index} className="flex items-center space-x-4">
                                <div className="text-3xl">{item.icon}</div>
                                <div className="text-xl font-semibold">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
