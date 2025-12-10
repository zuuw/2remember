'use client';

import { useRouter } from "next/navigation";

export default function CTASection() {
  const router = useRouter();
  
  const handleClick = () => {
    router.push("/about");
  };

  return (
    <section className="flex flex-col justify-center items-center min-h-screen w-full max-w-4xl text-center px-6 snap-start">
      <h2 className="text-3xl font-bold text-purple-700 mb-4">Join Our Mission</h2>
      <p className="text-gray-700 text-lg mb-6">
        Whether through volunteering, donations, or simply spreading awareness, you can help make a difference.
      </p>
      <button
        onClick={handleClick}
        className="bg-purple-600 text-white py-3 px-6 rounded-xl shadow-lg hover:bg-purple-700 transition"
      >
        Get Involved
      </button>
    </section>
  );
}
