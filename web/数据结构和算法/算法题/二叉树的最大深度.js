
// 给定一个二叉树，找出其最大深度。

// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。

// var maxDepth = function(root) {
//     let result = 0;
//     const dfs = (n, l) => {
//         if(!n) return;
//         if(!n.left && !n.right) result = Math.max(result, l)
//         dfs(n.left, l+1);
//         dfs(n.right, l+1);
//     }
//     dfs(root, 1)
//     return result;
// }

var data = [
    {name: "A"},
    {name: "B", children: [
        {name: "A"},
        {name: "B"}
    ]},
    {name: "A", children: [
        {name: "C"}
    ]},
    {name: "B", children: [
        {name: "C"}
    ]}
]

