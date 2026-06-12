// tipo: "auto" | "moto"
// condicion: "0km" | "usado"
// combustible: "nafta" | "gnc" | "diesel"

const LISTA_VEHICULOS = [

  {
    id: 61,
    brand: "Fiat",
    model: "Grand Siena Essence 1.6 16v",
    year: 2013,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 0,
    color: "",
    image: "./vehiculos/fiat_gran_ siena.jfif"
  },
  {
    id: 60,
    brand: "Yamaha",
    model: "FZ 150cc",
    year: 2020,
    kms: 14000,
    tipo: "moto",
    condicion: "usado",
    combustible: "nafta",
    precio: 0,
    color: "",
    image: "./vehiculos/fz.jfif"
  },
  {
    id: 59,
    brand: "Renault",
    model: "Fluence 2.0",
    year: 2015,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 0,
    color: "",
    image: "./vehiculos/renault_fluence.jfif"
  },
  {
    id: 58,
    brand: "Renault",
    model: "Mégane 1.6 16v",
    year: 2008,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "",
    precio: 0,
    color: "",
    image: "./vehiculos/renault_megane.jfif"
  },
  {
    id: 57,
    brand: "Ford",
    model: "EcoSport XL 1.6",
    year: 2011,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 0,
    color: "",
    image: "./vehiculos/ecoSport.jfif"
  },
  {
    id: 56,
    brand: "Volkswagen",
    model: "Voyage 1.6",
    year: 2013,
    kms: 0,
    tipo: "auto",
    condicion: "usado", 
    combustible: "gnc",
    precio: 0,
    color: "",
    image: "./vehiculos/boyage.jfif"
  },
  {
    id: 55,
    brand: "Fiat",
    model: "Palio Sporting 1.6 16v",
    year: 2013,
    kms: 130.000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 0,
    color: "",
    image: "./vehiculos/fiat_palio_sporting_2013.jpeg"
  },
  {
    id: 54,
    brand: "Fiat",
    model: "Idea Adventure 1.6 16v",
    year: 2015,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "gnc",
    precio: 0,
    color: "",
    image: "./vehiculos/fiat_idea.jfif"
  },
    {
    id: 53,
    brand: "Fiat",
    model: "Cronos 1.3 Drive GSE Pack Conectividad",
    year: 2020,
    kms: 0,
    tipo: "auto",
    condicion: "usado",
    combustible: "",
    precio: 0,
    color: "",
    image: "./vehiculos/fiat_cronos.jfif"
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
    image: "./vehiculos/blazer.jpeg"
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
      image: "./vehiculos/fiat_palio_atractive.jfif"
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
  /*
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
  */
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
    image: "./vehiculos/fiat_palio.jpeg"
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
    combustible: "",
    precio: 17000000,
    color: "Gris",
     image: "./vehiculos/parnet.jpeg"
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
  // === VOLKSWAGEN ===
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
    image: "./vehiculos/gol_trend_2010.png"
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
    image: "./vehiculos/gol_trend_2018.jpeg"
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
 /* {
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
    image: "./vehiculos/suran.jfif"
  },*/
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
    image: "./vehiculos/motomel_skua_200.jfif"
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
    image: "./vehiculos/zanella_150.jpeg"
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
    image: "./vehiculos/corven.png"
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
       image: "./vehiculos/corven_triax.png"
  },
  {
    id: 39,
    brand: "Rouser",
    model: "NS 200",
    year: 2025,
    kms: 42000,
    tipo: "moto",
    condicion: "usado",
    combustible: "nafta",
    precio: 0,
    color: "amarillo",
    image: "./vehiculos/rousen_200.jpeg"
  },
  {
    id: 50,
    brand: "Peugeot",
    model: "Peugeot 308 descapotable cc Coupé Cabriolet 1.6 THP ",
    year: 2012,
    kms: 140000,
    tipo: "auto",
    condicion: "usado",
    combustible: "nafta",
    precio: 0,
    color: "",
    image: "./vehiculos/308CC.jfif"
  },
  ,  {
    id: 52,
    brand: "Fiat",
    model: "PALIO SPORTING 1.6",
    year: 2015,
    kms: 245000,
    tipo: "auto",
    condicion: "usado",
    combustible: "",
    precio: 0,
    color: "rojo",
    image: "./vehiculos/fiat_palio_sporting.jfif"
  },
 
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
 * Filtra vehículos por tipo, condicion y marca.
 * @param {"todos"|"auto"|"moto"} tipo
 * @param {"todos"|"0km"|"usado"} condicion
 * @param {string} marca - nombre de marca o "todas"
 */
function filtrarVehiculos({ tipo = "todos", condicion = "todos", marca = "todas" } = {}) {
  return LISTA_VEHICULOS.filter((v) => {
    const coincideTipo      = tipo      === "todos"  || v.tipo      === tipo;
    const coincideCondicion = condicion === "todos"  || v.condicion === condicion;
    const coincideMarca     = marca     === "todas"  || v.brand     === marca;
    return coincideTipo && coincideCondicion && coincideMarca;
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