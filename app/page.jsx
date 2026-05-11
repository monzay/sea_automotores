import { Navegacion } from "@/components/portada/navegacion";
import { SeccionHeroe } from "@/components/portada/seccion-heroe";
import { SeccionCatalogo } from "@/components/portada/seccion-catalogo";
import { SeccionCaracteristicas } from "@/components/portada/seccion-caracteristicas";
import { SeccionTestimonios } from "@/components/portada/seccion-testimonios";
import { SeccionLlamadaAccion } from "@/components/portada/seccion-llamada-accion";
import { SeccionPie } from "@/components/portada/seccion-pie";

function Inicio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navegacion />
      <SeccionHeroe />
      <SeccionCatalogo />
      <SeccionCaracteristicas />
      <SeccionTestimonios />
      <SeccionLlamadaAccion />
      <SeccionPie />
    </main>
  );
}

export { Inicio as default };
