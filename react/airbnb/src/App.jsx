/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";
import photo1 from "./assets/katie-zaferes.png";
import photo2 from "./assets/mountain-bike.png";
import photo3 from "./assets/wedding-photography.png";

export default function App() {
  return (
    <div>
      <Navbar />
      {/* <Hero /> */}
      <Cards
        image={photo1}
        rating="5.0"
        reviewCount={6}
        country="USA"
        title="Life Lessons with Katie Zafares"
        price={136}
      />
    </div>
  );
}
