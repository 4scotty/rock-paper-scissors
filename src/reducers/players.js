import {Observer} from 'core';
import {A_GAME_STOP} from 'actions/game';
import {A_PLAYERS_OUTCOME} from 'actions/players';
import {OUTCOME_PLAYER_A, OUTCOME_PLAYER_B} from 'models/dictionary';

const initialState = {
    outcome: null,
    playerA: {},
    playerB: {}
};

class PlayersReducer extends Observer {
    constructor() {
        super();

        this.on(A_PLAYERS_OUTCOME, this.setOutcome);
        this.on(A_GAME_STOP, this.reset);
    }

    setOutcome = ({state, action}) => {
        const [turnA, turnB, outcome] = action.payload;

        return {
            ...state,
            outcome,
            playerA: {
                turn: turnA,
                win: outcome === OUTCOME_PLAYER_A
            },
            playerB: {
                turn: turnB,
                win: outcome === OUTCOME_PLAYER_B
            }
        };
    };

    reset = ({state}) => {
        return {
            ...state,
            outcome: null,
            playerA: {},
            playerB: {}
        };
    };
}

export default (new PlayersReducer()).createReducer(initialState);
