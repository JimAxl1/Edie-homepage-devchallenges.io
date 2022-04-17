function openNav() {
  document.getElementById("overlay").style.height = "100%";
  document.getElementById("menu").style.display = "block";
}
  
function closeNav() {
  if(window.innerWidth < 900){
    document.getElementById("overlay").style.height = "0%";
    document.getElementById("menu").style.display = "none";
  }
}