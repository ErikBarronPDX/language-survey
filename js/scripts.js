var questions = [1, 2, 3];
var language1Counter = 0;
var language2Counter = 0;
var language3Counter = 0;
var language4Counter = 0;

$(document).ready(function() {

  

  $("#submitOne").click(function() {
    var surveyResult = $("input:radio[name=surveyQuestionOne]:checked").val();
    if (surveyResult === "1"){
      language1Counter++;
    } else if (surveyResult === 2){
      language2Counter++;
    } else if (surveyResult === 3) {
      language3Counter++;
    } else {
      language4Counter++;
    }
    $("#questionOne").hide();
    $("#questionTwo").show();
    alert(surveyResult);
    $("#spanOne").text(language1Counter);
    $("#spanTwo").text(language2Counter);
    $("#spanThree").text(language3Counter);
    $("#spanFour").text(language4Counter);
  })

  $("#submitTwo").click(function() {
    var surveyResult = $("input:radio[name=surveyQuestionTwo]:checked").val();
    if (surveyResult === 1){
      language1Counter++;
    } else if (surveyResult === 2){
      language2Counter++;
    } else if (surveyResult === 3) {
      language3Counter++;
    } else {
      language4Counter++;
    }
    $("#questionTwo").hide();
    $("#questionThree").show();
    alert(surveyResult);
    $("#spanOne").text(language1Counter);
    $("#spanTwo").text(language2Counter);
    $("#spanThree").text(language3Counter);
    $("#spanFour").text(language4Counter);
  })

  $("#submitThree").click(function() {
    var surveyResult = $("input:radio[name=surveyQuestionThree]:checked").val();
    if (surveyResult === 1){
      language1Counter++;
    } else if (surveyResult === 2){
      language2Counter++;
    } else if (surveyResult === 3) {
      language3Counter++;
    } else {
      language4Counter++;
    }
    $("#questionThree").hide();
    $("#questionFour").show();
    alert(surveyResult);
  })

  $("#submitFour").click(function() {
    var surveyResult = $("input:radio[name=surveyQuestionFour]:checked").val();
    if (surveyResult === 1){
      language1Counter++;
    } else if (surveyResult === 2){
      language2Counter++;
    } else if (surveyResult === 3) {
      language3Counter++;
    } else {
      language4Counter++;
    }
    $("#questionFour").hide();
    $("#questionFive").show();
    alert(surveyResult);
  })


  $("#submitFive").click(function() {
    var surveyResult = $("input:radio[name=surveyQuestionFive]:checked").val();
    if (surveyResult === 1){
      language1Counter++;
    } else if (surveyResult === 2){
      language2Counter++;
    } else if (surveyResult === 3) {
      language3Counter++;
    } else {
      language4Counter++;
    }
    $("#questionFive").hide();
    alert(surveyResult);
  })

  $("#spanOne").text(language1Counter);
  $("#spanTwo").text(language2Counter);
  $("#spanThree").text(language3Counter);
  $("#spanFour").text(language4Counter);

})

function checkResult() {
  

}
