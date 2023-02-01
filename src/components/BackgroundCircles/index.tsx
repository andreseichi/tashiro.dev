import { motion } from "framer-motion";

export function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.2, 0.3, 0.5, 0.9, 0.2, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.75,
      }}
      className="relative flex items-center justify-center"
    >
      <div className="absolute mt-52 h-[200px] w-[200px] animate-ping rounded-full border border-[#333]" />
      <div className="absolute mt-52 h-[500px] w-[500px] rounded-full border border-[#333]" />
      <div className="absolute mt-52 h-[650px] w-[650px] animate-pulse rounded-full border border-primary opacity-40" />
      <div className="absolute mt-52 h-[800px] w-[800px] animate-pulse rounded-full border border-[#333] opacity-40" />
    </motion.div>
  );
}
