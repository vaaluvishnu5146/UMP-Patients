import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

export default function AppLayout({ children }) {
  return (
    <div className="content-area">
      <Navbar />
      <section className="router-area">{children}</section>
      <Footer />
    </div>
  );
}
