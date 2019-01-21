import {Component} from 'core';
import {actionGameStop} from 'actions/game';

import {Button} from 'components/button';

export class GameLayout extends Component {
    constructor(props) {
        super(props);
    }

    static mapStateToProps(store) {
        return store.game;
    }

    static mapDispatchToProps(dispatch) {
        return {
            stopGame: () => dispatch(actionGameStop())
        };
    }

    render() {
        return `
            <p>${this.props.mode}</p>
            ${Button.createComponent({title: 'End game', onClick: this.props.stopGame})}
        `;
    }
}
