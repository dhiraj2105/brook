"use client";

import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function ContactSection() {
    return (
        <section id="contact" className="relative bg-gray-100 py-24 px-6 text-center">
            <div className="relative z-10 container mx-auto max-w-6xl">
                <h5 className="text-2xl font-semibold uppercase tracking-widest text-gray-700 mb-4">
                    Contact Us
                </h5>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                    Let’s Help You Find Your Perfect Home at The Brook
                </h2>
                <p className="text-lg text-gray-600 mb-12">
                    Please fill in your details and our team will get in touch shortly.
                </p>

                {/* Contact Form */}
                <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-lg p-[10px] border border-gray-300">
                    <form className="bg-white p-8 md:p-12 border border-[#D0B674] rounded-lg space-y-10">
                        <div className="grid md:grid-cols-3 gap-6">
                            <input
                                type="text"
                                placeholder="Name"
                                className="w-full border-b-2 border-gray-400 focus:border-blue-600 outline-none text-lg py-4 placeholder-gray-500"
                                required
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border-b-2 border-gray-400 focus:border-blue-600 outline-none text-lg py-4 placeholder-gray-500"
                                required
                            />
                            <input
                                type="email"
                                placeholder="Email ID"
                                className="w-full border-b-2 border-gray-400 focus:border-blue-600 outline-none text-lg py-4 placeholder-gray-500"
                                required
                            />
                        </div>

                        <div className="w-full">
                            <select
                                required
                                className="w-full border-b-2 border-gray-400 focus:border-blue-600 outline-none text-lg py-4 placeholder-gray-500 bg-white"
                            >
                                <option value="">Preferred Unit Type</option>
                                <option value="3bhk">3 BHK</option>
                                <option value="4bhk">4 BHK</option>
                            </select>
                        </div>

                        <input
                            type="text"
                            placeholder="Message (Optional)"
                            className="w-full border-b-2 border-gray-400 focus:border-blue-600 outline-none text-lg py-4 resize-none placeholder-gray-500"
                        />

                        <div className="text-center">
                            <button
                                type="submit"
                                className="hover:bg-[#D0B674] hover:text-white border border-[#D0B674] text-[#D0B674] font-semibold text-lg py-4 px-12 transition duration-300"
                            >
                                Get In Touch
                            </button>
                        </div>
                    </form>
                </div>


            </div>
        </section>
    );
}
