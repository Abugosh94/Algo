//Create a function that, given a string, returns all of that string’s contents, but without blanks. 
function removeBlanks(str){
    new_str ="";
    for(i=0;i<str.length;i++){
        if(str[i] != " "){
            new_str+= str[i];
        }
    }
    return new_str;
}


console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));

//Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().
function getDigits(str){
    digits = "";
    for(i=0; i<str.length; i++){
        if(!isNaN(str[i])){
            digits += str[i];
        }
    }
    return digits;
}


console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

//Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().
function acronym(str){
    if(str[0] == " "){
        new_str = "";
    }
    else{
        new_str = str[0];
    }
    for(i=0;i<str.length;i++){
        if(str[i]== " "){
            new_str += str[i+1];
        }
    }
    return new_str.toUpperCase();
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));
console.log(acronym("Live from New York, it's Saturday Night!"));

//Create a function that, given a string, returns the number of non-space characters found in the string. 
function countNonSpaces(str){
    counter = 0;
    for(i=0;i<str.length;i++){
        if(str[i] != " "){
            counter++;
        }
    }
    return counter;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));

//Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

function removeShorterStrings(arr, len){
    new_arr = [];
    j = 0;
    for(i=0;i<arr.length;i++){
        if (arr[i].length >= len){
            new_arr[j] = arr[i];
            j++;
        }
    }
    return new_arr;
}

console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4));
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));