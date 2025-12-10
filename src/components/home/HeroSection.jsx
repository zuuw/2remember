'use client';
import Image from "next/image";
import DonateButton from "../DonateButton";
import { useEffect, useRef, useState } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Fade-in when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <section
      ref={ref}
      className={`relative flex flex-col justify-center items-center min-h-screen text-center max-w-3xl px-6 snap-start transition-opacity duration-1000 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Absolutely positioned logo (doesn't push content) */}
      {/* <div className="absolute top-[7%] w-[300px] md:w-[450px] lg:w-[800px] mx-auto">
        <Image
          src="/2remember.png"
          alt="2Remember Logo"
          width={700}
          height={700}
          className="w-full h-auto object-contain opacity-90"
          priority
        />
      </div>

   
      <div className="h-[100px] md:h-[150px]" /> */}

      <h1 className="text-4xl md:text-5xl font-bold text-purple-700 mb-4">
        Remembering Matters
      </h1>

      <p className="text-lg text-gray-700 mb-8">
        2Remember is dedicated to raising awareness about dementia and Alzheimer&apos;s,
        supporting families, and educating communities.
      </p>

      <div className="mt-6">
        <DonateButton />
      </div>
    </section>
  );
}
