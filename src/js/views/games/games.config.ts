namespace Lesson06.Views.Games {
    Configuration.$inject = [
        '$stateProvider'
    ];

    export function Configuration(
        $stateProvider: ng.ui.IStateProvider
    ) {
        $stateProvider
            .state('Games', <ng.ui.IState>{
                url: '/games',
                templateUrl: 'js/views/games/games.view.html',
                controller: 'GamesController',
                controllerAs: 'vm'
            })
            .state('GameDetail', <ng.ui.IState>{
                url: '/games/:id',
                templateUrl: 'js/views/games/detail.view.html',
                controller: 'GameDetailController',
                controllerAs: 'vm'
            })
            .state('GameEdit', <ng.ui.IState>{
                url: '/games/:id/edit',
                templateUrl: 'js/views/games/edit.view.html',
                controller: 'GameDetailController',
                controllerAs: 'vm'
            })
            .state('GameDelete', <ng.ui.IState>{
                url: '/games/:id/delete',
                templateUrl: 'js/views/games/delete.view.html',
                controller: 'GameDetailController',
                controllerAs: 'vm'
            }).state('GameCreate', <ng.ui.IState>{
                url: '/games/:id/create',
                templateUrl: 'js/views/games/create.view.html',
                controller: 'GameDetailController',
                controllerAs: 'vm'
            });
    }
}