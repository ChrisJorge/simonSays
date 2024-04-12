let colorArray = ['green','red','blue','yellow'];
let pattern = [];
let audio = document.createElement('audio')
const nextSequence = () => {
    let number = Math.floor(Math.random() * 4)
    pattern.push(colorArray[number])
}

const playSequence = () =>
{
    for(let i = 0; i < pattern.length; i++)
    {
        $(`.${pattern[i]}`).fadeOut(150).fadeIn(150)
        switch (pattern[i])
        {
            case 'green':
                audio.setAttribute('src', './sounds/green.mp3');
                audio.play();
                break;
            case 'red':
                audio.setAttribute('src', './sounds/red.mp3');
                audio.play();
                break;
            case 'blue':
                audio.setAttribute('src', './sounds/blue.mp3');
                audio.play();
                break;
            case 'yellow':
                audio.setAttribute('src', './sounds/yellow.mp3')
                audio.play();
                break;
            default:
                break;
        }
    }
}

nextSequence()
console.log(pattern)
playSequence()