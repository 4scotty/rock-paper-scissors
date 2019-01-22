import {Observer} from 'core';
import {A_PLAYERS_OUTCOME} from 'actions/players';

const STORAGE_NAME = 'history',
    loadHistory = () => JSON.parse(window.localStorage.getItem(STORAGE_NAME) || '[]'),
    saveHistory = (data) => window.localStorage.setItem(STORAGE_NAME, JSON.stringify(data)),

    initialState = {
        history: loadHistory()
    };

class GameReducer extends Observer {
    constructor() {
        super();

        this.on(A_PLAYERS_OUTCOME, this.storeOutcome);
    }

    storeOutcome = ({state, action}) => {
        const {history} = state;

        history.push(action.payload);
        saveHistory(history);

        return {
            ...state,
            history
        };
    };
}

export default (new GameReducer()).createReducer(initialState);
