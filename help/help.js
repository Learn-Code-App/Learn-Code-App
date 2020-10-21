var icon = document.getElementById("nav-icon4");
document.getElementById("nav-icon4").onclick = function(){
	document.getElementById("nav-icon4").classList.add("open");
  window.setTimeout(function () {
  document.getElementById("nav").style.display = "block";
  },500);
};