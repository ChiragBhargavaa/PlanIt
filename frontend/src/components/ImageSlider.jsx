import { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";
import InertiaPlugin from "gsap/InertiaPlugin";
import heritage_bg from "../assets/heritage_bg.jpg";

gsap.registerPlugin(Draggable, InertiaPlugin);

export default function DraggableGallery() {
  const viewportRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;

    const PANEL_WIDTH = 850;
    const GAP = 20;
    const PANEL_COUNT = 7;
    const SET_WIDTH = PANEL_COUNT * (PANEL_WIDTH + GAP);

    // start in middle so we can go both directions
    gsap.set(track, {
      x: -SET_WIDTH,
    });

    Draggable.create(track, {
      type: "x",
      inertia: true,
      onDrag: update,
      onThrowUpdate: update,
    });

    function update() {
      let x = gsap.getProperty(track, "x");

      // wrap seamlessly
      if (x <= -SET_WIDTH * 2) {
        x += SET_WIDTH;
        gsap.set(track, { x });
      }

      if (x >= 0) {
        x -= SET_WIDTH;
        gsap.set(track, { x });
      }

      const centerX = viewport.offsetWidth / 2;
      const panels = track.children;

      for (let panel of panels) {
        const rect = panel.getBoundingClientRect();
        const panelCenter = rect.left + rect.width / 2;
        const dist = Math.abs(centerX - panelCenter);
        const t = Math.min(dist / 500, 1);

        gsap.to(panel, {
          scale: 1 - t * 0.12,
          opacity: 1 - t * 0.5,
          duration: 0.2,
        });
      }
    }

    update();
  }, []);

  return (
    <div
      ref={viewportRef}
      className="h-screen overflow-hidden flex items-center bg-black"
    >
      <div
        ref={trackRef}
        className="flex"
        style={{ gap: "40px" }}
      >
        {/* FIRST SET */}
        <div className="w-[850px] h-[520px] bg-gray-300 rounded-xl" >
            <img src={heritage_bg} alt="heritage" />
        </div>

        <div className="w-[800px] h-[520px] bg-gray-300 rounded-xl" />
        <div className="w-[850px] h-[620px] bg-gray-300 rounded-xl" />
        <div className="w-[850px] h-[620px] bg-gray-300 rounded-xl" />
        <div className="w-[850px] h-[620px] bg-gray-300 rounded-xl" />
        <div className="w-[850px] h-[620px] bg-gray-300 rounded-xl" />
        <div className="w-[800px] h-[620px] bg-gray-300 rounded-xl" />

      </div>
    </div>
  );
}
