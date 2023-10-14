/*The password display feature was added at the request of my followers, it's not necessary for the animation to work*/
function myFunction() {
    var x = document.getElementById("passwordInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
