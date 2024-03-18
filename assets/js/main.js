  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    center: true,
    nav: true,
    responsiveClass: true,
    items: 1,
    dots:false,
    navText : ['<img src="./images/angle-left.png" width="10"><img src="./images/angle-left.png" width="10">','<img src="./images/angle-right.png" width="10"><img src="./images/angle-right.png" width="10">'],
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });



const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  btn.style.display = "none";
});


  var header = document.getElementById("nav");
  var btns = header.getElementsByClassName("item");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    });
  }