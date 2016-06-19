'use strict';

var myWorker1 = new Worker('worker1.js');
var myWorker2 = new Worker('worker2.js');

let sendToWorker1 = function () {

    setInterval(()=>setTimeout(() => myWorker1.postMessage('Message to myWorker1'), 0), 1000);
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

function* aGenerator1() {
    for (let i = 0; i <= 10; i++) {
        let aYield = yield;
        console.log(aYield + i);
    }
    console.log('FINISHED 1');
}

function* aGenerator2() {
    for (let i = 0; i <= 10; i++) {
        let aYield = yield;
        console.log(i + aYield);
    }
    console.log('FINISHED 2');
}

var yiedTest1 = aGenerator1();
var yiedTest2 = aGenerator2();

document.getElementById('log').addEventListener('click', sendToWorker1);
document.getElementById('loop').addEventListener('click', sendToWorker2);
document.getElementById('resp').addEventListener('click', ()=>console.log(`I'm Alive!!!!!`));
document.getElementById('yield1').addEventListener('click', ()=>yiedTest1.next('Loop '));
document.getElementById('yield2').addEventListener('click', ()=>yiedTest2.next(100));
