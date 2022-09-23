//quick and dirty JS, this is just a joke
const frases = [
    "Errou...",
    "Falta pouco...",
    "Tente de novo...",
    "Opa...",
    "Ops...",
    "Pensou que seria fácil..."
]

let cheatTimer = null
let cheatValue = ''
let checkBoxCheat = null
let labelCheat = null


function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min, 10);
}

function createCheckbox() {
    checkBoxCheat = document.createElement('input')
    checkBoxCheat.hidden = true
    checkBoxCheat.type = 'checkbox'
    checkBoxCheat.id = 'checkbox'


    checkBoxCheat.addEventListener('change', (e) => {
        if (e.target.checked) {
            e.target.disabled = true
            button.replaceWith(button.cloneNode(true));
            label.innerText = 'Chegou o momento...'
            button.addEventListener('mouseup', () => {
                label.innerText = 'Parabéns? Eu acho?'
            })
        }
    })

    labelCheat = document.createElement('label')
    labelCheat.hidden = true
    labelCheat.htmlFor = 'checkbox'
    labelCheat.innerText = 'Eu sei o que estou fazendo'

    document.body.appendChild(checkBoxCheat)
    document.body.appendChild(labelCheat)
}

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("button");
    const label = document.getElementById("label");
    const cheat = document.getElementById("cheat");
    createCheckbox()
    const sounds = [
        new Audio('ole.mp3'),
        new Audio('faustao.mp3')
    ]

    sounds.forEach(audio => audio.volume = 0.1)

    function moveButton(event) {
        let randX = Math.floor(Math.random() * window.innerWidth);
        let randY = Math.floor(Math.random() * window.innerHeight);

        let newX = event.clientX + randX
        let newY = event.clientY + randY

        if (newX + 60 > window.innerWidth) {
            newX = event.clientX - 120
        }
        if (newX < 0) {
            newX = 0
        }
        if (newY + 60 > window.innerHeight) {
            newY = event.clientY - 120
        }
        if (newY < 0) {
            newY = 0
        }

        button.style.left = newX + "px"
        button.style.top = newY + "px"
        label.innerText = frases[getRandomArbitrary(0, frases.length)]
        sounds[getRandomArbitrary(0, sounds.length)].play()
    };

    button.addEventListener('mouseenter', moveButton);

    document.addEventListener('keyup', (e) => {
        if (!cheatTimer) {
            cheatTimer = setTimeout(() => {
                clearCheat()
            }, 5000)
        }

        if (e.key === 'Backspace') {
            clearCheat()
            return
        }

        cheatValue += e.key   

        cheat.innerText = cheatValue
        if (cheatValue === 'deploy'.repeat(3)) {
            toggleCheat()
            clearCheat()
        }
    });
})

function clearCheat() {
    cheat.innerText = ''
    cheatValue = ''
    clearTimeout(cheatTimer)
    cheatTimer = null
}

function toggleCheat() {
    checkBoxCheat.hidden = !checkBoxCheat.hidden
    labelCheat.hidden = !labelCheat.hidden
}

