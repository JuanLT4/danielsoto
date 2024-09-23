"use client";

import Gallery from "../../components/Gallery";
import { motion } from 'framer-motion';


const mediaItems = [
  { type: "image", src: "/fut(1).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(2).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(3).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(4).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(5).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(6).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(7).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(8).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(9).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(10).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(11).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(12).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(13).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(14).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(15).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(16).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(17).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(18).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(19).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(20).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(21).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(22).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(23).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(24).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(25).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(26).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(27).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(28).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(29).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(30).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(31).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(32).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(33).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(34).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(35).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(36).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(37).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(38).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(39).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(40).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(41).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(42).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(43).webp", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(44).webp", alt: "Futbolista en acción" },
];

const Galleria = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <Gallery media={mediaItems} />
    </motion.section>
  );
};

export default Galleria;
