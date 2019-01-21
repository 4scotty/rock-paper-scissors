import {Observer} from 'core';
import * as Actions from 'actions/game';

const initialState = {
    start: false,
    mode: null
};

class GameReducer extends Observer {
    constructor() {
        super();

        this.on(Actions.A_GAME_SIMPLE_START, this.start);
        this.on(Actions.A_GAME_USER_START, this.start);
        this.on(Actions.A_GAME_STOP, this.stop);
    }

    start = ({state, action}) => {
        return {
            ...state,
            start: true,
            mode: action.type
        };
    };

    stop = ({state}) => {
        return {
            ...state,
            start: false,
            mode: null
        };
    };
}

export default (new GameReducer()).createReducer(initialState);
