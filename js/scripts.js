var questions = [1, 2, 3, 4, 5];
var language1Counter = 0;
var language2Counter = 0;
var language3Counter = 0;
var language4Counter = 0;

$(document).ready(function() {

  questions.forEach(function(questions) {
    $("#submit" + questions).click(function() {
      var surveyResult = $("input:radio[name=surveyQuestion" + questions + "]:checked").val();
      if (surveyResult === "1"){
        language1Counter++;
      } else if (surveyResult === "2"){
        language2Counter++;
      } else if (surveyResult === "3") {
        language3Counter++;
      } else {
        language4Counter++;
      }

      $("#question" + questions).hide();
      $("#question" + (questions + 1)).fadeIn();
      
      $("#spanOne").text(language1Counter);
      $("#spanTwo").text(language2Counter);
      $("#spanThree").text(language3Counter);
      $("#spanFour").text(language4Counter);

    })
  });
});
