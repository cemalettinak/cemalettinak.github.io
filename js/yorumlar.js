const track = document.getElementById("zxTrack");
let cards = document.querySelectorAll(".zx-card");

let index = 1;

// clone baş ve son (sonsuz scroll için)
const first = cards[0].cloneNode(true);
const last = cards[cards.length - 1].cloneNode(true);

track.appendChild(first);
track.insertBefore(last, track.firstChild);

cards = document.querySelectorAll(".zx-card");

const cardWidth = cards[0].offsetWidth + 20;

track.style.transform = `translateX(-${cardWidth * index}px)`;

// aktif class
function setActive() {
    cards.forEach(c => c.classList.remove("active"));
    cards[index].classList.add("active");
}

setActive();

function move() {
    index++;
    track.style.transition = "0.5s";
    track.style.transform = `translateX(-${cardWidth * index}px)`;

    setActive();

    // sonsuz loop fix
    if (index === cards.length - 1) {
        setTimeout(() => {
            track.style.transition = "none";
            index = 1;
            track.style.transform = `translateX(-${cardWidth * index}px)`;
        }, 500);
    }
}

setInterval(move, 2500);
