// Splash screen
document.querySelector(".control-buttons span").onclick = function(){
    do {
        var yourName = prompt('Enter your name')    
    } while (yourName==null || yourName=='');
    document.querySelector(".control-buttons").remove();
    document.querySelector('.name span').innerHTML=yourName;
}
let duration = 1000;
let blockContainer = document.querySelector(".memory-game-blocks");

// Like Array.from
let blocks = Array.from(blockContainer.children)
let orderRange = [...Array(blocks.length).keys()]

blocks.forEach((block,index) => {
    let order = Math.floor(Math.random() * blocks.length)
    length--;
    block.style.order = order
});