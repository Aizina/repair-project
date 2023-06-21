document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.slide');
  var currentSlide = 0;
  var informationBlocks = document.querySelectorAll('.information');
  var descriptions = document.querySelectorAll('.description');
  var prevBtns = document.querySelectorAll('.prevBtn');
  var nextBtns = document.querySelectorAll('.nextBtn');

  function updateSlide() {
    slides.forEach(function(slide, index) {
      if (index === currentSlide) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
  }

  function updateInformation() {
    informationBlocks.forEach(function(block, index) {
      if (index === currentSlide) {
        block.classList.add('active');
      } else {
        block.classList.remove('active');
      }
    });
  }

  function updateDescription() {
    descriptions.forEach(function(description, index) {
      if (index === currentSlide) {
        description.classList.add('active');
      } else {
        description.classList.remove('active');
      }
    });
  }

  function nextSlide() {
    slides[currentSlide].classList.remove('active');
    informationBlocks[currentSlide].classList.remove('active');
    descriptions[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlide();
    updateInformation();
    updateDescription();
  }

  function prevSlide() {
    slides[currentSlide].classList.remove('active');
    informationBlocks[currentSlide].classList.remove('active');
    descriptions[currentSlide].classList.remove('active');
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlide();
    updateInformation();
    updateDescription();
  }
  
  function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    informationBlocks[currentSlide].classList.remove('active');
    descriptions[currentSlide].classList.remove('active');
    currentSlide = index;
    updateSlide();
    updateInformation();
    updateDescription();
  }

  prevBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      prevSlide();
    });
  });

  nextBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      nextSlide();
    });
  });

  descriptions.forEach(function(description, index) {
    description.addEventListener('click', function() {
      showSlide(index);
    });
  });

  updateSlide();
  updateInformation();
  updateDescription();
});



document.addEventListener("DOMContentLoaded", function () {
  const prevBtns = document.querySelectorAll(".prev-Btn");
  const nextBtns = document.querySelectorAll(".next-Btn");
  const slides = document.querySelectorAll(".show");
  let currentSlide = 0;

  prevBtns.forEach(function (prevBtn) {
    prevBtn.addEventListener("click", function () {
      navigateSlides("prev");
    });
  });

  nextBtns.forEach(function (nextBtn) {
    nextBtn.addEventListener("click", function () {
      navigateSlides("next");
    });
  });

  function navigateSlides(direction) {
    slides[currentSlide].classList.remove("active");

    if (direction === "prev") {
      currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
    } else if (direction === "next") {
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
    }

    slides[currentSlide].classList.add("active");
  }
})