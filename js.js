// Splash screen
document.querySelector(".control-buttons span").onclick = function(){
    do {
        var yourName = prompt('Enter your name')    
    } while (yourName==null || yourName=='');
    document.querySelector(".control-buttons").remove();
    document.querySelector('.name span').innerHTML=yourName;
}
document.getElementById('start').play()
var duration = 1000;
let blockContainer = document.querySelector(".memory-game-blocks");

// Like Array.from
let blocks = Array.from(blockContainer.children)
let orderRange = [...Array(blocks.length).keys()]

console.log(blocks)
blocks.forEach((block,index) => {
    let order = Math.floor(Math.random() * blocks.length)
    length--;
    block.style.order = order;
    block.addEventListener('click',function(){
        flip(block)
    })
});


function flip(block){
    block.classList.add('is-flipped')
    // collect all flipped cards
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'))
    if(allFlippedBlocks.length==2){
        console.log('there is 2 element')
        stopClicking();
        hasMatched(allFlippedBlocks)
    }
}
function stopClicking(){
    blockContainer.classList.add('no-clicking')
    setTimeout(()=>{
        blockContainer.classList.remove('no-clicking')
    },duration)
}
function hasMatched(allFlippedBlocks){
    firstBlock = allFlippedBlocks[0];
    secondBlock = allFlippedBlocks[1]
    if(firstBlock.dataset.technology === secondBlock.dataset.technology){
        document.getElementById('success').play()
            firstBlock.classList.remove('is-flipped')
            secondBlock.classList.remove('is-flipped')
        firstBlock.classList.add('has-match')
        secondBlock.classList.add('has-match')
    }
    else{
        document.getElementById('failed').play()
        document.querySelector('.tries span').textContent++;
        setTimeout(() => {
            firstBlock.classList.remove('is-flipped')
            secondBlock.classList.remove('is-flipped')
        }, duration);
    }
}
