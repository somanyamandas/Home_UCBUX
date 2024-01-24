document.addEventListener("DOMContentLoaded", function () {
    var emailForm = document.getElementById("emailForm");
  
    emailForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      var formData = new FormData(emailForm);
  
      console.log("Form Data:", formData);
  
      emailForm.reset();
    });
  });
  