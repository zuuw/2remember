"use client";
import { useRouter } from "next/navigation";

export default function DonateButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/donate"); 
  };

  return (
    <button
      onClick={handleClick}
      className="bg-red-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-all shadow-lg"
    >
      Donate Now
    </button>
  );
}
