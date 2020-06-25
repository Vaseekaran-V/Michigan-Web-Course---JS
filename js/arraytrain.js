var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

function loadFruits(){
    document.getElementById('fruits').innerHTML = fruits;
}

function addFruit() {
    var fruit = prompt("What is your favourite fruit?");
    fruits[fruits.length] = fruit;
    loadFruits();
}