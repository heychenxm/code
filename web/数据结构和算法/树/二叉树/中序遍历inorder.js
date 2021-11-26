const bt = require('./bt.js');

// 左 根 右（递归）
// const inorder = (root)=>{
//     if(!root) return;
//     inorder(root.left);
//     console.log(root.val);
//     inorder(root.right);
// }

const inorder = (root) =>{
    if(!root) return;
    inorder(root.left);
    console.log(root.val);
    inorder(root.right);
}



// const inorder = (root)=>{
//     if(!root) return;
//     const stack = [];
//     let p = root;
//     while(stack.length || p) {
//         while(p){
//             stack.push(p);
//             p = p.left;
//         }
//         const n = stack.pop();
//         console.log(n.val);
//         p = n.right;
//     }
// }

// inorder(bt);    // 4251637

// const inorder = (root) => {
//     if(!root) return;
//     var stack = [];
//     var p = root;
//     while(stack.length || p) {
//         // 循环p，直到所有左子树都进入栈中
//         while(p){
//             stack.push(p);
//             p = p.left;
//         }
//         const n = stack.pop();
//         console.log(n.val);
//         p = n.right;
//     }
// }
// inorder(bt)