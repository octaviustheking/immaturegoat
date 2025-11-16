const splash = document.getElementById("splash");
const terminalText = document.getElementById("terminal-text");
const startMsg = document.getElementById("start-msg");

if (!sessionStorage.getItem("splashShown")) {
    runSplashSequence();
} else {
    splash.classList.add("hidden");
}

function runSplashSequence() {
    const lines = [
        "initializing...",
        "loading assets....",
        "loading projects...",
        "locating ImmatureGoat..."
    ];

    let index = 0;

    function printNext() {
        if (index < lines.length) {
            terminalText.innerHTML += lines[index] + "<br>";
            index++;
            setTimeout(printNext, 1000);
        } else {
            startMsg.style.opacity = "1";
            splash.addEventListener("click", closeSplash);
        }
    }

    printNext();
}

function closeSplash() {
    splash.classList.add("hidden");
    sessionStorage.setItem("splashShown", "true");
}