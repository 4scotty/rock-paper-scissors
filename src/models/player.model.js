export class PlayerModel {
    turn = null;

    /**
     * Turn setter
     * @param {V} turn
     */
    setTurn(turn) {
        this.turn = turn;
    }

    /**
     * Turn getter
     * @returns {V}
     */
    getTurn() {
        return this.turn;
    }
}
