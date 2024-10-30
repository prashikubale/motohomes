

const video = document.getElementById('heroVideo');
const control = document.querySelector('.video-control');
const nav = document.querySelector('.nav');
let isPaused = false;

function toggleVideo() {
    if (isPaused) {
        video.play();
        control.innerHTML = '<i class="fas fa-pause"></i>';
    } else {
        video.pause();
        control.innerHTML = '<i class="fas fa-play"></i>';
    }
    isPaused = !isPaused;
}

control.addEventListener('click', toggleVideo);

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});
