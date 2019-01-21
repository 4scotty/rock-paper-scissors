export const

    T_ROCK = 'rock',
    T_PAPER = 'paper',
    T_SCISSORS = 'scissors',

    TERMS_SET = [T_ROCK, T_PAPER, T_SCISSORS],

    OUTCOME_DRAW = 0,
    OUTCOME_PLAYER_A = 1,
    OUTCOME_PLAYER_B = 2,

    compose = (turnA, turnB) => `${turnA}:${turnB}`,

    outcomesMap = new Map([
        [compose(T_ROCK, T_ROCK), OUTCOME_DRAW],
        [compose(T_ROCK, T_PAPER), OUTCOME_PLAYER_B],
        [compose(T_ROCK, T_SCISSORS), OUTCOME_PLAYER_A],
        [compose(T_PAPER, T_ROCK), OUTCOME_PLAYER_A],
        [compose(T_PAPER, T_PAPER), OUTCOME_DRAW],
        [compose(T_PAPER, T_SCISSORS), OUTCOME_PLAYER_B],
        [compose(T_SCISSORS, T_ROCK), OUTCOME_PLAYER_B],
        [compose(T_SCISSORS, T_PAPER), OUTCOME_PLAYER_A],
        [compose(T_SCISSORS, T_SCISSORS), OUTCOME_DRAW]
    ]);
