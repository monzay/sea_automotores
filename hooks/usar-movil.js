import * as React from "react";
const UMBRAL_MOVIL = 768;
function usarEsMovil() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${UMBRAL_MOVIL - 1}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < UMBRAL_MOVIL);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < UMBRAL_MOVIL);
    return () => mql.removeEventListener("change", onChange);
  }, []);
  return !!isMobile;
}
export {
  usarEsMovil
};
