    const zzSlides = document.querySelectorAll(".zz-item");
const zzDotsContainer = document.getElementById("zzDots");

let zzIndex = 0;

// dot oluştur
zzSlides.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.addEventListener("click", () => goToSlide(i));
    zzDotsContainer.appendChild(dot);
});

const zzDots = zzDotsContainer.querySelectorAll("span");

function showSlide(index) {
    zzSlides.forEach(s => s.classList.remove("active"));
    zzDots.forEach(d => d.classList.remove("active"));

    zzSlides[index].classList.add("active");
    zzDots[index].classList.add("active");
}

function nextSlide() {
    zzIndex = (zzIndex + 1) % zzSlides.length;
    showSlide(zzIndex);
}

function goToSlide(i) {
    zzIndex = i;
    showSlide(zzIndex);
}

// başlat
showSlide(zzIndex);
setInterval(nextSlide, 3000);
