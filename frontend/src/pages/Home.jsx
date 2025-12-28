import React from 'react';
 import ImageSlider from "../components/ImageSLider";

export default function Home() {
  return (
    <main>
     
      {/* YOUR SLIDER */}
      <ImageSlider />

      {/* Some content after */}
      <section className="h-screen bg-neutral-900 text-white flex items-center justify-center">
        FOOTER CONTENT
      </section>
    </main>
  );
}
