function validate_email() {
  var email = document.getElementById("Email");
  var message = document.getElementById("alert_message");
  if (email.value === "") {
    message.innerHTML = "Error:Input field is empty!";
    return false;
  }
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(email)) {
    message.innerHTML = "Error:Invalid email format!";
    return false;
  } else {
    email.submit();
  }
}
