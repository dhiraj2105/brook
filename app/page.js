"use client";
import AboutSection from "@/sections/AboutSection";
import AmenitiesSection from "@/sections/AmenitiesSection";
import HeroSection from "@/sections/HeroSection";
import HighlightsSection from "@/sections/HighlightsSection";
import LocationSection from "@/sections/LocationSection";
import FloorPlansSection from "@/sections/FloorPlanSection";
import ContactSection from "@/sections/ContactSection";
import PopupForm from "@/components/PopupForm";
import RightSidebar from "@/components/RightSidebar";

import "bootstrap/dist/css/bootstrap.min.css";

const page = () => {
  return (
    <>
      <PopupForm />
      <HeroSection />
      <AboutSection />
      <HighlightsSection />
      <AmenitiesSection />
      <LocationSection />
      <FloorPlansSection />
      <ContactSection />
    </>
  );
};

export default page;
