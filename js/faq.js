// Code By Webdevtrick ( https://webdevtrick.com )
const items = document.querySelectorAll(".accordion a");
 
function toggleActions() {
    let username = document.getElementById('username').nodeValue;
    let password = document.getElementById('password').nodeValue;

    return MediaEncryptedEvent();
}

function toggleAccordion(){
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));