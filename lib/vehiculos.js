// tipo: "auto" | "moto"
// condicion: "0km" | "usado"
// combustible: "nafta" | "gnc" | "diesel"
const LISTA_VEHICULOS = [
  // === CHEVROLET ===
  {
    id: 17,
    brand: "Ford",
    model: "Eco Sport 1.6 SE",
    year: 2017,
    kms: 147000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 17500000,
    color: "Bordo",
    image: "./vehiculos/eco sport.jpeg"
  },
  {
    id: 16,
    brand: "Ford",
    model: "Ka 1.6 Fly Viral",
    year: 2013,
    kms: 125000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 12000000,
    color: "Negro",
    image: "./vehiculos/ford ka.jpeg"
  },
  {
    id: 15,
    brand: "Fiat",
    model: "Toro Freedom 2.0",
    year: 2017,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 15000000,
    color: "Rojo",
    image: "./vehiculos/fiat_toro.jpeg"
  },
  {
    id: 1,
    brand: "Chevrolet",
    model: "Corsa 2 1.8L",
    year: 2009,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 7000000,
    color: "Gris",
    image: ""  
  },
  {
    id: 2,
    brand: "Chevrolet",
    model: "Corsa 2 1.8",
    year: 2008,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 9000000,
    color: "Gris",
    image: ""
  },
  {
    id: 3,
    brand: "Chevrolet",
    model: "Blazer DLX 2.8 Diesel",
    year: 1999,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "diesel",
    precio: 9000000,
    color: "Bordo",
    image: "../public/vehiculos/"
  },
  {
    id: 4,
    brand: "Chevrolet",
    model: "Prisma Joy 1.4",
    year: 2017,
    kms: 115000,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 15000000,
    color: "Blanco",
    image: ""
  },
  // === CHERY ===
  {
    id: 5,
    brand: "Chery",
    model: "Tiggo 3 1.6",
    year: 2020,
    kms: 114000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 21000000,
    color: "Blanco",
    image: "./vehiculos/tiggo.jpeg"
  },
  // === FIAT ===
  {
    id: 6,
    brand: "Fiat",
    model: "Palio Attractive",
    year: 2018,
    kms: 140000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 18000000,
    color: "Rojo",
    image: ""
  },
  {
    id: 7,
    brand: "Fiat",
    model: "Argo 1.3 Drive",
    year: 2018,
    kms: 145000,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 18000000,
    color: "Gris",
    image: "./vehiculos/fiat_argo.jpeg"
  },
  {
    id: 8,
    brand: "Fiat",
    model: "Uno 1.3 Fire",
    year: 2011,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 8000000,
    color: "Blanco",
    image: "./vehiculos/fiat_uno.jpeg"
  },
  {
    id: 9,
    brand: "Fiat",
    model: "Uno 1.3 Fire",
    year: 2010,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 7000000,
    color: "Blanco",
    image: "./vehiculos/fiat_uno.jpeg"
  },
  {
    id: 10,
    brand: "Fiat",
    model: "Uno 1.3 Fire",
    year: 2009,
    kms: 270000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 8000000,
    color: "Rojo",
    image: "./vehiculos/fiat_uno_rojo.jpeg"
  },
  {
    id: 11,
    brand: "Fiat",
    model: "Uno Way 1.4",
    year: 2011,
    kms: 220000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 10000000,
    color: "Rojo",
    image: ""
  },
  {
    id: 12,
    brand: "Fiat",
    model: "Grand Siena 1.6 Essence",
    year: 2013,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 12000000,
    color: "Bordo",
    image: ""
  },
  {
    id: 13,
    brand: "Fiat",
    model: "Palio Fire 1.4",
    year: 2014,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 10000000,
    color: "Verde",
    image: ""
  },
  {
    id: 14,
    brand: "Fiat",
    model: "Palio Sporting 1.6",
    year: 2015,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 15000000,
    color: "Rojo",
    image: ""
  },
  
  // === FORD ===

 
  {
    id: 18,
    brand: "Ford",
    model: "Ranger 3.0 DC 4x2 XLS",
    year: 2009,
    kms: 143000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 15000000,
    color: "Negro",
    image: ""
  },
  // === PEUGEOT ===
  {
    id: 19,
    brand: "Peugeot",
    model: "Partner Patagonica",
    year: 2018,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 17000000,
    color: "Gris",
    image: ""
  },
  {
    id: 20,
    brand: "Peugeot",
    model: "206 XRD Premium",
    year: 2004,
    kms: 184000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 5000000,
    color: "Gris",
    image: ""
  },
  {
    id: 21,
    brand: "Peugeot",
    model: "Partner Patagonica",
    year: 2018,
    kms: 345000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 18000000,
    color: "Plata",
    image: ""
  },
  // === RENAULT ===
  {
    id: 22,
    brand: "Renault",
    model: "Sandero Stepway",
    year: 2015,
    kms: 192000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 13500000,
    color: "Plata",
    image: "./vehiculos/sandero.jpeg"
  },
  {
    id: 23,
    brand: "Renault",
    model: "Duster 2.0 Privilege",
    year: 2012,
    kms: 190000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 14000000,
    color: "rojo",
    image: "./vehiculos/duster.jpeg"
  },
  {
    id: 24,
    brand: "Renault",
    model: "Logan 1.6 Authentique",
    year: 2014,
    kms: 165000,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 12000000,
    color: "Marron",
    image: ""
  },
  // === VOLKSWAGEN ===
  {
    id: 25,
    brand: "Volkswagen",
    model: "Tiguan 2.0 TSI",
    year: 2012,
    kms: 205000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 9500000,
    color: "Plata",
    image: ""
  },
  {
    id: 26,
    brand: "Volkswagen",
    model: "Gol Trend 1.6",
    year: 2014,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 15000000,
    color: "Gris",
    image: ""
  },
  {
    id: 27,
    brand: "Volkswagen",
    model: "Gol Trend 1.6",
    year: 2010,
    kms: 331000,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 10000000,
    color: "Verde",
    image: ""
  },
  {
    id: 28,
    brand: "Volkswagen",
    model: "Gol Trend 1.6",
    year: 2018,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 16000000,
    color: "Plata",
    image: ""
  },
  {
    id: 29,
    brand: "Volkswagen",
    model: "Up 1.0 5 Puertas",
    year: 2016,
    kms: 95000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 14000000,
    color: "Rojo",
    image: "./vehiculos/up.jpeg"
  },
  {
    id: 30,
    brand: "Volkswagen",
    model: "Suran 1.6",
    year: 2018,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 15000000,
    color: "Verde",
    image: ""
  },
  // === CITROEN ===
  {
    id: 31,
    brand: "Citroen",
    model: "Xsara Picasso 1.6",
    year: 2010,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 9000000,
    color: "Beige",
    image: "./vehiculos/sara.jpeg"
  },
  // === MOTOS ===
  {
    id: 32,
    brand: "Motomel",
    model: "Skua DK 200cc",
    year: 2012,
    kms: 0,
    tipo: "moto",
    condicion: "usado",
    combustible: "nafta",
    precio: 2500000,
    color: "Azul",
    image: ""
  },
  {
    id: 33,
    brand: "Motomel",
    model: "Skua 150",
    year: 2025,
    kms: 0,
    tipo: "moto",
    condicion: "0km",
    combustible: "nafta",
    precio: 3500000,
    color: "Arena",
    image: "./vehiculos/motomel_skua.jpeg"
  },
  {
    id: 34,
    brand: "Zanella",
    model: "ZT 150cc",
    year: 2025,
    kms: 0,
    tipo: "moto",
    condicion: "0km",
    combustible: "nafta",
    precio: 3800000,
    color: "Azul",
    image: ""
  },
  {
    id: 35,
    brand: "Brava",
    model: "Altino",
    year: 2013,
    kms: 0,
    tipo: "moto",
    condicion: "usado",
    combustible: "nafta",
    precio: 1500000,
    color: "Gris",
    image: "./vehiculos/brava_altino.jpeg"
  },
  {
    id: 36,
    brand: "TVS",
    model: "RTR 160cc",
    year: 2024,
    kms: 0,
    tipo: "moto",
    condicion: "0km",
    combustible: "nafta",
    precio: 5000000,
    color: "Azul",
    image: "./vehiculos/tvs_160.jpeg"
  },
  {
    id: 37,
    brand: "Corven",
    model: "Triax 150cc",
    year: 2025,
    kms: 0,
    tipo: "moto",
    condicion: "0km",
    combustible: "nafta",
    precio: 3500000,
    color: "Blanco",
    image: ""
  },
  {
    id: 38,
    brand: "Corven",
    model: "Triax 200cc",
    year: 2025,
    kms: 0,
    tipo: "moto",
    condicion: "0km",
    combustible: "nafta",
    precio: 4000000,
    color: "Blanco",
    image: ""
  },
  {
    id: 39,
    brand: "Corven",
    model: "Triax 200cc",
    year: 2025,
    kms: 42000,
    tipo: "moto",
    condicion: "usado",
    combustible: "nafta",
    precio: 0,
    color: "amarillo",
    image: "./vehiculos/rousen_200.jpeg"
  }
];


