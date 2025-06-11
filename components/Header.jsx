// "use client";
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import parentLogo from "../assets/fusion.png";
// import mainLogo from "../assets/BrookLogo.png";

// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 0);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header
//       className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
//         }`}
//     >
//       <div className="mx-auto p-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Left Side Logos */}
//           <div className="flex items-center space-x-4">
//             {/* Desktop View Logo */}
//             <div className="hidden md:flex items-center">
//               {!isScrolled ? (
//                 <Image
//                   src={parentLogo}
//                   alt="Logo 1"
//                   width={200}
//                   height={200}
//                   className="w-auto h-8 sm:h-13"
//                 />
//               ) : (
//                 <Image
//                   src={mainLogo}
//                   alt="Scrolled Main Logo"
//                   width={600}
//                   height={600}
//                   className="w-auto h-20 sm:h-30"
//                 />
//               )}
//             </div>

//             {/* Mobile View Logo */}
//             <div className="md:hidden flex items-center space-x-4">
//               {!isScrolled ? (
//                 <Image
//                   src={parentLogo}
//                   alt="Mobile Parent Logo"
//                   width={250}
//                   height={250}
//                   className="w-auto h-10"
//                 />
//               ) : (
//                 <Image
//                   src={mainLogo}
//                   alt="Mobile Main Logo"
//                   width={300}
//                   height={300}
//                   className="w-auto h-20"
//                 />
//               )}
//             </div>
//           </div>

//           {/* Right Side (Desktop Nav + Optional Action Button) */}
//           <div className="hidden md:flex items-center space-x-6">
//             <nav className="flex space-x-6">
//               <Link href="#hero" className="text-black text-xl hover:text-[#F34F43] transition">Home</Link>
//               <Link href="#about" className="text-black text-xl hover:text-[#F34F43] transition">About</Link>
//               <Link href="#highlights" className="text-black text-xl hover:text-[#F34F43] transition">Highlights</Link>
//               <Link href="#amenities" className="text-black text-xl hover:text-[#F34F43] transition">Amenities</Link>
//               <Link href="#location" className="text-black text-xl hover:text-[#F34F43] transition">Location</Link>
//               <Link href="#floorPlan" className="text-black text-xl hover:text-[#F34F43] transition">Floor Plans</Link>
//               <Link href="#contact" className="text-black text-xl hover:text-[#F34F43] transition">Contact</Link>
//             </nav>
//           </div>

//           {/* Hamburger for Mobile */}
//           <div className="flex md:hidden items-center space-x-4">
//             <button
//               className="text-black  focus:outline-none"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               aria-label="Toggle mobile menu"
//             >
//               <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 {mobileMenuOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {/* {mobileMenuOpen && (
//         <div className="md:hidden bg-white shadow-md">
//           <div className="px-4 pt-4 pb-2 space-y-2">
//             <Link href="#hero" className="block text-black hover:text-[#F34F43]" onClick={() => setMobileMenuOpen(false)}>Home</Link>
//             <Link href="#about" className="block text-black hover:text-[#F34F43]" onClick={() => setMobileMenuOpen(false)}>About</Link>
//             <Link href="#highlights" className="block text-black hover:text-[#F34F43]" onClick={() => setMobileMenuOpen(false)}>Highlights</Link>
//             <Link href="#amenities" className="block text-black hover:text-[#F34F43]" onClick={() => setMobileMenuOpen(false)}>Amenities</Link>
//             <Link href="#location" className="block text-black hover:text-[#F34F43]" onClick={() => setMobileMenuOpen(false)}>Location</Link>
//             <Link href="#floorPlan" className="block text-black hover:text-[#F34F43]" onClick={() => setMobileMenuOpen(false)}>Floor Plans</Link>
//             <Link href="#contact" className="block text-black hover:text-[#F34F43]" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="w-full bg-[#D0B674] text-white px-4 py-2 mt-2 rounded hover:bg-black transition"
//             >
//               Action
//             </button>
//           </div>
//         </div>
//       )} */}
//       {mobileMenuOpen && (

