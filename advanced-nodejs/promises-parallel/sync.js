
const delay = time => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log(`${new Date(Date.now())} setTimeOut: ${time}`);
        resolve(time);
    }, time)
});


async function test(){
    const arr = [
        delay(1000),
        delay(3000),
        delay(2000),
        delay(4000)
    ];

    for (const p of arr) {
        const r = await p;
        console.log(r);
    }

    console.log("End: " + new Date(Date.now()));
}

console.log("Start: " + new Date(Date.now()));
test();

// Promise.all([
//     delay(1000),
//     delay(3000),
//     delay(2000),
//     delay(4000)
// ]).then(console.log);