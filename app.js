let colorArray = ['green','red','blue','yellow'];
let pattern = [];
const nextSequence = () => {
    let number = Math.floor(Math.random() * 4)
    pattern.push(colorArray[number])
}

const playSequence = () =>
{
    for(let i = 0; i < pattern.length; i++)
    {
        $(`.${pattern[i]}`).fadeOut(150).fadeIn(150)
    }
}

nextSequence()
console.log(pattern)
playSequence()