// Memoization is an optimization technique that stores the results of expensive function calls 
// and returns the cached result when the same inputs occur again. It's particularly useful for 
// recursive functions and complex calculations.

function memo(){
    const cache={};
    return function fib(n){
        if(n in cache) {
             return cache[n];
        }
        if(n<=1) return n;
        const result=fib(n-1)+fib(n-2);
        cache[n]=result;
        return result;
    }
};

const fib=memo();
fib(40);