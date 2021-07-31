console.log("Hello World");

function welcomePerson(person:Person):string { //need the person obj thats a string
    console.log(`Hey ${person.firstName} ${person.lastName}`)
    return `Hey ${person.firstName} ${person.lastName}`;
}

const james = {
    firstName: "James",
    lastName: "Quack"
}

welcomePerson(james)

interface Person {
    firstName: string, //properties
    lastName: string
}

for (let i = 0; i < 1000; i++){
    console.log(i, "Hello World!") 
}

let list = [['0','0','0'], ['0','0','0'], ['0','0','0']]
let string1 = ''

for (let i = 0; i < list.length; i++){
    for (let j = 0; j < list.length; j++){
        string1 = string1 + list[i][j].toString() 
    }
    console.log(string1)
    string1 = ''
}