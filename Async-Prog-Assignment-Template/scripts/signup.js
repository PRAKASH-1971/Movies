/* successful signin */
document.querySelector("form").addEventListener("submit",signup)
      var userStack = JSON.parse(localStorage.getItem("userDataBase")) || []
      
      function signup(event) {
          event.preventDefault();
          var pass = document.getElementById("password").value;
          var email = document.getElementById("email").value;
         window.location.href = "/login.html"
          console.log(email,pass)
  
          var userdata = {
              password : pass,
              email : email
          };

          userStack.push(userdata);

         localStorage.setItem("userDataBase",JSON.stringify(userStack))
      }

