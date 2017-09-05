require.config({
    baseUrl: "scripts",
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'Bootstrap'
        },
        mdb: {
            deps: ['jquery', 'bootstrap', 'popper', 'jqueryEasing', 'global', 'velocity', 'chart', 'wow', 'scrollingNav', 'waves', 'formsBasic'],
            exports: 'mdb'
        },
        waves: {
            deps: ['jquery'],
            exports: 'waves'
        },
        buttons: {
            deps: ['jquery'],
            exports: 'buttons'
        },
        collapsible: {
            deps: ['jquery'],
            exports: 'collapsible'
        },
        dropdown: {
            deps: ['jquery'],
            exports: 'dropdown'
        },
        formsBasic: {
            deps: ['jquery'],
            exports: 'formsBasic'
        },
        global: {
            deps: ['jquery'],
            exports: 'global'
        },
        scrollingNav: {
            deps: ['jquery'],
            exports: 'scrollingNav'
        },
        videoBg: {
            deps: ['jquery'],
            exports: 'videoBg'
        },
        jqueryEasing: {
            deps: ['jquery'],
            exports: 'jqueryEasing'
        },
    },

    paths: {
        jquery: 'lib/jquery-3.1.1.min',
        bootstrap: 'lib/bootstrap.min',
        popper: 'lib/popper.min',
        mdb: 'lib/mdb.min',
        buttons: 'lib/more/buttons',
        chart: 'lib/more/chart',
        collapsible: 'lib/more/collapsible',
        dropdown: 'lib/more/dropdown',
        formsBasic: 'lib/more/forms-basic',
        global: 'lib/more/global',
        jqueryEasing: 'lib/more/jquery-easing',
        scrollingNav: 'lib/more/scrolling-nav',
        velocity: 'lib/more/velocity',
        videoBg: 'lib/more/video-bg',
        wavesEffect: 'lib/more/waves-effect',
        wow: 'lib/more/wow',
        waves: 'lib/more/waves',
        indexController: 'indexController',
        changeHtmlService: 'services/changeHtmlService',
        checkWinnerService: 'services/checkWinnerService',
        endGameService: 'services/endGameService',
        historyService: 'services/historyService',
        moveBackService: 'services/moveBackService',
        moveService: 'services/moveService',
        popUpService: 'services/popUpService',
        startGameService: 'services/startGameService',
        turnAndStatisticsService: 'services/turnAndStatisticsService',
        validationService: 'services/validationService'
    }
});

require(['jquery', 'bootstrap', 'popper', 'buttons', 'chart', 'collapsible', 'dropdown', 'formsBasic', 'global', 'jqueryEasing', 'scrollingNav',
    'velocity', 'videoBg', 'wow', 'indexController', 'changeHtmlService', 'checkWinnerService', 'endGameService', 'historyService', 'moveBackService',
    'moveService', 'popUpService', 'startGameService', 'turnAndStatisticsService', 'validationService'],
    function (jquery, bootstrap, popper, buttons, chart, collapsible, dropdown, formsBasic, global, jqueryEasing, scrollingNav,
        velocity, videoBg, wow, indexController, changeHtmlService, checkWinnerService, endGameService, historyService, moveBackService,
        moveService, popUpService, startGameService, turnAndStatisticsService, validationService) {
    });