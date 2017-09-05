define([], function () {
    return {
        isFormValid: function () {
            return (document.getElementById("form1").checkValidity() && document.getElementById("form2").checkValidity());
        }
    };
});
