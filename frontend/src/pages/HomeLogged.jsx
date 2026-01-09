import React from 'react';
import ImageSlider from "../components/ImageSlider";

export default function Home() {
  return (
    <main>
      <section className="h-screen bg-neutral-900">
        <ImageSlider />
      </section>
      {/* YOUR SLIDER */}
      

      {/* Some content after */}
      <section className="h-screen bg-neutral-900 text-white flex items-center justify-center">
        FOOTER CONTENT
      </section>
    </main>
  );
}
