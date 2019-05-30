(function () {
    angular.module('app.routes', ['ngRoute', 'app.config.oclazyLoad'])
        .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
            $locationProvider.html5Mode(true);

            $routeProvider
                .when('/', {
                    templateUrl: 'templates/home/home.tpl.html'
                    , controller: 'HomeController'
                    , resolve: {
                        loadDependencies: loadDependenciesLazyLoad(['commons', 'home-page'])
                    }
                })
                .when('/about', {
                    templateUrl: 'templates/about/about.tpl.html'
                    , controller: 'AboutController'
                    , resolve: {
                        loadDependencies: loadDependenciesLazyLoad(['commons', 'about-page'])
                    }
                })
                .otherwise({
                    redirectTo: '/'
                });
        }])
})();

function loadDependenciesLazyLoad(modules){
    return ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load(
            modules
            // , { insertBefore: '#ng_load_plugins_before'}
        );
    }]
}