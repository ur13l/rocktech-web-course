const array = [54, 67, 12, 35, 66, 23, 55];

const max = array.reduce((current, newElem) => {
  console.log(`${current} > ${newElem} = ${current > newElem}`);
  if (newElem > current) {
    return newElem;
  } else {
    return current;
  }
}, 0);

console.log(max);
