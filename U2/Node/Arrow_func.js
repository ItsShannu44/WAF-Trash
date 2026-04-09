let add = function(x,y)
{
    return x+y;
};
console.log(add(10,20));

let addition=(x,y) =>x+y;
console.log(addition(10,50));


// function Person(name)
// {
//     this.name=name;
// }

//Consice with the arrow function syntax
let numbers=[4,2,6];
numbers.sort((a,b)=>b-a);
console.log(numbers);