"use client";

import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/Footer/Footer"));
import Header from "@/components/Header/Header";

const TestimonialsPage = () => {
  return (
    <>
      <Header />
      <h1>Testimonials</h1>
      <Footer />
    </>
  );
};

export default TestimonialsPage;
