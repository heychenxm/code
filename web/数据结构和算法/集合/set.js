let mySet = new Set();

// add
mySet.add(1);
mySet.add(5);
mySet.add(5);   // 具有唯一性，所以不会添加进入
mySet.add("hello world");
let o = {a: 1, b: 2};
mySet.add(o);
mySet.add({a: 1, b: 2});

// has
const has = mySet.has(1);

// delete
const result = mySet.delete(3);

for (const [key,value] of mySet.entries()) {
    console.log(key, value);    // key和value是一样的
}

// set 、array互相转化
const myArr = [...mySet];
const myArr1 = Array.from(mySet);
const mySet1 = new Set([1,2,3,4]);

// 交集
const intersection = new Set([...mySet].filter(x=>mySet1.has(x)));

// 差集
const difference = new Set([...mySet].filter(x=>!mySet1.has(x)));