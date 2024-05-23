const readMoreBtn = document.querySelector('.readMoreBtn');
const text = document.querySelector('.text');


const readMoreBtns = document.querySelector('.readMoreBtns');
const texts = document.querySelector('.texts');

readMoreBtns.addEventListener('click',(e)=>{
  texts.classList.toggle('show-more');
  if(readMoreBtns.innerText === 'More'){
    readMoreBtns.innerText = 'Less';
  }else{
    readMoreBtns.innerText = 'More';
  }
})

readMoreBtn.addEventListener('click',(e)=>{
  text.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'More'){
    readMoreBtn.innerText = 'Less';
  }else{
    readMoreBtn.innerText = 'More';
  }
})



function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}