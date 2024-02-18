window.onload = function() {
  var loginForm = document.getElementById("loginForm");
  var validMessage = document.getElementById("validMessage");
  var invalidMessage = document.getElementById("invalidMessage");

  loginForm.addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form submission

      // Get the values of username and password
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      // Load the users JSON file
      fetch('users.json')
          .then(response => response.json())
          .then(data => {
              // Check if the entered username and password match any of the user records in the JSON data
              var validUser = data.users.find(function(user) {
                  return user.username === username && user.password === password;
              });

              if (validUser) {
                  // Display valid message and hide invalid message
                  validMessage.style.display = "block";
                  invalidMessage.style.display = "none";

                  // Redirect to verification page
                  window.location.href = "verification.html";
              } else {
                  // Display invalid message and hide valid message
                  validMessage.style.display = "none";
                  invalidMessage.style.display = "block";
              }
          })
          .catch(error => {
              console.error('Error loading users.json:', error);
          });
  });
};
