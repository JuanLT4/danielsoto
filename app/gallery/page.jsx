"use client";

import Gallery from "../../components/Gallery";
import { motion } from 'framer-motion';


const mediaItems = [
  { type: "image", src: "/fut(1).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(2).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(3).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(4).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(5).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(6).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(7).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(8).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(9).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(10).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(11).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(12).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(13).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(14).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(15).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(16).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(17).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(18).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(19).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(20).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(21).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(22).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(23).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(24).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(25).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(26).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(27).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(28).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(29).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(30).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(31).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(32).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(33).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(34).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(35).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(36).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(37).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(38).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(39).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(40).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(41).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(42).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(43).jpeg", alt: "Futbolista en acción" },
  { type: "image", src: "/fut(44).jpeg", alt: "Futbolista en acción" },
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
