class Student{

    constructor(name)
    {
        this.setName(name);
    }
    getName()
    {
        return this.name;
    }
    setName(newName)
    {
        newName=newName.trim();
        if(newName === '')
        {
            throw 'The name cannot be empty';
        }
        this.name= newName;
    }
}
let student = new Student('Laila Star');
console.log(student);

student.setName('Madison Jones');
console.log(student.getName());