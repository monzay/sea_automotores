// Temática de la Pachamama.
// En Jujuy el 1 de agosto es el día, pero agosto entero es el mes de la
// Pachamama, así que la temporada arranca unos días antes y termina con el mes.

const INICIO = { mes: 7, dia: 29 };
const FIN = { mes: 8, dia: 31 };

// null  -> se prende y se apaga solo, por fecha
// true  -> forzado visible (para probar fuera de temporada)
// false -> apagado
const FORZAR = null;

function esTemporadaPachamama(fecha = new Date()) {
  if (FORZAR !== null) return FORZAR;

  const mes = fecha.getMonth() + 1;
  const dia = fecha.getDate();

  if (mes === INICIO.mes) return dia >= INICIO.dia;
  if (mes === FIN.mes) return dia <= FIN.dia;
  return false;
}

export { esTemporadaPachamama, INICIO, FIN, FORZAR };
