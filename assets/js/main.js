var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");


menuBtn.onclick = function () {
  if (sideNav.style.right === "0px") {
    sideNav.style.right = "-250px";
  } else {
    sideNav.style.right = "0px";
  }
};
