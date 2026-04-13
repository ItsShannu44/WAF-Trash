function filterNames(names, letter) {
    return names.filter(name => name.startsWith(letter));
}

console.log(filterNames(['Rameshwara', 'Malikarjuna', 'Prakruthi', 'Namratha', 'Manohar'], 'M'));

function sortByAge(arr)
{
    return arr.sort((a,b)=>a.age - b.age);
}
const people=[{ name: 'Rameshwar', age: 21},{name: 'Manohar', age: 20},{ name: 'Prakruthi', age: 23}];
console.log(sortByAge(people));