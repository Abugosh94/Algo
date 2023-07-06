//Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, 
//with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second array
//– move values within the array that you are given. As always, do not use built-in array functions such as splice().

function reverse(arr){
    if(arr.length%2 == 0){
        for(i=0; i<arr.length/2; i++){
            temp = arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1] = temp;
        }
        return arr;
    }
    else{
        for(i=0; i<arr.length/2+1; i++){
            temp = arr[i];
            arr[i] = arr[arr.length-i-1];
            arr[arr.length-i-1] = temp;
        }
        return arr;
    }
}

//both odd and even length cases
console.log(reverse([1,23,4,5.2,56]));
console.log(reverse([5,6,878,54,23,2]));

//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 
//'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. Operate in-place: given ([1,2,3],1), 
//change the array to [3,1,2]. Don't use built-in functions.
//Second: allow negative shiftBy (shift L, not R).
//Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
//Fourth: minimize the touches of each element.

function rotateArr(arr, val){
    if(val > 0){
        temp = arr[0];
        lastval = arr[arr.length-1];
        for(i=0;i<arr.length;i++){
            if(i == arr.length-1){
                arr[0] = lastval;
            }
            else if (temp){
                temp2 = arr[i+val];
                arr[i+val] = temp;
                temp = false;
            }
            else if(temp2){
                temp = arr[i+val];
                arr[i+val] = temp2;
                temp2 = false;
            }
        }
    }
    if(val < 0){
        temp = arr[arr.length-1];
        firstVal = arr[0];
        for(i=arr.length-1;i>=0;i--){
            if(i == 0){
                arr[arr.length-1] = firstVal;
                
            }
            else if (temp){
                temp2 = arr[i+val];
                arr[i+val] = temp;
                temp = false;
            }
            else if(temp2){
                temp = arr[i+val];
                arr[i+val] = temp2;
                temp2 = false;
            }
        }
    }
    return arr;
}

console.log(rotateArr([1,2,3],1));
console.log(rotateArr([1,2,3],-1));

//Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. Given arr and values min and max, 
//retain only the array values between min and max. Work in-place: return the array you are given, with values in original order. No built-in array functions.

function filterRange(arr, min, max){
    arr2=[];
    j = 0;
    for(i=0;i<arr.length;i++){
        if(arr[i]== min){
            while(arr[i]!=max){
                arr2[j] = arr[i];
                i++;
                j++;
            }
            arr2[j] = arr[i];
        }
    }
    return arr2;
}

console.log(filterRange([2,3,5,1,4,5,67,8,9], 1,8));
console.log(filterRange([51,6,9,7,57,32,14,6,87,3], 57,6));

//Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. 
//Return a new array containing the first array's elements, followed by the second array's elements. 
//Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

function arrConcat(arr, arr2){
    newArr=[];
    newArrlength = arr.length + arr2.length;
    i = 0;
    j = 0;
    while (i<arr.length){
        newArr[i] = arr[i];
        i++;
    }
    while (j<arr2.length){
        newArr[i] = arr2[j];
        i++;
        j++;
    }
    return newArr;
}

console.log(arrConcat( ['a','b'], [1,2] ));
console.log(arrConcat( ['testing', 'test', 'more testing'], [5,2,5,6,8,9,0] ));
console.log(arrConcat( [5,2,5,6,8,9,0], ['testing', 'test', 'more testing']));