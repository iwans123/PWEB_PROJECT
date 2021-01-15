var SlideIndex=0;
var SlideIndexTwo = 0;
slideshow();
slideshowTwo();
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
function slideshowTwo(){
    var j;

    var slideTwo = document.getElementsByClassName("biodatatwo");
    for(var j = 0; j<slideTwo.length; j++){
        slideTwo[j].style.display = "none";
    }

    SlideIndexTwo++;
    if(SlideIndexTwo > slideTwo.length){SlideIndexTwo = 1}
    slideTwo[SlideIndexTwo-1].style.display = "block";
    setTimeout(slideshowTwo, 2000);
}