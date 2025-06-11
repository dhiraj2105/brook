'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <section id="footer-section" className="relative bg-gray-50 pt-20 pb-10 text-center">
      {/* Background & Flower Images */}
      {/* 
            <Image src="/footer/bg.webp" alt="Footer Background" fill className="absolute inset-0 object-cover z-0" />
            <Image src="/footer/flower.png" alt="Footer Flower" width={150} height={150} className="absolute bottom-0 right-0 z-10" />
            */}

      <div className="relative z-10 container mx-auto px-6 md:px-20">
        <h2 className="text-3xl md:text-5xl font-bold mb-16 text-gray-800">
          Powered by a trusted Joint Venture
        </h2>

        <div className="grid md:grid-cols-2 gap-12 text-left">
          {/* Great Value Section */}
          <div>
            <Image
              src="/footer/great_value.png"
              alt="Builder"
              width={200}
              height={60}
              className="mb-6"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
              Come Home to Where Life Flows Better
              At The Brook, every detail flows in harmony — from thoughtfully crafted interiors to future-ready infrastructure. Whether you’re moving in with your family or making a smart investment, this is your opportunity to own a legacy of comfort, connection, and capital appreciation.
              Limited inventory. High demand. The future flows here.
              [Invest Now]

            </p>
          </div>

          {/* Yatharth Section */}
          <div>
            <Image
              src="/footer/yatharth.png"
              alt="Rivulet"
              width={200}
              height={60}
              className="mb-6"
            />
            <p className="text-gray-700 text-lg leading-relaxed">
              Built by Fusion Limited – A Name You Can Trust
              With over a decade of experience, Fusion Limited has delivered landmark projects across residential, commercial, and mixed-use developments in the NCR region. Known for its transparency, sustainability practices, and commitment to excellence, the group continues to redefine urban living.
              Fusion’s hallmark projects include
              Fusion Homes, French Apartments, The Rivulet (LOGOS)
              and the commercial marvel
              U:Fairia (LOGOS)
              all of which reflect their forward-thinking approach to community living.
              [Learn More]
            </p>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-20 border-t pt-8 text-center text-sm text-gray-600">
          <p className="mb-2">
            © Copyright 2025 NBCC Aspire Eternia. All Rights Reserved.
          </p>
          <p>
            <a href="/disclaimer.html" target="_blank" className="underline hover:text-blue-700">
              Disclaimer & Privacy Policy
            </a>{' '}
            | Crafted by{' '}
            <a
              href="https://gtftechnologies.com/"
              target="_blank"
              className="underline hover:text-blue-700"
            >
              GTF Technologies
            </a>
          </p>
        </div>

        {/* Disclaimer Logos and Text */}
        <div className="mt-12">
          <div className="flex flex-wrap justify-center gap-8 items-center mb-6">
            <Image src="/footer/nbcc.png" alt="NBCC" width={120} height={40} />
            <Image src="/footer/aspire.png" alt="Aspire" width={120} height={40} />
          </div>
          <p className="text-gray-600 text-sm max-w-4xl mx-auto">
            Disclaimer: Authorised marketing partner for Aspire Dream Valley III, managed by NBCC on behalf of the Hon’ble Supreme Court-appointed Court Receiver. | *T&C Apply
          </p>
        </div>
      </div>
    </section>
  );
}
