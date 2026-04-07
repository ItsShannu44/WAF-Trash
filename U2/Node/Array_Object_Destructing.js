function getScores(){
    return[70,80,90];
}
//ES5
let scores=getScores();
let x=scores[0],y=scores[1],z=scores[2];
console.log(x, y, z);

//ES6
let[a,b,c]=getScores();
console.log(a, b, c)