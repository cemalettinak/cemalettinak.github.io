const zxSlider = document.getElementById("zxSlider");
const zxCards = document.querySelectorAll(".zx-card");

let zxIndex = 0;

function updateSlider() {
    zxCards.forEach(c => c.classList.remove("active"));

    zxCards[zxIndex].classList.add("active");

    const offset = zxIndex * (zxCards[0].offsetWidth + 20);
    zxSlider.style.transform = `translateX(-${offset - zxCards[0].offsetWidth}px)`;
}

function nextSlide() {
    zxIndex++;
    if (zxIndex >= zxCards.length) zxIndex = 0;
    updateSlider();
}

updateSlider();
setInterval(nextSlide, 2500);
