var SlideIndex=0;
slideshow();

function slideshow(){
    var i;
    var slide = document.getElementsByClassName("biodata");
    for(var i = 0; i<slide.length; i++){
        slide[i].style.display = "none";
    }
    SlideIndex++;
    if(SlideIndex > slide.length){SlideIndex = 1}
    slide[SlideIndex-1].style.display = "block";
    setTimeout(slideshow, 2000);
}