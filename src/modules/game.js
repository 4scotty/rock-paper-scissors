import {Observer} from 'core';
import * as Actions from 'actions/game';

class GameModule extends Observer {
    constructor() {
        super();

        this.on(Actions.A_GAME_SIMPLE_START, this.logger);
        this.on(Actions.A_GAME_USER_START, this.logger);
        this.on(Actions.A_GAME_STOP, this.logger);
    }

    logger = ({action}) => {
        console.log(action.type);
    };
}

export default (new GameModule()).createMiddleware();
