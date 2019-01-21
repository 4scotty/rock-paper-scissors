import {Component} from 'core';
import {A_GAME_USER_START, actionGameStop} from 'actions/game';

import {UserControl} from 'components/user-control';
import {SimpleControl} from 'components/simple-control';
import {Board} from 'components/board';
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

    isUserGame() {
        return this.props.mode === A_GAME_USER_START;
    }

    render() {
        return `
            <div>
                <div>${Board.createComponent()}</div>
                <div>${this.isUserGame() ? UserControl.createComponent() : SimpleControl.createComponent()}</div>
                <div>${Button.createComponent({title: 'End game', onClick: this.props.stopGame})}</div>
            </div>
        `;
    }
}
