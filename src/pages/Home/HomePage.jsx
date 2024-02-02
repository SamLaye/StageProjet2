import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import FilAriane from "components/FilAriane";
import ProductsSection from "components/sections/ProductsSection";
import CardSection from "components/sections/CardSection";
import UserStatsSection from "components/sections/UserStatsSection";
import GraphesSection from "components/sections/GraphesSection";
import CalendarMapSection from "components/sections/CalendarMapSection";
import MembersSection from "components/sections/MembersSection";
import TeamSection from "components/sections/TeamSection";
import Footer from "components/Footer";

function HomePage() {
  return (
    <div>
      <FilAriane />
      <CardSection />
      <UserStatsSection />
      <ProductsSection />
      <GraphesSection />
      <CalendarMapSection />
      <MembersSection />
      <TeamSection />
      <Footer />
    </div>
  );
}

export default HomePage;
