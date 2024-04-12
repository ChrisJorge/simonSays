let colorArray = ['green','red','blue','yellow'];
let pattern = [];
const nextSequence = () => {
    let number = Math.floor(Math.random() * 4)
    pattern.push(colorArray[number])
}

console.log(nextSequence())
console.log(pattern)

$(h1).remove()