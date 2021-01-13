const wait = (ms) =>
  new Promise((resolve, reject) => {
    if (ms > 0) {
      setTimeout(() => {
        resolve(`Waited ${ms} ms`);
      }, ms);
    } else {
      reject("Error: La cantidad de segundos debe ser mayor a 0");
    }
  });

wait(-2000)
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

console.log("Hola");
