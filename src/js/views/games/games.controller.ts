namespace Lesson06.Views.Games {
    export class GamesController {
        public filterData: string = '';

        public get gameList(): Models.Game[] {
            return this.GameService.listGames();
        }

        static $inject = [
            'GameService'
        ];

        constructor (
            private GameService: Services.GameService
        ) {
            
        }
    }
}