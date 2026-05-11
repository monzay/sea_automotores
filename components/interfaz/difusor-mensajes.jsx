"use client";
import { usarNotificaciones } from "@/hooks/usar-notificaciones";
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "@/components/interfaz/mensaje-flotante";
function DifusorMensajes() {
  const { toasts } = usarNotificaciones();
  return <ToastProvider>
      {toasts.map(function({ id, title, description, action, ...props }) {
    return <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            {action}
            <ToastClose />
          </Toast>;
  })}
      <ToastViewport />
    </ToastProvider>;
}
export {
  DifusorMensajes
};
