(function(){
	angular.module('app.config.oclazyLoad', ['oc.lazyLoad'])
		.config(['$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
			$ocLazyLoadProvider.config({
                modules: [
                	{
                        name: 'commons',
                        files: [
                            'assets/js/commons/utils.js'
                        ],
                    },
                    {
                        name: 'home-page',
                        files: [
                            'assets/css/home.css',
                            'assets/js/main/controllers/homeController.js'
                        ],
                    },
                    {
                        name: 'about-page',
                        files: [
                            { type: 'css', path: 'assets/css/about.css'},
                            { type: 'js', path: 'assets/js/main/controllers/aboutController.js'},
                            { type: 'js', path: 'assets/js/commons/utils.js'}
                        ]
                    }
                ],
            });
		}]);
})();