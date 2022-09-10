function openCloseNav() {

var MenuNav = document.getElementById("menuNav")  
var l1 = document.querySelector("div.l1")
var l2 = document.querySelector("div.l2")
var l3 = document.querySelector("div.l3")

  if (MenuNav.style.width == "0%") {
    MenuNav.style.width = "30%";
    l1.style.background = "transparent";
    l1.style.transition = "all 1.5s";
    l2.style.position = "relative";
    l2.style.rotate = "45deg";
    l2.style.top = "0px";
    l2.style.transition = "all 1s";
    l3.style.position = "relative";
    l3.style.rotate = "135deg";
    l3.style.top = "-10px";
    l3.style.transition = "all 1s";
  } else {
    MenuNav.style.width = "0%";
    l1.style.background = "#fff";
    l2.style.position = "static";
    l2.style.rotate = "0deg";
    l3.style.position = "static";
    l3.style.rotate = "0deg";
  }
}

