import { Instrument_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument"
});
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif"
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains"
});
const metadata = {
  title: "Sea Automotores - Tu pr\xF3ximo auto te espera",
  description: "Agencia automotriz con los mejores veh\xEDculos nuevos y usados. Financiamiento, garant\xEDa y servicio de primera calidad.",
  generator: "v0.app"
};
function DisenoRaiz({
  children
}) {
  return <html lang="es" className="bg-background">
      <body className={`${instrumentSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>;
}
export {
  DisenoRaiz as default,
  metadata
};
