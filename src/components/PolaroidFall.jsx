"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PolaroidFall({ leftImg, rightImg }) {
  return (
    <>
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ x: "-40%", y: -80, opacity: 0, rotate: -20 }}
        animate={{ x: "-10%", y: 0, opacity: 1, rotate: -5 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-0 w-48 h-64 shadow-xl z-[-1]"
        style={{ top: "200px" }}
      >
        <Image
          src={leftImg}
          alt="polaroid-left"
          fill
          className="object-cover rounded-lg border-4 border-white shadow-2xl"
        />
      </motion.div>

      {/* RIGHT IMAGE */}
      <motion.div
        initial={{ x: "40%", y: -80, opacity: 0, rotate: 20 }}
        animate={{ x: "10%", y: 0, opacity: 1, rotate: 5 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
        className="absolute -top-24 right-0 w-48 h-64 shadow-xl z-[-1]"
        style={{ top: "170px" }}
      >
        <Image
          src={rightImg}
          alt="polaroid-right"
          fill
          className="object-cover rounded-lg border-4 border-white shadow-2xl"
        />
      </motion.div>
    </>
  );
}
