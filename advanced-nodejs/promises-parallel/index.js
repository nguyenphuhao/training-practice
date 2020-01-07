let counter = 0;
let interval;
//Tổng số hành động
const numberOfOperations = 10;
//Arguments cho mỗi hành động;
const listOfArguments = [];
//Delay các hành động để fake bất đồng bộ
const listOfDelays = [];

//Fill mảng argument và delay cho các hành động được thực thi
//Mỗi giá trị delay được ngẫu nhiên trong khoảng 1000 tới 10000 miliseconds
for (let i = 0; i < numberOfOperations; i++) {
    listOfArguments.push(i);
    listOfDelays.push(Math.ceil(Math.random() * 9) * 1000);
}

//Fake bất đồng bộ: resolve một mảng sau một khoảng thời gian tùy ý
//Tăng biến counter để theo dõi số promise được thực thi mỗi giây
const asyncOperation = index => {
    counter++;
    return new Promise(resolve => setTimeout(() => {
        console.log('Operation performed: ', index);
        counter--;
        resolve(index);
    }, listOfDelays[index]));
}

//Hàm in ra số Promise được thực thi mỗi giây (để theo dõi)
const watchCounter = () => {
    console.log('Promises running in the beginning: ', counter);
    if (interval) {
        clearInterval(interval);
    }
    interval = setInterval(() => {
        if (counter == 0) {
            clearInterval(interval);
            console.log('COMPLETED.');
        }
        console.log('Promises running:', counter);
    }, 1000);
}

async function take0() {
    //Quẩy
    const results = [];
    for (const argument of listOfArguments) {
        const index = await asyncOperation(argument);
        results.push(index);
    }
    return results;
}

async function take1() {
    //Running promises in parallel
    const listOfPromises = listOfArguments.map(asyncOperation);

    //Harvesting
    const results = [];
    for (const promise of listOfPromises) {
        const index = await promise;
        results.push(index);
    }
    return results;
}

async function take2() {
    const listOfPromises = listOfArguments.map(asyncOperation);
    //Lấy kết quả trả về;
    return await Promise.all(listOfPromises);
}

async function take3subtake0() {
    const concurrencyLimit = 5;
    let results = [];
    const batchesCount = Math.ceil(numberOfOperations / concurrencyLimit);

    for (let i = 0; i < batchesCount; i++) {
        
        const batchStart = i * concurrencyLimit;
        const batchArgs = listOfArguments.slice(batchStart, batchStart + concurrencyLimit);
        const batchPromises = batchArgs.map(asyncOperation);
        watchCounter();
        const batchResults = await Promise.all(batchPromises);
        results = results.concat(batchResults);
        
    }
    return results;
}

//take0();
//take2();
take3subtake0();
