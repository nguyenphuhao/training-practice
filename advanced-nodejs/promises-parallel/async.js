const delay = (time) => new Promise((resolve, rejects) => {
    setTimeout(() => {
        console.log('aaaaaaaaaaa', time);
        if (time > 200) {
            return rejects('AAAAAAAAAAAAAAa');
        }
        resolve(time);
    }, time);
});

const past = Date.now();

const a = [
    delay(100),
    delay(300),
    delay(200),
    delay(400)
];

//Promise.all([...a]).then((result)=> {  console.log('result: ', result)}).catch((err)=>{console.log(Date.now() - past);console.log('Error: ', err)});
// console.log(result);


async function test() {
    let result = [];

    for (let p of a) {
        try {
            const time = await p;
            result.push(time);
        } catch (error) {
            return error;

        }
    }

    return result;
}

(async () => {
    const a = await test();
    console.log(Date.now() - past);
    console.log(a);
})();
// const result1 = test().then(console.log);