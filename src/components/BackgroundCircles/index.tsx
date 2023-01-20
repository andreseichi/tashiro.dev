import { motion } from 'framer-motion';

export function BackgroundCircles() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{
        duration: 2.75,
      }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border rounded-full border-[#333] h-[200px] w-[200px] mt-52 animate-ping" />
      <div className="absolute border rounded-full border-[#333] h-[300px] w-[300px] mt-52" />
      <div className="absolute border rounded-full border-[#333] h-[500px] w-[500px] mt-52" />
      <div className="absolute border rounded-full border-green-500 opacity-20 h-[650px] w-[650px] mt-52 animate-pulse" />
      <div className="absolute border rounded-full border-[#333] opacity-20 h-[800px] w-[800px] mt-52 animate-pulse" />
    </motion.div>
  );
}
