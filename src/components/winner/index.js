import './style.scss';
import {Component} from 'core';

export class Winner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return `<strong>${this.props.winner ? 'WON!' : ''}</strong>`;
    }
}
