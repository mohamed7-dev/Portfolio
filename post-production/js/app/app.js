// glightbox settings 
const lightbox = GLightbox({
    'href': 'https://youtu.be/RPE7ocwm2Aw',
    'type': 'video',
    'source': 'youtube', //vimeo, youtube or local
    'width': 900,
});

// to top button function 
const btn = document.querySelector("#top-btn");

// go to top 
btn.addEventListener("click" , () => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

// toggle visibility 
function toggleVisibility(){
    window.addEventListener("scroll", () => {
        if(scrollY >= 200){
            btn.style.cssText = "bottom:1.5rem;"
        }else{
            btn.style.cssText = "bottom:-100%"
        }
    })
}
toggleVisibility();