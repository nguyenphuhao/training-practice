const cp = require('child_process');
cp.exec('cd ../', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data);
});