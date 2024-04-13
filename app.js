let colorArray = ['green','red','blue','yellow'];
let pattern = [];
let clickpattern = [];
let audio = document.createElement('audio');
let level = 0;
let clickCount = -1;
let i = 0
let title = $('.title')[0];
const nextSequence = () => {
    level ++;
    title.innerHTML = `Level ${level}`
    let number = Math.floor(Math.random() * 4)
    pattern.push(colorArray[number])
    // playSequence()
    timer()
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

const playSequence = (i) => {
    $(`.${pattern[i]}`).fadeOut(150).fadeIn(150)
    playSound(pattern[i])
} 

const timer = () => {
    playSequence(i)
    i += 1
    setTimeout( () => {
        if(i < pattern.length)
        {
            timer()
        }
        else{
            i = 0;
        }
    }, 1000)
}
const animate = (color) => {
    $(`.${color}`).addClass('pressed')

    setTimeout( () => {
        $(`.${color}`).removeClass('pressed')
    }, 100)
}

const checkAnswer = (clicked) => {
    clickCount ++
    console.log(`count = ${clickCount}`)
    // console.log(`pattern  = ${pattern}`)
    if(clickCount < pattern.length)
    {
        if(pattern[clickCount] === clicked)
        {
           console.log('correct')
            // continueCheck(clickCount)
        }
        else{
            console.log('wrong')
            clickCount = -10;
            gameOver()
        }
    }

    if (clickCount === pattern.length - 1)
    {
        clickCount = -1
        setTimeout(nextSequence(),2000)
    }
    
    
}

const gameOver = () => {
    $('body').addClass('gameOver')
    title.innerHTML = "Game Over, Press Any Key to Restart!"
    setTimeout(()=>{
        $('body').removeClass('gameOver');
    }, 200)
    audio.setAttribute('src', './sounds/wrong.mp3')
    audio.play()
}
$('.btn').click( (event) => {
    let clicked = event.target.classList[1]
    console.log(pattern)
    playSound(clicked)
    animate(clicked)
    if(clickCount !== -10)
    {
    checkAnswer(clicked)
    }
    else{
        gameOver()
    }
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
