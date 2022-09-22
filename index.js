
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById("button");

    function moveButton() {
        let randX = Math.floor(Math.random() * (window.innerWidth - 480));
        button.animate([
            { transform: "scale(0.8)", "left": randX + "px" },
            { transform: "scale(1.2)", "bottom": 100 + "px" }
        ], { duration: 2000 })
    };

    button.addEventListener('mouseenter', moveButton);
})

