// Wait for the window to load, then hide the loader and show the content
window.onload = function () {
  // Simulate a delay (for example, 3 seconds)
  setTimeout(function () {
    // Hide the loader container
    document.querySelector(".loader-container").style.display = "none";
    // Show the main content with a smooth transition
    document.querySelector(".content").style.display = "block";
  }, 3000); // 3 seconds delay
};

let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
  }
  if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validatePhone() {
  let phone = document.getElementById("contact-phone").value;

  if (phone.length == 0) {
    phoneError.innerHTML = "Phone number required";
    return false;
  }
  if (phone.length !== 11) {
    phoneError.innerHTML = "Phone number should be 11 digits";
    return false;
  }
  if (phone.length == 11) {
    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  }
}

function validateEmail() {
  let email = document.getElementById("contact-email").value;

  if (email.length == 0) {
    emailError.innerHTML = "Email required";
    return false;
  }

  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
}

function validateMessage() {
  let message = document.getElementById("contact-message").value;
  if (message.length < 5) {
    messageError.innerHTML = "Input a message";
  } else {
    messageError.innerHTML = "valid";
  }
}

function validateForm() {
  if (
    !validateName() ||
    validatePhone() ||
    validateMessage() ||
    validateEmail()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please fix the error";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
}

let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

function checkPassword() {
  if (password.type == "password") {
    password.type = "text";
    eyeicon.src = "./img/eye-open.png";
  } else {
    password.type = "password";
    eyeicon.src = "./img/eye-close.png";
  }
}
