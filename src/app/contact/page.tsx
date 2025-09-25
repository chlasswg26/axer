"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactComponent from "@/components/Contact";

export default function Contact() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <Header />
      <main className="contact-section">
        <ContactComponent />
      </main>
      <Footer />
    </div>
  );
}
