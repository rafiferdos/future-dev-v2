import React from "react";
import Educators from "@/components/Educators";
import Testimonials from "@/components/Testimonials/Testimonials";
import ChooseUsSection from "@/components/ChooseUsSection";
import ProgramSection from "@/components/ProgramSection";
import PlatformSection from "@/components/PlatformSection";
import ServicesSection from "@/components/Services/ServicesSection";
import TeamSection from "@/components/TeamSection";
import BlogSection from "@/components/BlogSection";
import JoinOurTeamSection from "@/components/JoinOurTeamSection";
import WorkProcessSection from "@/components/WorkProcessSection/WorkProcessSection";
import OfferSection from "@/components/OfferSection/OfferSection";
import Banner from "@/components/Banner";

export default function Home() {
  return (
    <div className="space-y-24">

      {/* banner section */}
      <Banner />
      {/* Program Section */}
      <ProgramSection />


      {/* Why Choose us */}
      <ChooseUsSection />

      {/* Explore our offering */}
      <OfferSection />

      {/*About Our Educational Platform  */}
      <PlatformSection />

      {/* Our Work Process */}
      <WorkProcessSection />

      {/* Explore Our Services */}
      <ServicesSection />

      {/* Join Our Team */}
      <TeamSection />

      {/* Our  Educators  */}
      <Educators />

      {/* Testimonials */}
      <Testimonials />

      {/*Our Blog Insights */}
      <BlogSection />

      
      {/* Join Our Team Section */}
      <JoinOurTeamSection />
    </div>
  );
}
