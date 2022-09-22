

const button = document.getElementsByClassName("button");


let count = 0;

function moveButton() {
    count++;
    let randX = Math.floor(Math.random() * (window.innerWidth - 100));
    if (count < 10) {
        button.animate([
            { transform: "scale(0.8)", "left": randX + "px" },
            { transform: "scale(1.2)", "bottom": 100 + "px" }
        ], { duration: 2000 })
    } else {
        button.animate([
            { "left": randX + "px" },
            { "bottom": 100 + "px" },
        ], { duration: 5000 })
    };
};


button.addEventListener('mouseenter', moveButton);
