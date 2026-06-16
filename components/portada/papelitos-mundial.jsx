"use client";

import { useEffect, useRef, useState } from "react";

const COLORES = [
  "#74ACDF", // celeste argentino
  "#FFFFFF", // blanco
  "#74ACDF",
  "#FFFFFF",
  "#FFD700", // dorado copa del mundo
  "#74ACDF",
  "#C8E6F5", // celeste claro
];

function crearParticula(anchoCanvas) {
  const formas = ["rect", "rect", "rect", "circulo", "estrella"];
  return {
    x: Math.random() * anchoCanvas,
    y: -30 - Math.random() * 300,
    ancho: 7 + Math.random() * 11,
    alto: 3 + Math.random() * 5,
    color: COLORES[Math.floor(Math.random() * COLORES.length)],
    vy: 1.8 + Math.random() * 3.5,
    vx: -0.8 + Math.random() * 1.6,
    rotacion: Math.random() * 360,
    vRotacion: -4 + Math.random() * 8,
    opacidad: 0.85 + Math.random() * 0.15,
    forma: formas[Math.floor(Math.random() * formas.length)],
    oscilacion: Math.random() * Math.PI * 2,
  };
}

function dibujarEstrella(ctx, radio) {
  const puntas = 5;
  const radioInterior = radio * 0.4;
  ctx.beginPath();
  for (let i = 0; i < puntas * 2; i++) {
    const angulo = (i * Math.PI) / puntas - Math.PI / 2;
    const r = i % 2 === 0 ? radio : radioInterior;
    i === 0
      ? ctx.moveTo(Math.cos(angulo) * r, Math.sin(angulo) * r)
      : ctx.lineTo(Math.cos(angulo) * r, Math.sin(angulo) * r);
  }
  ctx.closePath();
  ctx.fill();
}

function ComponentePapelitos() {
  const canvasRef = useRef(null);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    setMostrar(true);
  }, []);

  useEffect(() => {
    if (!mostrar || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const actualizar = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    actualizar();

    const particulas = Array.from({ length: 180 }, () => crearParticula(canvas.width));

    let frameId;
    let tick = 0;
    const DURACION = 320;

    function animar() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      tick++;

      for (const p of particulas) {
        p.y += p.vy;
        p.x += p.vx + Math.sin(tick * 0.025 + p.oscilacion) * 0.6;
        p.rotacion += p.vRotacion;

        if (tick > DURACION * 0.65) {
          p.opacidad -= 0.006;
        }

        if (p.y > canvas.height + 20 && tick < DURACION) {
          const reset = crearParticula(canvas.width);
          Object.assign(p, reset);
        }

        ctx.save();
        ctx.globalAlpha = Math.max(0, p.opacidad);
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotacion * Math.PI) / 180);
        ctx.fillStyle = p.color;

        if (p.forma === "circulo") {
          ctx.beginPath();
          ctx.arc(0, 0, p.ancho / 2, 0, Math.PI * 2);
          ctx.fill();
        } else if (p.forma === "estrella") {
          dibujarEstrella(ctx, p.ancho / 2 + 2);
        } else {
          ctx.fillRect(-p.ancho / 2, -p.alto / 2, p.ancho, p.alto);
        }

        ctx.restore();
      }

      if (tick < DURACION + 80) {
        frameId = requestAnimationFrame(animar);
      } else {
        setMostrar(false);
      }
    }

    frameId = requestAnimationFrame(animar);
    window.addEventListener("resize", actualizar);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", actualizar);
    };
  }, [mostrar]);

  if (!mostrar) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-9999"
    />
  );
}

export { ComponentePapelitos };
