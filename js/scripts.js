var questions = [1, 2, 3, 4, 5];

$(document).ready(function() {
  $("#submit").click(function() {

    
    
    questions.forEach(function(repeatTimes) {

      alert(repeatTimes);
      

    })

    var surveyResult = $("input:radio[name=surveyQuestion]:checked").val();

    alert(surveyResult);

  })
})