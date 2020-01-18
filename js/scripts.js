var questions = [1, 2, 3, 4, 5];
var language1Counter = 0;
var language2Counter = 0;
var language3Counter = 0;
var language4Counter = 0;

$(document).ready(function() {
  $("#questionName").show();
  $("#questionName").submit(function(event) {
    var userName = $("#userName").val();
    if (!userName) {
      alert("Please enter your name");
    } else {
      $(".userName").text(userName);
      $("#questionName").hide();
      $("#question1").fadeIn();
      event.preventDefault();
      questions.forEach(function(questions) {
        $("#submit" + questions).click(function() {
          var surveyResult = $("input:radio[name=surveyQuestion" + questions + "]:checked").val();
          if (!surveyResult) {
            alert("please select an answer")
          } else {
          if (surveyResult === "1")
            language1Counter++;
            else if (surveyResult === "2")
            language2Counter++;
            else if (surveyResult === "3")
            language3Counter++;
            else
            language4Counter++;
          $("#question" + questions).hide();
          $("#question" + (questions + 1)).fadeIn();
          if (questions === 5) {
            $("#displayResults").show();
            if (language1Counter >= language2Counter && language1Counter >= language3Counter && language1Counter >= language4Counter)
              $("#htmlResult").show();
            else if (language2Counter >= language1Counter && language2Counter >= language3Counter && language2Counter >= language4Counter)
              $("#javaScriptResult").show();
            else if (language3Counter >= language1Counter && language3Counter >= language2Counter && language3Counter >= language4Counter)
              $("#pythonResult").show();
            else 
              $("#reactResult").show();
          }
        }
        })
      });
    }
  })
});