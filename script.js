<<<<<<< HEAD
let character = document.getElementById("character");
let block = document.getElementById("block");
let counter=0;
function jump(){
    if(character.classList == "animate"){return}
    character.classList.add("animate");
    setTimeout(function(){
        character.classList.remove("animate");
    },300);
}
let checkDead = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    if(blockLeft<20 && blockLeft>-20 && characterTop>=130){
        block.style.animation = "none";
        alert("Game Over. score: "+Math.floor(counter/100));
        counter=0;
        block.style.animation = "block 1s infinite linear";
    }else{
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);
=======
function myFunction(){
const para = document.createElement("p");
const node = document.createTextNode("This is Javascripted atuomated paragraph.");
para.appendChild(node);

const element = document.getElementById("div3");
let child = document.getElementById("p3");
element.insertBefore(para, child,);


const head = document.createElement("h1");
const bond = document.createTextNode("This is Javascripted atuomated Header.");
head.appendChild(bond);

const inbound = document.getElementById("div3");
let small = document.getElementById("h1");
inbound.insertBefore(head, small);
}
>>>>>>> 65ccf5ed4b5cc6b7cea45922e1e613c0bf3568e6
