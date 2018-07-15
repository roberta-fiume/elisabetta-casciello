window.addEventListener("load", function() {

    function addEventToBookAppointment() {
        var bookAppointment = document.getElementById('h2-booking');
        bookAppointment.addEventListener('click', showOrHideContactUsOnClick);
    }

    function showOrHideContactUsOnClick() {
        var bookAppointment = document.getElementById('h2-booking');
        var divContacts = document.getElementById('div-contacts');
        if (divContacts.style.display === "none") {
            showContactUsOnClick();
        } else {
            hideContactUsOnClick();
        }
    }
      
    function showContactUsOnClick() {
        var divContacts = document.getElementById('div-contacts');
        divContacts.style.display = "flex"; 
    }

    function hideContactUsOnClick() {
        var divContacts = document.getElementById('div-contacts');
        divContacts.style.display = "none";
    }

    addEventToBookAppointment();
      
});
