/*const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() { 
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`
  }
};

console.log(robot.provideInfo());  */

const dci = {
  el1: 'test1',
  el2: 555,
  quad() {
    return `test zmienycj ${this.el1} pozdrawiam pozdraiwm pozdzrzdfdsd dsadasdasd asdasdasdasd ${this.el2}` 
  }
}

console.log(dci.quad());


const edek = {
  v1: 'gdi',
  v2: 20,
  opis() {
    return `silnik generacji ${this.v1} o pojemnoosci ${this.v2}  `
  }
  }

const gt = {
  dc1: 'nw',
  dc2: 30,
  opisU() {
    return `mb jest na statusie ${this.dc1} , a numer referecnyjny to jest ${this.dc2} `
   }
}
console.log(gt.opisU());

console.log(edek.opis());
