function getHelloWorld() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("Hello World");
        }, 1000);
    });
}


getHelloWorld().then(s => {
    console.log(s);
});
