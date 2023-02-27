jQuery(document).ready(function () {
  "use strict";
  $(".slider").ripples({
    dropRadius: 18,
    perturbance: 0.001,
  });

  $(".text").typed({
    strings: [
      "<span class='primary'> SINGULARITY.</span>",
      "<span class='primary'> FUTURE TECH.</span>",
    ],
    typespeed: 1,
    loop: true,
  });



  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if(currentScrollPos === 0){
      document.getElementById("navbar").style.top = "0";
    }
    else if (prevScrollpos > currentScrollPos ) {
      document.getElementById("navbar").style.top = "0";
    } 
    else {
      document.getElementById("navbar").style.top = "-60px";
    }
    prevScrollpos = currentScrollPos;
  }
  

  $(".work").magnificPopup({
    delegate: "a", // child items selector, by clicking on it popup will open
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 500,
    loop: true,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      480: {
        items: 2,
      },

      768: {
        items: 3,
      },
    },
  });
  $(".counter").counterUp({
    delay: 10,
    time: 4000,
  });

  $("a.smooth-scroll").click(function (event) {
    event.preventDefault();

    var section = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section).offset().top - -2,
      },
      1250,
      "easeInOutExpo"
    );
  });
  new WOW().init();

  $("#logo").click(() => {
    console.log($("#logo"));

    var video = $("source").prop("src", "video1.mp4");

    console.log(video);
  });
});
