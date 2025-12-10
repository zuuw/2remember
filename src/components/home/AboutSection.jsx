"use client";

import { useInView } from "react-intersection-observer";
import PolaroidFall from "@/components/PolaroidFall";

export default function AboutSection() {
  // Only detect the section in view
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, // only animate once
  });

  return (
    <section
      ref={ref}
      className="relative flex flex-col justify-center items-center min-h-screen w-full max-w-5xl px-6 text-center snap-start"
    >
      {/* Polaroids overlay */}
      {inView && (
        <PolaroidFall
          leftImg="/polaroid/landimage.png"
          rightImg="/polaroid/landimage2.png"
        />
      )}

      {/* Text content */}
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Who We Are</h2>
      <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
        We are a Calgary-based non-profit focused on uplifting loved ones affected by dementia. Through events, donations, and
        community involvement, we aim to bring comfort, awareness, and support to families facing memory-related conditions.
      </p>
    </section>
  );
}
