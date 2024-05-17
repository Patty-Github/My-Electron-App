const information = document.getElementById("info");
information.innerText = `this app is using Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), and Electron (v${versions.electron()})`

const newWindowBtn = document.getElementById("newWindowBtn");
const tabButtons = document.querySelectorAll(".tab");
const windows = document.querySelectorAll(".window");
const testBtn = document.getElementById("test");

tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener('click', () => {
        tabButtons.forEach((tabButton) => {
            tabButton.classList.remove("active");
        })
        tabButton.classList.add("active");
        windows.forEach((eachWindow) => {
            eachWindow.style.display = "none";
        })
        windows[index].style.display = "block";
    })
})

function setHomePage() {
    windows.forEach((eachWindow) => {
        eachWindow.style.display = "none";
    })
    tabButtons.forEach((tabButton, index) => {
        if (tabButton.classList.contains("active"))
            windows[index].style.display = "block";
    })
}

testBtn.addEventListener('DOMContentLoaded', setHomePage());

newWindowBtn.addEventListener('click', async () => {
    await window.versions.createNewWindow()
})


/*
add to app:
tabs,
audio recorer,
show file explorer,
note taking,

maybe:
blackjack,
*/