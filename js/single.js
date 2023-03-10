
window.onload = function () {
    loadSliders();
    toggleDescription();

    let params = getParamaters();
    getGame();
}

function toggleDescription () {
    let button = document.getElementById('descButton');
    let descripcion = document.querySelector('.descripcion');

    button.addEventListener('click', (event) => {
        descripcion.classList.toggle('active');
        button.classList.toggle('active');
    });
}

function loadSliders() {

  let slides = window.visualViewport.width > 800 ? 4 : 2;

  var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: slides,
      freeMode: true,
      watchSlidesProgress: true,
  });

  var swiperInnerGallery = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
  });

  window.addEventListener('resize', event => {
      if(window.visualViewport.width < 800) {
          swiper.params.slidesPerView = 2;
      } else {
          swiper.params.slidesPerView = 4;
      }
  });
}


//Futura implementación
function getParamaters() {
    
    let params = window.location.search;

    if(params.length){
        params = params.split("?");
        params = params[1];
    }

    return params;
}

function getGame() {
    let games = {
        dayz: {

        },
        rust: {

        },
        rdr2: {

        },
        northgard: {

        },
        onepiece: {

        },
        hogwarts: {

        },
        thedivision: {

        },
        lostark: {

        },
        civilization: {

        },
        destiny: {

        },
        eso: {

        },
        endwalker: {
            
        }
    }
}

