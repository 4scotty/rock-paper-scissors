import './style.scss';
import {Component} from 'core';
import {actionGameTurn} from 'actions/game';

import {Button} from 'components/button';

export class SimpleControl extends Component {
    constructor(props) {
        super(props);
    }

    static mapDispatchToProps(dispatch) {
        return {
            makeTurn: () => dispatch(actionGameTurn())
        };
    }

    render() {
        const {makeTurn} = this.props;

        return `
            ${Button.createComponent({title: 'Turn', onClick: () => makeTurn()})}
        `;
    }
}
