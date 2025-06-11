"use client";

import React from "react";
import {
  FaMapMarkedAlt,
  FaRoad,
  FaTrain,
  FaSubway,
  FaSchool,
  FaHospital,
  FaArrowRight,
} from "react-icons/fa";
import locationBg from "../assets/bg.webp";

export default function LocationSection() {
  const locationItems = [
    {
      icon: <FaRoad className="w-6 h-6 text-white" />,
      text: "2 mins from FNG Expressway",
    },
    {
      icon: <FaSubway className="w-6 h-6 text-white" />,
      text: "5 mins from Sector 78 Noida",
    },
    {
      icon: <FaArrowRight className="w-6 h-6 text-white" />,
      text: "10 mins from NH-24 & Sector 62 Metro",
    },
    {
      icon: <FaTrain className="w-6 h-6 text-white" />,
      text: "15 mins to Ghaziabad Railway Station",
    },
    {
      icon: <FaSchool className="w-6 h-6 text-white" />,
      text: "Surrounded by top schools, malls, and hospitals",
    },
  ];

  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup"));
  };
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4425.987527363445!2d77.47958137633383!3d28.5611423757038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cedfd8a35ed99%3A0x39307c7c22f3b81b!2sFusion%20The%20Brook!5e1!3m2!1sen!2sin!4v1749627075453!5m2!1sen!2sin"
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
          <h5 className="text-xl font-semibold uppercase tracking-wide mb-4">
            Location Advantage
          </h5>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Strategically Placed. Seamlessly Connected.
          </h2>
          <p className="text-lg mb-10 max-w-xl">
            Located in Sector 12, Greater Noida West, The Brook offers unmatched
            access to key areas:
          </p>

          <table className="min-w-full table-auto border-separate border-spacing-y-4">
            <tbody>
              {locationItems.map((item, index) => (
                <tr key={index} className="border-b border-white/30">
                  <td className="pr-4 py-1 flex items-center">{item.icon}</td>
                  <td className="text-lg font-semibold py-1">{item.text}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="text-md mt-5 mb-2 text-white/90">
            It’s not just a home; it’s a lifestyle in the city’s fastest growing
            corridor with high rental demand and appreciation potential.
          </p>
          <button className="bg-[#D0B674] cursor-pointer text-white border hover:bg-white hover:text-[#D0B674] border-[#D0B674] font-semibold text-lg py-4 px-12 transition duration-300" onClick={openPopup}>Book Site Visit</button>
        </div>
      </div>
    </section>
  );
}
