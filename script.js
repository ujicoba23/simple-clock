let isTicking = true;

function updateTime() {
    if (isTicking) {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');

        const timeElement = document.getElementById("time");
        timeElement.textContent = `${hours}:${minutes}:${seconds}`;
    }
}

setInterval(updateTime, 1000);

const clockElement = document.querySelector(".clock");
const toggleButton = document.getElementById("toggleButton");

toggleButton.addEventListener("click", () => {
    isTicking = !isTicking; // Toggle the ticking on and off when the button is clicked.

    // Change the button text based on the clock state.
    toggleButton.textContent = isTicking ? "Stop" : "Start";
});

