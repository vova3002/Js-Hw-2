let deadline = new Date("dec 31, 2024 15:37:25").getTime();
let nowDate = new Date().getTime();
let time = deadline - nowDate;

/*
 * Дні, що залишилися: ділимо значення UTC на 1000 * 60 * 60 * 24, кількість
 * мілісекунд в один день (мілісекунди * секунди * хвилини * години)
 */
const days = Math.floor(time / (1000 * 60 * 60 * 24));
/*
 * Решта годин: отримуємо залишок від попереднього розрахунку за допомогою оператора
 * залишку% і ділимо його на кількість мілісекунд в одній годині
 * (1000 * 60 * 60 = мілісекунди * хвилини * секунди)
 */
const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
/*
 * Решта хвилин: отримуємо хвилини, що залишилися і ділимо їх на кількість
 * мілісекунд в одній хвилині (1000 * 60 = мілісекунди * секунди)
 */
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
/*
 * Решта секунд: отримуємо секунди, які залишилися і ділимо їх на кількість
 * миллисекунд в одной секунде (1000)
 */
const secs = Math.floor((time % (1000 * 60)) / 1000);
setInterval(() => {
  
})
document.getElementById('1').innerHTML = days
document.getElementById('2').innerHTML = hours
document.getElementById('3').innerHTML = mins
document.getElementById('4').innerHTML = secs