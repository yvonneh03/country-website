// navigation toggle
const button = document.getElementById("nav-toggle");
const list = document.getElementById("site-nav-list");

button.addEventListener('click', function() {
    list.classList.toggle('toggled');
})