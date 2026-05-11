"use client";
import { Boton } from "@/components/interfaz/boton";
import { ArrowRight } from "lucide-react";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { TarjetaVehiculo } from "@/components/tarjeta-vehiculo";
import { obtenerPrimerosVehiculos } from "@/lib/vehiculos";
function SeccionCatalogo() {
  const firstVehicles = obtenerPrimerosVehiculos(3);
  return <section id="catalogo" className="relative py-16 sm:py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <EncabezadoSeccion
    eyebrow="Catálogo"
    title="Vehículos destacados"
    subtitle="para vos."
    description="Explorá nuestra selección de vehículos nuevos y usados. Todos verificados y con garantía."
  />

        {
    /* Vehicle Grid */
  }
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {firstVehicles.map((vehicle, index) => <TarjetaVehiculo key={vehicle.id} vehicle={vehicle} index={index} />)}
        </div>

        {
    /* View All Button */
  }
        <div className="mt-10 sm:mt-12 lg:mt-16 text-center">
          <Boton
    size="lg"
    className="rounded-full px-8 sm:px-12 h-12 sm:h-14 text-sm sm:text-base bg-brand text-white hover:bg-white hover:text-brand border-0 hover:border hover:border-brand transition-all duration-300"
    asChild
  >
            <a href="/catalogo">
              Ver todo el catálogo
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </Boton>
        </div>
      </div>
    </section>;
}
export {
  SeccionCatalogo
};
