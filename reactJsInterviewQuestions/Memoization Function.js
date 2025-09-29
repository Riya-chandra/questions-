// Question: Optimize factorial calculation.

function memoize(fn){
    const cache={};
    return function(n){
        if(cache[n]) return cache[n];
        const result=fn(n);
        cache[n]=result;
        return result;
    };
}

const fact=memoize(function fac(n){
if(n==0) return 1;
return n* fact(n-1);
});


console.log(fact(5)); //120
console.log(fact(6)); //720
