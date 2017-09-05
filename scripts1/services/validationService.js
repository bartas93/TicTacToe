define('validationService', ['jquery'], function ($) {

    return {
        isFormValid: function () {
            if (document.getElementById("form1").checkValidity() && document.getElementById("form2").checkValidity()) {
                return true;
            }
            else {
                return false;
            }
        }
    };

});