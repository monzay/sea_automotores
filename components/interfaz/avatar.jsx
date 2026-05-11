"use client";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { combinadorClases } from "@/lib/utilidades";
function Avatar({
  className,
  ...props
}) {
  return <AvatarPrimitive.Root
    data-slot="avatar"
    className={combinadorClases(
      "relative flex size-8 shrink-0 overflow-hidden rounded-full",
      className
    )}
    {...props}
  />;
}
function AvatarImage({
  className,
  ...props
}) {
  return <AvatarPrimitive.Image
    data-slot="avatar-image"
    className={combinadorClases("aspect-square size-full", className)}
    {...props}
  />;
}
function AvatarFallback({
  className,
  ...props
}) {
  return <AvatarPrimitive.Fallback
    data-slot="avatar-fallback"
    className={combinadorClases(
      "bg-muted flex size-full items-center justify-center rounded-full",
      className
    )}
    {...props}
  />;
}
export {
  Avatar,
  AvatarFallback,
  AvatarImage
};
