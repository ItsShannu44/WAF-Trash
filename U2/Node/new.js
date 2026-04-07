var msg="hii"
console.log(msg);

function say(message="Hey"){
    console.log(message);
}
say();
say("Heyyyy");

//rest parameter
function fn(a,b,...args){
    console.log(a);
    console.log(args);
}
fn(1, 2, 3, "A", "B", "C", "D");

