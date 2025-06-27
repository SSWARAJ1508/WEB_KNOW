
    let worker;
    function startWorker() {
    if (typeof Worker !== "undefined") {
    if (!worker) {
    worker = new Worker("webworker.js");
    worker.onmessage = function (event) {
    document.getElementById("output").textContent = event.data;
    document.getElementById("result").textContent = event.data;
};
}
} else {
    document.getElementById("output").textContent = "Web Workers not supported in this browser.";
}
}
