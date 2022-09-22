// //DOM elements

// const button = document.getElementById("btn");
// const btnDiv = document.querySelector(".button");
// const title = document.querySelector(".challenge");
// const sun = document.getElementById('reward');
// const memeContainer = document.querySelector('.meme');
// const prince = document.querySelector(".prince-small");

// //Functions

// const thePrince = () => {
//     memeContainer.innerHTML = "";
//     btnDiv.innerHTML = "";
//     sun.innerHTML = " Now you can live happily ever after :)";
//     const newDiv = document.createElement('div');
//     const princeIMG = document.createElement('img');
//     princeIMG.classList.add("prince-small");
//     princeIMG.src = "img/prince.png";
//     newDiv.appendChild(princeIMG);
//     prince.appendChild(newDiv);
//     setTimeout(() => {
//         princeIMG.classList.add("prince-big");
//     }, 900);
//     title.innerHTML = "Hooray! You did it!";
//     button.removeEventListener('mouseenter', moveButton);
//     button.removeEventListener('click', thePrince);
// };

// const theMeme = () => {
//     const meme = document.createElement('img');
//     meme.classList.add("meme");
//     meme.src = "https://i.imgflip.com/2igauj.jpg";
//     memeContainer.appendChild(meme);
// };

// let count = 0;

// function moveButton() {
//     count++;
//     let randX = Math.floor(Math.random() * (window.innerWidth - 100));
//     if (count < 10) {
//         button.animate([
//             { transform: "scale(0.8)", "left": randX + "px" },
//             { transform: "scale(1.2)", "bottom": 100 + "px" }
//         ], { duration: 2000 })
//     } else if (count == 10) {
//         theMeme();
//     } else {
//         button.animate([
//             { "left": randX + "px" },
//             { "bottom": 100 + "px" },
//         ], { duration: 5000 })
//     };
// };

// //Event Listeners

// button.addEventListener('mouseenter', moveButton);

// button.addEventListener('click', thePrince);
