import React from "react";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Footer from "./components/Footer";

import Boxes from "./components/Boxes";
import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full  bg-slate-900 text-white">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Boxes />
     
    </div>
  );
}

export default App;
