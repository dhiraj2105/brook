import {
    FaSwimmingPool,
    FaPlayCircle,
} from 'react-icons/fa';
import { GiFullMotorcycleHelmet } from "react-icons/gi";
import { MdOutlineLandscape, MdOutlineFireExtinguisher } from 'react-icons/md';
import { AiOutlineSound, AiOutlineClockCircle } from 'react-icons/ai';
import { BsFillLightningChargeFill } from 'react-icons/bs';
import { RiSecurePaymentLine } from 'react-icons/ri';

import bgImage from '../assets/amenities.png';
import amenitiesImage from '../assets/brook2.png';

const amenities = [
    { icon: <MdOutlineLandscape />, label: 'Grand Podium & Landscaped Walkways' },
    { icon: <MdOutlineFireExtinguisher />, label: 'Robust RCC & Fire-Resistant Materials' },
    { icon: <RiSecurePaymentLine />, label: '24x7 Smart Security with Facial Recognition' },
    { icon: <FaSwimmingPool />, label: 'Infinity Pool, Clubhouse & Spa' },
    { icon: <FaPlayCircle />, label: 'Kids’ Play Zone, Jogging Track, Mini Theatre' },
    { icon: <BsFillLightningChargeFill />, label: 'EV Charging & Green Construction' },
    { icon: <AiOutlineSound />, label: 'Acoustic Comfort & Thermal Insulation' },
    { icon: <GiFullMotorcycleHelmet />, label: 'Mivan Construction – Finish & Durability' },
    { icon: <AiOutlineClockCircle />, label: 'Fastest Construction in the Locality' },
];

export default function AmenitiesSection() {
    return (
        <section
            id="amenities"
            className="py-6 px-3 position-relative text-dark"
            style={{
                backgroundImage: `url(${bgImage.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                paddingTop: '6rem',
                paddingBottom: '6rem',
            }}
        >
            <div className="container position-relative z-1 text-center text-md-start">
                <h5
                    className="fw-semibold text-uppercase mb-3"
                    style={{ letterSpacing: '0.08em', fontSize: '1.25rem' }}
                >
                    Amenities
                </h5>
                <h2
                    className="fw-bold mb-5"
                    style={{ fontSize: '3rem', lineHeight: '1.2' }}
                >
                    Indulgent Living. Inspired Engineering.
                </h2>

                <div className="row g-5 align-items-start">
                    {/* Left Image Column */}
                    <div className="col-lg-6">
                        <img
                            src={amenitiesImage.src}
                            alt="Amenities"
                            className="img-fluid rounded shadow"
                            style={{
                                height: '50vh',
                                minHeight: '300px',
                                width: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </div>

                    {/* Right Amenities Grid */}
                    <div className="col-lg-6">
                        <div className="row row-cols-1 row-cols-sm-2 g-4">
                            {amenities.map((item, index) => (
                                <div key={index} className="col d-flex align-items-center gap-4">
                                    <div className="fs-2">{item.icon}</div>
                                    <div className="fs-5 fw-semibold">{item.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
