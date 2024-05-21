var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

var dateInput = document.getElementById("myDateInput");


dateInput.addEventListener("click", function () {

  var calendarIcon = this.nextSibling;

  calendarIcon.style.filter = "invert(0)";
});





const loginButton = document.getElementById('loginButton');

loginButton.addEventListener('click', function () {

    window.location.href = 'Home.html'; 
});



const logoutButton = document.getElementById('logoutButton');


logoutButton.addEventListener('click', function () {
    window.location.href = 'login.html'; 
});


