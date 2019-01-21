import './style.scss';
import {Component} from 'core';
import {actionGameTurn} from 'actions/game';
import {T_ROCK, T_PAPER, T_SCISSORS} from 'models/dictionary';

import {Button} from 'components/button';

export class UserControl extends Component {
    constructor(props) {
        super(props);
    }

    static mapDispatchToProps(dispatch) {
        return {
            makeTurn: (turn) => dispatch(actionGameTurn(turn))
        };
    }

    render() {
        const {makeTurn} = this.props;

        return `
            ${Button.createComponent({title: 'Rock', onClick: () => makeTurn(T_ROCK)})}
            ${Button.createComponent({title: 'Paper', onClick: () => makeTurn(T_PAPER)})}
            ${Button.createComponent({title: 'Scissors', onClick: () => makeTurn(T_SCISSORS)})}
        `;
    }
}
