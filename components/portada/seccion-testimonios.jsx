"use client";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "Excelente atención desde el primer momento. Me ayudaron a encontrar el auto perfecto para mi familia.",
    author: "María García",
    role: "Compradora",
    company: "Toyota Corolla 2023",
    metric: "Entrega en 48hs"
  },
  {
    quote: "El proceso de financiación fue súper simple. Las cuotas se ajustaron perfectamente a mi presupuesto.",
    author: "Carlos Rodríguez",
    role: "Comprador",
    company: "Volkswagen Amarok 2024",
    metric: "Financiación en 24hs"
  },
  {
    quote: "Vendí mi auto usado y compré uno nuevo en el mismo día. Servicio impecable y precio justo.",
    author: "Laura Martínez",
    role: "Compradora",
    company: "Honda HR-V 2024",
    metric: "Tasación al instante"
  },
  {
    quote: "Ya es el tercer auto que compro acá. La confianza y transparencia son lo que más valoro.",
    author: "Roberto Fernández",
    role: "Cliente frecuente",
    company: "Ford Ranger 2024",
    metric: "3 compras realizadas"
  }
];

// ── Reemplazá con las rutas reales de tus fotos ──────────────────────────────
const clientDeliveries = [
  {
    src: "/images/cliente1.jpeg",
    name: "Sebastián M.",
    vehicle: "",
    trim: "",
    year: "2026",
    date: "20 Abril 2026",
    location: "Jujuy, ARG",
    id: "ENT-001"
  },
  {
    src: "/images/cliente2.jpeg",
    name: "Yonatan Rivera",
    vehicle: "",
    trim: "",
    year: "2026",
    date: "28 ABR 2026",
    location: "Jujuy, ARG",
    id: "ENT-002"
  }
];

// ─────────────────────────────────────────────────────────────────────────────

