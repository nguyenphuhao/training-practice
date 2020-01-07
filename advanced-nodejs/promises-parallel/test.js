console.log('Message no. 1: Sync');
setTimeout(function() {
   console.log('Message no. 2: setTimeout');
}, 0);
var promise = new Promise(function(resolve, reject) {
    console.log('Promise Handler');
    setTimeout(() => {
        
        console.log('Promise Handler - COMPLETED');
        resolve();
    }, 2000);
});
var promise2 = new Promise(function(resolve, reject) {
    console.log('Promise Handler 2');
    setTimeout(() => {
        console.log('Promise Handler 2 - COMPLETED');
        resolve();
    }, 1000);
});
promise.then(function(resolve) {
   console.log('Message no. 3: 1st Promise');
})
.then(function(resolve) {
   console.log('Message no. 4: 2nd Promise');
});

promise2.then(function(resolve) {
    console.log('Message no. 32: 12st Promise');
 })
 .then(function(resolve) {
    console.log('Message no. 42: 22nd Promise');
 });
console.log('Message no. 5: Sync');