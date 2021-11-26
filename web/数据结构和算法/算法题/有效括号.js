// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

var isValid = function(s) {
    // 成对出现，所以模为0
    if(s.length % 2) {
        return false;
    }
    let arr = [];
    let map = new Map();
    map.set("(",")");
    map.set("{","}");
    map.set("[","]");
    for(let i = 0; i < s.length; i++){
        const c = s[i];
        if(map.has(c)){
            arr.push(c);
        }else{
            const top = arr[arr.length - 1];
            if(map.get(top) == c){
                arr.pop();
            }else{
                return false;
            }
        }
    }
    return arr.length == 0;
}

var test1 = "{[()]}";
var test2 = "{{{{{{{{";
console.log(isValid(test1));    // true
console.log(isValid(test2));    // false
