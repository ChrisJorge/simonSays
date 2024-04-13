let colorArray = ['green','red','blue','yellow'];
let pattern = [];
let clickpattern = [];
let audio = document.createElement('audio');
let level = 0;
let title = $('.title')[0];
const nextSequence = () => {
    level ++;
    title.innerHTML = `Level ${level}`
    let number = Math.floor(Math.random() * 4)
    pattern.push(colorArray[number])
}

const playSound = (sound) => {

    switch(sound)
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

const playSequence = () =>
{
    for(let i = 0; i < pattern.length; i++)
    {
        $(`.${pattern[i]}`).fadeOut(150).fadeIn(150)
        playSound(pattern[i])
        
    }
}

const animate = (color) => {
    $(`.${color}`).addClass('pressed')

    setTimeout( () => {
        $(`.${color}`).removeClass('pressed')
    }, 100)
}

$('.btn').click( (event) => {
    let clicked = event.target.classList[1]
    clickpattern.push(clicked)
    playSound(clicked)
    animate(clicked)
})





 
$(document).on('keypress', () => 
{
    let started = true
    console.log(started)
    nextSequence()
    playSequence()
    if(started)
    {
        console.log('event listener off')
        $(document).off('keypress');
    }
})
