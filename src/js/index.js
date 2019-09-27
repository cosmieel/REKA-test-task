import closeBanner from './closeBanner'
import $ from 'jquery'
import 'slick-carousel'

import '../style/master.scss';

$(document).ready(function(){

  closeBanner();

  $('.header-slider').slick({
    dots: true,
    prevArrow: '<button class="header-slide__item-arrows header-slide__item-prev-arrows"><svg width="16" height="80" viewbox="0 0 16 80" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveaspectratio="xMinYMin" class="header-slide__item-prev-arrows-icon"><use xlink:href="#img-arrowbanner"></use></svg></button>',
    nextArrow: '<button class="header-slide__item-arrows header-slide__item-next-arrows"><svg width="16" height="80" viewbox="0 0 16 80" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveaspectratio="xMinYMin" class="header-slide__item-next-arrows-icon"><use xlink:href="#img-arrowbanner"></use></svg></button>',
    infinite: false,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
          breakpoint: 1379,
          settings: {
              arrows: false,
          }
      },
    ]
  });

  $('.advantages__list_slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button class="advantages__list_slider-arrows advantages__list_slider-arrows-prev"><svg width="14" height="45" viewbox="0 0 14 45" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveaspectratio="xMinYMin" class="advantages__list_slider-arrows-prev-icon"><use xlink:href="#img-arrowmobile"></use></svg></button>',
    nextArrow: '<button class="advantages__list_slider-arrows advantages__list_slider-arrows-next"><svg width="14" height="45" viewbox="0 0 14 45" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveaspectratio="xMinYMin" class="advantages__list_slider-arrows-next-icon"><use xlink:href="#img-arrowmobile"></use></svg></button>',

    responsive: [
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  $('.companies__slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: '<button class="companies__slider-arrows companies__slider-arrows-prev"><svg width="15" height="48" viewbox="0 0 15 48" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveaspectratio="xMinYMin" class="companies__slider-arrows-prev-icon"><use xlink:href="#img-arrow2"></use></svg></button>',
    nextArrow: '<button class="companies__slider-arrows companies__slider-arrows-next"><svg width="15" height="48" viewbox="0 0 15 48" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveaspectratio="xMinYMin" class="companies__slider-arrows-next-icon"><use xlink:href="#img-arrow2"></use></svg></button>',

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 1220,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '60px',
        }
      },
      {
        breakpoint: 771,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          centerMode: true,
          centerPadding: '0px',
        }
      },
    ]
  });

  $('.bestproduct-section__slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '<button class="bestproduct-section__slider-arrows bestproduct-section__slider-arrows-prev"><svg width="15" height="48" viewbox="0 0 15 48" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveaspectratio="xMinYMin" class="bestproduct-section__slider-arrows-prev-icon"><use xlink:href="#img-arrow2"></use></svg></button>',
    nextArrow: '<button class="bestproduct-section__slider-arrows bestproduct-section__slider-arrows-next"><svg width="15" height="48" viewbox="0 0 15 48" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveaspectratio="xMinYMin" class="bestproduct-section__slider-arrows-next-icon"><use xlink:href="#img-arrow2"></use></svg></button>',

    responsive: [
      {
        breakpoint: 1405,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 1190,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 690,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: false,
        }
      },
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        }
      },
    ]
  });

  $('.social__slider').slick({
    dots: false,
    prevArrow: '<button class="social__slider-item-arrows social__slider-item-arrows-prev"><svg width="16" height="80" viewbox="0 0 16 80" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveaspectratio="xMinYMin" class="social__slider-item-arrows-prev-icon"><use xlink:href="#img-arrowbanner"></use></svg></button>',
    nextArrow: '<button class="social__slider-item-arrows social__slider-item-arrows-next"><svg width="16" height="80" viewbox="0 0 16 80" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveaspectratio="xMinYMin" class="social__slider-item-arrows-next-icon"><use xlink:href="#img-arrowbanner"></use></svg></button>',
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 8,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1435,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 3,
          dots: false,
          centerMode: true,
          centerPadding: '45px',
        }
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          dots: false,
          centerMode: true,
          centerPadding: '45px',
        }
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          dots: false,
          centerMode: true,
          centerPadding: '45px',
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: false,
          centerMode: true,
          centerPadding: '37px',
        }
      },
      {
        breakpoint: 410,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          dots: false,
          centerMode: true,
          centerPadding: '37px',
        }
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          centerMode: true,
          centerPadding: '37px',
        }
      },
    ]
  });



});






