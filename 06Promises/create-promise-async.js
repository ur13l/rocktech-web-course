const fetch = require("node-fetch");

const search = async (page = 1, limit = 20) => {
  if (page < 1) throw "Error: La página no puede ser un número negativo";
  if (limit < 1 || limit > 200)
    throw "Error: El límite de elementos debe estar en el rango de 1 a 200";
  const res = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
  );
  return await res.json();
};

const query = async (page, limit) => {
  try {
    const results = await search(page, limit);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
};

query(2, 3);
