import React from "react";
import Navbar from "../../components/Navbar";
import Moto_Link from "../../components/Moto_Link";
import Photos from "../../components/Photos";
import Footer from "../../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Moto_Link />
      <Photos />
      <Footer />
    </div>
  );
}
