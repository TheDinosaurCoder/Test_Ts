console.log("Hello World");
function welcomePerson(person) {
    console.log("Hey " + person.firstName + " " + person.lastName);
    return "Hey " + person.firstName + " " + person.lastName;
}
var james = {
    firstName: "James",
    lastName: "Quack"
};
welcomePerson(james);
for (var i = 0; i < 1000; i++) { 
    console.log(i, "Hello World!");
}
