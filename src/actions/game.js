export const
    A_GAME_SIMPLE_START = 'A_GAME_SIMPLE_START',
    A_GAME_USER_START = 'A_GAME_USER_START',
    A_GAME_STOP = 'A_GAME_STOP',
    A_GAME_TURN = 'A_GAME_TURN',

    actionGameSimpleStart = () => {
        return {
            type: A_GAME_SIMPLE_START
        };
    },

    actionGameUserStart = () => {
        return {
            type: A_GAME_USER_START
        };
    },

    actionGameStop = () => {
        return {
            type: A_GAME_STOP
        };
    },

    actionGameTurn = (turn = null) => {
        return {
            type: A_GAME_TURN,
            payload: turn
        };
    };
