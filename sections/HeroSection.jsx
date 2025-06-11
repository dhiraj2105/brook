"use client";

export default function HeroSection() {
    const openPopup = () => {
        window.dispatchEvent(new Event("openPopup")); // Dispatch event to open popup
    };
    return (
        <section id="hero" className="min-h-screen flex flex-col md:flex-row ">
            {/* Left Video Section */}
            <div className="w-full md:w-1/2 h-72 md:h-auto relative ">
                <video
                    src="/desktop.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="hidden md:block object-cover w-full h-full"
                />
                <video
                    src="/mobile.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="block md:hidden object-cover w-full h-full"
                />
            </div>

            {/* Right Content Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-center px-6 py-10 md:p-16 bg-white text-gray-900">
                <h1 className="text-5xl md:text-7xl font-semibold text-center text-[#1d1e22]">The Brook</h1>

                <p className="text-base md:text-lg font-semibold mb-4 text-center max-w-md md:max-w-xl text-[#1d1e22]">
                    Sector 12, Greater Noida West
                </p>

                <p className="text-xl md:text-3xl font-semibold mb-6 text-center leading-snug max-w-md md:max-w-xl text-[#1d1e22]">
                    Ultra-Spacious 3 &amp; 4 BHK <br />
                    Residences for Grand Living
                </p>

                {/* Price box */}
                <div className="inline-flex flex-wrap justify-center items-center gap-2 bg-[#D0B674] py-2 px-4 rounded z-20">
                    <p className="text-base md:text-lg font-semibold text-center text-[#1d1e22]">PRICE STARTS FROM</p>
                    <div className="bg-white px-2 rounded">
                        <p className="text-xl md:text-2xl font-semibold text-[#1d1e22] text-center">₹ 1.37 Cr*</p>
                    </div>
                </div>

                <hr className="border-[#D0B674] w-full max-w-md my-6" />

                <p className="text-sm md:text-base font-semibold text-center mb-4">Offer Valid on Limited Units Only</p>

                {/* Offer and Key Points Section */}
                <div className="relative border border-t-0 border-[#D0B674] rounded-b-lg p-4 md:p-8 w-full max-w-xl">
                    <p className="mb-6 font-semibold text-center bg-[#D0B674] py-2 px-4 rounded z-10">
                        Save upto ₹ 40.52 Lakhs* <br /> Pre-launch waiver
                    </p>

                    <div className="grid grid-cols-2 md:grid-cols-3 text-center text-sm md:text-base font-medium text-gray-700">
                        <div className="py-2 px-3 border-b border-r border-[#D0B674]">1 car parking</div>
                        <div className="py-2 px-3 border-b border-r border-[#D0B674]">Club membership</div>
                        <div className="py-2 px-3 border-b border-[#D0B674]">Power backup</div>
                        <div className="py-2 px-3 border-r border-[#D0B674]">2 year maintenance</div>
                        <div className="py-2 px-3 border-r border-[#D0B674]">Electricity charges</div>
                        <div className="py-2 px-3" /> {/* Empty for balance */}
                    </div>
                </div>

                <button className="mt-6 md:mt-8 px-6 md:px-8 py-3 bg-[#F34F43] text-white font-semibold rounded-full hover:bg-[#ff5e53] transition z-20" onClick={openPopup}>
                    ENQUIRE NOW
                </button>
            </div>
        </section>
    );
}
