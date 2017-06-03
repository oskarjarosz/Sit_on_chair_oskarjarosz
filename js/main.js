document.addEventListener('DOMContentLoaded', function(){


  //slider
  var arrowLeft = document.querySelector('.slider:first-of-type');
  var arrowRight = document.querySelector('.slider:last-of-type');

  var chairImages = document.querySelectorAll('.slider-photos li');

  var currentImage = 0;

  arrowRight.addEventListener('click', function(ev) {
    chairImages[currentImage].classList.remove('visible');

    if(currentImage >= chairImages.length - 1) {
      currentImage = 0;
    } else {
      currentImage++;
    };
    chairImages[currentImage].classList.add('visible');
  });

  arrowLeft.addEventListener('click', function(ev) {
    chairImages[currentImage].classList.remove('visible');
    if(currentImage == 0) {
      currentImage = chairImages.length - 1;
    } else {
      currentImage--;
    };
    chairImages[currentImage].classList.add('visible');
  });



  //chowanie tekstu po najechaniu na zdjęcie

    var images = document.querySelectorAll('.col1');


    [...images].forEach(function(el) {
      el.addEventListener('mouseover', function(ev) {
        var label = el.querySelector('.cap1');
        label.style.display = 'none';
      });
      el.addEventListener('mouseout', function(ev) {
        var label = el.querySelector('.cap1');
        label.style.display = 'block';
      });
    });


    var images = document.querySelectorAll('.col2');


    [...images].forEach(function(el) {
      el.addEventListener('mouseover', function(ev) {
        var label = el.querySelector('.cap2');
        label.style.display = 'none';
      });
      el.addEventListener('mouseout', function(ev) {
        var label = el.querySelector('.cap2');
        label.style.display = 'block';
      });
    });

});
