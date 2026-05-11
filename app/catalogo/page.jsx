import { Navegacion } from "@/components/portada/navegacion";
import { SeccionPie } from "@/components/portada/seccion-pie";
import { ContenidoCatalogo } from "@/components/catalogo/contenido-catalogo";

const metadata = {
  title: "Catálogo de Vehículos | Sea Automotores",
  description:
    "Explorá nuestro catálogo completo de vehículos nuevos y usados. Todos verificados y con garantía.",
};

function PaginaCatalogo() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay">
      <Navegacion />
      <ContenidoCatalogo />
      <SeccionPie />
    </main>
  );
}

export { PaginaCatalogo as default, metadata };
