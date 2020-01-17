var questions = [1, 2, 3];
var language1Counter = 1;
var language2Counter = 1;
var language3Counter = 1;
var language4Counter = 1;

$(document).ready(function() {
  $("#submit").click(function() {

    
    
    questions.forEach(function(repeatTimes, event) {

    var surveyResult = $("input:radio[name=surveyQuestion]:checked").val();

    if (surveyResult === 1){
      language1Counter++;
    } else if (surveyResult === 2){
      language2Counter++;
    } else if (surveyResult === 3) {
      language3Counter++;
    } else {
      language4Counter++;
    }
  
    alert(surveyResult);

    checkResult(surveyResult);


    })


    

  })
})

function checkResult() {
  

}
