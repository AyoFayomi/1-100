const sounds = document.querySelectorAll(".sounds");
const pads = document.querySelectorAll(".pads div");
const visual = document.querySelector('.visual');
const colors = [
    '#60d394',
    '#d36060',
    '#c060d3',
    '#d3d160',
    '#6860d3',
    '#5aced6'
];
window.addEventListener('load', () => { 

    pads.forEach((pad, index) => {
        pad.addEventListener('click', () => {
            sounds[index].currentTime = 0;

            sounds[index].play();
            createBubbles(index)
        })
    })
    // functions for display animations
    const createBubbles = (index) => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index]
        bubble.style.animation = "jump 1s ease"
        bubble.addEventListener('animationend', ()=> {
            visual.removeChild(this);
        })
    }
})