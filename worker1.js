onmessage = (message) => {
    setTimeout( ()=>postMessage(`Worker 1: I have received the following message: ${message.data}`), 0);
}
