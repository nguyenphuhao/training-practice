console.log('MAIN');

setTimeout(() => {
    console.log('Set Time Out 0 ');
}, 0);

setTimeout(() => {
    console.log('Set Time Out 1 ');
}, 0);

Promise.resolve().then(() => {
    console.log('Promise output');
});

Promise.resolve().then(() => {
    setTimeout(() => {
        console.log('Set Time Out - PROMISE ');
    }, 0);
});

// MAIN
// Set Time Out 0 
// Set Time Out 1 
// Promise output
// Set Time Out - PROMISE 