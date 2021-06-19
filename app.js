// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.

const video = document.querySelector('.video-container');

//we use 'querySelector' and not '...All' becouse the buttons inside this div will be used as one
const btn = document.querySelector('.switch-btn');

//We used if statement here instead of toggle becouse besides adding the class to an element we also wanted to add a method to the video depending on wether it has the class or not
btn.addEventListener('click', function(){
    if(!btn.classList.contains('slide')){
        btn.classList.add('slide');
        video.pause();
    }else{
        btn.classList.remove('slide');
        video.play();
    }
});

//preloader
const preloader = document.querySelector('.preloader');

//adds class to preloader to hide it once everything finished loading
window.addEventListener('load', function(){
    preloader.classList.add('hide-preloader');
});

