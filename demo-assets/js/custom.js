/**
 * Table of contents
 * -----------------------------------
 * 1.HEADER STICKY
 * 2.HEADER ACTIVE ADD CLASS
 * 3.HEADER COLLAPSE
 * 4.FIXED HEADER
 * 5.Hero5 SLIDER
 * 6.GLIGHTBOX VIDEO HERO
 * 7.ODOMETER JS
 * 8.TESTIMONIAL SLIDER
 * 9.TESTIMONIAL SLIDER V2
 * 10.PORTFOLIO SLIDER
 * 11.BLOG SLIDER
 * 12.SERVICE SLIDER
 * 13.OVERVIEW SLIDER
 * 14.CONTACT FORM
 * 15.AJAX MAILCHIMP SUBSCRIBE
 * 16.LOCAL SUBSCRIPTION
 * 17.LOCAL SUBSCRIPTION 2
 * 18.SMOOTH SCROLL ON BUTTON CLICK
 * 19.SCREENSHOT SLIDER
 * DARK VERSION
 */

(function ($) {
  "use strict";
  var PATH = {};

  /******************** 1.HEADER STICKY ********************/
  PATH.HeaderSticky = function () {
    $(".navbar-toggler").on("click", function (a) {
      a.preventDefault(), $(".navbar").addClass("navbar_fixed");
    });
  };

  /******************** 2.HEADER ACTIVE ADD CLASS ********************/
  PATH.HeaderOnePageNav = function () {
    $(".scroll").onePgaeNav({
      activeClass: "active",
      wrapper: "#onepage-nav",
      navStop: 60,
      navStart: 70,
    });
  };

  /******************** 3.HEADER COLLAPSE ********************/
  PATH.MenuClose = function () {
    $(".navbar-nav li").on("click", function () {
      var toggle = $(".navbar-toggler").is(":visible");
      if (toggle) {
        $(".navbar-collapse").collapse("hide");
      }
    });
  };

  /******************** 4.FIXED HEADER ********************/
  PATH.HeaderFixed = function () {
    var varHeaderFix = $(window).scrollTop() >= 60,
      $navbar = $(".header");
    if (varHeaderFix) {
      $navbar.addClass("navbar_fixed");
    } else {
      $navbar.removeClass("navbar_fixed");
    }
  };
  /******************** 5.Hero5 SLIDER  ********************/
  PATH.Hero5Slide = function () {
    new Swiper(".hero5-slide", {
      loop: true,
      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: false,
      // },
      effect: "cards",
      grabCursor: true,
    });
  };
  /******************** 5.GLIGHTBOX VIDEO HERO ********************/
  PATH.videoModal = function () {
    GLightbox({
      selector: ".glightbox3",
    });
  };
  /******************** 6.GLIGHTBOX VIDEO HERO ********************/
  PATH.SoftwarePreview = function () {
    GLightbox({
      selector: ".glightbox2",
      slideEffect: "zoom",
    });
  };

  /******************** 7.ODOMETER JS  ********************/
  PATH.OdoMeter = function () {
    $(".odometer").appear(function (e) {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  };

  /******************** 8.TESTIMONIAL SLIDER  ********************/
  PATH.TestimonialSlide = function () {
    new Swiper(".testimonialSlider", {
      spaceBetween: 18,
      loop: true,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  /******************** 9.TESTIMONIAL SLIDER V2  ********************/
  PATH.TestimonialSliderV2 = function () {
    new Swiper(".testimonialSliderv2", {
      spaceBetween: 18,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };
  
  /******************** 12.SERVICE SLIDER  ********************/
  PATH.ServiceSlide = function () {
    new Swiper(".service-slider", {
      slidesPerView: 2,
      spaceBetween: 10,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
      },
    });
  };

  /******************** 13.OVERVIEW SLIDER  ********************/
  PATH.OverviewSlide = function () {
    new Swiper(".overview-slide", {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: false,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 2,
        },
      },
    });
  };

  /******************** 14.CONTACT FORM ********************/
  PATH.ContactForm = function () {
    function isValidEmail(emailAddress) {
      var pattern = new RegExp(
        /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
      );
      return pattern.test(emailAddress);
    }
    var $contact = $("#contact-form");
    if ($contact.length) {
      $contact.on("submit", function (e) {
        e.preventDefault();
        var success = $(this).find(".email-success"),
          failed = $(this).find(".email-failed"),
          loader = $(this).find(".email-loading"),
          postUrl = $(this).attr("action");
        var data = {
          name: $(this).find(".contact-name").val(),
          email: $(this).find(".contact-email").val(),
          subject: $(this).find(".contact-subject").val(),
          message: $(this).find(".contact-message").val(),
        };
        if (
          isValidEmail(data["email"]) &&
          data["message"].length > 1 &&
          data["name"].length > 1
        ) {
          $.ajax({
            type: "POST",
            url: postUrl,
            data: data,
            beforeSend: function () {
              loader.fadeIn(1000);
            },
            success: function (data) {
              loader.fadeOut(1000);
              success.delay(500).fadeIn(1000);
              failed.fadeOut(500);
            },
            error: function (xhr) {
              // if error occured
              loader.fadeOut(1000);
              failed.delay(500).fadeIn(1000);
              success.fadeOut(500);
            },
            complete: function () {
              loader.fadeOut(1000);
            },
          });
        } else {
          loader.fadeOut(1000);
          failed.delay(500).fadeIn(1000);
          success.fadeOut(500);
        }
        return false;
      });
    }
  };

  /******************** 18.SMOOTH SCROLL ON BUTTON CLICK  ********************/
  $(document).on("click", "a.smooth", function (event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      1000
    );
  });

  /******************** 18.Button Layout  ********************/
  PATH.ButtonsLayout = function () {
    var layoutMenu = document.querySelector(".layouts__menu__area");
    $(".usage_example").on("click", function () {
      var $this = $(this);
      var $show = $($this.attr("data-show"));
      if(layoutMenu) {
        layoutMenu.style.display = "none";
      }
      $("#example_1, #example_2, #example_3, #example_4, #example_5, #example_6, #example_7, #example_8, #example_9").hide().removeClass("ctm-show");

      $show.slideDown(200, function () {
        setTimeout(function () {
          if ($show.find(".example_popup")[0] !== undefined) {
            // if it has popup
            $show.find(".example_button").trigger("click");
          }
        }, 100);
      });
    });

    // TRIGGER BUTTON ON ANIMATION BUTTONS CLICK


    // CHANGE EFFECT OF THE POPUP
    $("#change_effect, #change_effect_popup").on("change", function () {
      let current = $(this).val();
      let items = $(".example_popup");

      jQuery('.example_button')[0].click();

      items.removeClass(function (index, className) {
        return (className.match(/(^|\s)animation\S+/g) || []).join(" ");
      });
      items.each(function () {
        $(this).addClass("animation" + current);
      });
    });
    $("#change_effect, #change_effect_popup").trigger("change");
    // $(".ctm__button").trigger("click");
    $("#change_effect").togglebutton();
  };

  /******************** 19.SCREENSHOT SLIDER  ********************/
  PATH.ScreenshotSlider = function () {
    new Swiper(".screenshot-slider", {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      autoplay: false,
      breakpoints: {
        576: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
        1400: {
          slidesPerView: 5,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  };

  PATH.DibasicChange = () => {
    var mobileView = document.querySelector(".mobile-view");
    var desktopView = document.querySelector(".desktop-view");
    var layoutPopup = document.querySelector(".layouts__popup");
    if(mobileView) {
      mobileView.addEventListener("click", () => {
        layoutPopup.classList.add("layouts__popup-width");
      });
    }
    if(desktopView) {
      desktopView.addEventListener("click", () => {
        layoutPopup.classList.remove("layouts__popup-width");
      });
    }
  };

  /******************** DOCUMENT READY FUNCTION ********************/
  $(function () {

    PATH.HeaderSticky();
    PATH.HeaderOnePageNav();
    // PATH.MenuClose();
    PATH.videoModal();
    PATH.SoftwarePreview();
    PATH.OdoMeter();
    PATH.TestimonialSlide();
    PATH.TestimonialSliderV2();
    PATH.ServiceSlide();
    PATH.OverviewSlide();
    PATH.ContactForm();
    PATH.Hero5Slide();
    PATH.ScreenshotSlider();
    PATH.ButtonsLayout();
    PATH.DibasicChange()
  });

  /******************** WINDOW ON SCROLL FUNCTION ********************/
  $(window).on("scroll", function () {
    PATH.HeaderFixed();
  });

  /******************** WINDOW ON LOAD FUNCTION ********************/
  $(window).on("load", function () {});
})(jQuery);

/******************** DARK VERSION ********************/
function setTheme(themeName) {
  localStorage.setItem("reboot_theme", themeName);
  document.documentElement.className = themeName;
}
function toggleTheme() {
  if (localStorage.getItem("reboot_theme") === "night-mode") {
    setTheme("theme-light");
  } else {
    setTheme("night-mode");
  }
}
(function () {
  if (localStorage.getItem("reboot_theme") === "night-mode") {
    setTheme("night-mode");
    document.getElementById("slider").checked = false;
  } else {
    setTheme("theme-light");
    document.getElementById("slider").checked = true;
  }
})();

function myFunction() {
  var layoutMenu = document.querySelector(".layouts__menu__area");
  if (layoutMenu.style.display === "none") {
    layoutMenu.style.display = "block";
  } else {
    layoutMenu.style.display = "none";
  }
  console.log("onClick");
}