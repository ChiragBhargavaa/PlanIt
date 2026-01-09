import { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import heritage_bg from "/src/assets/images/heritage_bg.jpg";
import spiritual from "/src/assets/images/spiritual_bg.jpg";
import urban from "/src/assets/images/urban_bg.jpg";
import coastal from "/src/assets/images/coastal.jpg";
import hills from "/src/assets/images/hills.jpg";
import relaxed from "/src/assets/images/relaxed_bg.jpg";
import mountains from "/src/assets/images/mountains_bg.jpg";


if (typeof window !== "undefined") {
  gsap.registerPlugin(Draggable, InertiaPlugin);
}

// Panel data with images and text
const PANELS = [
  {
    id: 1,
    title: "HERITAGE",
    subtitle: "Timeless legacy",
    bg: heritage_bg
  },
  {
    id: 2,
    title: "SPIRITUAL",
    subtitle: "Inner peace",
    bg: spiritual
  },
  {
    id: 3,
    title: "URBAN",
    subtitle: "Life between lines",
    bg: urban
  },
  {
    id: 4,
    title: "COASTAL",
    subtitle: "Salt serenity",
    bg: coastal
  },
  {
    id: 5,
    title: "HILLS",
    subtitle: "Above the noise",
    bg: hills,
  },
  {
    id: 6,
    title: "RELAXED",
    subtitle: "Slow living",
    bg: relaxed,
  },
  {
    id: 7,
    title: "MOUNTAINS",
    subtitle: "Raw Majesty",
    bg: mountains,
  },
];

function Panel({ bg, title, subtitle }) {
  return (
    <div className="relative w-[850px] h-[520px] rounded-xl overflow-hidden flex-shrink-0">
      {/* Background Image */}
      <img
        src={bg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover"
      />
        <div className="absolute inset-0 bg-black/40" />

      {/* Text Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center pointer-events-none">
        <p className="text-sm uppercase tracking-widest text-white/70 mb-2">
          {subtitle}
        </p>
        <h1 className="text-[96px] font-bold text-white leading-none">
          {title}
        </h1>
      </div>
    </div>
  );
}

export default function ImageSlider() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate panels for infinite scrolling
    const sets = track.children;
    if (sets.length === 0) return;
    
    const singleSetWidth = sets[0].offsetWidth;

    gsap.set(track, { x: -singleSetWidth });

    const draggable = Draggable.create(track, {
      type: "x",
      inertia: true,
      onDrag: update,
      onThrowUpdate: update,
    });

    function update() {
      let x = gsap.getProperty(track, "x");

      if (x <= -singleSetWidth * 2) {
        gsap.set(track, { x: x + singleSetWidth });
      }

      if (x >= 0) {
        gsap.set(track, { x: x - singleSetWidth });
      }
    }

    return () => {
      if (draggable[0]) {
        draggable[0].kill();
      }
    };
  }, []);

 return (
  <div className="relative w-full h-[600px]  bg-white overflow-hidden">
    {/* VIEWPORT */}
    <div
      ref={viewportRef}
      className="w-full h-full relative flex items-center overflow-hidden"
    >
      {/* TRACK */}
      <div ref={trackRef} className="flex gap-[40px]">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="flex gap-[40px]">
            {PANELS.map(panel => (
              <Panel key={`${i}-${panel.id}`} {...panel} />
            ))}
          </div>
        ))}
      </div>
    </div>
  </div>
);
}