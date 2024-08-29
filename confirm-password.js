// 💙 MEMBERSCRIPT #46 v0.1 💙 CONFIRM PASSWORD INPUT 

var password = document.querySelector('[data-ms-member=password]')
  , confirm_password = document.querySelector('[ms-code-password=confirm]')

function validatePassword(){
  if(password.value != confirm_password.value) {
 		confirm_password.setCustomValidity("Passwords Don't Match");
    confirm_password.classList.add("invalid")
    confirm_password.classList.remove("valid")
  } else {
 		confirm_password.setCustomValidity('');
    confirm_password.classList.remove("invalid")
    confirm_password.classList.add("valid")
  }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;