window.onload = function() {

  if ($('.tabs__link')) {
    $('.tabs__link').click(function(e) {
      e.preventDefault();
      let tab = $(this).data('tab');
      $(this).addClass('tabs__link_active');
      $(this).siblings().removeClass('tabs__link_active');
      $('.tabs__item').each(function(i, v) {
        if ($(v).data('tab') == tab) {
          $(v).addClass('tabs__item_active');
          $(v).siblings().removeClass('tabs__item_active');
        }
      })
    });
  }
  
  if ($(window).scrollTop() >= 50) {
  	$(".header").addClass("header_s");
   } else {
     $(".header").removeClass("header_s");
   }


  $(window).scroll(function() {    
    let scroll = $(window).scrollTop();
    if (scroll >= 50) {
      $(".header").addClass("header_s");
    } else {
      $(".header").removeClass("header_s");
    }
  });

  let swiperGal1 = new Swiper(".gallery__wrapper_1", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    // observer: true,
    // observeParents: true,
    navigation: {
      nextEl: '.slider-control__right',
      prevEl: '.slider-control__left',
    },
  })

  let swiper = new Swiper(".partners__wrapper", {
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    loop: true,
    // centeredSlides: true,
    // grid: {
    //   rows: 2,
    // },
    navigation: {
      nextEl: '.partners-control__next',
      prevEl: '.partners-control__prev',
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    breakpoints: {
      649: {
        // slidesPerView: 'auto',
        // grid: {
        //   rows: 2,
        // },
      },
      319: {
        spaceBetween: 15,
        // grid: {
        //   rows: 2,
        // },
      }
    }
  })
  
  let swiper2 = new Swiper(".kitchen__wrapper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.kitchen-control__next',
    }
  });
  
  let galleryPug = [];
  
  $('.gallery__pic').each(function(i, v) {
    galleryPug.push($(v).attr('alt'));
  })
  
  let swiperGal2 = new Swiper(".gallery__wrapper_2", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    // observer: true,
    // observeParents: true,
    navigation: {
      nextEl: '.slider-control__right',
      prevEl: '.slider-control__left',
    },
  })
  let swiperGal3 = new Swiper(".gallery__wrapper_3", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    // observer: true,
    // observeParents: true,
    navigation: {
      nextEl: '.slider-control__right',
      prevEl: '.slider-control__left',
    },
  })
  let swiperGal4 = new Swiper(".gallery__wrapper_4", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    // observer: true,
    // observeParents: true,
    navigation: {
      nextEl: '.slider-control__right',
      prevEl: '.slider-control__left',
    },
  })
  
  let tab = 1;
  
  let swiperGallery1 = new Swiper(".our-gallery__wrapper_1", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    navigation: {
      nextEl: '.slider-control__right',
      prevEl: '.slider-control__left',
    },
    // observer: true,
    // observeParents: true,
  })
  let swiperGallery2 = new Swiper(".our-gallery__wrapper_2", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    // observer: true,
    // observeParents: true,
    navigation: {
      nextEl: '.slider-control__right',
      prevEl: '.slider-control__left',
    },
  })
  let swiperGallery3 = new Swiper(".our-gallery__wrapper_3", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    // observer: true,
    // observeParents: true,
    navigation: {
      nextEl: '.slider-control__right',
      prevEl: '.slider-control__left',
    },
  })
  // let swiperGallery4 = new Swiper(".our-gallery__wrapper_4", {
  //   slidesPerView: "auto",
  //   spaceBetween: 0,
  //   loop: true,
  //   // observer: true,
  //   // observeParents: true,
  //   navigation: {
  //     nextEl: '.slider-control__right',
  //     prevEl: '.slider-control__left',
  //   },
  // })
  // let swiperGallery5 = new Swiper(".our-gallery__wrapper_5", {
  //   slidesPerView: "auto",
  //   spaceBetween: 0,
  //   loop: true,
  //   // observer: true,
  //   // observeParents: true,
  //   navigation: {
  //     nextEl: '.slider-control__right',
  //     prevEl: '.slider-control__left',
  //   },
  // })
  
  // let tab = 1;
  // $('.gallery__wrapper').each(function(i, v) {
  //   if ($(v).data('tab') == tab) {
  //     $(v).show();
  //   } else {
  //     $(v).hide();
  //   }
  // });
  
  // $('.gallery__link').click(function(e) {
  //   e.preventDefault();
  //   $(this).siblings().removeClass('gallery__link_active');
  //   $(this).addClass('gallery__link_active');
  //   $('.slider-control__left').removeClass(`slider-control__left_${tab}`);
  //   $('.slider-control__right').removeClass(`slider-control__right_${tab}`);
  //   tab = $(this).data('tab');
  //   $('.slider-control__left').addClass(`slider-control__left_${tab}`);
  //   $('.slider-control__right').addClass(`slider-control__right_${tab}`);
  //   swiperGal1.update();
  //   $('.gallery__wrapper').each(function(i, v) {
  //     if ($(v).data('tab') == tab) {
  //       $(v).show();
  //     } else {
  //       $(v).hide();
  //     }
  //   });
  // });
  
  let swiper4 = new Swiper(".hero-slider__wrapper", {
    slidesPerView: 1,
    // loop: true,
    pagination: {
      el: '.hero-control',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });
  
  let swiper5 = new Swiper(".reviews__wrapper", {
    slidesPerView: 'auto',
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    // autoHeight: true,
    navigation: {
      nextEl: '.gallery-control__item_next',
      prevEl: '.gallery-control__item_prev',
    },
    pagination: {
      el: '.reviews__pag',
      clickable: true,
      renderBullet: function (index, className) {
        return '<a href="#" class="reviews-pag__item ' + className + '"></a>';
      },
    },
    breakpoints: {
      668: {
        spaceBetween: 55,
      },
    }
  })
  
  let swiper6 = new Swiper(".gallery-slider_kitchen", {
    slidesPerView: 'auto',
    spaceBetween: 30,
    loop: true,
    // centeredSlides: true,
    navigation: {
      nextEl: '.gallery-kit-control_next',
      prevEl: '.gallery-kit-control_prev',
    },
    pagination: {
      el: '.gallery-slider__pag',
      clickable: true,
      renderBullet: function (index, className) {
        return '<a href="#" class="reviews-pag__item ' + className + '"></a>';
      },
    },
    breakpoints: {
      1150: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      650: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      400: {
        slidesPerView: 1,
      }
    }
  })
  
  $('.select__head').click(function() {
    $(this).parent().toggleClass('select_active');
  });
  
  $('.select__item').click(function(e) {
    e.preventDefault();
    $(this).parent().prev().find('span').text($(this).text());
    $(this).parent().parent().removeClass('select_active');
  });
  
  $('.radio__item').click(function(e) {
    e.preventDefault();
    $(this).siblings().removeClass('radio__item_active');
    $(this).addClass('radio__item_active');
  });
  
  $('.header__burger').click(function(e) {
    e.preventDefault();
    $('.header__burger').addClass('header__burger_active');
    $('.nav-mobile').addClass('nav-mobile_active');
    $('body').addClass('fixed');
  });
  
  function navMobileClose() {
    $('.header__burger').removeClass('header__burger_active');
    $('.nav-mobile').removeClass('nav-mobile_active');
    $('body').removeClass('fixed');
  }
  
  $(document).mouseup( function(e){
    let div = $( ".nav-mobile" );
    if ( !div.is(e.target)
        && div.has(e.target).length === 0 ) {
      navMobileClose();
    }
  });
  
  $('.nav-mobile__close').click(function(e) {
    e.preventDefault();
    navMobileClose();
  });
  
  $('.nav-mobile__item_sub').click(function(e) {
    e.preventDefault();
    $('.nav-mobile__top_1').removeClass('nav-mobile__top_active');
    $('.nav-mobile__top_2').addClass('nav-mobile__top_active');
  });
  
  $('.nav-mobile__item_back').click(function(e) {
    e.preventDefault();
    $('.nav-mobile__top_1').addClass('nav-mobile__top_active');
    $('.nav-mobile__top_2').removeClass('nav-mobile__top_active');
  });
  
  $('.nav-mobile__btn').click(function(e) {
    $('.header__burger').toggleClass('header__burger_active');
    $('.nav-mobile').toggleClass('nav-mobile_active');
    $('body').toggleClass('fixed');
  });

  
  $('.gallery__links-mobile-head').click(function(e) {
    e.preventDefault();
    $(this).parent().toggleClass('gallery__links-mobile_active');
  });
  
  $('.gallery__link').click(function(e) {
    e.preventDefault();
    $(this).siblings().removeClass('gallery__link_active');
    $(this).addClass('gallery__link_active');
    tab = $(this).data('tab');
    if ($('.gallery__wrapper').length) {
      $('.gallery__wrapper').each(function(i, v) {
        if ($(v).data('tab') == tab) {
          $(v).show();
        } else {
          $(v).hide();
        }
      });
      swiperGal1.update();
      swiperGal2.update();
      swiperGal3.update();
      swiperGal4.update();
    } else if ($('.our-gallery__wrapper').length) {
      $('.our-gallery__wrapper').each(function(i, v) {
        if ($(v).data('tab') == tab) {
          $(v).show();
        } else {
          $(v).hide();
        }
      });
      swiperGallery1.update();
      swiperGallery2.update();
      swiperGallery3.update();
      swiperGallery4.update();
    }
  
    let el = $(this).parent().next().find('.gallery__link[data-tab="' + tab + '"]');
    $(el).siblings().removeClass('gallery__link_active');
    $(el).addClass('gallery__link_active');
    $(this).parent().next().find('.gallery__link_head p').text($(el).text());
  });
  
  $('.gallery__links-mobile .gallery__link').click(function(e) {
    e.preventDefault();
    let tabLink = $(this).data('tab');
    let el = $(this).parent().parent().prev().find('.gallery__link[data-tab="' + tabLink + '"]');
    $(el).siblings().removeClass('gallery__link_active');
    $(el).addClass('gallery__link_active');
    $(this).siblings().removeClass('gallery__link_active');
    $(this).addClass('gallery__link_active');
    $(this).parent().prev().find('span').text($(this).text());
    $(this).parent().parent().toggleClass('gallery__links-mobile_active');
  });
  
  $(document).mouseup( function(e){
    let div = $( ".gallery__links-mobile" );
    if ( !div.is(e.target)
        && div.has(e.target).length === 0 ) {
      $('.gallery__links-mobile').removeClass('gallery__links-mobile_active');
    }
  });
  
  
  
  
  let sliderHall = new Swiper(".slider-hall__wrapper", {
    slidesPerView: "auto",
    spaceBetween: 0,
    loop: true,
    // observer: true,
    // observeParents: true,
    navigation: {
      nextEl: '.slider-control__right',
      prevEl: '.slider-control__left',
    },
  })
  
  $('.form__btn_send').click(function(e) {
    e.preventDefault();
    let form = $(this).parent().parent().parent().parent();
    if ($(form).attr('id') == 'popup-call') {
      let name = $(form).find('.input__input[name="name"]').val();
      let phone = $(form).find('.input__input[name="phone"]').val();
      let message = $(form).find('.input__textarea[name="comment"]').val();
      let data = 'name=' + name + '&phone=' + phone + '&comment=' + message;
      $.ajax({
        url: '',         /* Куда отправить запрос */
        method: 'GET',             /* Метод запроса (post или get) */
        data: data,     /* Данные передаваемые в массиве */
        success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
			Fancybox.getInstance().close();
            const fancybox = new Fancybox([
              {
                src: "<div><h2>Отправлено!</h2><p>Мы перезвоним Вам в ближайшее время</p></div>",
                type: "html",
              },
            ]);
            setTimeout(function() {
				Fancybox.getInstance().close();
            }, 1500);
        }
      });
    } else if ($(form).attr('id') == 'popup-booking') {
      let name = $(form).find('.input__input[name="name"]').val();
      let phone = $(form).find('.input__input[name="phone"]').val();
      let mail = $(form).find('.input__input[name="mail"]').val();
      let message = $(form).find('.input__textarea[name="comment"]').val();
      let format = $(form).find('.select__head span').text();
      let guests = $(form).find('.radio__item_active').text();
      let hall = '';
      if ($(form).hasClass('big')) {
        hall = 'big';
      } else {
        hall = 'small';
      }
      let data = 'name=' + name + '&phone=' + phone + '&mail=' + mail +'&comment=' + message + '&format=' + format + '&guests=' + guests + '&hall=' + hall;
      $.ajax({
        url: '/wp-content/themes/safisa/sendBooking.php',         /* Куда отправить запрос */
        method: 'get',             /* Метод запроса (post или get) */
        data: data,     /* Данные передаваемые в массиве */
         success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
			Fancybox.getInstance().close();
            const fancybox = new Fancybox([
              {
                src: "<div><h2>Отправлено!</h2><p>Мы перезвоним Вам в ближайшее время</p></div>",
                type: "html",
              },
            ]);
            setTimeout(function() {
				Fancybox.getInstance().close();
            }, 1500);
        }
      });
    }
  });
  
  
  
  $('.form__btn_send-service').click(function(e) {
    e.preventDefault();
    let form = $(this).parent().parent().parent().parent();
      let name = $(form).find('.input__input[name="name"]').val();
      let phone = $(form).find('.input__input[name="phone"]').val();
      let message = $(form).find('.input__textarea[name="comment"]').val();
      let ser = $(this).data('name');
      let data = 'name=' + name + '&phone=' + phone + '&comment=' + message + '&ser=' + ser;
      $.ajax({
        url: '/wp-content/themes/safisa/sendService.php',         /* Куда отправить запрос */
        method: 'GET',             /* Метод запроса (post или get) */
        data: data,     /* Данные передаваемые в массиве */
        success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
            const fancybox = new Fancybox([
              {
                src: "<div><h2>Отправлено!</h2><p>Мы перезвоним Вам в ближайшее время</p></div>",
                type: "html",
              },
            ]);
            setTimeout(function() {
				Fancybox.getInstance().close();
            }, 1500);
        }
      });
  });
};