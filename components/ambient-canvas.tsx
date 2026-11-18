"use client";
import { useEffect, useRef } from "react";

export default function AmbientCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0, height = 0, frame = 0;
    const pointer = { x: -1000, y: -1000 };
    const points: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    const count = Math.min(64, Math.max(28, Math.floor(window.innerWidth / 22)));
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = width * dpr; canvas.height = height * dpr;
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    for (let i = 0; i < count; i++) points.push({ x: Math.random() * width, y: Math.random() * height, vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22, r: Math.random() * 1.4 + .5 });
    const move = (e: MouseEvent) => { pointer.x = e.clientX; pointer.y = e.clientY; };
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        if (!reduced) { p.x += p.vx; p.y += p.vy; }
        if (p.x < -10 || p.x > width + 10) p.vx *= -1;
        if (p.y < -10 || p.y > height + 10) p.vy *= -1;
        const dx = pointer.x - p.x, dy = pointer.y - p.y, dist = Math.hypot(dx, dy);
        if (!reduced && dist > 0 && dist < 130) { p.x -= dx / dist * .12; p.y -= dy / dist * .12; }
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = "rgba(133,166,255,.48)"; ctx.fill();
        for (let j = i + 1; j < points.length; j++) {
          const q = points[j], d = Math.hypot(p.x - q.x, p.y - q.y);
          if (d < 125) { ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.strokeStyle = `rgba(103,137,235,${(1 - d / 125) * .12})`; ctx.lineWidth = .7; ctx.stroke(); }
        }
      }
      if (!reduced) frame = requestAnimationFrame(draw);
    };
    window.addEventListener("resize", resize); window.addEventListener("mousemove", move, { passive: true });
    draw();
    return () => { cancelAnimationFrame(frame); window.removeEventListener("resize", resize); window.removeEventListener("mousemove", move); };
  }, []);
  return <canvas ref={canvasRef} className="ambient-canvas" aria-hidden="true" />;
}
