"use client";
import { useEffect, useState } from "react";
import { Boton } from "@/components/interfaz/boton";
import { ArrowRight, Car } from "lucide-react";
const words = ["soñaste", "buscabas", "merecés", "esperabas"];

function SeccionHeroe() {
  const [estaVisible, setIsVisible] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  useEffect(() => {
    setIsVisible(true);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div 
  className="absolute inset-0 bg-cover bg-no-repeat"
  style={{
    backgroundImage: 'url(/images/hero.png)',
    backgroundSize: 'cover',
    backgroundPosition: '75% 30%',
  }}
/>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-28 lg:py-0 lg:min-h-screen flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">

          <div className="flex flex-col justify-center lg:pr-12">
            <div className={`mb-6 lg:mb-8 transition-all duration-700 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="inline-flex items-center gap-3 text-sm lg:text-base font-mono ">
                <span className="w-6 h-px bg-brand" />
                <span className="w-2 h-2 rounded-full bg-brand  " />
                Encuentra tu vehículo perfecto
              </span>
            </div>

            <div className="mb-8 lg:mb-10">
              <h1 className={`text-[clamp(3rem,8vw,7rem)] font-display font-black leading-[0.85] tracking-tighter transition-all duration-1000 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                <span className="block text-foreground">El auto que</span>
                <span className="relative block text-brand overflow-hidden h-[1.1em]">
                  <span
                    key={wordIndex}
                    className="absolute inset-0 flex items-center animate-word-in"
                  >
                    {words[wordIndex].split("").map((char, i) => (
                      <span
                        key={`${wordIndex}-${i}`}
                        className="inline-block animate-char-in"
                        style={{ animationDelay: `${i * 40}ms` }}
                      >
                        {char === " " ? "\u00A0" : char}
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
            </div>

            <p className={`text-base lg:text-lg text-muted-foreground leading-relaxed mb-8 lg:mb-10 max-w-lg transition-all duration-700 delay-200 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Autos y motos nuevos y usados. Financiamiento flexible, aceptamos tu vehículo como parte de pago.
            </p>

            <div className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-300 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <Boton
                size="lg"
                className="bg-brand text-white hover:bg-white hover:text-brand hover:border hover:border-brand px-8 h-14 text-base rounded-full group transition-all duration-300"
                asChild
              >
                <a href="#catalogo">
                  Ver catálogo
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Boton>
              <Boton
                size="lg"
                variant="outline"
                className="h-14 px-8 text-base rounded-full border-foreground/20 hover:bg-foreground/5"
                asChild
              >
                <a href="#contacto">
                  <Car className="w-4 h-4 mr-2" />
                  Contacto
                </a>
              </Boton>
            </div>
          </div>

          <div className="hidden lg:block" aria-hidden="true" />
        </div>
      </div>
    </section>;
}
export {
  SeccionHeroe
};