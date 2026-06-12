"use client";
import { useState, useEffect } from "react";
import { Boton } from "@/components/interfaz/boton";
import { Calendar, Gauge, ArrowRight, Car, Bike, Flame, Zap, X } from "lucide-react";
import { obtenerNombreCompletoVehiculo } from "@/lib/vehiculos";
import { usarEnVista } from "@/hooks/usar-en-vista";
import { SelectorAsesor } from "@/components/portada/selector-asesor";
function TarjetaVehiculo({ vehicle, index = 0 }) {
  const { ref, estaVisible } = usarEnVista();
  const [isHovered, setIsHovered] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => { if (e.key === "Escape") setModalOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  const mensajeVehiculo = `Estoy interesado en el ${vehicle.brand} ${vehicle.model} ${vehicle.year}. \xBFPodr\xEDan darme m\xE1s informaci\xF3n?`;
  return <>
    <div
    ref={ref}
    className={`group relative transition-all duration-700 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    style={{ transitionDelay: `${index * 100}ms` }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
      <div className="relative border border-foreground/10 bg-card overflow-hidden hover:border-foreground/30 transition-all duration-500">
        {/* Image */}
        <div
          className="relative aspect-4/3 overflow-hidden cursor-pointer"
          onClick={() => setModalOpen(true)}
        >
          <img
            src={vehicle.image}
            alt={obtenerNombreCompletoVehiculo(vehicle)}
            className={`w-full h-full object-cover transition-transform duration-700 ${isHovered ? "scale-110" : "scale-100"}`}
          />
          {/* Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2">
            {vehicle.condicion === "0km" && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold bg-brand text-white tracking-wide">
                0 km
              </span>
            )}
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-medium bg-background/80 backdrop-blur-sm text-foreground">
              {vehicle.tipo === "moto"
                ? <Bike className="w-3 h-3" />
                : <Car className="w-3 h-3" />
              }
              {vehicle.tipo === "moto" ? "Moto" : "Auto"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 lg:p-6">
          <div className="mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg lg:text-xl font-display group-hover:translate-x-1 transition-transform duration-300">
              {obtenerNombreCompletoVehiculo(vehicle)}
            </h3>
          </div>

          {/* Specs */}
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            {vehicle.condicion === "usado" && vehicle.kms === 0 ? null : (
              <span className="flex items-center gap-1 sm:gap-1.5">
                <Gauge className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                {vehicle.kms.toLocaleString()} km
              </span>
            )}
            <span className="flex items-center gap-1 sm:gap-1.5">
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {vehicle.year}
            </span>
            {vehicle.combustible && (
              <span className={`flex items-center gap-1 sm:gap-1.5 font-medium ${vehicle.combustible === "gnc" ? "text-brand" : ""}`}>
                {vehicle.combustible === "gnc"
                  ? <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  : <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                }
                {vehicle.combustible === "gnc" ? "GNC" : vehicle.combustible === "diesel" ? "Diesel" : "Nafta"}
              </span>
            )}
          </div>

          {/* CTA */}
          <SelectorAsesor cuerpo={mensajeVehiculo}>
            <Boton
              className="w-full rounded-full text-xs sm:text-sm h-9 sm:h-10 bg-brand text-white hover:bg-white hover:text-brand transition-all duration-300 group/btn border-0 hover:border hover:border-brand"
            >
              Consultar
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transition-transform group-hover/btn:translate-x-1" />
            </Boton>
          </SelectorAsesor>
        </div>
      </div>
    </div>

    {/* Modal */}
    {modalOpen && (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg"
        onClick={() => setModalOpen(false)}
      >
        <div
          className="relative max-w-4xl w-full mx-4 sm:mx-8"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={vehicle.image}
            alt={obtenerNombreCompletoVehiculo(vehicle)}
            className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
          />
          <button
            onClick={() => setModalOpen(false)}
            className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/80 transition-colors duration-200 rounded-full"
            aria-label="Cerrar"
          >
            <X className="w-4 h-4 text-white" />
          </button>
          <p className="mt-3 font-mono text-[9px] tracking-[0.3em] text-white/30 uppercase text-right">
            {obtenerNombreCompletoVehiculo(vehicle)} · {vehicle.year}
          </p>
        </div>
      </div>
    )}
  </>;
}
export {
  TarjetaVehiculo
};