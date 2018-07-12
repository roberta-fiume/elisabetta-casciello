window.addEventListener("load", function() {

    function addEventToBookAppointmentText() {
        var bookAppointment = document.getElementById('h2-booking');
        bookAppointment.addEventListener('click', showOrHideDivContactsOnClick);
    }

    function showOrHideDivContactsOnClick() {
        var bookAppointment = document.getElementById('h2-booking');
        var divContacts = document.getElementById('div-contacts');
        if (divContacts.style.display === "none") {
            showDivContactsOnClick();
        } else {
            hideDivContactsOnClick();
        }
    }
      
    function showDivContactsOnClick() {
        var divContacts = document.getElementById('div-contacts');
        divContacts.style.display = "flex"; 
    }

    function hideDivContactsOnClick() {
        var divContacts = document.getElementById('div-contacts');
        divContacts.style.display = "none";
    }

    addEventToBookAppointmentText();
      
});
