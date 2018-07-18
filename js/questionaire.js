window.addEventListener("load", function() {

    function addEventOnCheckBoxes() {
        var checkedBoxes = document.getElementsByClassName('answer');
        for (var i=0; i< checkedBoxes.length; i++) {
            checkedBoxes[i].addEventListener('click', pushValuesFromCheckBoxInArray);
        }
    }
    addEventOnCheckBoxes();


    function pushValuesFromCheckBoxInArray() {
        var arrayOfAnswers = [];
        var roundCheckes = document.getElementsByTagName("input");
        for (var i = 0; i < roundCheckes.length; i++) {
            if(roundCheckes[i].checked == true) {
                var integerAnswers = parseInt(roundCheckes[i].value, 10);
                arrayOfAnswers.push(integerAnswers);
            } 
        } 
        console.log(arrayOfAnswers);
        return arrayOfAnswers;
    } 

    function sumAnswersInArray() {
        var sumAnswers = 0;
        for (var i = 0; i < arrayOfAnswers.length; i++) {
            sumAnswers+= arrayOfAnswers[i];
        }
        console.log(sumAnswers);
        return sumAnswers;  
    }

    function addEventToGetResultButton() {
        var buttonResult = document.getElementById('div-get-result');
        buttonResult.addEventListener("click", sumAnswersInArray);
    }
  


});