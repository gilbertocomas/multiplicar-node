const fs = require("fs");
const colors = require("colors");

const listarTabla = (base, limite) => {
  //Colores para encabezado de salida en cosola
  console.log("*************************************".green);
  console.log(`Tabla del ${base}, hasta ${limite}`.green);
  console.log("*************************************".green);

  for (let i = 1; i <= limite; i++) {
    console.log(`${base} x ${i} = ${base * i}`);
  }
};

const crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject(`El valor ingresado "${base}", no es un número.`);
      return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} x ${i} = ${base * i}\n`;
    }

    fs.writeFile(`tabla/tabla-${base}-al-${limite}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`tabla-${base}-al-${limite}.txt`);
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla,
};
