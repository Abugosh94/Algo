//Given a sorted array and a value, recursively determine whether value is found within array. 

function rBinarySearch(arr, n){
    let x = arr.length-1;
    if(arr[x] == n){
        return true;
    }
    if(arr[x] == null){
        return false;
    }
    arr.pop();
    return rBinarySearch(arr, n);
}

console.log(rBinarySearch([1,3,5,6],4)); //false
console.log(rBinarySearch([4,5,6,8,12],5)); //true


//Given two integers, create rGCF(num1,num2) to recursively determine Greatest Common Factor (the largest integer dividing evenly into both).

function rGCF(a,b){
    if (a==b){
        return a;
    }
    else if (a > (b**3)){
        return rGCF(a-(b**3), b);
    }
    else if (a > (b**2)){
        return rGCF(a-(b*b), b);
    }
    else if (a>b){
        return rGCF(a-b,b);
    }
    else if (b > (a**3)){
        return rGCF(a,b-a**3);
    }
    else if (b > (a**2)){
        return rGCF(a,b-a**2);
    }
    return rGCF(a,b-a);
}

console.log(rGCF(25,10));
console.log(rGCF(123456,987654));