import './style.scss';
import {Component} from 'core';
import {OUTCOME_DRAW, OUTCOME_PLAYER_A, OUTCOME_PLAYER_B} from 'models/dictionary';

const outcomesDictionary = new Map([
    [OUTCOME_DRAW, 'DRAW'],
    [OUTCOME_PLAYER_A, 'PLAYER A'],
    [OUTCOME_PLAYER_B, 'PLAYER B']
]);

export class History extends Component {
    constructor(props) {
        super(props);
    }

    static mapStateToProps(store) {
        return store.history;
    }

    renderHistory() {
        const {history} = this.props;

        return Array.from(history)
            .reverse()
            .map((row) => {
                const [turnA, turnB, outcome] = row;

                return `<li>${turnA} - ${turnB} - ${outcomesDictionary.get(outcome)}</li>`;
            })
            .join('');
    }

    render() {
        return `
            <ul>
                ${this.renderHistory()}                  
            </ul>        
        `;
    }
}
