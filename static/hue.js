const root = document.querySelector(":root");

let hue = sessionStorage.getItem("hue");
if (!hue) {
    hue = Math.floor(Math.random() * 360);
    sessionStorage.setItem("hue", hue)
}

root.style.setProperty("--hue", (parseInt(hue) + 1) % 360);