function DeliverySection() {
  const [hovered, setHovered] = useState(null);
  const left  = clientDeliveries[0];
  const right = clientDeliveries[1];

  return (
    <div className="mt-32 pt-16 border-t border-foreground/10">

      {/* ── Encabezado ─────────────────────────────────────────────────── */}
      <div className="flex items-end justify-between mb-20">
        <div>
          <p className="font-mono text-[9px] tracking-[0.35em] text-foreground/30 uppercase mb-3">
            Momento de entrega
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground leading-[1.1]">
            Cada llave,<br />
            <span className="text-foreground/35">una historia.</span>
          </h2>
        </div>
        <span className="font-mono text-[9px] tracking-[0.3em] text-foreground/20 uppercase self-start mt-1">
          {new Date().getFullYear()}
        </span>
      </div>

      {/* ── Layout 2 columnas con espina central ───────────────────────── */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-y-12 sm:gap-y-0 gap-x-4 sm:gap-x-8 md:gap-x-14">

        {/* Espina central: línea + badge */}
        <div className="hidden sm:flex absolute inset-y-0 left-1/2 -translate-x-1/2 flex-col items-center pointer-events-none z-10">
          <div className="flex-1 w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent" />
          <div className="shrink-0 my-4 border border-foreground/15 px-3 py-2 bg-background">
            <p className="font-mono text-[8px] tracking-[0.25em] text-foreground/30 uppercase leading-none">
              ENT
            </p>
          </div>
          <div className="flex-1 w-px bg-gradient-to-b from-transparent via-foreground/15 to-transparent" />
        </div>

        {/* ─── COLUMNA IZQUIERDA (arriba) ──────────────────────────────── */}
        <figure
          className="m-0 flex flex-col w-full max-w-[320px] mx-auto sm:mx-0 sm:max-w-[280px] md:max-w-[320px]"
          onMouseEnter={() => setHovered(0)}
          onMouseLeave={() => setHovered(null)}
        >
          <p className="font-mono text-[8px] tracking-[0.3em] text-foreground/20 uppercase mb-4">
            {left.id}
          </p>

          <div className="relative overflow-hidden aspect-[3/4] group cursor-pointer">
            <img
              src={left.src}
              alt={`Entrega ${left.vehicle} a ${left.name}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

            {/* Sello giratorio — esquina superior derecha */}
            <div className="absolute top-3 right-3 w-14 h-14">
              <svg viewBox="0 0 56 56" className="absolute inset-0 w-full h-full animate-spin-slow">
                <path id="c0" d="M28,28 m-19,0 a19,19 0 1,1 38,0 a19,19 0 1,1 -38,0" fill="none"/>
                <text fontSize="5.2" fill="rgba(255,255,255,0.6)" letterSpacing="2.6">
                  <textPath href="#c0">ENTREGADO · {left.date} · </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
              </div>
            </div>

            {/* Info base */}
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="font-mono text-[9px] tracking-[0.2em] text-white/45 uppercase mb-0.5">{left.trim}</p>
              <p className="font-display text-lg text-white leading-tight">
                {left.vehicle} <span className="text-white/50">{left.year}</span>
              </p>
            </div>

            {/* Hover overlay */}
            <div className={`absolute inset-0 bg-black/80 backdrop-blur-[2px] flex flex-col justify-end p-5 transition-opacity duration-300 ${hovered === 0 ? "opacity-100" : "opacity-0"}`}>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-[8px] tracking-[0.3em] text-white/35 uppercase">Cliente</p>
                  <p className="text-base font-medium text-white mt-0.5">{left.name}</p>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between">
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.3em] text-white/35 uppercase">Fecha</p>
                    <p className="font-mono text-[10px] text-white/60 mt-0.5">{left.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[8px] tracking-[0.3em] text-white/35 uppercase">Lugar</p>
                    <p className="font-mono text-[10px] text-white/60 mt-0.5">{left.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <figcaption className="mt-4">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-foreground/25 shrink-0" />
              <p className="text-sm font-medium text-foreground">{left.name}</p>
            </div>
            <p className="font-mono text-[9px] tracking-[0.15em] text-foreground/30 mt-1 ml-3 uppercase">
              {left.vehicle} · {left.year}
            </p>
          </figcaption>
        </figure>

        {/* ─── COLUMNA DERECHA (desplazada abajo) ─────────────────────── */}
        <figure
          className="m-0 flex flex-col w-full max-w-[320px] mx-auto sm:mx-0 sm:pt-20 md:pt-32 sm:max-w-[280px] md:max-w-[320px] sm:ml-auto"
          onMouseEnter={() => setHovered(1)}
          onMouseLeave={() => setHovered(null)}
        >
          <p className="font-mono text-[8px] tracking-[0.3em] text-foreground/20 uppercase mb-4 text-right">
            {right.id}
          </p>

          <div className="relative overflow-hidden aspect-[3/4] group cursor-pointer">
            <img
              src={right.src}
              alt={`Entrega ${right.vehicle} a ${right.name}`}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent pointer-events-none" />

            {/* Sello giratorio — esquina superior izquierda, gira al revés */}
            <div className="absolute top-3 left-3 w-14 h-14">
              <svg viewBox="0 0 56 56" className="absolute inset-0 w-full h-full animate-spin-slow-reverse">
                <path id="c1" d="M28,28 m-19,0 a19,19 0 1,1 38,0 a19,19 0 1,1 -38,0" fill="none"/>
                <text fontSize="5.2" fill="rgba(255,255,255,0.6)" letterSpacing="2.6">
                  <textPath href="#c1">ENTREGADO · {right.date} · </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-4 h-4 text-white/80" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"/>
                </svg>
              </div>
            </div>

            {/* Info base (alineada a la derecha) */}
            <div className="absolute inset-x-0 bottom-0 p-4 text-right">
              <p className="font-mono text-[9px] tracking-[0.2em] text-white/45 uppercase mb-0.5">{right.trim}</p>
              <p className="font-display text-lg text-white leading-tight">
                {right.vehicle} <span className="text-white/50">{right.year}</span>
              </p>
            </div>

            {/* Hover overlay */}
            <div className={`absolute inset-0 bg-black/80 backdrop-blur-[2px] flex flex-col justify-end p-5 transition-opacity duration-300 ${hovered === 1 ? "opacity-100" : "opacity-0"}`}>
              <div className="space-y-3">
                <div>
                  <p className="font-mono text-[8px] tracking-[0.3em] text-white/35 uppercase">Cliente</p>
                  <p className="text-base font-medium text-white mt-0.5">{right.name}</p>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex justify-between">
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.3em] text-white/35 uppercase">Fecha</p>
                    <p className="font-mono text-[10px] text-white/60 mt-0.5">{right.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[8px] tracking-[0.3em] text-white/35 uppercase">Lugar</p>
                    <p className="font-mono text-[10px] text-white/60 mt-0.5">{right.location}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <figcaption className="mt-4 text-right">
            <div className="flex items-center gap-2 justify-end">
              <p className="text-sm font-medium text-foreground">{right.name}</p>
              <span className="w-1 h-1 rounded-full bg-foreground/25 shrink-0" />
            </div>
            <p className="font-mono text-[9px] tracking-[0.15em] text-foreground/30 mt-1 mr-3 uppercase">
              {right.vehicle} · {right.year}
            </p>
          </figcaption>
        </figure>
      </div>

      {/* ── Pie de sección ──────────────────────────────────────────────── */}
      <div className="mt-16 flex items-center justify-between">
        <p className="font-mono text-[8px] tracking-[0.3em] text-foreground/20 uppercase">
          Fotos reales de clientes
        </p>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 animate-pulse" />
          <span className="font-mono text-[8px] tracking-[0.2em] text-foreground/20 uppercase">
            Entregas activas
          </span>
        </div>
      </div>
    </div>
  );
}

function SeccionTestimonios() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
        setIsAnimating(false);
      }, 300);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const activeTestimonial = testimonials[activeIndex];

  return (
    <section id="testimonios" className="relative lg:pb-14">

      <style>{`
        @keyframes spin-slow         { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
        @keyframes spin-slow-reverse { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
        @keyframes marquee           { from { transform: translateX(0);  } to { transform: translateX(-50%); } }

        .animate-spin-slow         { animation: spin-slow          20s linear infinite; }
        .animate-spin-slow-reverse { animation: spin-slow-reverse  20s linear infinite; }
        .marquee                   { animation: marquee             30s linear infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Section Label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">Testimonios</span>
          <div className="flex-1 h-px bg-foreground/10" />
          <span className="font-mono text-xs text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
          </span>
        </div>

        {/* Main Quote */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-8">
            <blockquote className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"}`}>
              <p className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-foreground">
                &ldquo;{activeTestimonial.quote}&rdquo;
              </p>
            </blockquote>
            <div className={`mt-12 flex items-center gap-6 transition-all duration-300 delay-100 ${isAnimating ? "opacity-0" : "opacity-100"}`}>
              <div className="w-16 h-16 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center">
                <span className="font-display text-2xl text-foreground">{activeTestimonial.author.charAt(0)}</span>
              </div>
              <div>
                <p className="text-lg font-medium text-foreground">{activeTestimonial.author}</p>
                <p className="text-muted-foreground">{activeTestimonial.role} — {activeTestimonial.company}</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <div className={`p-8 border border-foreground/10 transition-all duration-300 ${isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"}`}>
              <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase block mb-4">Resultado</span>
              <p className="font-display text-3xl md:text-4xl text-foreground">{activeTestimonial.metric}</p>
            </div>
            <div className="flex gap-2 mt-8">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setIsAnimating(true); setTimeout(() => { setActiveIndex(idx); setIsAnimating(false); }, 300); }}
                  className={`h-2 transition-all duration-300 ${idx === activeIndex ? "w-8 bg-foreground" : "w-2 bg-foreground/20 hover:bg-foreground/40"}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Sección Entregas */}
        <DeliverySection />

        {/* Brands Marquee Label */}
        <div className="mt-24 pt-12 border-t border-foreground/10">
          <p className="font-mono text-xs tracking-widest text-muted-foreground uppercase mb-8 text-center">
            Marcas que trabajamos
          </p>
        </div>
      </div>

      {/* Full-width marquee */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-16 items-center marquee">
          {[...Array(2)].map((_, setIdx) => (
            <div key={setIdx} className="flex gap-16 items-center shrink-0">
              {["Toyota","Volkswagen","Ford","Chevrolet","Honda","Fiat","Renault","Peugeot","Jeep","Nissan"].map((brand) => (
                <span key={`${setIdx}-${brand}`} className="font-display text-xl md:text-2xl text-foreground/30 whitespace-nowrap hover:text-foreground transition-colors duration-300">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { SeccionTestimonios };