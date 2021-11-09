// Javascript Objects Practical

let tutorial = {
    topic: 'JavaScript',
    trainer: 'VedaGna',
    duration: 10
}

console.log(`Topic: ${tutorial.topic}`);
console.log(`Topic: ${tutorial.trainer}`);
console.log(`Topic: ${tutorial.duration}`);

let text = '';
let x;
for (x in tutorial) {
    text += tutorial[x] + ', '
}
document.write(text)