import {Component} from 'core';
import {actionGameSimpleStart, actionGameUserStart} from 'actions/game';

import {Button} from 'components/button';
import {History} from 'components/history';

export class WelcomeLayout extends Component {
    constructor(props) {
        super(props);
    }

    static mapDispatchToProps(dispatch) {
        return {
            simpleGameStart: () => dispatch(actionGameSimpleStart()),
            userGameStart: () => dispatch(actionGameUserStart())
        };
    }

    render() {
        return `
            <div>
                ${Button.createComponent({title: 'Computer vs Computer', onClick: this.props.simpleGameStart})}
                ${Button.createComponent({title: 'Player vs Computer', onClick: this.props.userGameStart})}
            </div>
            <div>
                ${History.createComponent()}
            </div>
        `;
    }
}
