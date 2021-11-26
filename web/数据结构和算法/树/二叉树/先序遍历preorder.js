const bt = require('./bt.js');

// 根 左 右
// const preorder = (root) => {
//     if(!root) return;
//     console.log(root.val);
//     preorder(root.left);
//     preorder(root.right);
// }

// const preorder = (root) => {
//     if(!root) return;
//     const stack = [root];
//     while(stack.length){
//         const n = stack.pop();
//         console.log(n.val);
//         // 根据栈的特点，后进先出
//         if(n.right) stack.push(n.right);
//         if(n.left) stack.push(n.left);
//     }
// }

// preorder(bt);   // 1245367

const preorder = (root) => {
    if(!root) return;
    const stack = [root];
    while(stack.length) {
        const n = stack.pop();
        console.log(n.val);
        if(n.right) stack.push(n.right);
        if(n.left) stack.push(n.left);
    }
}

