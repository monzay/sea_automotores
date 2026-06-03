"use client";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { LISTA_ENTREGAS } from "@/lib/entregas";

const testimonials = [
  {
    quote: "Excelente atención desde el primer momento. Me ayudaron a encontrar el auto perfecto para mi familia.",
    author: "María García",
    role: "Compradora",
    company: "Toyota Corolla 2026",
    metric: "Entrega en inmediata"
  },
  {
    quote: "El proceso de financiación fue súper simple. Las cuotas se ajustaron perfectamente a mi presupuesto.",
    author: "Carlos Rodríguez",
    role: "Comprador",
    company: "Volkswagen Amarok 2026",
    metric: "Financiación al instante  "
  },
  {
    quote: "Vendí mi auto usado y compré uno nuevo en el mismo día. Servicio impecable y precio justo.",
    author: "Laura Martínez",
    role: "Compradora",
    company: "Honda HR-V 2026",
    metric: "Tasación al instante"
  },
  {
    quote: "Ya es el tercer auto que compro acá. La confianza y transparencia son lo que más valoro.",
    author: "Roberto Fernández",
    role: "Cliente frecuente",
    company: "Ford Ranger 2026",
    metric: "3 compras realizadas"
  }
];


// mobile: 1 col apilado — sm: bento 2 cols — lg: bento 4 cols
// fila 1: [2] [1] [1]  — fila 2: [1] [2] [1]
const bentoCols = [
  "sm:col-span-2 lg:col-span-2",
  "sm:col-span-1 lg:col-span-1",
  "sm:col-span-1 lg:col-span-1",
  "sm:col-span-1 lg:col-span-1",
  "sm:col-span-2 lg:col-span-2",
  "sm:col-span-1 lg:col-span-1",
];

function SeccionEntregas() {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (selected === null) return;
    const onKey = (e) => { if (e.key === "Escape") setSelected(null); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="entregas" className="relative py-14 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex items-end justify-between mb-8 sm:mb-12 lg:mb-14">
          <div>
            <p className="font-mono text-[9px] tracking-[0.35em] text-foreground/30 uppercase mb-2 sm:mb-3">
              Momento de entrega
            </p>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-foreground leading-[1.1]">
              Cada llave,<br />
              <span className="text-foreground/35">una historia.</span>
            </h2>
          </div>
          <span className="font-mono text-[9px] tracking-[0.3em] text-foreground/20 uppercase self-start mt-1">
            {new Date().getFullYear()}
          </span>
        </div>

        {/* mobile: 1 col apilado · sm: bento 2 cols · lg: bento 4 cols con alturas fijas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3 lg:auto-rows-[240px]">
          {LISTA_ENTREGAS.map((delivery, idx) => (
            <figure
              key={idx}
              className={`m-0 group overflow-hidden cursor-pointer rounded-xl ${bentoCols[idx]}`}
              onClick={() => setSelected(delivery)}
            >
              <div className="relative w-full aspect-video sm:aspect-video lg:aspect-auto lg:h-full overflow-hidden rounded-xl">
                <img
                  src={delivery.src}
                  alt={`Entrega ${delivery.id}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
            </figure>
          ))}
        </div>

        <div className="mt-6 sm:mt-10 flex items-center justify-between">
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

      {/* Modal */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full mx-4 sm:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selected.src}
              alt={`Entrega ${selected.id}`}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/80 transition-colors duration-200 rounded-full"
              aria-label="Cerrar"
            >
              <X className="w-4 h-4 text-white" />
            </button>
            <p className="mt-3 font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase text-right">
              {selected.id}
            </p>
          </div>
        </div>
      )}
    </section>
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

export { SeccionTestimonios, SeccionEntregas };
