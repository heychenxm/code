var fn = function(root){
    if(!root) return;
    let stack = [];
    let p = root;
    while(stack.length || p){
        while(p){
            stack.push(p);
            p = p.left;
        }
        let temp = stack.pop();
        console.log(temp.val);
        p = temp.right;
    }
}