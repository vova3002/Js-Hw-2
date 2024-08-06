// function delayedPromise(text, delay) {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// }
// const promise1 = delayedPromise("test", 4000);
// const promise2 = delayedPromise("tests", 5000);
// const promise3 = delayedPromise("testing", 6000);
// const promise4 = delayedPromise("testers", 3000);
// const promise5 = delayedPromise("tester", 2000);
// Promise.all([promise1, promise2, promise3, promise4, promise5]).then(value => console.log(value))
// .catch(error => console.log(error));