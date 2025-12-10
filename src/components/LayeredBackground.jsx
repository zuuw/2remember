'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function LayeredBackground({ }) {
 
    const images = [
"/bg/2rBG-04.png",
"/bg/2rBG-05.png",
"/bg/2rBG-06.png",
"/bg/2rBG-07.png",
"/bg/2rBG-08.png",
];

  return (
    <div className="relative w-full h-full overflow-hidden">
      {images.map((src, index) => (
        <motion.div
          key={index}
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 1, delay: index * 0.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={src}
            alt={`layer-${index}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      ))}
    </div>
  );
}

/* USAGE EXAMPLE

import LayeredBackground from "./LayeredBackground";

export default function Page() {
  const imgs = [
    "/img1.png",
    "/img2.png",
    "/img3.png",
    "/img4.png",
    "/img5.png",
  ];

  return (
    <div className="w-screen h-screen">
      <LayeredBackground images={imgs} />
    </div>
  );
}
*/
