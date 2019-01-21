export const
    A_PLAYERS_OUTCOME = 'A_PLAYERS_OUTCOME',

    actionPlayersOutcome = (turnA, turnB, outcome) => {
        return {
            type: A_PLAYERS_OUTCOME,
            payload: [turnA, turnB, outcome]
        };
    };
