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
var list = [['0', '0', '0'], ['0', '0', '0'], ['0', '0', '0']];
var string1 = '';
for (var i = 0; i < list.length; i++) {
    for (var j = 0; j < list.length; j++) {
        string1 = string1 + list[i][j].toString();
    }
    console.log(string1);
    string1 = '';
}
if (1 + 2 == 3) {
    console.log('Yes!');
}
