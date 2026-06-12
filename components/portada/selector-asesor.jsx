"use client";
import { MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/interfaz/dialogo";
import { ASESORES, obtenerUrlWhatsAppAsesor } from "@/lib/constantes";

const CUERPO_PREDETERMINADO =
  "Me gustar\xEDa recibir m\xE1s informaci\xF3n sobre los veh\xEDculos disponibles.";

function SelectorAsesor({ cuerpo, children }) {
  const handleSeleccionar = (asesor) => {
    const mensaje = `Hola ${asesor.nombre}! ${cuerpo || CUERPO_PREDETERMINADO}`;
    const url = obtenerUrlWhatsAppAsesor(asesor, mensaje);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl">Eleg\xED tu asesor</DialogTitle>
          <DialogDescription>
            Seleccion\xE1 con qui\xE9n quer\xE9s comunicarte por WhatsApp
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 pt-2">
          {ASESORES.map((asesor) => (
            <button
              key={asesor.id}
              onClick={() => handleSeleccionar(asesor)}
              className="flex items-center gap-3 p-4 border border-border rounded-lg hover:bg-muted hover:border-brand/40 transition-all duration-200 text-left group"
            >
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center shrink-0 group-hover:bg-brand/20 transition-colors">
                <span className="text-brand font-bold text-sm">
                  {asesor.nombre.charAt(0).toUpperCase()}
                </span>
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-sm truncate">{asesor.nombre}</p>
                <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                  <MessageCircle className="w-3 h-3 text-green-500 shrink-0" />
                  WhatsApp
                </p>
              </div>
            </button>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export { SelectorAsesor };
