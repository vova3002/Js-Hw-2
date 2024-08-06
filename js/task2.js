function randomDelay(text, delay){
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
    });
}
let rngNumber = Math.floor(Math.random() * 5000) + 1000;
let rngNumber1 = Math.floor(Math.random() * 5000) + 1000;
let rngNumber2 = Math.floor(Math.random() * 5000) + 1000;
let rngNumber3 = Math.floor(Math.random() * 5000) + 1000;
let rngNumber4 = Math.floor(Math.random() * 5000) + 1000;

let generatedDelay1 = randomDelay("text1", rngNumber)
let generatedDelay2 = randomDelay("text2", rngNumber1)
let generatedDelay3 = randomDelay("text3", rngNumber2)
let generatedDelay4 = randomDelay("text4", rngNumber3)
let generatedDelay5 = randomDelay("text5", rngNumber4)
Promise.race([generatedDelay1, generatedDelay2, generatedDelay3, generatedDelay4, generatedDelay5])
.then(value => console.log(value))
.catch(error => console.log(error))
// /////
// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//   setTimeout(() => resolve(text), delay);
//   });
// };
//   const promiseA = makePromise("promiseA value", 1000);
//   const promiseB = makePromise("promiseB value", 3000);
//   Promise.race([promiseA, promiseB])
//   .then(value => console.log(value)) // "promiseA value"
//   .catch(error => console.log(error));