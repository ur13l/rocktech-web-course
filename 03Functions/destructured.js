const obj = {
  nombre: "Uriel",
  apellido: "Infante",
  saludo: "Hi!",
};

const saludo = function ({ saludo = "Hola", nombre, apellido }) {
  console.log(`${saludo}, ${nombre} ${apellido}`);
};

saludo(obj); //Hola Uriel Infante
