import {Component} from 'core';

import {WelcomeLayout} from './welcome';
import {GameLayout} from './game';

export class IndexLayout extends Component {
    constructor(props) {
        super(props);
    }

    static mapStateToProps(store) {
        return store.game;
    }

    render() {
        const {start} = this.props;

        return `
            <h1>${start}</h1>
            ${start ? GameLayout.createComponent() : WelcomeLayout.createComponent()}
        `;
    }
}
