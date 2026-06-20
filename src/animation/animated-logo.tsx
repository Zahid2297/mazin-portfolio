import { AnimatePresence, Variants, motion } from "framer-motion";

export default function AnimatedLogo() {
  const iconVariant: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.85,
      fill: "rgba(0, 0, 0, 0)",
    },
    visible: {
      opacity: 1,
      scale: 1,
      fill: "#EAB308",
    },
  };

  return (
    <AnimatePresence>
      <motion.svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full stroke-accent"
      >
        <motion.path
          d="M15 110 L15 20 L40 75 L65 20 L65 110"
          fill="none"
          stroke="currentColor"
          strokeWidth="14"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={iconVariant}
          initial="hidden"
          animate="visible"
          transition={{
            default: { duration: 1.2, ease: "easeInOut" },
          }}
        />
      </motion.svg>
    </AnimatePresence>
  );
}
