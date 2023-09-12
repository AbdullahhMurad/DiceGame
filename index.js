document.querySelector("img").setAttribute("src", "./images/dice" + Math.floor(Math.random()*6+1) + ".png");
document.querySelector("img.img2").setAttribute("src", "./images/dice" + Math.floor(Math.random()*6+1) + ".png");

var img1 = document.querySelector("img").getAttribute("src");
var img2 = document.querySelector("img.img2").getAttribute("src");

if (img1 > img2){
    document.querySelector("h1").textContent = "Player 1 Wins!";
}else if (img2 > img1){
    document.querySelector("h1").textContent = "Player 2 Wins!";
}else{
    document.querySelector("h1").textContent = "It's a draw!";
}
