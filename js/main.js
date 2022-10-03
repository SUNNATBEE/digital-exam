var elBtn = document.querySelector(".site-btn");
var elBody = document.querySelector("body");

elBtn.addEventListener("click", function () {
  elBtn.closest("header").classList.toggle("show");
  elBody.classList.toggle("scroll")
});

$(".slider").slick({
  centerMode: true,
  centerPadding: "10px",
  slidesToShow: 3,
  variableWidth: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        centerMode: true,
        centerPadding: "0",
        slidesToShow: 1,
      },
    },
  ],
});


