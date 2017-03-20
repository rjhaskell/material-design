namespace Lesson06.Services {
    export class GameService {
        public gameList: Models.Game[];

        /**
         * Returns a list of games which are stored in memory
         */
        public listGames(): Models.Game[] {
            return this.gameList;
        }

        /**
         * Returns a game that is requested by its index
         * @param id The index of the game to return
         */
        public get(id: number): Models.Game {
            return this.gameList.filter((item) => item.id == id)[0];
        }

        public update(id: number, game: Models.Game): boolean {
            // get record
            let record = this.get(id);

            // did the record requested exist?
            if (record) {
                // get existing records index
                let index = this.gameList.indexOf(record);

                // Update record
                this.gameList[index] = record;

                return true;
            }

            return false;
        }

        public delete(id: number): boolean {
            // get record
            let record = this.get(id);

            // did the record requested exist?
            if (record) {
                // get existing records index
                let index = this.gameList.indexOf(record);

                // Remove record
                this.gameList.splice(index, 1);

                return true;
            }

            return false;
        };

        public create(game: Models.Game): boolean {
            //get list of games

            if (game) {
                this.gameList.push(game)

                return true;
            }
            return false;
        }

        static $inject = [
            '$http'
        ];

        constructor(
            $http: ng.IHttpService
        ) {
            $http.get<Models.Game[]>('data/games.json')
                .then((response) => {
                    this.gameList = response.data;
                })
                .catch((response) => {
                    console.error('Could not retrieve games.');
                });
        }
    }
}