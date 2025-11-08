const track = document.querySelector('.image-thumbnails');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let index = 0;
const total= track.children.length;
const imgWidth= track.children[0].getBoundingClientRect().width+10; // include a gap

prevBtn.addEventListener('click', () => {
    index--;
    if(index < 0) index = total -1;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    index++;
    if(index >= total) index = 0;
    updateSlider();
});

function updateSlider() {
    track.style.transform = `translateX(-${index * imgWidth}px)`;
}

//Auto slide every 5 seconds
setInterval(() => {
    index++;
    if(index >= total) index = 0;
    updateSlider();
}, 5000);