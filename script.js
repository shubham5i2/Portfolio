const navbar = document.querySelector(".navbar");
const menubtn = document.querySelector(".menu-btn");
const mnu = document.getElementById("mnu");
const scrollupbtn = document.getElementById("scroll-up-btn");

window.onscroll = function () {
  var top = window.scrollY;
  if (top >= 10) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    scrollupbtn.style.display = "block";
  } else {
    scrollupbtn.style.display = "none";
  }
};

menubtn.addEventListener("click", function () {
  console.log("clicked");
  mnu.classList.toggle("active");
});

scrollupbtn.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// typing text animation script
var typed = new Typed(".typing", {
  strings: ["Software Engineer", "Web Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});

var typed = new Typed(".typing-2", {
  strings: ["Software Engineer", "Web Developer"],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});
