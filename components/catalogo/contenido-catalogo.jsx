"use client";
import { useState, useMemo } from "react";
import { Boton } from "@/components/interfaz/boton";
import { EncabezadoSeccion } from "@/components/encabezado-seccion";
import { TarjetaVehiculo } from "@/components/tarjeta-vehiculo";
import { filtrarVehiculos, obtenerMarcasFiltradas } from "@/lib/vehiculos";
import { Car, Bike } from "lucide-react";

const TIPOS = [
  { value: "todos", label: "Todos" },
  { value: "auto",  label: "Autos",  icon: Car },
  { value: "moto",  label: "Motos",  icon: Bike },
];

const CONDICIONES = [
  { value: "todos",  label: "Todos" },
  { value: "0km",    label: "0 km" },
  { value: "usado",  label: "Usados" },
];

function PildoraTipo({ value, label, icon: Icon, activo, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer
        ${activo
          ? "bg-brand border-brand text-white"
          : "bg-transparent border-foreground/20 text-foreground hover:border-foreground/50"
        }`}
    >
      {Icon && <Icon className="w-4 h-4" />}
      {label}
    </button>
  );
}

function PildoraCondicion({ value, label, activo, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium border transition-all duration-300 cursor-pointer
        ${activo
          ? "bg-foreground border-foreground text-background"
          : "bg-transparent border-foreground/20 text-muted-foreground hover:border-foreground/50 hover:text-foreground"
        }
        ${disabled ? "opacity-30 cursor-not-allowed pointer-events-none" : ""}`}
    >
      {label}
    </button>
  );
}

function ContenidoCatalogo() {
  const [tipo, setTipo] = useState("todos");
  const [condicion, setCondicion] = useState("todos");

  const handleTipo = (nuevoTipo) => {
    setTipo(nuevoTipo);
    setCondicion("todos");
  };

  const vehiculosFiltrados = useMemo(
    () => filtrarVehiculos({ tipo, condicion }),
    [tipo, condicion]
  );

  const condicionesDisponibles = useMemo(() => {
    const conTodos = filtrarVehiculos({ tipo, condicion: "todos" });
    return {
      "0km":   conTodos.some((v) => v.condicion === "0km"),
      "usado": conTodos.some((v) => v.condicion === "usado"),
    };
  }, [tipo]);

  const subtitleMap = {
    todos: "disponibles.",
    auto:  "en autos.",
    moto:  "en motos.",
  };

  return (
    <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 lg:pt-40 lg:pb-32">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">
        <EncabezadoSeccion
          eyebrow="Catalogo completo"
          title="Todos nuestros vehiculos"
          subtitle={subtitleMap[tipo]}
          description="Encontra el vehiculo perfecto para vos. Todos estan verificados y con garantia."
        />

        {/* ── Filtros ── */}
        <div className="mb-10 sm:mb-14 space-y-5">

          {/* Tipo */}
          <div className="flex flex-col gap-2">
            <p className="text-xs text-muted-foreground tracking-wider uppercase">
              Tipo de vehículo
            </p>
            <div className="flex flex-wrap gap-2">
              {TIPOS.map((t) => (
                <PildoraTipo
                  key={t.value}
                  {...t}
                  activo={tipo === t.value}
                  onClick={() => handleTipo(t.value)}
                />
              ))}
            </div>
          </div>

          {/* Condicion — solo se muestra si hay un tipo seleccionado */}
          {tipo !== "todos" && (
            <div className="flex flex-col gap-2">
              <p className="text-xs text-muted-foreground tracking-wider uppercase">
                Condición
              </p>
              <div className="flex flex-wrap gap-2">
                {CONDICIONES.map((c) => (
                  <PildoraCondicion
                    key={c.value}
                    {...c}
                    activo={condicion === c.value}
                    disabled={c.value !== "todos" && !condicionesDisponibles[c.value]}
                    onClick={() => setCondicion(c.value)}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Separador + contador */}
          <div className="flex items-center gap-4 pt-2">
            <div className="flex-1 h-px bg-foreground/10" />
            <p className="text-xs text-muted-foreground shrink-0">
              {vehiculosFiltrados.length}{" "}
              {vehiculosFiltrados.length === 1 ? "vehículo encontrado" : "vehículos encontrados"}
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {vehiculosFiltrados.map((vehicle, index) => (
            <TarjetaVehiculo key={vehicle.id} vehicle={vehicle} index={index} />
          ))}
        </div>

        {/* Empty state */}
        {vehiculosFiltrados.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-base sm:text-lg mb-4">
              No hay vehículos disponibles con esos filtros.
            </p>
            <Boton
              variant="outline"
              className="rounded-full text-sm"
              onClick={() => { setTipo("todos"); setCondicion("todos"); }}
            >
              Ver todos los vehículos
            </Boton>
          </div>
        )}

        {/* Back to home */}
        <div className="mt-12 sm:mt-16 text-center">
          <Boton
            variant="outline"
            className="rounded-full px-6 sm:px-8 h-10 sm:h-11 text-sm border-foreground/20 hover:bg-foreground/5"
            asChild
          >
            <a href="/">Volver al inicio</a>
          </Boton>
        </div>
      </div>
    </section>
  );
}

export { ContenidoCatalogo };
