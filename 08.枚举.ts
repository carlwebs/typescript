enum Animal {
    name="cat",
    age=12
}
function fn(name: Animal) {
    console.log(name);
}
fn(Animal.name);