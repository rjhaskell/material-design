namespace Lesson06.Views.Games {
    export class DeleteController {
        public game: Models.Game;

        static $inject = [
            '$state',
            '$stateParams',
            'GameService'
        ];

        constructor (
            private $state: ng.ui.IStateService,
            $stateParams: ng.ui.IStateParamsService,
            private GameService: Services.GameService
        ) {
            this.game = GameService.get($stateParams['id']);
        }

        public deleteGame(): void {
            if(this.GameService.delete(this.game.id)) {
                this.$state.go('Games');
                
                return;
            }

            alert(`FAILED to delete ${this.game.title}!`);
        }
    }
}