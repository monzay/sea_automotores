const INFO_NEGOCIO = {
  name: "Sea Automotores",
  phone: "3884708347",
  whatsapp: "543884708347",
  address: "Burela, Av. Parroco Marshke esq N\xB0 2706",
  city: "San Salvador de Jujuy",
  province: "Jujuy",
  postalCode: "Y4600",
  fullAddress: "Burela, Av. Parroco Marshke esq N\xB0 2706, Y4600 San Salvador de Jujuy, Jujuy",
  hours: {
    weekdays: "Lunes a Viernes: 8:00 - 21:00",
    saturday: "S\xE1bados: 9:00 - 14:00",
    sunday: "Domingos: Cerrado"
  },
  features: [
    "Aceptamos veh\xEDculos como parte de pago",
    "Financiamiento a tu medida",
    "Garant\xEDa en todos nuestros veh\xEDculos"
  ]
};
function obtenerUrlWhatsApp(message) {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${INFO_NEGOCIO.whatsapp}?text=${encodedMessage}`;
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
  ENLACES_PIE,
  ENLACES_NAVEGACION,
  ENLACES_SOCIALES,
  obtenerUrlWhatsAppPredeterminada,
  obtenerUrlWhatsAppVehiculo,
  getWhatsAppUrl
};
