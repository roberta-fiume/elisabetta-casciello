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

    function addEventToGetResultButton() {
        var buttonResult = document.getElementById('button-get-result');
        buttonResult.addEventListener("click", defineProfileAndPrintResultinHtml);
    }
 
    function sumAnswersInArray() {
        var arrayOfAnswers = pushValuesFromCheckBoxInArray();
        var summedAnswers = 0;
        for (var i = 0; i < arrayOfAnswers.length; i++) {
            summedAnswers+= arrayOfAnswers[i];
        }
        console.log(summedAnswers);
        return summedAnswers;  
    }

    function defineProfileAndPrintResultinHtml() {
        hideTest();
        showTestResult();
        changeBodyStyle()
        deleteMarginLeftDivTest();
        showMenu();
        var testResultProfile = document.getElementById("get-result-profile");
        var summedAnswers = sumAnswersInArray();
        if (summedAnswers === 14) {
          return testResultProfile.innerHTML = "Congratulazioni hai totalizzato il massimo punteggio! Hai ottime abitudini alimentari e ti piace prenderti cura di te attraverso una regolare attività fisica e una corretta alimentazione."+ " "+ "Questo ti aiuta a sentirti sempre al meglio giorno dopo giorno. Continua così!!!";
        } else if (summedAnswers < 14 && summedAnswers >= 8) {
          return testResultProfile.innerHTML = "Siamo sulla buona strada! Le tue abitudini alimentari sono quasi tutte giuste." + " " +  "Ti consiglio di riprendere in considerazione le risposte alle quali hai dato “SI”. Puoi fare di più per te stesso/a.";
        } else if (summedAnswers === 7) {
          return  testResultProfile.innerHTML = "Alcune delle tue abitudini alimentari sono corrette ma c’è ancora tanta strada da fare per “correggere il tiro”!" + " " + "Puoi sicuramente lavorarci su per sentirti al meglio.";
        } else if (summedAnswers >= 0 && summedAnswers < 6) {
          return  testResultProfile.innerHTML = "Ahimè bisogna correre ai ripari!" + " " + "Il tuo punteggio evidenzia abitudini alimentari scorrette." + " " + "C’è molto da fare ma non scoraggiarti!" + " " + "Non è mai troppo tardi per iniziare a mangiare in modo sano e consapevole.";
        }
    }
    
    function hideTest() {
        var divTest = document.getElementById('big-div-group-statements');
        divTest.style.display = "none";
        showTestResult();
    }

    function showTestResult() {
        var testResult = document.getElementById('div-get-result-profile');
        testResult.style.display = "flex";
    }

    function showMenu() {
        var menu = document.getElementsByClassName('div-menu')[0];
        menu.style.display = "flex";
        menu.style.alignSelf = "flexStart";
    }

    function deleteMarginLeftDivTest() {
        var divTest = document.getElementById('div-test');
        divTest.style.marginLeft = "250px";
        divTest.style.height = "60%";
        divTest.style.width = "50%";
    }

    function changeBodyStyle() {
        var bodyJs = document.getElementById('bodyJs');
        bodyJs.style.flexWrap = "wrap";
        bodyJs.style.justifyContent = "center";
    }


    addEventToGetResultButton();
  



});