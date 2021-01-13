const fetch = require("node-fetch");

class RandomImage {
  constructor({ id, url, author, width, height, download_url }) {
    this.id = id;
    this.url = url;
    this.author = author;
    this.width = width;
    this.height = height;
    this.downloadUrl = download_url;
  }

  print() {
    console.log(`
      ID: ${this.id}  
      URL: ${this.url}  
      Author: ${this.author}
    `);
  }
}

const run = async () => {
  try {
    const res = await fetch("https://picsum.photos/v2/list?page=1&limit=20");
    const json = await res.json();
    json.forEach((elem) => {
      const img = new RandomImage(elem);
      img.print();
    });
  } catch (e) {
    console.log(e);
  }
};

run();
