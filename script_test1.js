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
