



const reg = document.getElementById("registration");
  const success = document.getElementById("good"); 


reg.addEventListener("submit", function(e) {
  e.preventDefault();

  const pass1 = document.getElementById("password1").value;
  const pass2 = document.getElementById("confirmPassword").value;

   
  

  if (pass1.length < 8) {
    success.innerHTML = "Password must be at least 8 characters long";
    success.style.display = "block";
    success.style.color = "red";
    alert("Password must be 8 characters long")

    return; 
  }
    if(pass1.length==8 !== pass2.length==8){
          success.innerHTML = "The length is not the same";
          success.style.display="block"
          alert("The length is not the same")

    }
  if (pass1 === pass2) {
    // success.style.visibility = "visible";
    success.innerHTML = "Successful";
    success.style.color = "green";
      success.style.display = "block";
      alert("Successful")

  }if (pass1 !==pass2){
    // success.style.visibili = "visible";
    success.innerHTML = "Passwords do not match";
    success.style.color = "red";
    success.style.display = "block";
    alert("Password does not match")

  }
});
