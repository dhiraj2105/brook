"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/amenities.png"; // Ensure bg.webp is in the /assets folder

export default function PopupForm() {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState("");

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1000);
        const handleOpenPopup = () => setIsOpen(true);

        window.addEventListener("openPopup", handleOpenPopup);

        return () => {
            clearTimeout(timer);
            window.removeEventListener("openPopup", handleOpenPopup);
        };
    }, []);

    const closeModal = () => {
        setIsOpen(false);
        setStatus("");
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        try {
            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbwFUrsuEzkLUjc07z9MXmKwKSb1zGNo8gCJrmNLI0mCqkhopIjdHYqzvT2zcTKMpqL7Xg/exec",
                {
                    method: "POST",
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();
            if (result.result === "success") {
                setStatus("Form submitted successfully!");
                setFormData({ name: "", email: "", phone: "", message: "" });
            } else {
                setStatus("Failed to submit. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("Submission error. Please try again later.");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="fixed inset-0  backdrop-blur-sm z-40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeModal}
                    />

                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50 px-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                    >
                        <div
                            className="w-full max-w-xl rounded-3xl shadow-xl relative flex flex-col overflow-hidden max-h-[90vh] bg-cover bg-center"
                            style={{ backgroundImage: `url(${logo.src})` }}
                        >
                            {/* Optional overlay for better text readability */}
                            <div className="absolute inset-0 bg-black/30 z-0" aria-hidden="true" />

                            <button
                                onClick={closeModal}
                                aria-label="Close popup"
                                className="absolute sm:top-5 right-4 text-white font-extrabold text-4xl p-2 hover:text-gray-300 z-20 cursor-pointer"
                            >
                                ×
                            </button>

                            <div className="w-full p-6 md:p-10 overflow-y-auto relative z-10">
                                <h2 className="text-2xl font-semibold mb-4 text-white">
                                    Book a Visit
                                </h2>
                                <form className="space-y-4" onSubmit={handleSubmit}>
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        className="w-full px-4 py-2 border border-gray-300 text-white focus:outline-none focus:ring-1 focus:ring-[#D0B674]"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        className="w-full px-4 py-2 border border-gray-300 text-white focus:outline-none focus:ring-1 focus:ring-[#D0B674]"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone Number"
                                        className="w-full px-4 py-2 border border-gray-300 text-white focus:outline-none focus:ring-1 focus:ring-[#D0B674]"
                                        required
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                    <textarea
                                        name="message"
                                        placeholder="Write Your Message Here"
                                        className="w-full px-4 py-2 border border-gray-300 text-white focus:outline-none focus:ring-1 focus:ring-[#D0B674]"
                                        rows={3}
                                        value={formData.message}
                                        onChange={handleChange}
                                    />

                                    <button
                                        type="submit"
                                        className="w-full py-2  font-bold bg-[#D0B674] hover:bg-black text-white cursor-pointer transition duration-300 focus:outline-none focus:ring-1 focus:ring-[#D0B674]"
                                    >
                                        Submit
                                    </button>

                                    {status && (
                                        <p className="text-sm text-white mt-2">{status}</p>
                                    )}
                                </form>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
