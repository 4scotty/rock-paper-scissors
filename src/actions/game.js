export const
    A_GAME_SIMPLE_START = 'A_GAME_SIMPLE_START',
    A_GAME_USER_START = 'A_GAME_USER_START',
    A_GAME_STOP = 'A_GAME_STOP',

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
    };
