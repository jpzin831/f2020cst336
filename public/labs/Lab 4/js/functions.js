
$("#zipCode").on("change", function(){
    $.ajax({
        type: "GET",
        url: "https://itcdland.csumb.edu/~milara/ajax/cityInfoByZip.php",
        dataType: "json",
        data: { "zip": $("#zipCode").val() },
        success: function(data,status) {
            $("#city").html(data.city);
            $("#latitude").html(data.latitude);
            $("#longitude").html(data.longitude);
             $("#noZipCode").html('');
        },
        complete: function(data,status) {
            if(status == "error"){
                $("#noZipCode").html("Zip Code not found").css('color', 'red');
            }
        }

    });
});

$("#signupForm").on("click", function(e){
  //arlet(usernameAvailable)
  if(!isFormValid()) {
    e.preventDefault();
  }
});

function isFormValid(){
  var isvalid = true;
  if ($("#userName").val().length < 4){
      isvalid = false;
      $("#nameError").html("Invalid username").css('color', 'red');

  }
  if($("#password").val().length < 6){
      $("#passwordError").html("Password needs to be at least 6 characters.").css('color', 'red');;
      isvalid = false;
  }
  if($("#confirmPassword").val() != $("#password").val()){
      $("#passwordError").html("Password Mismatch!").css('color', 'red');;
      isvalid = false;
  }
  return isValid;
}

$("#userName").on("change", function() {
    $.ajax({
        type: "GET",
        url: "https://cst336.herokuapp.com/projects/api/usernamesAPI.php",
        dataType: "json",
        data: { "username": $("#userName").val() },
        success: function(result,status) {
            if (result.available){
                $("#nameError").html("Valid username").css("color", "green");
            }
            else{
                $("#nameError").html("Username is unavailable").css("color", "red");
            }
        },
        complete: function(data,status) {

        }

    });
});

$("#state").on("change", function(){
    $.ajax({
        type: "GET",
        url: "https://itcdland.csumb.edu/~milara/ajax/countyList.php",
        dataType: "json",
        data: { "state": $("#state").val() },
        success: function(data,status) {
            $("#county").html("<option> Select One </option>");
            for(let i = 0; i < data.length; i++){
                $("#county").append("<option>" + data[i].county + "</option>");
            }
        },
        complete: function(data,status) {

        }

    });
});