//         <div
//           className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transition-transform duration-500 ease-in-out transform ${mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0 pointer-events-none"
//             }`}
//         >
//           {/* Push content below fixed header */}
//           <div className="flex flex-col justify-start px-6 pt-20 pb-8 space-y-6">
//             <Link
//               href="#hero"
//               className="text-lg text-gray-800 font-medium hover:text-[#F34F43] transition"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               href="#about"
//               className="text-lg text-gray-800 font-medium hover:text-[#F34F43] transition"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               href="#highlights"
//               className="text-lg text-gray-800 font-medium hover:text-[#F34F43] transition"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Highlights
//             </Link>
//             <Link
//               href="#amenities"
//               className="text-lg text-gray-800 font-medium hover:text-[#F34F43] transition"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Amenities
//             </Link>
//             <Link
//               href="#location"
//               className="text-lg text-gray-800 font-medium hover:text-[#F34F43] transition"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Location
//             </Link>
//             <Link
//               href="#floorPlan"
//               className="text-lg text-gray-800 font-medium hover:text-[#F34F43] transition"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Floor Plans
//             </Link>
//             <Link
//               href="#contact"
//               className="text-lg text-gray-800 font-medium hover:text-[#F34F43] transition"
//               onClick={() => setMobileMenuOpen(false)}
//             >
//               Contact
//             </Link>
//             <button
//               onClick={() => setMobileMenuOpen(false)}
//               className="mt-4 bg-[#D0B674] text-white text-lg font-semibold px-4 py-3 rounded-md hover:bg-black transition"
//             >
//               Action
//             </button>
//           </div>
//         </div>

//       )}

//     </header>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import parentLogo from "../assets/fusion.png";
import mainLogo from "../assets/BrookLogo.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-transparent"
        }`}
    >
      <div className="mx-auto p-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side Logos */}
          <div className="flex items-center space-x-4">
            {/* Desktop Logo */}
            <div className="hidden md:flex items-center">
              {!isScrolled ? (
                <Image
                  src={parentLogo}
                  alt="Logo"
                  width={200}
                  height={200}
                  className="w-auto h-8"
                />
              ) : (
                <Image
                  src={mainLogo}
                  alt="Scrolled Logo"
                  width={600}
                  height={600}
                  className="w-auto h-20"
                />
              )}
            </div>

            {/* Mobile Logo */}
            <div className="md:hidden flex items-center">
              {!isScrolled ? (
                <Image
                  src={parentLogo}
                  alt="Mobile Logo"
                  width={250}
                  height={250}
                  className="w-auto h-10"
                />
              ) : (
                <Image
                  src={mainLogo}
                  alt="Mobile Scrolled Logo"
                  width={300}
                  height={300}
                  className="w-auto h-16"
                />
              )}
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex space-x-6">
              {[
                ["#hero", "Home"],
                ["#about", "About"],
                ["#highlights", "Highlights"],
                ["#amenities", "Amenities"],
                ["#location", "Location"],
                ["#floorPlan", "Floor Plans"],
                ["#contact", "Contact"],
              ].map(([href, label]) => (
                <Link
                  key={label}
                  href={href}
                  className="text-black text-xl hover:text-[#F34F43] transition"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Hamburger Menu Button */}
          <div className="flex md:hidden items-center z-50">
            <button
              className="text-black focus:outline-none"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 left-0 w-full h-screen bg-white z-40 transition-transform duration-500 ease-in-out transform ${mobileMenuOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
          }`}
      >
        {/* Padding pushes content below header */}
        <div className="flex flex-col justify-start px-6 pt-20 pb-8 space-y-6">
          {[
            ["#hero", "Home"],
            ["#about", "About"],
            ["#highlights", "Highlights"],
            ["#amenities", "Amenities"],
            ["#location", "Location"],
            ["#floorPlan", "Floor Plans"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <Link
              key={label}
              href={href}
              className="text-lg text-gray-800 font-medium hover:text-[#F34F43] transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

        </div>
      </div>
    </header>
  );
}
