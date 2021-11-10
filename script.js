// Link: https://dmitripavlutin.com/simple-but-tricky-javascript-interview-questions/

console.clear();

const length = 4;
const numbers = [];
var i;
for (i = 0; i < length; i++) {
    // does nothing
}
{
    // a simple block
    numbers.push(i + 1);
}

console.log(numbers); // [5]

