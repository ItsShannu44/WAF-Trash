function Person(name){
    this.name=name;
}

Person.prototype.getName=function()
{
    return this.name;
};

var Mad = new Person("Madison Jones");
console.log(Mad.getName());