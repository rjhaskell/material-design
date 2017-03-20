namespace Lesson06 {
    Configuration.$inject = [
        '$mdThemingProvider',
        '$locationProvider',
        '$urlRouterProvider'
    ];

    export function Configuration(
        $mdThemingProvider: ng.material.IThemingProvider,
        $locationProvider: ng.ILocationProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider
    ) {
        $mdThemingProvider.theme('default')
            .primaryPalette('orange')
            .accentPalette('green')
            .warnPalette('red');
        
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
    }
}