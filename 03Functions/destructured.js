const obj = {
  nombre: "Uriel",
  apellido: "Infante",
};

const saludo = function ({ saludo = "Hola", nombre, apellido }) {
  console.log(`${saludo} ${nombre} ${apellido}`);
};

saludo(obj); //Hola Uriel Infante
