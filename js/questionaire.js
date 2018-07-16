window.addEventListener("load", function() {

    function addEventOnCheckBoxes() {
        var checkedBoxes = document.getElementsByClassName('answer');
        for (var i=0; i< checkedBoxes.length; i++) {
            checkedBoxes[i].addEventListener('click', getValueFromCheckBox);
        }
    }
    addEventOnCheckBoxes();

    function getValueFromCheckBox() {
        var arrayOfAnswers = [];
        var roundCheckes = document.getElementsByTagName("input");
        console.log(roundCheckes);
        for (var i = 0; i < roundCheckes.length; i++) {
            if(roundCheckes[i].checked == true) {
                arrayOfAnswers.push(roundCheckes[i].value);
            } 
        } 
        console.log(arrayOfAnswers);
        return arrayOfAnswers;
    } 

});