// spread Operator

const odd=[1,3,5];
const combined=[2,4,6, ...odd];
console.log(combined);
// const combined=[...odd,2,4,6];   SyntaxError: Identifier 'combined' has already been declared
const combined_1=[...odd,2,4,6]; 
console.log(combined_1);


const a=[1,2];
const b=[3,4];
const res=[...a,...b]; // [1,2,3,4]
console.log(res);

const og=[1,2,3];
const newarr=[...og];
console.log(newarr);

function sum(a,b,c){
    console.log(a + b+ c);
}
const numbers=[10,20,30];
sum(...numbers);





// Object Literal
function createMachine(name, status){
    return{
        name: name,
        status: status
    };
}
console.log(createMachine("PESu",true))

const m1={
    name: "Drill",
    status:"Active"
};
console.log(m1);

const m2={
    name:"Lathe",
    status:"Inactive"
};
console.log(m2);

// With function(dynamic creation)

const m3= createMachine("Drill", "Active");
const m4=createMachine("Lathe", "InActive");