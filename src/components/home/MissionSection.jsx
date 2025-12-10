'use client';
import PolaroidFall from "../PolaroidFall";
import { useInView } from 'react-intersection-observer'

export default function MissionSection() {

    const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true, // optional: only animate once
  });

  return (
    <section ref={ref} 
    className="relative flex flex-col justify-center items-center min-h-screen w-full max-w-5xl px-6 text-center snap-start">
{inView && (
        <PolaroidFall
          leftImg="/polaroid/landimage3.png"
          rightImg="/polaroid/landimage4.png"
        />
      )}

      <h2 className="text-3xl font-bold text-purple-700 mb-4">Our Mission</h2>
      <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
        Our mission is to create a more informed and compassionate society. We host awareness events, fundraise for
        research, and provide helpful resources for families and caregivers.
      </p>
    </section>
  );
}