function obtenerPrimerosVehiculos(limit = 3) {
  return LISTA_VEHICULOS.slice(0, limit);
}
function obtenerTodosLosVehiculos() {
  return LISTA_VEHICULOS;
}
function obtenerNombreCompletoVehiculo(vehicle) {
  return `${vehicle.brand} ${vehicle.model}`;
}
function obtenerTodasLasMarcas() {
  const brands = [...new Set(LISTA_VEHICULOS.map((v) => v.brand))];
  return brands.sort();
}
function obtenerVehiculosPorMarca(brand) {
  if (brand === "Todas") return LISTA_VEHICULOS;
  return LISTA_VEHICULOS.filter((v) => v.brand === brand);
}

/**
 * Filtra vehículos por tipo y condicion.
 * @param {"todos"|"auto"|"moto"} tipo
 * @param {"todos"|"0km"|"usado"} condicion
 */
function filtrarVehiculos({ tipo = "todos", condicion = "todos" } = {}) {
  return LISTA_VEHICULOS.filter((v) => {
    const coincideTipo = tipo === "todos" || v.tipo === tipo;
    const coincideCondicion = condicion === "todos" || v.condicion === condicion;
    return coincideTipo && coincideCondicion;
  });
}

/**
 * Devuelve las marcas disponibles según los filtros activos.
 */
function obtenerMarcasFiltradas({ tipo = "todos", condicion = "todos" } = {}) {
  const vehiculos = filtrarVehiculos({ tipo, condicion });
  const brands = [...new Set(vehiculos.map((v) => v.brand))];
  return brands.sort();
}

/**
 * Formatea el precio en pesos argentinos.
 */
function formatearPrecio(precio) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(precio);
}

export {
  obtenerTodasLasMarcas,
  obtenerTodosLosVehiculos,
  obtenerPrimerosVehiculos,
  obtenerNombreCompletoVehiculo,
  obtenerVehiculosPorMarca,
  filtrarVehiculos,
  obtenerMarcasFiltradas,
  formatearPrecio,
  LISTA_VEHICULOS
};
