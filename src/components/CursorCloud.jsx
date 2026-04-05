import { useEffect, useRef } from "react";

export default function CursorCloud() {
  const canvasRef = useRef(null);
  const particles = useRef([]);
  const mouse = useRef({ x: -999, y: -999 });
  const animFrameRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      // Spawn 3 cloud puffs per frame on move
      for (let i = 0; i < 3; i++) {
        const angle = Math.random() * Math.PI * 2;
        const spread = Math.random() * 18;
        particles.current.push({
          x: e.clientX + Math.cos(angle) * spread,
          y: e.clientY + Math.sin(angle) * spread,
          vx: (Math.random() - 0.5) * 0.6,
          vy: (Math.random() - 0.8) * 0.8,
          size: Math.random() * 22 + 14,
          opacity: Math.random() * 0.22 + 0.12,
          decay: Math.random() * 0.008 + 0.006,
          growth: Math.random() * 0.4 + 0.1,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.current = particles.current.filter((p) => p.opacity > 0);

      for (const p of particles.current) {
        const gradient = ctx.createRadialGradient(
          p.x, p.y, 0,
          p.x, p.y, p.size
        );
        gradient.addColorStop(0, `rgba(242, 143, 49, ${p.opacity})`);
        gradient.addColorStop(0.5, `rgba(255, 180, 80, ${p.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(242, 143, 49, 0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;
        p.size += p.growth;
        p.opacity -= p.decay;
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[9999] pointer-events-none"
    />
  );
}
