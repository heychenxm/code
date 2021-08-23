const {merge} = require("webpack-merge");

const a = [1,2,3,4];
const b = {a: 1, b: 2, c: 3};
const result = merge(a, b);
// 🍞 result:  { '0': 1, '1': 2, '2': 3, '3': 4, a: 1, b: 2, c: 3 }
console.log('%c 🍞 result: ', 'font-size:12px;background-color: #33A5FF;color:#fff;', result);

const c = {a: '陈小名', b: 'Hello world', d: 5}
const result1 = merge(a,b,c);
console.log('%c 🥔 result1: ', 'font-size:12px;background-color: #EA7E5C;color:#fff;', result1);