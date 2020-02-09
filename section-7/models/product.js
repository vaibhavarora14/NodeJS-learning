const fs = require('fs');

const path = require('path');
const dirName = require('../util/path');
const p = path.join(dirName, 'data', 'products.json');

const getProductsFromFile = () => {
  const promise = new Promise((res, rej) => {
    fs.readFile(p, (err, filecontent) => {
      if (err) {
        res([]);
      } else {
        return res(JSON.parse(filecontent));
      }
    });
  });

  return promise;
}

module.exports = class Product {
  constructor(title) {
    this.title = title;
  }

  save() {
    getProductsFromFile().then(products => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll() {
    return getProductsFromFile();
  }
}