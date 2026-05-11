"use client";
import { useEffect, useRef, useState } from "react";
function usarEnVista(options = {}) {
  const { threshold = 0.1, triggerOnce = true } = options;
  const ref = useRef(null);
  const [estaVisible, setEstaVisible] = useState(false);
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEstaVisible(true);
          if (triggerOnce) {
            observer.disconnect();
          }
        } else if (!triggerOnce) {
          setEstaVisible(false);
        }
      },
      { threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, triggerOnce]);
  return { ref, estaVisible };
}
export {
  usarEnVista
};
