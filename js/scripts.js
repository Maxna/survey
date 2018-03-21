$(document).ready(function() {
  $("#dogs").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var color = $("#color").val();
    var mass = $("#mass").val();


    $("#output").text(result);
  })
})
