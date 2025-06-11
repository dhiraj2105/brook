'use client';

import Image from 'next/image';


import parentLogo from "../assets/fusion-logo.webp";
import mainLogo from "../assets/BrookLogo.png";

export default function Footer() {
  return (
    <section id="footer-section" className="relative bg-gray-50 pt-20 pb-10 text-center">
      <div className="relative z-10 container mx-auto px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-gray-800">
          Powered by a trusted Joint Venture
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Great Value Section */}
          <div>
            <Image
              src={mainLogo}
              alt="Builder"
              width={180}
              height={60}
              className="mb-0"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
              Come Home to Where Life Flows Better
              At The Brook, every detail flows in harmony — from thoughtfully crafted interiors to future-ready infrastructure. Whether you’re moving in with your family or making a smart investment, this is your opportunity to own a legacy of comfort, connection, and capital appreciation.
              Limited inventory. High demand. The future flows here.
            </p>
          </div>

          {/* Yatharth Section */}
          <div>
            <Image
              src={parentLogo}
              alt="Rivulet"
              width={180}
              height={60}
              className="mb-8"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
              A Name You Can Trust
              With over a decade of experience, Fusion Limited has delivered landmark projects across residential, commercial, and mixed-use developments in the NCR region. Known for its transparency, sustainability practices, and commitment to excellence, the group continues to redefine urban living.
              Fusion’s hallmark projects include
              Fusion Homes, French Apartments, The Rivulet
              and the commercial marvel
              U:Fairia
              all of which reflect their forward-thinking approach to community living.
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-20 border-t pt-8 text-center text-sm text-gray-600">
          <p className="mb-2">
            © Copyright 2025 FUSION LIMITED. All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
