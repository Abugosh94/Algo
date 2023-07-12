//Write a recursive function that given a number returns the sum of integers from 1 to that number. Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
function rSigma(n){
    if (n == 1){
        return 1;
    }
    else if(n < 1){
        return 0;
    }
    return Math.floor(n)+rSigma(Math.floor(n)-1);
}

console.log(rSigma(5));
console.log(rSigma(2.5));
console.log(rSigma(-1));

function rFact(n){
    if(n==0){
        return 1;
    }
    return Math.floor(n)* rFact(Math.floor(n)-1);
}

console.log(rFact(0));
console.log(rFact(3));
console.log(rFact(6.5));