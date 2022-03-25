/* successful lo0gin */
document.querySelector("form").addEventListener("submit",signup)

var regduser = JSON.parse(localStorage.getItem("userDataBase"));
console.log(regduser);

function signup(event){
    event.preventDefault();
          var email = document.querySelector("#email").value ;
          var password = document.querySelector("#password").value ;
          
           var isregistered = false
            var isloggedin = false
          for(var i=0;i<regduser.length;i++){       
              console.log("loop",regduser[i].password,regduser[i].email)
              if(regduser[i].email == email){
                  isregistered = true
              }

              if(isregistered && regduser[i].password === password){
                  isloggedin = true
              }else{
                isloggedin = false
            }
          }

          if(isregistered && isloggedin){
              alert("Login-Successful")
              window.location.href = '/index.html'
          }else{
              alert("Login-Failed")
          }

      }