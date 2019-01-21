import {compose, outcomesMap} from './dictionary';

export class GameplayModel {
    /**
     * Gameplay model
     * @param {PlayerModel} playerA
     * @param {PlayerModel} playerB
     */
    constructor(playerA, playerB) {
        this.playerA = playerA;
        this.playerB = playerB;
    }

    /**
     * Compute outcome
     * @returns {V}
     */
    getOutcome() {
        return outcomesMap.get(compose(this.playerA.getTurn(), this.playerB.getTurn()));
    }
}
