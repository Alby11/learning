onmessage = (message) => {
    postMessage(`Worker 2: I have received the following message: ${message.data}` );
    while(true) Math.Pi * Math.Pi;
}
