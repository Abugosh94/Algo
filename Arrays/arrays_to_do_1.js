//Given an array and an additional value, insert this value at the beginning of the array. You may use .push(), you are able do this without it though!
function pushFront(arr,y){
    var new_array= [];
    new_array[0] = y;
    for (i=1; i<=arr.length; i++){
        new_array[i] = arr[i-1];
    }
    return new_array;
}

console.log(pushFront([5,7,2,3], 8));
console.log(pushFront([99], 7));

//Given an array, remove and return the value at the beginning of the array.
//Prove the value is removed from the array by printing it. You may use .pop(), you are able do this without it though!
function popFront(arr){
    y = arr[0];
    z = [];
    for (i=0; i<arr.length-1; i++){
        z[i] = arr[i+1];
    }
    console.log(z)
    return y
}


console.log(popFront([0,5,10,15]));
console.log(popFront([4,5,7,9]));

//Given an array, index, and additional value, insert the value into array at given index.
//You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val). You may use .push(), you are able do this without it though!

function insertAt(arr, ind, val){
    arr2  = [];
    for (i=0; i<arr.length+1; i++){
        if(ind == i){
            arr2[i] = val;
        }
        else if (i > ind){
            arr2[i] = arr[i-1];
        }
        else{
            arr2[i] = arr[i];
        }
    }
    return arr2
}


console.log(insertAt([100,200,5], 2, 311));
console.log(insertAt([9,33,7], 1, 42));

//Given an array and an index into array, remove and return the array value at that index.
//Prove the value is removed from the array by printing it. Think of popFront(arr) as equivalent to removeAt(arr,0).

function removeAt(arr, ind){
    arr2 = [];
    for(i=0; i<arr.length; i++){
        if(i < ind){
            arr2[i] = arr[i];
        }
        else if (i>ind){
            arr2[i-1] = arr[i];
        }
    }
    console.log(arr2);
    return arr[ind];
}

console.log(removeAt([1000,3,204,77], 1));
console.log(removeAt([8,20,55,44,98], 3));

//BONUS: Swap Pairs
//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

function swap(arr){
    for(i=0; i<arr.length; i+=2){
        if(arr[i+1]){
            temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return arr
}

console.log(swap([1,2,3,4]));
console.log(swap(["Brendan",true,42]));

//Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together.
//If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, try to do it without any nested loops!

function removeDupes(arr){
    arr2 = [];
    ind = 0;
    arr2[0] = arr[0];
    for(i=0; i<arr.length; i++){
        if(arr[i] != arr2[ind]){
            ind ++;
            arr2[ind] = arr[i];
        }
    }
    return arr2;
}

console.log(removeDupes([-2,-2,3.14,5,5,10]));
console.log(removeDupes([9,19,19,19,19,19,29]));