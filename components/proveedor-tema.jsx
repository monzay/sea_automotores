"use client";
import {
  ThemeProvider as NextThemesProvider
} from "next-themes";
function ProveedorTema({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
export {
  ProveedorTema
};
