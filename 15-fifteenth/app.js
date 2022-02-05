const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');

slides.forEach(function(slide, index) {
    slide.style.left = `${index * 100}%`;
})
nextBtn.addEventListener('click', function() {
    counter++;
    carousel()
})
prevBtn.addEventListener('click', function() {
    counter--;
    carousel()
})

let counter = 0;

function carousel(){
    // working with slides
        if (counter === slides.length) {
            counter = 0;
        }
        if(counter < 0 ){
            counter = slides.length -1;
        }
    // working with btns
    // if (counter < slides.length -1) {
    //     nextBtn.style.display = 'block';
    // }
    // else{
    //     nextBtn.style.display= 'none';
    // }
    // if (counter > 0) {
    //     prevBtn.style.display = 'block';
    // }
    // else{
    //     nextBtn.style.display= 'none';
    // }
    slides.forEach(function(slide){
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}
// prevBtn.style.display = 'none';
