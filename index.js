var Animal;
(function (Animal) {
    Animal["name"] = "cat";
    Animal[Animal["age"] = 12] = "age";
})(Animal || (Animal = {}));
function fn(name) {
    console.log(name);
}
fn(Animal.name);
