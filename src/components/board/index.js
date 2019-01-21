import './style.scss';
import {Component} from 'core';

import {Winner} from 'components/winner';
import {Turn} from 'components/turn';

export class Board extends Component {
    constructor(props) {
        super(props);
    }

    static mapStateToProps(store) {
        return store.players;
    }

    render() {
        const {playerA, playerB} = this.props;

        return `
            <ul>
                <li>
                    Player A: 
                    ${Turn.createComponent({turn: playerA.turn})} 
                    ${Winner.createComponent({winner: playerA.win})}
                </li>
                <li>
                    Player B: 
                    ${Turn.createComponent({turn: playerB.turn})} 
                    ${Winner.createComponent({winner: playerB.win})}
                </li>                   
            </ul>        
        `;
    }
}
