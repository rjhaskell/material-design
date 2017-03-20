namespace Lesson06.Views.Games {
    export class DetailController {
        public game: Models.Game;

        static $inject = [
            '$state',
            '$stateParams',
            'GameService'
        ];

        constructor(
            private $state: ng.ui.IStateService,
            $stateParams: ng.ui.IStateParamsService,
            private GameService: Services.GameService
        ) {
            this.game = GameService.get($stateParams['id']);
        }


        public editGame(): void {
            if (this.GameService.update(this.game.id, this.game)) {
                this.$state.go('Games');

                return;
            }

            alert(`FAILED to edit ${this.game.title}`);
        }

        public deleteGame(): void {
            if (this.GameService.delete(this.game.id)) {
                this.$state.go('Games');

                return;
            }

            alert(`FAILED to delete ${this.game.title}!`);
        }
        public newGame(): void {
            if (this.GameService.create(this.game)) {
                this.$state.go('Games');

                return;
            }

            alert(`FAILED to create ${this.game.title}`);
        }
    }
}