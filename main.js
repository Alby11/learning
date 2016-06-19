'use strict';

var myWorker1 = new Worker('worker1.js');
var myWorker2 = new Worker('worker2.js');

let sendToWorker1 = function () {
    setTimeout(() => myWorker1.postMessage('Message to myWorker1'), 0);
}

let sendToWorker2 = function () {
    setTimeout(() => myWorker2.postMessage('Message to myWorker2'), 0);
}

myWorker1.onmessage = (message) => {
    console.log(message.data);
}

myWorker2.onmessage = (message) => {
    console.log(message.data);
}

setInterval(()=>sendToWorker1(), 1000);
document.getElementById('loop').addEventListener('click', sendToWorker2);
document.getElementById('resp').addEventListener('click', ()=>console.log(`I'm Alive!!!!!`));
