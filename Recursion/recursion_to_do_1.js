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

/*function floodFill(canvas2d, startXY, newColor){
    startx = startXY[0];
    starty = startXY[1];
    console.log(startx);
    startColor = canvas2d[starty][startx];
    console.log(starty);
    canvas2d[starty][startx] = newColor;
    if(canvas2d[starty+1][startx] == startColor){
        canvas2d[starty+1][startx]  = newColor;
    }
    else if(canvas2d[starty-1][startx] == startColor){
        canvas2d[starty-1][startx]  = newColor;
    }
    else if(canvas2d[starty][startx+1] == startColor){
        canvas2d[starty][startx+1]  = newColor;
    }
    else if(canvas2d[starty][startx+1] == startColor){
        canvas2d[starty][startx+1]  = newColor;
    }
    else if(){
        return canvas2d;
    }

    return floodFill(canvas2d, [ starty, startx], newColor);
}

canvas = [
            [3,2,3,4,3],
            [2,3,3,4,0],
            [7,3,3,5,3],
            [6,5,3,4,1],
            [1,2,3,3,3]
]
console.log(floodFill(canvas, [2,2], 1));*/