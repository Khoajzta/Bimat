document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("sleepButton");
    const message = document.getElementById("message");

    button.addEventListener("click", function () {
        message.style.display = "block";
        message.innerHTML = "Tới giờ đi ngủ ròiiii";
        
        setTimeout(() => {
            message.innerHTML = "Đi ngủ lẹ lên! 😴😴";
        }, 3000);
    });

    function startBlinking(element) {
        setInterval(() => {
            element.style.visibility = (element.style.visibility === "hidden") ? "visible" : "hidden";
        }, 500);
    }
});
