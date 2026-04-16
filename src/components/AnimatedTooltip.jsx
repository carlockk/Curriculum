"use client";

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

/**
 * Tooltip animado para imagen de perfil con hover tracking
 * 
 * Props:
 * - image: URL de la imagen
 * - name: Texto principal del tooltip
 * - subtitle: Texto secundario (ej: "Desarrollador Full Stack")
 * - subtitle2: Tercer línea (ej: edad)
 * - onHoverChange: función callback que se ejecuta con true/false al hacer hover
 */
export const AnimatedTooltip = ({
  image,
  name,
  subtitle,
  subtitle2,
  onHoverChange,
}) => {
  const [hovered, setHovered] = useState(false);

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  const handleMouseEnter = () => {
    setHovered(true);
    if (onHoverChange) onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    if (onHoverChange) onHoverChange(false);
  };

  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <AnimatePresence mode="popLayout">
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: { type: "spring", stiffness: 260, damping: 10 },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              style={{
                translateX,
                rotate,
                whiteSpace: "nowrap",
              }}
              className="absolute -top-20 z-50 flex flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
            >
              <div className="text-base font-bold text-white">{name}</div>
              <div className="text-xs text-white">{subtitle}</div>
              <div className="text-xs text-white">{subtitle2}</div>
            </motion.div>
          )}
        </AnimatePresence>

        <img
          onMouseMove={handleMouseMove}
          src={image}
          alt={name}
          height={120}
          width={120}
          style={{
            height: 120,
            width: 120,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid #90caf9',
            boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
            display: 'block',
            margin: 'auto',
          }}
        />
      </div>
    </div>
  );
};
