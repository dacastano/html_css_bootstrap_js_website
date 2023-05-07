document.getElementById("myForm").addEventListener("submit", function(event) {
    var name = document.getElementById("name").value;
    var address = document.getElementById("address").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var city = document.getElementById("city").value;
    var age = document.getElementById("age").value;
  
    if (name === "" || address === "" || phone === "" || email === "" || city === "" || age === "") {
      alert("Please fill out all fields.");
      event.preventDefault();
    }
  });