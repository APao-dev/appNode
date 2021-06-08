const fs = require('fs');

const base = 3;
let salida = '';

for(let i =1; i<=10; i++) {
   salida += (`${base} x ${i} = ${ base * i}\n`);``
}
console.log(salida);

fs.writeFile( `tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;

    console.log(`tabla-${base}.txt creado`);
})