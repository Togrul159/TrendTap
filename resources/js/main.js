// OWL-CAROUSEL
$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: false
    },
    600: {
      items: 2,
      nav: false
    },
    1000: {
      items: 3,
      nav: false,
      loop: false
    }
  }
})
// OWL-CAROUSEL-END


// CART-PLUS-MINUS

// var i = 0;

// function plusButton() {
//     document.getElementById('plus-number-input').value = ++i;
// }
// function minusButton() {
//     if (document.getElementById('plus-number-input').value != 0) {
//         document.getElementById('plus-number-input').value = --i;
//     }
// }
// CART-PLUS-MINUS-END


// GALLERY
function galleryShow(smallImg) {
  let fullImg = document.getElementById('imageBox');
  fullImg.src = smallImg.src;
}
// GALLERY-END


// LEFT-BLUE-MENU
document.querySelectorAll(".left-blue-nav ").forEach(a => {
  a.addEventListener("click", () => {
    document.querySelectorAll(".extra").forEach(t => {
      t.style.display = "none";
    })
    let id = a.getAttribute("data-open");
    document.getElementById(id).style.display = 'block';
  });
})
// LEFT-BLUE-MENU-END


// PAGİNATİON
$(document).ready(function () {
  $('.nav-menu').click(function () {
    $('ul').toggleClass('nav-active');
  })
})
// PAGİNATİON-END


// PARTNERS-SLIDER
const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");
if (marqueeContent !== null) {
  root.style.setProperty("--marquee-elements", marqueeContent.children.length);
  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }
}
// PARTNERS-SLIDER-END


// HAMBURGER-MENU
$(document).ready(function () {
  $('.first-button').on('click', function () {
    $('.animated-icon1').toggleClass('open');
  });
});
// HAMBURGER-MENU-END
