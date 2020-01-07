let a = {name: "Hao"};
let b = {name: "Luong"};

console.log(a);
delete a;
console.log(a);

console.log(b);
delete b.name;
console.log(b);

function test(){
    let a1 = {name: "Hao1"};
    console.log(a1);
    delete a1;
    console.log(a1);
}
test();