const INFO_NEGOCIO = {
  name: "SEA AUTOMOTORES",
  phone: "5493884726067",
  whatsapp: "5493884726067",
  address: "Avenida Parroco Marshke 2706 esquina Luis Burela",
  city: "San Salvador de Jujuy",
  province: "Jujuy",
  postalCode: "Y4600",
  fullAddress: "Avenida Parroco Marshke 2706 esquina Luis Burela, Y4600 San Salvador de Jujuy, Jujuy",
  hours: {
    weekdays: "Lunes a Viernes: 9:00 - 21:00",
    saturday: "S\xE1bados: 9:00 - 15:00",
    sunday: "Domingos: Cerrado"
  },
  features: [
    "Aceptamos veh\xEDculos como parte de pago",
    "Financiamiento a tu medida",
    "Garant\xEDa en todos nuestros veh\xEDculos"
  ]
};
const ASESORES = [
  { id: 1, nombre: "Agustina", telefono: "5492974357650" },
  { id: 2, nombre: "Belen", telefono: "5491166225211" },
  { id: 3, nombre: "Benjamin", telefono: "5493883124123" },
  { id: 4, nombre: "V\xEDctor", telefono: "5493885015911" },
  { id: 5, nombre: "Cristian", telefono: "5493884049070" },
  { id: 6, nombre: "Matias", telefono: "5493883113341" },
  { id: 7, nombre: "Agustin", telefono: "5493884966058" },
  { id: 8, nombre: "Rada", telefono: "5493885866156" },
  { id: 9, nombre: "Aquiles", telefono: "5493885181318" },
  { id: 10, nombre: "Clara", telefono: "5493885984729" },
];

function obtenerUrlWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${INFO_NEGOCIO.whatsapp}?text=${encodedMessage}`;
}
function obtenerUrlWhatsAppAsesor(asesor, mensaje) {
  const encodedMessage = encodeURIComponent(mensaje);
  return `https://wa.me/${asesor.telefono}?text=${encodedMessage}`;
}
function obtenerUrlWhatsAppPredeterminada() {
  const message = `Hola Sea Automotores! Me gustar\xEDa recibir m\xE1s informaci\xF3n sobre los veh\xEDculos disponibles.`;
  return obtenerUrlWhatsApp(message);
}
function obtenerUrlWhatsAppVehiculo(brand, model, year) {
  const message = `Hola Sea Automotores! Estoy interesado en el ${brand} ${model} ${year}. \xBFPodr\xEDan darme m\xE1s informaci\xF3n?`;
  return obtenerUrlWhatsApp(message);
}
const ENLACES_NAVEGACION = [
  { name: "Cat\xE1logo", href: "#catalogo" },
  { name: "Servicios", href: "#servicios" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Contacto", href: "#contacto" }
];
const ENLACES_PIE = {
  Navegaci\u00F3n: [
    { name: "Cat\xE1logo", href: "#catalogo" },
    { name: "Servicios", href: "#servicios" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" }
  ],
  Servicios: [
    { name: "Financiamiento", href: "#servicios" },
    { name: "Tasaci\xF3n", href: "#servicios" },
  ],
  Marcas: [
    { name: "Toyota", href: "#catalogo" },
    { name: "Volkswagen", href: "#catalogo" },
    { name: "Ford", href: "#catalogo" },
    { name: "Honda", href: "#catalogo" }
  ]
};
const ENLACES_SOCIALES = [
  { name: "Instagram", href: "#" },
  { name: "Facebook", href: "#" },
  { name: "Tik tok", href: `` }
];
export {
  INFO_NEGOCIO,
  ASESORES,
  ENLACES_PIE,
  ENLACES_NAVEGACION,
  ENLACES_SOCIALES,
  obtenerUrlWhatsAppPredeterminada,
  obtenerUrlWhatsAppVehiculo,
  obtenerUrlWhatsAppAsesor,
};
