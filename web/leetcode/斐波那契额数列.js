var fib = function(n) {
    if(n < 2){
        return n;
    }

    let p = 0;
    let q = 0; 
    let result = 1;
    for(let i = 2; i <= n; i ++){
        p = q;
        q = r;
        r = p + q;
    }
    return r;
};