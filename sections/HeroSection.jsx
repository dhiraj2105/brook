"use client";

import Image from "next/image";
import {
  FaHome,
  FaRulerCombined,
  FaCouch,
  FaMapMarkerAlt,
  FaSwimmingPool,
  FaShieldAlt,
  FaRocket,
  FaClock,
} from "react-icons/fa";

// import heroImg from "../assets/brook4.png";
import heroImg from "../assets/banner.jpg";

export default function HeroSection() {
  const openPopup = () => {
    window.dispatchEvent(new Event("openPopup"));
  };

  return (
    <section
      id="hero"
      className="d-flex flex-column flex-md-row min-vh-100 mt-sm-0"
    >
      {/* Left Image Section */}
      <div
        className="w-100 w-md-50 position-relative"
        style={{ minHeight: "300px" }}
      >
        <Image
          src={heroImg}
          alt="Hero Image"
          fill
          className="object-fit-cover"
          priority
        />
      </div>

      {/* Right Content Section */}
      <div className="w-100 w-md-50 d-flex flex-column justify-content-center align-items-center px-3 py-4 py-md-5 bg-white text-dark">
        <p
          className=" text-center  mb-1"
          style={{ fontSize: "1.2rem", color: "#d0b674" }}
        >
          Live Elevated at
        </p>
        <h1
          className="display-3 fw-semibold text-center"
          style={{
            fontFamily: "Playfair Display, serif",
            color: "#1d1e22",
            fontSize: "90px",
          }}
        >
          The Brook
        </h1>

        <p
          className=" text-center text-dark mb-3 px-2"
          style={{ fontSize: "1.25rem" }}
        >
          Sector 12, Greater Noida West
        </p>

        <p
          className="fs-4 fw-semibold text-center mb-4"
          style={{ maxWidth: "600px", color: "#1d1e22", fontSize: "1.25rem" }}
        >
          Ultra-Spacious 3 &amp; 4 BHK <br />
          Residences for Grand Living
        </p>

        {/* Price box */}
        <div
          className="d-inline-flex flex-wrap justify-content-center align-items-center gap-2 py-2 px-4 rounded"
          style={{ backgroundColor: "#D0B674" }}
        >
          <p
            className="fw-semibold text-dark mb-0"
            style={{ fontSize: "1.1rem" }}
          >
            PRICE STARTS FROM
          </p>
          <div className="bg-white px-2 rounded">
            <p
              className="fw-semibold fs-5 text-dark mb-0"
              style={{ fontSize: "1.2rem" }}
            >
              ₹ 1.37 Cr*
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div
          className="mt-4 row row-cols-2 row-cols-sm-3 g-3 text-center w-100"
          style={{ maxWidth: "720px" }}
        >
          {highlights.map((item, idx) => (
            <div
              key={idx}
              className="col d-flex flex-column align-items-center hover-zoom"
            >
              <item.icon className="fs-2 mb-2 text-dark" />
              <p
                className="fw-semibold text-dark mb-0"
                style={{ fontSize: "1.1rem" }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <button
          className="mt-4 px-4 py-2 btn text-white fw-semibold"
          style={{ backgroundColor: "#D0B674" }}
          onClick={openPopup}
        >
          Get In Touch
        </button>
      </div>
    </section>
  );
}

const highlights = [
  { icon: FaHome, text: "3 & 4 BHK Homes" },
  { icon: FaRulerCombined, text: "Mivan Construction" },
  { icon: FaCouch, text: "Fastest Progress in the Area" },
  { icon: FaShieldAlt, text: "Premium Construction" },
  { icon: FaRocket, text: "Future-Ready" },
  { icon: FaClock, text: "Delivered Fast" },
];
