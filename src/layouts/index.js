import {Component} from 'core';
import {actionGameStart} from 'actions/game';

export class IndexLayout extends Component {
    constructor(props) {
        super(props);
    }

    static mapStateToProps(store) {
        return store.game;
    }

    static mapDispatchToProps(dispatch) {
        return {
            onClick: () => dispatch(actionGameStart())
        };
    }

    render() {
        return `
            <h1>${this.props.start}</h1>
            <a href="#">Click me!</a>
        `;
    }
}
