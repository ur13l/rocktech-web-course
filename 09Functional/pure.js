const originalObject = {
  name: "Uriel",
  age: 27,
  level: 100,
};
/*
const sumAge = (person) => {
  person.age++;
  return person;
};
*/

const sumAge = (person) => ({
  ...person,
  age: person.age + 1,
});

console.log(sumAge(originalObject));

console.log(originalObject);
