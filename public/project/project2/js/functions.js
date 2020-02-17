var pencilAmount = 0;
var notebookAmount = 0;
var calculatorAmount = 0;
var shippingAmount = 0;
var subtotalAmount = 0;
var tax = 0;


$("#pencil").on("change", function(){
    pencilAmount = parseInt($("#pencil").val()) * 2;
    $("#pencilTotal").html("$" + pencilAmount);
});

$("#notebook").on("change", function(){
    notebookAmount = parseInt($("#notebook").val()) * 5;
    $("#notebookTotal").html("$" + notebookAmount);
});

$("#calculator").on("change", function() {
    calculatorAmount = parseInt($("#calculator").val()) * 20;
    $("#calculatorTotal").html("$" + calculatorAmount);
});

$("#shippingChoice").on("change", function(){
    if($(this).val() == "regular"){
        shippingAmount = 4;
    }else if($(this).val() == "nextDay"){
        shippingAmount = 16;
    }else if($(this).val() == "threeDay"){
        shippingAmount = 8;
    }
    $("#shipping").html("$" + shippingAmount);
});

$(".updateTotal").on("change", function() {
    subtotalAmount = pencilAmount + notebookAmount + calculatorAmount + shippingAmount;
    $("#subtotal").html("$" + subtotalAmount);

    tax = subtotalAmount * 0.1;
    $("#tax").html("$" + tax);

    $("#total").html("$" + (subtotalAmount + tax));
});
$("#confirmBtn").on("click", function() {
     $("#shippingSpan").html("");
    let noError = true;

    if($("#shippingChoice").val() == ""){
        $("#shippingSpan").html("A shipping option must be selected").css("color", "red");
        noError = false;
    }
    if(noError){
        $("#noError").html("THANK YOU FOR YOUR PURCHASE!");
    }
} );
