"use client";
import { useState } from "react";
import { Boton } from "@/components/interfaz/boton";
import { Calendar, Gauge, ArrowRight, Car, Bike, Flame, Zap } from "lucide-react";
import { obtenerNombreCompletoVehiculo } from "@/lib/vehiculos";
import { obtenerUrlWhatsAppVehiculo } from "@/lib/constantes";
import { usarEnVista } from "@/hooks/usar-en-vista";
function TarjetaVehiculo({ vehicle, index = 0 }) {
  const { ref, estaVisible } = usarEnVista();
  const [isHovered, setIsHovered] = useState(false);
  const handleConsultar = () => {
    const url = obtenerUrlWhatsAppVehiculo(vehicle.brand, vehicle.model, vehicle.year);
    window.open(url, "_blank", "noopener,noreferrer");
  };
  return <div
    ref={ref}
    className={`group relative transition-all duration-700 ${estaVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}
    style={{ transitionDelay: `${index * 100}ms` }}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
  >
      <div className="relative border border-foreground/10 bg-card overflow-hidden hover:border-foreground/30 transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
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

        {
    /* Content */
  }
        <div className="p-4 sm:p-5 lg:p-6">
          <div className="mb-3 sm:mb-4">
            <h3 className="text-base sm:text-lg lg:text-xl font-display group-hover:translate-x-1 transition-transform duration-300">
              {obtenerNombreCompletoVehiculo(vehicle)}
            </h3>
          </div>

          {
    /* Specs */
  }
          <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4 sm:mb-6">
            <span className="flex items-center gap-1 sm:gap-1.5">
              <Gauge className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              {vehicle.kms.toLocaleString()} km
            </span>
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

          {
    /* CTA */
  }
          <Boton
    className="w-full rounded-full text-xs sm:text-sm h-9 sm:h-10 bg-brand text-white hover:bg-white hover:text-brand transition-all duration-300 group/btn border-0 hover:border hover:border-brand"
    onClick={handleConsultar}
  >
            Consultar
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 transition-transform group-hover/btn:translate-x-1" />
          </Boton>
        </div>
      </div>
    </div>;
}
export {
  TarjetaVehiculo
};
