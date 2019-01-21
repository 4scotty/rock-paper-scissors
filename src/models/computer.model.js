import {PlayerModel} from './player.model';
import {TERMS_SET} from './dictionary';

export class ComputerModel extends PlayerModel {
    /**
     * Computer player model
     */
    constructor() {
        super();
    }

    /**
     * Random turn generator
     * @returns {V}
     */
    getRandomTurn() {
        return TERMS_SET[Math.floor(Math.random() * TERMS_SET.length)];
    }
}
