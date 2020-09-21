
// Task 1
// Ваша задача - заполнить пробелы (_______________________).
// Функция multiplier принимает x один параметр и возвращает анонимную функцию, которая принимает один параметр - y,
// и возвращает произведение x * y.

function multiplier(x) {
    return (y) => x * y;
}

function processData (input) {
    const waterWeight = multiplier(1000);
    const mercuryWeight = multiplier(1355);
    const oilWeight = multiplier(900);

    console.log("Weight of " + input + " metric cube of water = " + waterWeight(input) + " kg");
    console.log("Weight of " + input + " metric cube of mercury = " + mercuryWeight(input) + " kg");
    console.log("Weight of " + input + " metric cube of oil = " + oilWeight(input) + " kg");
}

// Task 2
// Написать функцию makeRandomFn которая принимает массив чисел и возвращает функцию,
// которая при вызове возвращает любое число c этого, переданного ей, массива.
        
function makeRandomFn (arr) {
    return () => arr[Math.floor(Math.random() * arr.length)];
}

const getRandomNumber = makeRandomFn([1, 2, 100, 34, 45, 556, 33])

// Task 3
// Нужно расширить функцию makeRandomFn, таким образом
// чтобы можно было передавать диапазон не только через массив, а как аргументы через запятую


function makeRandomFunc (arr) {
    return (Array.isArray(arr) && arguments.length) 
    ? ( () => arr[Math.floor(Math.random() * arr.length)]) : (() => arguments[Math.floor(Math.random() * arguments.length)])
}

