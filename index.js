
const frases = [
    "Errou...",
    "Falta pouco...",
    "Tente de novo...",
    "Opa...",
    "Ops...",
    "Pensou que seria fácil..."
]


function getRandomArbitrary(min, max) {
    return parseInt(Math.random() * (max - min) + min, 10);
}

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("button");
    const label = document.getElementById("label");
 
    const sounds = [
        new Audio('ole.mp3'),
        new Audio('faustao.mp3')
    ]

    sounds.forEach(audio => audio.volume = 0.1)

    function moveButton(event) {
        console.log(event);

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
})

