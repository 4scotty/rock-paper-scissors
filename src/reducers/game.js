import {Observer} from 'core';
import {A_GAME_START} from 'actions/game';

const initialState = {
    start: false
};

class GameReducer extends Observer {
    constructor() {
        super();

        this.on(A_GAME_START, this.start);
    }

    start = ({state}) => {
        return {
            ...state,
            start: true
        };
    };
}

export default (new GameReducer()).createReducer(initialState);
