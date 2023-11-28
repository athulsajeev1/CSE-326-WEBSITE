const header = document.querySelector('header');

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY >80)
});
var modal = document.getElementById('id01');

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



