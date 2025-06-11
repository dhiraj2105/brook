// 'use client';

// import React from 'react';
// import { FaRoad, FaTree, FaHospital, FaArrowRight } from 'react-icons/fa';
// import locationBg from '../assets/bg.webp';

// export default function LocationSection() {
//     const locationItems = [
//         { icon: <FaRoad className="w-6 h-6 text-white" />, text: '130 Mtr Wide Main Road Frontage' },
//         { icon: <FaTree className="w-6 h-6 text-white" />, text: '100 Mtr Fully Developed Green Belt View' },
//         { icon: <FaArrowRight className="w-6 h-6 text-white" />, text: 'Non-Congested but Centrally Connected' },
//         { icon: <FaHospital className="w-6 h-6 text-white" />, text: 'Close to Schools, Metro, Malls, and Hospitals' },
//         { icon: <FaRoad className="w-6 h-6 text-white" />, text: 'Smooth Access to Major Expressways' },
//     ];

//     return (
//         <section
//             id="location"
//             className="relative py-20 px-6 bg-cover bg-center text-white"
//             style={{ backgroundImage: `url(${locationBg.src})` }}
//         >
//             {/* Overlay */}
//             <div className="absolute inset-0 bg-black/60 z-0" />

//             {/* Content */}
//             <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
//                 {/* Left: Embedded Map */}
//                 <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border-4 border-white">
//                     <iframe
//                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4557.670698712664!2d55.33272867624393!3d25.25216077767571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db50fb67227%3A0x2bdb164251cd605d!2sBrook%20Real%20Estate!5e1!3m2!1sen!2sin!4v1749191503206!5m2!1sen!2sin"
//                         width="100%"
//                         height="450"
//                         style={{ border: 0 }}
//                         allowFullScreen={true}
//                         loading="lazy"
//                         referrerPolicy="no-referrer-when-downgrade"
//                         title="Google Map Location"
//                     ></iframe>
//                 </div>

//                 {/* Right: Text + Table */}
//                 <div className="w-full md:w-1/2 text-left">
//                     <h5 className="text-xl font-semibold uppercase tracking-wide mb-4">Location Map</h5>
//                     <h2 className="text-3xl md:text-5xl font-bold mb-6">
//                         In the Heart of the City. Away from the Chaos.
//                     </h2>
//                     <p className="text-lg mb-10 max-w-xl">
//                         Located in the most connected, developed, and livable sector of Greater Noida West—yet
//                         free from crowding.
//                     </p>

//                     <table className="min-w-full table-auto border-separate border-spacing-y-4">
//                         <tbody>
//                             {locationItems.map((item, index) => (
//                                 <tr key={index} className="border-b border-white/30">
//                                     <td className="pr-4 py-3 flex items-center">{item.icon}</td>
//                                     <td className="text-lg font-semibold py-3">{item.text}</td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//         </section>
//     );
// }





"use client";

import React from 'react';
import {
    FaMapMarkedAlt,
    FaRoad,
    FaTrain,
    FaSubway,
    FaSchool,
    FaHospital,
    FaArrowRight,
} from 'react-icons/fa';
import locationBg from '../assets/bg.webp';

export default function LocationSection() {
    const locationItems = [
        { icon: <FaRoad className="w-6 h-6 text-white" />, text: '2 mins from FNG Expressway' },
        { icon: <FaSubway className="w-6 h-6 text-white" />, text: '5 mins from Sector 78 Noida' },
        { icon: <FaArrowRight className="w-6 h-6 text-white" />, text: '10 mins from NH-24 & Sector 62 Metro' },
        { icon: <FaTrain className="w-6 h-6 text-white" />, text: '15 mins to Ghaziabad Railway Station' },
        { icon: <FaSchool className="w-6 h-6 text-white" />, text: 'Surrounded by top schools, malls, and hospitals' },
    ];

    return (
        <section
            id="location"
            className="relative py-20 px-6 bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${locationBg.src})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left: Embedded Map */}
                <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg border-4 border-white">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4557.670698712664!2d55.33272867624393!3d25.25216077767571!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5db50fb67227%3A0x2bdb164251cd605d!2sBrook%20Real%20Estate!5e1!3m2!1sen!2sin!4v1749191503206!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map Location"
                    ></iframe>
                </div>

                {/* Right: Text + List */}
                <div className="w-full md:w-1/2 text-left">
                    <h5 className="text-xl font-semibold uppercase tracking-wide mb-4">Location Advantage</h5>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">
                        Strategically Placed. Seamlessly Connected.
                    </h2>
                    <p className="text-lg mb-10 max-w-xl">
                        Located in Sector 12, Greater Noida West, The Brook offers unmatched access to key areas:
                    </p>

                    <table className="min-w-full table-auto border-separate border-spacing-y-4">
                        <tbody>
                            {locationItems.map((item, index) => (
                                <tr key={index} className="border-b border-white/30">
                                    <td className="pr-4 py-3 flex items-center">{item.icon}</td>
                                    <td className="text-lg font-semibold py-3">{item.text}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <p className="text-md mt-8 text-white/90">
                        It’s not just a home; it’s a lifestyle in the city’s fastest growing corridor with high rental demand and appreciation potential.
                    </p>
                </div>
            </div>
        </section>
    );
}
