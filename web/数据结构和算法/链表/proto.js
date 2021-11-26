// const obj = {};
// const func = ()=>{};
// const arr = [];

// instanceof原理 ，并代码实现
const instanceOf = (A, B) => {
    let p = A;
    while(p){
        if(p == B.prototype){
            return true
        }
        p = p.__proto__
    }
    return false;
}

// console.log(instanceOf([], Array))

// var foo = {}, F = function(){}
// Object.prototype.a = 'value a';
// Function.prototype.b = 'value b';

// // foo -> Object.prototype -> null
// console.log(foo.a);
// console.log(foo.b); // undefined


// // F -> Function.prototype -> Object.prototype -> null
// console.log(F.a);
// console.log(F.b);