const user = {
  name: "Uriel",
  lastname: "Infante",
  age: 27,
  address: {
    street: "Desconocida 103",
    zipcode: "37000",
    city: "León",
    state: "Guanajuato",
    country: "México",
  },
};

const { name } = user;
console.log(name); //Uriel

const {
  address: { country },
} = user;
console.log(country); //México

const { name: nombre } = user;
console.log(nombre); //Uriel
