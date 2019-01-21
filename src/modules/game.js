import {Observer} from 'core';
import {A_GAME_USER_START, A_GAME_TURN} from 'actions/game';
import {actionPlayersOutcome} from 'actions/players';
import {ComputerModel} from 'models/computer.model';
import {PlayerModel} from 'models/player.model';
import {GameplayModel} from 'models/gameplay.model';

class GameModule extends Observer {
    constructor() {
        super();

        this.on(A_GAME_TURN, this.handleTurn);
    }

    handleTurn = ({store, dispatch, action}) => {
        const turn = action.payload,
            playerA = this.isUserGame(store) ? new PlayerModel() : new ComputerModel(),
            playerB = new ComputerModel(),
            gameplay = new GameplayModel(playerA, playerB);

        //make turns
        playerA.setTurn(this.isUserGame(store) ? turn : playerA.getRandomTurn());
        playerB.setTurn(playerB.getRandomTurn());

        //dispatch outcome
        dispatch(actionPlayersOutcome(
            playerA.getTurn(),
            playerB.getTurn(),
            gameplay.getOutcome()
        ));
    };

    isUserGame(store) {
        const {mode} = store.game;

        return mode === A_GAME_USER_START;
    }
}

export default (new GameModule()).createMiddleware();
