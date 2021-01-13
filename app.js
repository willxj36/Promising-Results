// slowMath.add(6, 2)
// .then(val => {
//     console.log(val);
//     return slowMath.multiply(val, 2);
// }).then(val => {
//     console.log(val);
//     return slowMath.divide(val, 4);
// }).then(val => {
//     console.log(val);
//     return slowMath.subtract(val, 3);
// }).then(val => {
//     console.log(val);
//     return slowMath.add(val, 98);
// }).then(val => {
//     console.log(val);
//     return slowMath.remainder(val, 2);
// }).then(val => {
//     console.log(val);
//     return slowMath.multiply(val, 50);
// }).then(val => {
//     console.log(val);
//     return slowMath.remainder(val, 40);
// }).then(val => {
//     console.log(val);
//     return slowMath.add(val, 32);
// }).then(val => {
//     console.log(`The final result is ${val}`);
// }).catch((err) => console.log(err));

//using 1 and 1 to test error
// slowMath.add(1, 1)
// .then(val => {
//     console.log(val);
//     return slowMath.multiply(val, 2);
// }).then(val => {
//     console.log(val);
//     return slowMath.divide(val, 4);
// }).then(val => {
//     console.log(val);
//     return slowMath.subtract(val, 3);
// }).then(val => {
//     console.log(val);
//     return slowMath.add(val, 98);
// }).then(val => {
//     console.log(val);
//     return slowMath.remainder(val, 2);
// }).then(val => {
//     console.log(val);
//     return slowMath.multiply(val, 50);
// }).then(val => {
//     console.log(val);
//     return slowMath.remainder(val, 40);
// }).then(val => {
//     console.log(val);
//     return slowMath.add(val, 32);
// }).then(val => {
//     console.log(`The final result is ${val}`);
// }).catch((err) => console.log(err));

async function doMath(val1, val2) {
    try {
        let x = await slowMath.add(val1, val2);
        console.log(x);
        x = await slowMath.multiply(x, 2);
        console.log(x);
        x = await slowMath.divide(x, 4);
        console.log(x);
        x = await slowMath.subtract(x, 3);
        console.log(x);
        x = await slowMath.add(x, 98);
        console.log(x);
        x = await slowMath.remainder(x, 2);
        console.log(x);
        x = await slowMath.multiply(x, 50);
        console.log(x);
        x = await slowMath.remainder(x, 40);
        console.log(x);
        x = await slowMath.add(x, 32);
        console.log(`The final result is ${x}`);
    } catch(err) {
        console.log(err);
    }
}

doMath(6, 2);
doMath(1, 1);