function preorderFn(root) {
    let result = [];
    const preorder = (n) =>{
        if(!n) return;
        result.push(n.val);
        preorder(n.left);
        preorder(n.right);
    }
    preorder(root);
    return result;
}