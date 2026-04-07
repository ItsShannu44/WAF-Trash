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


let person={
    fname: "Madison",
    lname: "Jones"
};

//ES5
let fname1= person.fname;
let lname1=person.lname;
console.log(fname1+" "+lname1);
