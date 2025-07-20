document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("signupForm").addEventListener("submit", function (event) {
    let valid = true;
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
    const name = document.getElementById("name").value.trim();
    if (!/^[A-Za-z\s]{3,}$/.test(name)) {
      document.getElementById("nameError").textContent = "Enter a valid name (letters only, min 3 characters).";
      valid = false;
    }
    const email = document.getElementById("email").value.trim();
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email address.";
      valid = false;
    }
    const phone = document.getElementById("phone").value.trim();
    if (!/^\d{10}$/.test(phone)) {
      document.getElementById("phoneError").textContent = "Enter a valid 10-digit phone number.";
      valid = false;
    }
    const password = document.getElementById("password").value;
    if (!/^(?=.*[A-Za-z])(?=.*\d).{6,}$/.test(password)) {
      document.getElementById("passwordError").textContent = "Min 6 characters with letters and numbers.";
      valid = false;
    }
    const confirmPassword = document.getElementById("confirmPassword").value;
    if (password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      valid = false;
    }
    const roleSelected = document.querySelector('input[name="role"]:checked');
    if (!roleSelected) {
      document.getElementById("roleError").textContent = "Please select a role.";
      valid = false;
    }
    if (!valid) {
      event.preventDefault();
    }
  });
});
