import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function TiltCard({
  children,
  maxTilt = 7,
  hoverScale = 1.012,
  transition,
  ...props
}) {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [maxTilt, -maxTilt]), {
    stiffness: 220,
    damping: 20,
    mass: 0.7,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-maxTilt, maxTilt]), {
    stiffness: 220,
    damping: 20,
    mass: 0.7,
  });

  const handleMouseMove = (event) => {
    const element = ref.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div style={{ perspective: 1000, width: "100%" }}>
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileHover={{ y: -6, scale: hoverScale }}
        transition={transition || { type: "spring", stiffness: 260, damping: 18 }}
        style={{
          width: "100%",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        {...props}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
