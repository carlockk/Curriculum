import { memo, useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

function TiltCard({
  children,
  maxTilt = 7,
  hoverScale = 1.012,
  transition,
  ...props
}) {
  const ref = useRef(null);
  const frameRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [canTilt, setCanTilt] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setCanTilt(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

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
    if (!canTilt || frameRef.current !== null) return;
    const element = ref.current;
    if (!element) return;

    frameRef.current = window.requestAnimationFrame(() => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      mouseX.set(x);
      mouseY.set(y);
      frameRef.current = null;
    });
  };

  const handleMouseLeave = () => {
    if (frameRef.current !== null) {
      window.cancelAnimationFrame(frameRef.current);
      frameRef.current = null;
    }
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
          rotateX: canTilt ? rotateX : 0,
          rotateY: canTilt ? rotateY : 0,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        {...props}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

export default memo(TiltCard);
