"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ENLACES_NAVEGACION, INFO_NEGOCIO } from "@/lib/constantes";
function Navegacion() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return <header
    className={`fixed z-50 transition-all duration-500 ${isScrolled ? "top-2 sm:top-4 left-2 sm:left-4 right-2 sm:right-4" : "top-0 left-0 right-0"}`}
  >
      <nav
    className={`mx-auto transition-all duration-500 ${isScrolled || isMobileMenuOpen ? "bg-background/80 backdrop-blur-xl border border-foreground/10 rounded-xl sm:rounded-2xl shadow-lg max-w-[1200px]" : "bg-transparent max-w-[1400px]"}`}
  >
        <div
    className={`flex items-center justify-between transition-all duration-500 px-4 sm:px-6 lg:px-8 ${isScrolled ? "h-12 sm:h-14" : "h-16 sm:h-20"}`}
  >
          {
    /* Logo */
  }
          <a href="#" className="flex items-center gap-2 group">
            <span
    className={`font-display tracking-tight transition-all duration-500 text-base sm:text-lg md:text-xl text-brand ${isScrolled ? "lg:text-xl" : "lg:text-2xl"}`}
  >
              {INFO_NEGOCIO.name}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-brand shrink-0" aria-hidden="true" />
          </a>

          {
    /* Desktop Navegacion */
  }
          <div className="hidden md:flex items-center gap-6 lg:gap-12">
            {ENLACES_NAVEGACION.map((link) => <a
    key={link.name}
    href={link.href}
    className="text-xs lg:text-sm text-foreground/70 hover:text-foreground transition-colors duration-300 relative group"
  >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
              </a>)}
          </div>

          {
    /* Empty div to maintain spacing */
  }
          <div className="hidden md:block w-[60px] lg:w-[100px]" />

          {
    /* Mobile Menu Button */
  }
          <button
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    className="md:hidden p-1.5 sm:p-2"
    aria-label="Toggle menu"
  >
            {isMobileMenuOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
          </button>
        </div>
      </nav>

      {
    /* Mobile Menu - Full Screen Overlay */
  }
      <div
    className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    style={{ top: 0 }}
  >
        <div className="flex flex-col h-full px-6 sm:px-8 pt-24 sm:pt-28 pb-6 sm:pb-8">
          {
    /* Navegacion Links */
  }
          <div className="flex-1 flex flex-col justify-center gap-6 sm:gap-8">
            {ENLACES_NAVEGACION.map((link, i) => <a
    key={link.name}
    href={link.href}
    onClick={() => setIsMobileMenuOpen(false)}
    className={`text-3xl sm:text-4xl md:text-5xl font-display text-foreground hover:text-muted-foreground transition-all duration-500 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    style={{ transitionDelay: isMobileMenuOpen ? `${i * 75}ms` : "0ms" }}
  >
                {link.name}
              </a>)}
          </div>
        </div>
      </div>
    </header>;
}
export {
  Navegacion
};
