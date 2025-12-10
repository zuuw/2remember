// 'use client';

// import { motion } from "framer-motion";


// export default function BreathingBackground() {
// const images = [
// "/bg/slice1.png",
// "/bg/slice2.png",
// "/bg/slice3.png",
// "/bg/slice4.png",
// ];


// return (
// <div className="fixed bottom-0 left-0 w-full flex flex-col items-center pointer-events-none z-0">
// {images.map((src, i) => (
// <motion.img
// key={i}
// src={src}
// className="w-auto max-w-[90vw] mb-[-20px]"
// initial={{ y: 200, opacity: 0 }}
// animate={{
// y: 0,
// opacity: 1,
// scale: [1, 1.05, 1],
// }}
// transition={{
// y: { duration: 0.8, delay: i * 0.15, ease: "easeOut" },
// opacity: { duration: 0.8, delay: i * 0.15 },
// scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
// }}
// />
// ))}
// </div>
// );
// }