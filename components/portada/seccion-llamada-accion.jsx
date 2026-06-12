"use client";
import { useState } from "react";
import { Boton } from "@/components/interfaz/boton";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import { INFO_NEGOCIO } from "@/lib/constantes";
import { usarEnVista } from "@/hooks/usar-en-vista";
import { SelectorAsesor } from "@/components/portada/selector-asesor";
function SeccionLlamadaAccion() {
  const { ref, estaVisible } = usarEnVista();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width * 100,
      y: (e.clientY - rect.top) / rect.height * 100
    });
  };
  return <section id="contacto" ref={ref} className="relative py-12 sm:py-16 md:py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <div
    className={`relative border border-foreground transition-all duration-1000 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
    onMouseMove={handleMouseMove}
  >
          {
    /* Spotlight effect */
  }
          <div
    className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300 hidden sm:block"
    style={{
      background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
    }}
  />

          <div className="relative z-10 px-4 sm:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12">
              {
    /* Left content */
  }
              <div className="flex-1 w-full">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl font-display tracking-tight mb-4 sm:mb-6 md:mb-8 leading-[1.1] sm:leading-[0.95]">
                  <span className="text-brand">Visitanos hoy</span>
                  <br />y encontrá tu auto
                </h2>

                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground mb-6 sm:mb-8 md:mb-12 leading-relaxed max-w-xl">
                  Estamos listos para ayudarte a encontrar el vehículo perfecto. Aceptamos tu auto
                  como parte de pago.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 sm:gap-4 mb-8 sm:mb-12">
                  <SelectorAsesor>
                    <Boton
                      size="lg"
                      className="bg-brand hover:bg-brand-light text-white px-4 sm:px-6 lg:px-8 h-11 sm:h-12 lg:h-14 text-xs sm:text-sm lg:text-base rounded-full group w-full sm:w-auto"
                    >
                      Escribinos por WhatsApp
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </Boton>
                  </SelectorAsesor>
                </div>

                {
    /* Contact Info */
  }
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-xs sm:text-sm">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Dirección</p>
                      <p className="text-muted-foreground">{INFO_NEGOCIO.address}</p>
                      <p className="text-muted-foreground">
                        {INFO_NEGOCIO.city}, {INFO_NEGOCIO.province}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 sm:gap-3">
                    <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Horarios</p>
                      <p className="text-muted-foreground">{INFO_NEGOCIO.hours.weekdays}</p>
                      <p className="text-muted-foreground">{INFO_NEGOCIO.hours.saturday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {
    /* Decorative corner - hidden on small screens */
  }
          <div className="absolute top-0 right-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-b border-l border-foreground/10 hidden sm:block" />
          <div className="absolute bottom-0 left-0 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-t border-r border-foreground/10 hidden sm:block" />
        </div>
      </div>
    </section>;
}
export {
  SeccionLlamadaAccion
};
