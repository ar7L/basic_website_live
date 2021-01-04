const faders = document.querySelectorAll('.para1');
const sliders = document.querySelectorAll('.slide');
const appearOptions = {
    threshold: 0
};

const appearOnScroll  = new IntersectionObserver(function(entries, appearOnScroll){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            console.log("Not intersecting");
            return;
        }else{
            console.log("intersecting");
            entry.target.classList.toggle("appear");
            appearOnScroll.unobserve(entry.target);
        }
    });
} , appearOptions);

faders.forEach(fader =>{
    appearOnScroll.observe(fader);
});
sliders.forEach(sly =>{
    appearOnScroll.observe(sly);
});