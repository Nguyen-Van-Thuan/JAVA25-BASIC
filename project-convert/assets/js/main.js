$(document).ready(function () {

  $('.owl-carousel').owlCarousel({
    loop: true, //Vong lap 
    margin: 10, //K/C giua cac pt
    nav: true, //Thanh dieu huong
    dots: true, //Dau cham dieu huong
    autoplay: true, //Slider tu dong chay
    autoplayTimeout: 3000, //don vi ms - quy dinh thoi gian chay slider
    responsive: {
      0: {
        items: 1
      },
      800: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  })

});
