define('indexController', ['jquery', 'changeHtmlService', 'validationService'],
    function ($, changeHtmlService, validationService) {
        "use strict";

        function init() {
            initListeners();
        };



        function initListeners() {

            document.getElementById("name-form-div-button").addEventListener("click", changeNameDivToGameDiv);

            [].forEach.call(document.querySelectorAll("a[href='#']"), function (link) {
                link.addEventListener("click", function () {
                    alert("Strona w budowie!");
                });
            });
        };

        function changeNameDivToGameDiv() {
            if (validationService.isFormValid()) {
                changeHtmlService.changeNameDivToGameDiv();
            } else { alert("Źle wypełniony formularz"); }
        }

        return {
            init: init
        }

    });