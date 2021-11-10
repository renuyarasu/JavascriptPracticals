// Variable Hoisting

var number = 10;

const display = () => {
    console.log(number);
    var number = 10;
}
display(); // undefined

// Variable hoisting means the JavaScript engine moves the variable declarations to the top of the script