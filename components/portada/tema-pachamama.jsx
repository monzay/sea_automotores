"use client";
import { useEffect, useState } from "react";
import { esTemporadaPachamama } from "@/lib/pachamama";

// La temporada se resuelve en el cliente: si se resolviera en el server, en un
// sitio estático quedaría congelada la fecha del build.
function useTemporada() {
  const [activo, setActivo] = useState(false);
  useEffect(() => {
    setActivo(esTemporadaPachamama());
  }, []);
  return activo;
}

const TONOS_HOJA = [
  "var(--pacha-coca)",
  "var(--pacha-coca-clara)",
  "var(--pacha-coca-seca)",
];

// Las dos curvas a los lados del nervio central son lo que hace reconocible a
// la hoja de coca; sin ellas es una hoja genérica cualquiera.
function HojaCoca({ tam, color }) {
  return (
    <svg
      width={tam}
      height={Math.round(tam * 2.08)}
      viewBox="0 0 24 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 1C19 12 21 26 12 49C3 26 5 12 12 1Z" fill={color} />
      <path d="M12 4V45" stroke="rgba(0,0,0,0.24)" strokeWidth="1" />
      <path
        d="M12 5C6.5 15 6.5 32 12 44"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="0.9"
      />
      <path
        d="M12 5C17.5 15 17.5 32 12 44"
        stroke="rgba(0,0,0,0.15)"
        strokeWidth="0.9"
      />
    </svg>
  );
}

// Valores derivados de una senoidal en vez de Math.random: así la lluvia es
// igual en cada carga y no hay sorpresas entre server y cliente.
const HOJAS = Array.from({ length: 22 }, (_, i) => {
  const s = (n) => (Math.sin(i * n) + 1) / 2;
  return {
    izq: (i * 4.55 + s(12.9) * 5) % 100,
    tam: 13 + Math.round(s(7.7) * 12),
    dur: 6 + s(3.3) * 5,
    retardo: s(5.1) * 3.5,
    derivaX: Math.round((s(9.4) - 0.5) * 220),
    giroIni: Math.round(s(2.2) * 90 - 45),
    giroFin: Math.round(s(4.8) * 540 - 180),
    revoloteo: 2.4 + s(6.6) * 2,
    tono: i % 3,
  };
});

// La hoja más rezagada larga a los 3.5s y tarda 11s, así que a los 15 ya cayeron todas.
const DURACION_LLUVIA = 15000;

/**
 * Lluvia de hojas de coca de bienvenida. Cae una sola vez al entrar y se
 * desmonta: dejar 22 nodos animándose mientras el cliente mira los autos no
 * suma nada y le cuesta batería al celular.
 */
function HojasPachamama() {
  const activo = useTemporada();
  const [cayendo, setCayendo] = useState(true);

  useEffect(() => {
    if (!activo) return;
    const t = setTimeout(() => setCayendo(false), DURACION_LLUVIA);
    return () => clearTimeout(t);
  }, [activo]);

  if (!activo || !cayendo) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-60 overflow-hidden"
      aria-hidden="true"
    >
      {HOJAS.map((h, i) => (
        <span
          key={i}
          className="pacha-hoja"
          style={{
            left: `${h.izq}%`,
            "--deriva-x": `${h.derivaX}px`,
            "--giro-ini": `${h.giroIni}deg`,
            "--giro-fin": `${h.giroFin}deg`,
            animation: `pacha-caida ${h.dur}s linear ${h.retardo}s 1 both`,
          }}
        >
          <span
            className="block"
            style={{
              animation: `pacha-revoloteo ${h.revoloteo}s ease-in-out infinite`,
            }}
          >
            <HojaCoca tam={h.tam} color={TONOS_HOJA[h.tono]} />
          </span>
        </span>
      ))}
    </div>
  );
}

export { HojasPachamama };
