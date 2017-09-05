require.config({
    baseUrl: "scripts1",
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        mdb: {
            deps: ['jquery', 'bootstrap', 'popper', 'lib/modules/jquery-easing', 'lib/modules/global', 'lib/modules/velocity', 'lib/modules/chart', 'lib/modules/wow', 'lib/modules/scrolling-nav', 'lib/modules/waves', 'lib/modules/forms-basic'],
            exports: 'mdb'
        },
        waves: {
            deps: ['jquery'],
            exports: 'waves'
        }
    },

    paths: {
        jquery: 'lib/jquery-3.1.1.min',
        popper: 'lib/popper.min',
        bootstrap: 'lib/bootstrap.min',
        mdb: 'lib/mdb.min',
        waves: 'lib/modules/waves',
        indexController: 'indexController',
        changeHtmlService: 'services/changeHtmlService',
        validationService: 'services/validationService'
    }
});

require(['jquery', 'popper', 'bootstrap', 'mdb', 'waves', 'indexController', 'changeHtmlService', 'validationService'], function (jquery, popper, bootstrap, mdb, waves, indexController, changeHtmlService, validationService) {
    indexController.init();

});