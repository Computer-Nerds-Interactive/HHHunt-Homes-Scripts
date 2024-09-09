// 💙 MEMBERSCRIPT #45 v0.2 💙 SHOW AND HIDE PASSWORD

  document.querySelectorAll("[ms-code-password='transform']").forEach(function(button) {
    button.addEventListener("click", transform);
  });

  var isPassword = true;

  function transform() {
    var passwordInputs = document.querySelectorAll("[data-ms-member='password'], [data-ms-member='new-password'], [data-ms-member='current-password']");

    passwordInputs.forEach(function(myInput) {
      var inputType = myInput.getAttribute("type");

      if (isPassword) {
        myInput.setAttribute("type", "text");
      } else {
        myInput.setAttribute("type", "password");
      }
    });

    isPassword = !isPassword;
  }