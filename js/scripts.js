$(document).ready(function(){
  $("#check").submit(function(event){
    event.preventDefault();
    var sideA = parseInt($("#sideA").val());
    var sideB = parseInt($("#sideB").val());
    var sideC = parseInt($("#sideC").val());
    var test1 = (sideA + sideB) - sideC;
    var test2 = (sideB + sideC) - sideA;
    var test3 = (sideA + sideC) - sideB;


    if (test1 > 0 && test2 > 0 && test3 > 0){
      if (sideA === sideB && sideB === sideC){
        $("#triangletype").text("Equilateral");
      } else if (sideA === sideB || sideB === sideC || sideA === sideC) {
        $("#triangletype").text("Isosceles");
      } else {
        $("#triangletype").text("Scalene");
      }
    } else {
      $("#triangletype").text("NOT A TRIANGLE");
    }
  });
});
