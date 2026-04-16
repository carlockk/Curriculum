import { useEffect, useRef } from "react";
import { Box, useTheme } from "@mui/material";

export default function HeroCanvas() {
  const canvasRef = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;

    const context = canvas.getContext("2d");
    if (!context) return undefined;

    let animationFrame;
    let particles = [];
    const mouse = { x: -9999, y: -9999, active: false };

    const colors =
      theme.palette.mode === "light"
        ? ["rgba(23,107,135,0.52)", "rgba(180,83,9,0.38)", "rgba(19,35,47,0.22)"]
        : ["rgba(255,255,255,0.5)", "rgba(125,211,252,0.34)", "rgba(251,191,36,0.22)"];

    const resize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);

      const amount = Math.max(55, Math.floor(width / 24));
      particles = Array.from({ length: amount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.6 + 0.7,
        color: colors[Math.floor(Math.random() * colors.length)],
      }));
    };

    const draw = () => {
      const width = canvas.width / window.devicePixelRatio;
      const height = canvas.height / window.devicePixelRatio;

      context.clearRect(0, 0, width, height);

      particles.forEach((particle, index) => {
        if (mouse.active) {
          const dx = mouse.x - particle.x;
          const dy = mouse.y - particle.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 180 && distance > 0) {
            const force = (180 - distance) / 1800;
            particle.vx += (dx / distance) * force;
            particle.vy += (dy / distance) * force;
          }
        }

        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vx *= 0.992;
        particle.vy *= 0.992;

        if (particle.x < 0 || particle.x > width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > height) particle.vy *= -1;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = particle.color;
        context.fill();

        for (let secondIndex = index + 1; secondIndex < particles.length; secondIndex += 1) {
          const other = particles[secondIndex];
          const distance = Math.hypot(particle.x - other.x, particle.y - other.y);

          if (distance < 120) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(other.x, other.y);
            context.strokeStyle =
              theme.palette.mode === "light"
                ? `rgba(23,107,135,${0.15 - distance / 900})`
                : `rgba(214,228,255,${0.15 - distance / 980})`;
            context.lineWidth = 1;
            context.stroke();
          }
        }
      });

      animationFrame = window.requestAnimationFrame(draw);
    };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };

    resize();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseout", handleMouseLeave);
    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseout", handleMouseLeave);
      window.cancelAnimationFrame(animationFrame);
    };
  }, [theme.palette.mode]);

  return (
    <Box
      aria-hidden="true"
      sx={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        opacity: 0.95,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <canvas ref={canvasRef} />
    </Box>
  );
}
